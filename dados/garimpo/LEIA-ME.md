# Garimpo contínuo (Fase 1)

Estado compartilhado entre rodadas do agente garimpeiro-ms. Cada rodada é uma sessão nova, que não lembra da anterior; o que liga uma à outra são estes arquivos.

## Arquivos

- `registro.md`: uma linha por rodada, em ordem. É a trava e o histórico.
- `<area>.md`: um por área (`artes-plasticas`, `musica`, `teatro`, `danca`, `literatura`, `audiovisual`, `circo`). Guarda o que já foi expandido e a fila de candidatos.

## Regra de escolha da área

1. Ordem base: artes-plasticas, musica, teatro, danca, literatura, audiovisual, circo.
2. A próxima área é a seguinte à da última rodada concluída em `registro.md`. Depois de circo, volta a artes-plasticas.
3. Pule área marcada como `coberta` no seu `<area>.md` (fila vazia e fontes de `PLANO.md` esgotadas para ela).
4. Se todas estiverem cobertas, pare e registre em `registro.md` que a Fase 1 esgotou as fontes.

## Trava

Antes de trabalhar, a rodada acrescenta em `registro.md` uma linha `em andamento` com data e hora UTC e faz push. Se já existe uma linha `em andamento` de menos de 3 horas sem a linha `concluída` correspondente, outra rodada está ativa: encerrar sem trabalhar. Linha `em andamento` com mais de 3 horas é considerada abandonada.

## Formato de `<area>.md`

```
# Garimpo: <area>

Situação: em-andamento | coberta

## Fontes já varridas
- <nome da fonte> (<url>), rodada N

## Expandidos
Nomes cuja vizinhança já foi pesquisada.
- <id>

## Fila
Candidatos que apareceram em fonte aberta, já estão na lista-mestra, mas ainda não tiveram a vizinhança pesquisada. Primeiro os mais conectados.
- <id> (n relações)

## Observações
```

## O que uma rodada faz

1. Lê este arquivo, `registro.md` e o `<area>.md` da vez.
2. Toma até 30 nomes: primeiro os da fila (mais conectados antes), depois fontes de `PLANO.md` ainda não varridas para a área.
3. Trabalha como diz `.claude/agents/garimpeiro-ms.md`.
4. Atualiza `<area>.md`, `registro.md` e a linha "Estado atual" de `PLANO.md`.
5. Roda `npm run conferir` e `npm run build`, faz commit e push na branch `fase1-garimpo`.

Nenhuma rodada escreve verbete, abre pull request ou envia para `main`.
