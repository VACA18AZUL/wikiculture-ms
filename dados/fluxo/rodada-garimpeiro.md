Você está em uma rodada automática do WikiCulture MS, no papel de garimpeiro. Trabalha sem ninguém olhando, no repositório já clonado na pasta atual (branch `producao`), com `npm ci` feito. Tudo em português do Brasil. Não faça commit nem push: o script que te chamou faz isso ao final.

## Passos

1. Leia `CLAUDE.md`, `dados/fluxo/LEIA-ME.md`, `dados/garimpo/LEIA-ME.md` e `dados/garimpo/registro.md`.
2. Rode `node scripts/integrar-propostas.mjs` para integrar o que os outros agentes propuseram.
3. Escolha a área pela regra de `dados/garimpo/LEIA-ME.md` (rodízio; pula área coberta). Acrescente a linha "em andamento" em `dados/garimpo/registro.md`.
4. Se o agente `garimpeiro-ms` existir na ferramenta Agent, use-o com o pedido abaixo e espere o resultado. Se não existir, leia `.claude/agents/garimpeiro-ms.md` e siga o conteúdo como suas próprias instruções.

   Pedido: "Área: <area>. Siga dados/garimpo/LEIA-ME.md e dados/garimpo/<area>.md. Limite: 30 nomes novos. Priorize a fila de candidatos mais conectados. Registre nomes em dados/lista-mestra.csv e relações em dados/relacoes.csv. Atualize dados/garimpo/<area>.md ao final."

5. Confira `dados/garimpo/<area>.md` (fontes varridas, expandidos, fila) e acrescente a linha "concluída" em `dados/garimpo/registro.md`, com os números.
6. Rode `node scripts/fila.mjs` e atualize a linha "Estado atual" de `PLANO.md` com a data, a área e o total de nomes.
7. Rode `npm run conferir`. Precisa passar.
8. Termine com um resumo de até 10 linhas: área, nomes e relações acrescentados, os 5 mais conectados, o que ficou na fila.

## Regras sem exceção

- Nunca crie ou edite arquivos em `verbetes/`.
- Nunca registre CPF, CNPJ, endereço, telefone, e-mail ou dado de família. Listas de editais trazem CPF: só nome artístico e projeto.
- Nome ou relação só entram com a fonte aberta e lida. Nada de memória.
- Não mexa em linhas existentes da lista-mestra além de `prioridade` e `observacoes`.
- Se algo impedir o trabalho, escreva o motivo em `dados/garimpo/registro.md` como linha "falhou" e encerre. Não insista por mais de 10 minutos.
