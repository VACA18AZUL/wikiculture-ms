# Lotes

Um arquivo por lote, `lote-NN.md`, escrito pelo fechamento quando há 10 verbetes `pronto-para-lote`. É a descrição do pull request, pronta para colar. A branch correspondente, `lote-NN`, sai de `main` e leva só esses verbetes, seus dossiês e relatórios, a lista-mestra e as relações.

O Helton abre o pull request de `lote-NN` para `main`, revisa, muda `status` para `revisado` nos verbetes que aprovar e mescla. Depois marca na lista-mestra: `node scripts/fila.mjs marcar <id> revisado`.

## Formato de `lote-NN.md`

```
# Lote NN: <área ou áreas>

<n> verbetes, todos em `rascunho`.

## Verbetes

### <id>: <título>
- Fontes: <lista curta, com veículo e ano>
- Incerto: <o que o revisor apontou como ATENÇÃO, ou "nada">
- Fonte única: sim/não

## Pendências gerais
- <verbetes desejados mais citados que ainda não têm página>
- <conflitos de identificador, se houver>
```
