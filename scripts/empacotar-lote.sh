#!/usr/bin/env bash
# Monta a branch lote-<N> a partir de origin/main com os verbetes listados, para
# virar um pull request de até 10 verbetes. Não abre o pull request: isso é do Helton.
# Uso: scripts/empacotar-lote.sh <N> <id1> [id2 ...]
# Leva junto: verbetes/<id>.md, dados/dossies/<id>.md, dados/revisao/<id>.md,
# dados/lista-mestra.csv, dados/relacoes.csv e dados/lotes/lote-<N>.md (descrição).
set -euo pipefail

n="${1:?número do lote}"; shift
[ $# -ge 1 ] || { echo "informe ao menos um identificador"; exit 1; }
[ $# -le 10 ] || { echo "no máximo 10 verbetes por lote"; exit 1; }

origem=$(git rev-parse --abbrev-ref HEAD)
descricao="dados/lotes/lote-$n.md"
[ -f "$descricao" ] || { echo "falta a descrição $descricao"; exit 1; }

git fetch -q origin main
git checkout -q -B "lote-$n" origin/main
for id in "$@"; do
  git checkout -q "$origem" -- "verbetes/$id.md"
  for extra in "dados/dossies/$id.md" "dados/revisao/$id.md"; do
    git show "$origem:$extra" >/dev/null 2>&1 && git checkout -q "$origem" -- "$extra"
  done
done
git checkout -q "$origem" -- dados/lista-mestra.csv dados/relacoes.csv "$descricao"

npm run conferir
npm run build >/dev/null

git config user.name "${GIT_NOME:-agentes-wikiculture}"
git config user.email "${GIT_EMAIL:-agentes-wikiculture@users.noreply.github.com}"
git commit -q -m "Lote $n: $*"
git push -q -u origin "lote-$n"
git checkout -q "$origem"
echo "branch lote-$n enviada com: $*"
