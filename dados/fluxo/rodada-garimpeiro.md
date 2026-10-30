Você está em uma rodada automática do WikiCulture MS, no papel de garimpeiro. Trabalha sem ninguém olhando, no repositório já clonado na pasta atual (branch `producao`), com `npm ci` feito. Tudo em português do Brasil. Não faça commit nem push: o script que te chamou faz isso ao final.

## Passos

1. Leia `CLAUDE.md`, `dados/fluxo/LEIA-ME.md`, `dados/garimpo/LEIA-ME.md` e `dados/garimpo/registro.md`.
2. Rode `node scripts/integrar-propostas.mjs` para integrar o que os outros agentes propuseram.
3. **Escolha o modo.** Rode `date -u +%H` e divida a hora por 3, descartando o resto. Resultado par: modo **Campo Grande News**. Ímpar: modo **geral**. Se o modo escolhido não tiver trabalho (geral com todas as áreas cobertas; Campo Grande News com três rodadas seguidas sem nome novo em `dados/garimpo/cgn/registro.md`), use o outro.

   **Modo geral.** Escolha a área pela regra de `dados/garimpo/LEIA-ME.md` (rodízio; pula área coberta). Acrescente a linha "em andamento" em `dados/garimpo/registro.md`. Pedido ao garimpeiro: "Área: <area>. Siga dados/garimpo/LEIA-ME.md e dados/garimpo/<area>.md. Limite: 30 nomes novos. Priorize a fila de candidatos mais conectados. Registre nomes em dados/lista-mestra.csv e relações em dados/relacoes.csv. Atualize dados/garimpo/<area>.md ao final."

   **Modo Campo Grande News.** Escolha o grupo pela regra de rodízio de `dados/garimpo/cgn/LEIA-ME.md`. Pedido ao garimpeiro: "Grupo: <grupo>. Siga dados/garimpo/cgn/LEIA-ME.md: comece pelos pendentes do grupo em dados/garimpo/cgn/pendentes.csv, pule as URLs de dados/garimpo/cgn/lidas.txt, leia cada matéria antes de registrar. Limite: 30 nomes novos. Registre nomes em dados/lista-mestra.csv e relações em dados/relacoes.csv. Atualize pendentes.csv, lidas.txt e registro.md da pasta cgn ao final."

4. Se o agente `garimpeiro-ms` existir na ferramenta Agent, use-o com o pedido do modo escolhido e espere o resultado. Se não existir, leia `.claude/agents/garimpeiro-ms.md` e siga o conteúdo como suas próprias instruções, com o mesmo pedido.

5. Modo geral: confira `dados/garimpo/<area>.md` (fontes varridas, expandidos, fila) e acrescente a linha "concluída" em `dados/garimpo/registro.md`, com os números. Modo Campo Grande News: confira que `dados/garimpo/cgn/registro.md` ganhou a linha da rodada e que `lidas.txt` cresceu.
6. Rode `node scripts/fila.mjs` e atualize a linha "Estado atual" de `PLANO.md` com a data, a área e o total de nomes.
7. Rode `npm run conferir`. Precisa passar.
8. Termine com um resumo de até 10 linhas: modo, área ou grupo, nomes e relações acrescentados, os 5 mais conectados, o que ficou na fila.

## Regras sem exceção

- Nunca crie ou edite arquivos em `verbetes/`.
- Nunca registre CPF, CNPJ, endereço, telefone, e-mail ou dado de família. Listas de editais trazem CPF: só nome artístico e projeto.
- Nome ou relação só entram com a fonte aberta e lida. Nada de memória.
- Não mexa em linhas existentes da lista-mestra além de `prioridade` e `observacoes`.
- Se algo impedir o trabalho, escreva o motivo em `dados/garimpo/registro.md` como linha "falhou" e encerre. Não insista por mais de 10 minutos.
