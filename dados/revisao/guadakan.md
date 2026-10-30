# Revisão: guadakan

Verbete: `verbetes/guadakan.md`. Revisor editorial, 30 out. 2026. Quarta revisão. Desde o relatório anterior (commit 7d19055), a única mudança no verbete veio no commit 0a8b95e: a l. 22 perdeu a palavra "recentes" ("associa o tema às queimadas no Pantanal"). Conferi com `git diff 7d19055 HEAD`, e o resto do arquivo está igual. Este relatório substitui os anteriores. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("17 verbetes conferidos. [...] Nenhum erro.").
- `npm run build`: **passou** (33 páginas).
- `node scripts/ligacoes.mjs`: rodou. As sugestões para este verbete são "Pantanal" -> `pantanal-novela` (l. 22, 24, 32; falso positivo, aqui é o bioma) e "Moinho In Concert" na l. 24 (a segunda menção está entre aspas, como nome citado da matéria; a primeira já está ligada). Nada a fazer.

**Fontes abertas nesta sessão:** ab2023 (frase alterada) e **cgn2023, que abriu desta vez**. Na rodada anterior ela tinha dado 403, e os trechos que dependem só dela ficaram NÃO CONFERIDOS. Correio2022, acritica2026cop e acritica2026paulista foram abertas na rodada anterior, do mesmo dia, e os trechos que citam não mudaram.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. L. 22, "queimadas recentes" | **Resolvido.** A frase agora é "A reportagem associa o tema às queimadas no Pantanal e cita a diretora como fonte dessa inspiração". A ab2023, reaberta, traz de Márcia Rolon: "Esse espetáculo, em especial, surge a partir do momento em que vivemos as queimadas no Pantanal." Nem "recente" nem "recentes" aparecem no texto |
| ATENÇÃO. cgn2023 inacessível (403) | **Resolvido.** A página abriu nesta sessão (Thailla Torres, 11 abr. 2023). Conferem: "Guadakan foi apresentado pela primeira vez no Moinho In Concert, em Corumbá" (l. 24); Teatro Glauce Rocha na quarta (12), Ponta Porã na sexta (14), "A turnê termina em Dourados (15) com a apresentação no FESTOP" e entrada gratuita em Campo Grande e em Ponta Porã (l. 26); "classificação indicativa de 14 anos" (l. 28); "A regência fica por conta de José Maikon Amorim Alves" (l. 38) |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. A frase corrigida da l. 22 confere com a ab2023, e os trechos que dependem da cgn2023 conferem com a página reaberta. O resto do texto não mudou desde a revisão anterior, que o conferiu |
| 2 | Link abre | OK. ab2023 e cgn2023 abriram nesta sessão, com autor, data e título conferidos. As outras três abriram na rodada anterior, no mesmo dia. Não há bloco `links` |
| 3 | Sem cópia | OK. A frase alterada usa redação própria. A maior coincidência continua com sete palavras ("concebida a partir do mito indígena guató") |
| 4 | Dados pessoais | OK. Nada a remover |
| 5 | Tom | OK |
| 6 | Divergências | OK. Aparecem a classificação indicativa (10 e 14 anos), o cargo de Márcia Rolon, a "estreia" no Rio junto com a primeira apresentação em Corumbá, a regência por fonte e ano e o tema da versão de 2026 sem o mito guató |
| 7 | Ficha | OK. Cada campo tem apoio em nota do texto. O único valor com número está entre aspas |
| 8 | Força da fonte | OK. Cinco matérias de quatro veículos de imprensa |
| 9 | Ligações | OK. Os identificadores estão na lista-mestra, e `moinho-cultural` tem verbete. As sugestões do script são falsos positivos |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 165 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Dossiê desatualizado.** `dados/dossies/guadakan.md`, l. 40, ainda diz "o tema se liga às queimadas recentes e às mudanças climáticas [ab2023]". Não mexi, porque o arquivo é do pesquisador. Vale corrigir para que uma reescrita futura não traga a palavra de volta.
- **Classificação de 14 anos (l. 28).** Na cgn2023, a classificação aparece só na frase da sessão de Campo Grande ("Com classificação indicativa de 14 anos, a entrada é gratuita"). O verbete a atribui à matéria sem dizer a sessão. Não contraria a fonte.
- **Significado do nome.** A correio2022 diz que "Guadakan, em idioma guató, significa Pantanal". É pista para o redator. Não acrescentei.
- **Grafia do regente.** A correio2022 traz "José Maikon" e, mais adiante, "José Maikson". A cgn2023 confirma "Maikon". Vale anotar a variante em `observacoes` da lista-mestra.
- **Linha duplicada na lista-mestra.** `femina-vox` e `forum-internacional-femina-vox` parecem ser o mesmo evento. Quem decide é o garimpeiro.
- **MASP, dia 18 (l. 32).** A participação no MASP vem só do subtítulo da acritica2026paulista.
- **Fontes fora do verbete.** Continuam fora a cgn2023bonito e a cgn2024sp, registradas no dossiê.

## Corrigido direto

Nada. Todas as notas definidas são usadas, o formato das notas é o mesmo em todas e o valor numérico da ficha está entre aspas. Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

Nesta sessão: ab2023 e cgn2023, abertas em 30 out. 2026. Na rodada anterior, do mesmo dia: correio2022, acritica2026cop e acritica2026paulista.

**Pronto para pull request: sim.** O P1 anterior foi resolvido e a cgn2023 foi conferida. `npm run conferir` e `npm run build` passam.
