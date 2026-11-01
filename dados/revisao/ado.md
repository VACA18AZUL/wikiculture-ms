# Revisão: ado

Verbete: `verbetes/ado.md` (`atualizado: 2026-11-01`). Revisor editorial, 1º nov. 2026. Segunda revisão, depois da reescrita do redator. Substitui o relatório anterior, que tinha um PROBLEMA (l. 24) e sete ATENÇÕES. O verbete se apoia só no livro *Os Pioneiros* (Rodrigo Teixeira, 2009), lido pelas fichas de `dados/fontes/os-pioneiros/fichas/` (ado, ado-e-adail, ado-e-praense, amambay-e-amambai, cadeado-de-ouro, maciel-correa, herminio-gimenez, festao, cabana-gaucha, zacarias-mourao, gravadora-cerro-cora, charles-franco, praense) e por `faixas.csv`. Nenhuma nota tem link. Dossiê conferido: `dados/dossies/ado.md`.

## Portão de evidências

- `npm run conferir`: **passou.** "28 verbetes conferidos. [...] Nenhum erro." Sem aviso para `ado`.
- `npm run build`: **passou.** 48 páginas geradas, "Complete!".
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO.** O Bash recusou o comando nesta sessão. As ligações foram conferidas à mão, pela lista de verbetes desejados que o `conferir` imprime e pela lista-mestra.

## Pontos da revisão anterior

1. **PROBLEMA da l. 24 ("duas músicas", "anos 1980"): resolvido.** A frase agora diz: "Segundo Ado, uma música feita em parceria com Zacarias abriu o disco do trio com Dino Rocha e Amambay.[^personagem]". A ficha `amambay-e-amambai.md` diz: "Uma das músicas de Zacarias e Ado abriu o disco do trio com Dino e Amambay, segundo Ado." (seção "O personagem"). Confere. Em `faixas.csv`, "Sonho Predileto" (Zacarias Mourão e Ado) é a faixa A1 de *Os Filhos da Terra* (1982), o que é coerente. O verbete não afirma que é essa a faixa, e está certo.
2. **ATENÇÃO da l. 14 (nota `[^ficha]`): resolvida.** A frase ganhou `[^dupla]` e `[^amambay]`, que sustentam as duplas, o canto e o violão.
3. **ATENÇÃO do resumo ("gravou discos em Assunção"): resolvida.** O resumo agora diz "gravou em Assunção".
4. **ATENÇÃO de linguagem de processo: resolvida em parte.** As menções a "blocos da ficha" saíram do texto. Na l. 34 ficou "Este verbete as reúne por indícios" (ver ATENÇÕES).
5. As outras ATENÇÕES (identidade única, discos de 1979 a 1985, dois ids da Xaraés, grafia do Supermercado dos Discos) continuam valendo e estão repetidas abaixo.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada frase confere com a ficha da seção citada: barrageiro, início em 1970, circos, viagens por cinco estados e boates de Londrina ("Ado & Adail", "Nos Embalos do Circo", "Amambay & Amambaí"); Praense, Assunção, Cerro Corá, Charles Franco, Dozinho Borges, evidência de 1975 a 1977, 85 mil e 35 mil ("Ado & Adail"); fotógrafo e volta em abril de 1974 ("O crime"); seis cidades ("Cultura Fronteiriça"); caixinha ("Cabana Gaúcha"); Festão ("Os Campeões do Festão"); parceria com Zacarias ("O personagem"); Supermercado dos Discos, direção, nome artístico e fim de 1980 ("O hit 'Cadeado'"). Discografia e composições conferem com `faixas.csv` |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link |
| 3 | Sem cópia | OK em relação às fichas. Comparação com o texto do livro NÃO CONFERIDA (o texto não está no repositório) |
| 4 | Dados pessoais | OK. O nome civil e a data de nascimento do bloco 3 da ficha `ado.md` ficaram fora. "Elício Maciel" (l. 28) aparece só como origem do nome artístico de Maciel Corrêa |
| 5 | Tom | OK. Sem elogio. Vendas e fatos do depoimento vêm atribuídos ("Ado diz", "Segundo Ado", "Em depoimento") |
| 6 | Divergências | OK. Vendas (85 mil / 35 mil), autoria dos discos de 1975 e 1976 (Ado e Adail / Ado e Praense), direção de *Cadeado de Ouro* (Ado / Marcílio Castioni), data da gravação (fim de 1980 / disco de 1981) e a cronologia sem data de Londrina estão no texto. Batem com as quatro divergências do dossiê |
| 7 | Ficha | OK. Atividade: `dupla`, `amambay`, `crime`, `disc`. Grupos: `dupla`, `disc`, `ficha` (bloco 3: "Integra Ado & Praense e Irmãos Ouro e Prata"). Cidade Três Lagoas: `ficha` (blocos 2 e 3). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimentos e discografia dos encartes. **Fonte única**, e boa parte dos fatos é depoimento do próprio Ado |
| 9 | Ligações | OK. Os identificadores do texto existem como verbete (`dino-rocha`, `amambay-e-amambai`, `maciel-correa`, `zacarias-mourao`, `festao`) ou aparecem na lista de verbetes desejados do `conferir`, o que confirma que estão na lista-mestra. `ligacoes.mjs` não rodou |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-11-01`, identificador no padrão, resumo com cerca de 190 caracteres. As 14 notas definidas são usadas |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Identidade única (l. 34).** A ficha `ado.md` tem três blocos com o nome "Ado". O verbete os junta por indícios (Londrina, coautoria de "Na Madrugada É Assim") e diz isso no texto. O livro não afirma em frase que são a mesma pessoa. O Helton decide.
- **Autorreferência (l. 34).** "Este verbete as reúne por indícios" fala do próprio verbete. É aceitável numa seção de divergências, mas o redator pode trocar por uma frase sem autorreferência.
- **Discos de 1979 a 1985.** Os créditos trazem só "Ado". O verbete diz isso na l. 48. *Os Filhos da Terra* (1982 e 1985) se ligam a este Ado só pelo nome. A ligação das faixas a esses discos foi feita pela ordem dos blocos no texto (OCR, segundo o dossiê).
- **Grafia de Hermínio Giménez.** As fichas grafam "Gimenez", sem acento. O verbete segue a grafia do dossiê e da lista-mestra. Não mexi.
- **Xaraés com dois ids na lista-mestra** (`gravadora-xaraes` e `gravadora-discos-e-fitas-xaraes`). O verbete usa o segundo. Fica para o garimpeiro unificar.
- **Grafia.** A lista-mestra registra "Supermercados dos Discos". O verbete e a ficha `ado.md` dizem "Supermercado dos Discos".

## Corrigido direto

Nada nesta revisão. Não havia erro mecânico.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada. A situação na fila não mudou: o pedido não incluiu marcar a fila, e o Bash recusou os scripts `node` nesta sessão.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `faixas.csv`, nas seções "Ado & Adail", "Nos Embalos do Circo", "Amambay & Amambaí", "O crime", "Cultura Fronteiriça", "Cabana Gaúcha", "Os Campeões do Festão", "O personagem", "O hit 'Cadeado'", "A Primeira Turma – Os Desbravadores dos 50", "Discografia: Ado & Praense", "Discografia: Amambay & Amambaí" e discografia de Maciel Corrêa. Fonte única.

**Pronto para pull request: sim.** O PROBLEMA anterior foi resolvido, e `npm run conferir` e `npm run build` passaram. Ficam as ATENÇÕES para o Helton, em especial a identidade única e a fonte única.
