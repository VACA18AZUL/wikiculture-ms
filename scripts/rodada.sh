#!/usr/bin/env bash
# Roda uma rodada de um papel com o Claude Code em modo sem interação e envia o resultado.
# Uso: scripts/rodada.sh <papel> [identificador]
#   papel: garimpeiro | pesquisador | redator | reforco | fechamento
# Lê as instruções em dados/fluxo/rodada-<papel>.md. Modelo e orçamento vêm das
# variáveis MODELO e ORCAMENTO_USD (com padrões abaixo). Precisa de ANTHROPIC_API_KEY.
set -euo pipefail

papel="${1:?papel}"
id="${2:-}"
arquivo="dados/fluxo/rodada-$papel.md"
[ -f "$arquivo" ] || { echo "não existe $arquivo"; exit 1; }

case "$papel" in
  garimpeiro)  modelo_padrao=claude-sonnet-5-5; orcamento_padrao=8 ;;
  fechamento)  modelo_padrao=claude-opus-5-5;   orcamento_padrao=12 ;;
  *)           modelo_padrao=claude-sonnet-5-5; orcamento_padrao=3 ;;
esac
MODELO="${MODELO:-$modelo_padrao}"
ORCAMENTO_USD="${ORCAMENTO_USD:-$orcamento_padrao}"

prompt="$(cat "$arquivo")"
if [ -n "$id" ]; then
  prompt="Identificador desta rodada: $id"$'\n\n'"$prompt"
fi

inicio=$(date -u +%Y-%m-%dT%H:%MZ)
saida="saida-$papel${id:+-$id}.json"

# Sem interação, a ferramenta que não está na lista é negada em vez de perguntar.
# Só o que o fluxo precisa: ler, escrever, buscar na web, rodar os scripts do
# repositório e os comandos de conferência. Nada de push aqui: quem envia é enviar.sh.
FERRAMENTAS=(
  Read Write Edit Glob Grep Agent WebFetch WebSearch
  "Bash(npm run conferir)" "Bash(npm run build)" "Bash(node scripts/fila.mjs:*)"
  "Bash(node scripts/integrar-propostas.mjs:*)" "Bash(node scripts/ligacoes.mjs:*)" "Bash(node scripts/conferir.mjs:*)"
  "Bash(scripts/empacotar-lote.sh:*)" "Bash(git status:*)" "Bash(git diff:*)"
  "Bash(git log:*)" "Bash(git show:*)" "Bash(git ls-files:*)" "Bash(git checkout:*)"
  "Bash(date:*)" "Bash(ls:*)" "Bash(cat:*)" "Bash(head:*)" "Bash(tail:*)" "Bash(wc:*)"
  "Bash(grep:*)" "Bash(mkdir:*)" "Bash(cp:*)" "Bash(mv:*)"
)
set +e
claude -p "$prompt" \
  --model "$MODELO" \
  --max-budget-usd "$ORCAMENTO_USD" \
  --permission-mode acceptEdits \
  --allowedTools "${FERRAMENTAS[@]}" \
  --output-format json > "$saida"
codigo=$?
set -e

custo=$(node -e 'try{const j=JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"));console.log((j.total_cost_usd??0).toFixed(2))}catch{console.log("?")}' "$saida")
resultado="concluída"
[ "$codigo" -eq 0 ] || resultado="falhou (código $codigo)"

# Portão: as regras editoriais precisam passar. Se não passam, os verbetes desta
# rodada não entram; o resto (dossiês, propostas, registros) entra.
if ! npm run conferir >/dev/null 2>&1; then
  git checkout -- verbetes/ 2>/dev/null || true
  git clean -fdq verbetes/ 2>/dev/null || true
  resultado="$resultado; conferir falhou, verbetes revertidos"
fi

rm -f "$saida"
echo "$inicio | $papel | ${id:-$papel} | $resultado | US\$ $custo | modelo $MODELO" >> dados/fluxo/registro.md

scripts/enviar.sh "Agentes: $papel${id:+ $id} ($resultado)"
echo "rodada $papel ${id:-} -> $resultado, US\$ $custo"
