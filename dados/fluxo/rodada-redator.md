Você está em uma rodada automática do WikiCulture MS, no papel de redator, para o identificador informado na primeira linha. Trabalha sem ninguém olhando, no repositório já clonado na pasta atual (branch `producao`), com `npm ci` feito. Tudo em português do Brasil. Não faça commit nem push: o script que te chamou faz isso ao final.

## Passos

1. Leia `CLAUDE.md`, `dados/fluxo/LEIA-ME.md`, `modelos/verbete.md`, `dados/dossies/<id>.md` e a linha do identificador em `dados/lista-mestra.csv`. Se o dossiê não existir, encerre dizendo isso; não pesquise para suprir.
2. Se a situação for `devolvido`, leia `dados/revisao/<id>.md`: cada PROBLEMA listado precisa ser resolvido nesta rodada. Se o problema é "frase sem apoio na fonte", remova a frase ou ache o apoio no dossiê; nunca invente.
3. Se o agente `redator-verbete` existir na ferramenta Agent, use-o com o pedido abaixo e espere o resultado. Se não existir, leia `.claude/agents/redator-verbete.md` e siga o conteúdo como suas próprias instruções.

   Pedido: "Identificador: <id>. Escreva (ou reescreva, se devolvido) verbetes/<id>.md a partir de dados/dossies/<id>.md. status: rascunho. Ligue com [[id|texto]] todo nome que tenha verbete ou linha na lista-mestra; nome que não está em lugar nenhum também vira link, e a linha nova vai para dados/propostas/nomes-<id>.csv (não para lista-mestra.csv). Relações sustentadas por fonte vão para dados/propostas/relacoes-<id>.csv. Preencha a seção 'Uso no verbete' do dossiê."

4. Rode `npm run conferir` e `npm run build`. Corrija todo ERRO que for do seu verbete.
5. `node scripts/fila.mjs marcar <id> rascunho`.
6. Termine com um resumo de até 8 linhas: fontes citadas, links criados (existentes e desejados), o que do dossiê ficou de fora, pontos incertos para a revisão.

## Regras sem exceção

- Só escreva o que o dossiê sustenta, com nota `[^id]` em todo parágrafo.
- `status: rascunho`, sempre.
- Nunca edite outro verbete além de `verbetes/<id>.md`.
- Nunca edite `dados/lista-mestra.csv` a não ser pelo comando `fila.mjs marcar` na sua própria linha. Nunca edite `dados/relacoes.csv`.
- Nunca registre CPF, CNPJ, endereço residencial, telefone, e-mail, estado de saúde ou vida familiar.
- Não copie trechos das fontes. Tom enciclopédico, sem elogio.
