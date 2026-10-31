# Revisão: gravadora-california

Verbete: `verbetes/gravadora-california.md`, segunda revisão, depois da reescrita do redator (devolução de 31/10/2026) e da passagem do ligador (alterações ainda não commitadas: `chantecler` virou `gravadora-chantecler`, e Sulino e Marrueiro ganhou link). Revisor editorial, 31 out. 2026. Fonte única: o livro *Os Pioneiros* (Teixeira, 2009), lido pelas fichas `dados/fontes/os-pioneiros/fichas/gravadora-california.md` e `delio-e-delinha.md` e por `discografia.csv`. Nota única (`[^pioneiros]`), sem link.

## Portão de evidências

- `npm run conferir`: **passou** ("24 verbetes conferidos. Nenhum erro.").
- `npm run build`: **passou** ("43 page(s) built").
- `node scripts/ligacoes.mjs`: só sugere ligar "Délio" na segunda menção da l. 31, já ligada na mesma frase. Nada a fazer.

## PROBLEMAs da revisão anterior

1. **l. 32 (agora l. 31), divergência escondida sobre a Chantecler: RESOLVIDO.** O texto agora traz as duas versões, atribuídas: Délio (a Califórnia ficou descontente com o disco da Chantecler e depois se acertou) e Delinha (Sulino e Marrueiro os fizeram sair; Délio brigou com Mário Vieira). Confere com a ficha `delio-e-delinha` ("Motivo da saída da Califórnia").
2. **l. 20, frase sobre o que o livro não traz: RESOLVIDO.** A frase foi tirada.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada frase confere com as fichas `gravadora-california` (seis blocos) e `delio-e-delinha`, e com `discografia.csv` (discos, anos, gravadora e produção de Mário Vieira) |
| 2 | Link abre | OK (não se aplica). A nota cita fonte impressa, sem link |
| 3 | Sem cópia | OK em relação às fichas, que já são paráfrase. Comparação com o texto do livro NÃO CONFERIDA: o texto não está no repositório |
| 4 | Dados pessoais | OK. Nenhum. A briga de Délio com Mário Vieira é fato da trajetória da dupla, atribuído a Delinha |
| 5 | Tom | OK. "Uma das maiores gravadoras do país" está atribuído a Márcio Barbosa; "mais havia penetrado", à contracapa de 1968 |
| 6 | Divergências | OK. Saída de Délio e Delinha com as duas versões; contrato x disco pago e a fala de Benites sobre quem pagava estão no texto. As divergências do dossiê com o Recanto Caipira (anos de LPs) não se aplicam: o verbete não lista os LPs de Délio e Delinha nem usa essa fonte |
| 7 | Ficha | OK. Tipo, Local (São Paulo, seções "Gravadora Califórnia" e "O Chamado de Zé Corrêa"), Gestão (Mário Vieira) e período (1959 ao fim dos anos 1970) têm apoio no texto e na nota. Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com incentivo público. **Fonte única** |
| 9 | Ligações | OK. Todos os identificadores existem em `verbetes/` ou na lista-mestra (inclusive `gravadora-chantecler`, `sulino-e-marrueiro`, `sexteto-da-lua`, `amambay-cantor`, `gravadora-copacabana`). Os links do ligador não mudam o sentido das frases |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 165 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única, nota única.** Todo o verbete cita `[^pioneiros]`, que junta dez seções. O leitor não sabe qual seção sustenta cada frase. Sugestão, não obrigatória: separar notas por seção.
- **l. 31, versão de Delinha sobre a saída.** A ficha `delio-e-delinha` registra a divergência sem dizer a seção. A nota cita a seção "Chantecler" (de onde vem a versão de Délio), mas não há como confirmar que a de Delinha está na mesma seção. Conferir no livro.
- **l. 25, Márcio Barbosa.** Citado sem dizer quem é, e sem linha na lista-mestra. A ficha também não diz.
- **l. 16 e resumo, "selo de música caipira".** Vem da fala de Amambay (o selo foi aberto para gravar música caipira), dita em voz própria no primeiro parágrafo. Não contradiz a fonte, mas a l. 20 é que traz a atribuição.
- **Datas da empresa.** Fundação e encerramento seguem sem fonte (dossiê, "Não confirmado"). O verbete agora não afirma nada sobre elas, o que está certo.
- **l. 38, Maciel Corrêa e *Flor da Saudade*.** A ficha da gravadora diz que Maciel gravou o disco; a discografia o credita a Irmãos de Mato Grosso. O verbete registra as duas formas. Sem erro.

## Corrigido direto

Nada nesta revisão. As correções da revisão anterior (`amambay-cantor` na l. 20 e formato da nota) continuam no texto.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas `gravadora-california` e `delio-e-delinha` e por `discografia.csv`.

**Pronto para pull request: sim.** Os dois PROBLEMAs da revisão anterior foram resolvidos, sem PROBLEMA novo. Fonte única (livro impresso, via fichas).
