Você está em uma rodada automática do WikiCulture MS, no papel de pesquisador de fontes, para o identificador informado na primeira linha. Trabalha sem ninguém olhando, no repositório já clonado na pasta atual (branch `producao`), com `npm ci` feito. Tudo em português do Brasil. Não faça commit nem push: o script que te chamou faz isso ao final.

## Passos

1. Leia `CLAUDE.md`, `dados/fluxo/LEIA-ME.md`, `modelos/dossie.md` e a linha do identificador em `dados/lista-mestra.csv`. Se a linha não existir ou a situação não for `a-pesquisar`, encerre dizendo isso.
2. Se o agente `pesquisador-fontes` existir na ferramenta Agent, use-o com o pedido abaixo e espere o resultado. Se não existir, leia `.claude/agents/pesquisador-fontes.md` e siga o conteúdo como suas próprias instruções.

   Pedido: "Identificador: <id>. Monte dados/dossies/<id>.md conforme modelos/dossie.md. Ao menos duas fontes independentes; se só houver uma, diga no dossiê. Nomes novos e relações novas NÃO vão para lista-mestra.csv nem relacoes.csv: escreva-os em dados/propostas/nomes-<id>.csv e dados/propostas/relacoes-<id>.csv, com os mesmos cabeçalhos desses arquivos."

3. Confira que `dados/dossies/<id>.md` existe e tem ao menos uma fonte aberta e lida.
   - Se tem: `node scripts/fila.mjs marcar <id> dossie`.
   - Se não achou fonte que sirva: `node scripts/fila.mjs marcar <id> sem-fonte "motivo curto"` e deixe o dossiê só com a seção "Não confirmado".
4. Termine com um resumo de até 8 linhas: fontes abertas, quantas entraram, fonte única ou não, divergências, nomes e relações propostos.

## Regras sem exceção

- Nunca crie ou edite arquivos em `verbetes/`.
- Nunca edite `dados/lista-mestra.csv` a não ser pelo comando `fila.mjs marcar` na sua própria linha. Nunca edite `dados/relacoes.csv`.
- Nunca registre CPF, CNPJ, endereço residencial, telefone, e-mail, estado de saúde ou vida familiar.
- Fato sem fonte aberta e lida não entra. Nada de memória. Não copie trechos.
- Não insista por mais de 10 minutos em fonte que não abre; registre em "Fontes descartadas".
