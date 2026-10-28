# Propostas

Caixa de entrada para nomes e relações encontrados por pesquisador, redator, revisor e atualizador enquanto rodam em paralelo. Eles não editam `dados/lista-mestra.csv` nem `dados/relacoes.csv` diretamente, para não conflitar entre si.

- `nomes-<id-da-rodada>.csv`: mesmas colunas de `dados/lista-mestra.csv` (`id,nome,tipo,areas,cidade,prioridade,fonte_de_origem,url_fonte,situacao,observacoes`). `situacao` pode ficar vazia: vira `a-pesquisar`.
- `relacoes-<id-da-rodada>.csv`: mesmas colunas de `dados/relacoes.csv` (`origem,relacao,destino,fonte,url_fonte,observacoes`).

`node scripts/integrar-propostas.mjs` (rodado pelo garimpeiro e pelo fechamento) integra tudo, sobe a prioridade de nome que apareceu de novo e apaga os arquivos integrados. O histórico fica no git.
