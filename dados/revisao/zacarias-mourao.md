# Revisão: zacarias-mourao

Verbete: `verbetes/zacarias-mourao.md`, primeira revisão, depois da passagem do ligador. Revisor editorial, 30 out. 2026. As duas matérias da web foram abertas nesta sessão com WebFetch, que devolve extração feita por modelo e não o texto bruto; nos pontos decisivos pedi o trecho literal. O livro *Os Pioneiros* foi lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (zacarias-mourao, pe-de-cedro, tibagi-e-miltinho, dino-rocha) e por `discografia.csv`. Os números de linha valem para o arquivo depois da correção feita nesta revisão (nenhuma linha foi acrescentada nem tirada).

## Portão de evidências

- `npm run conferir`: **passou.** "17 verbetes conferidos. [...] Nenhum erro." Rodado antes e depois da correção.
- `npm run build`: **passou.** "33 page(s) built", com `/verbetes/zacarias-mourao/index.html` gerado. Rodado antes e depois da correção.
- `node scripts/ligacoes.mjs`: neste verbete, aponta segundas menções de nomes já ligados (Itamy, Dino Rocha, Pé de Cedro, Goiá, Amambay) e uma menção sem link que tem linha na lista-mestra: "Guarany" (l. 42; ver ATENÇÕES). "Amambaí" e "Amambay" na l. 30 fazem parte do nome da dupla, já ligado.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, com ATENÇÕES. Cada parágrafo confere com a ficha do livro e com as matérias. Na l. 40, "com sucesso nos anos 1960" vem de cgn2012 ("estourou com a dupla Tibagi e Miltinho, na década de 60") e a frase citava só o livro; acrescentei `[^cgn2012]` (ver Corrigido direto). A "sugestão de Zacarias" para a gravação está no livro (ficha `tibagi-e-miltinho`, segundo Lígia Mourão) |
| 2 | Link abre | OK. 2 de 2 notas com link abrem e levam à matéria citada; título, autor e data conferidos (cgn2012: Elverson Cardozo, 11/10/2012, 07:49; cgn2024: Aletheya Alves, 26/04/2024, 08:39) |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A mais próxima é "Em 1959, aos 31 anos," (l. 40), cinco palavras iguais a cgn2012. As fichas do livro já são paráfrase |
| 4 | Dados pessoais | OK. Nenhuma frase removida. O parentesco de Lígia Mourão (cgn2012) ficou fora; ela aparece só como depoente do livro. Endereço e bairro do crime (cgn2012) ficaram fora. Seminário, DER e polícia rodoviária são trajetória |
| 5 | Tom | OK. "Primeiro artista do sul de Mato Grosso com programas próprios" (l. 26) vem atribuído ao livro. "Poeta elegante" (l. 46) vem atribuído às Irmãs Galvão. Sem adjetivo de elogio do redator |
| 6 | Divergências | OK, com ATENÇÃO. Aparecem: hora da morte (noite x madrugada), emissora (Bandeirantes x Nacional), autoria das canções com Goiá, papel junto a Dino Rocha e à dupla (batizou e levou x "lançou"), "Tió e a Árvore" x "Um Pedaço do Céu". A divergência do dossiê sobre a forma da morte (facadas x uma facada) não aparece porque o verbete não descreve a forma da morte; não há versão escolhida (ver ATENÇÕES) |
| 7 | Ficha | OK. Nascimento: pioneiros ("Discografia: Zacarias Mourão") e cgn2012 (ano). Morte: pioneiros e cgn2012. Atividade: pioneiros. "Também conhecido como: Tió": pioneiros e cgn2012. Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa mais duas matérias do Campo Grande News. Não é fonte única |
| 9 | Ligações | OK. Todos os identificadores em `[[...]]` existem na lista-mestra. Falta só ligar "Guarany" (l. 42), se o ligador confirmar o homônimo |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-30`, identificador no padrão, resumo com cerca de 195 caracteres. A nota `[^pioneiros]` lista as seções usadas; as da web têm "Acesso em" |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **l. 36, como morreu.** Trecho: "Morreu em Campo Grande em 23 de maio de 1989, aos 61 anos, e foi sepultado em Coxim. [...] A matéria diz que o caso não foi esclarecido." O livro diz que ele foi "morto a facadas" (ficha, seção "Morte do Zacarias") e cgn2012 diz: "O assassinato, até hoje, não foi esclarecido." O redator tirou a forma da morte de propósito ("detalhe desnecessário", segundo o dossiê). Sem ela, "o caso" fica sem referência para o leitor. Não é dado de saúde nem divergência escondida, porque nenhuma versão foi escolhida. Sugestão para o Helton decidir: "Foi assassinado em Campo Grande [...]. A matéria diz que o crime não foi esclarecido", sem detalhes.
- **l. 36, "madrugada".** cgn2012 diz que ele foi **encontrado** "na madrugada de uma terça-feira, em 23 de maio de 1989"; segundo o dossiê, morreu depois, durante cirurgia. O verbete põe a madrugada como versão da hora da morte, ao lado da "noite do dia 23" do livro. As duas versões continuam lado a lado, mas a da matéria fala do momento em que ele foi achado.
- **Discografia, *Deus Sabe o Que Faz* (l. 51).** `discografia.csv` registra uma divergência dentro do livro: a ficha do disco dá a gravadora Pé de Cedro e as Irmãs Galvão; o texto de contracapa (abril de 1975) fala da gravadora CID e de "Irmãos Galvão". O verbete credita as Irmãs Galvão e não dá a gravadora. O dossiê não registrou essa divergência; fica como ATENÇÃO.
- **"Guarany" (l. 42).** A lista-mestra tem `guarany` ("Guarany (Cherinho)"). O depoente do livro é provavelmente o mesmo Guarany de Cruzeiro, Tostão, Centavo e Guarany, mas não conferi o homônimo. Fica para o ligador.
- **Fontes acadêmicas não lidas.** O dossiê registra três (Caetano, 2012; Gonçalves, 2014; Nascimento e Nascimento, *Rascunhos Culturais*) com PDF ilegível.
- **Leitura por extração.** As matérias foram lidas por WebFetch; o dossiê pedia uma conferência rápida dos fatos da primeira passada de cgn2012. Nesta revisão conferi Padre Chico e Tió, Cásper Líbero, "Venenos do Zacarias", "lançou" a dupla e Dino Rocha, 1959 aos 31 anos, Goiá, Tibagi e Miltinho nos anos 1960, Sérgio Reis em 1975, *Um Pedaço do Céu* (2010) e produtores, Geraldo Mochi, busto em Coxim, data, idade e madrugada.

## Corrigido direto

- **l. 40:** acrescentada a nota `[^cgn2012]` depois de "o livro diz que a gravação foi sugestão de Zacarias.[^pioneiros]". O trecho "com sucesso nos anos 1960" vem de cgn2012, já definida no verbete; sem fato novo.

Nenhuma frase foi removida. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- pioneiros: Rodrigo Teixeira, *Os Pioneiros*, 2009, pelas fichas e por `discografia.csv`. Sustenta nome civil, Tió e "Índio do Mato Grosso", 15/3/1928 em Coxim, cedro em 1939 aos 11 anos (Lígia Mourão), seminário e Petrópolis em 1949, DER desde 1951 e polícia rodoviária, concurso na Bandeirantes, "Brasil Caboclo", "Porteira Velha", festivais na Record, Philips e PolyGram (Lígia), primeiro artista do sul de MT com programas próprios, produções nas rádios Bandeirantes, Nacional e Excelsior, divergência da emissora, "Alpargata Roda de Violeiro", Itamy e Duo Estrela Dalva, "Venenos do Zacarias" e as revistas, gravadora Pé de Cedro na Rua Augusta, artistas levados a São Paulo e o batismo de Dino Rocha, o nome da dupla e a Califórnia, Délio & Delinha na Bandeirantes, contracapa de *Chora Sanfona*, Campo Grande em 1981, Assembleia, ZM Produções, projeto Seriema, "Nossa Terra, Nossa Gente", morte na noite de 23/5/1989 e sepultamento em Coxim, Pé de Cedro e Goiá, sugestão a Tibagi e Miltinho, versões da autoria, parcerias e "mais de duas mil músicas", *A Mato-Grossense*, "Tió e a Árvore", dedicatória, os cinco discos.
- cgn2012: Elverson Cardozo, *Campo Grande News*, 11/10/2012. Sustenta "nasceu em 1928, em Coxim", caçadas com o Padre Chico e o apelido Tió, Cásper Líbero, "Venenos do Zacarias" em *Moda e Viola*, "lançou" Amambay e Amambai e Dino Rocha, "Em 1959, aos 31 anos", Goiá "um amigo compositor", "estourou com a dupla Tibagi e Miltinho, na década de 60", Sérgio Reis em 1975 no primeiro LP sertanejo, *Um Pedaço do Céu* (2010) com Douglas Queiroz, Hugo Crippa e Karla Lyara, Geraldo Mochi, busto no centro de Coxim, 23/5/1989, 61 anos, madrugada de terça, crime não esclarecido.
- cgn2024: Aletheya Alves, *Campo Grande News*, 26/04/2024. Sustenta o vendaval de 2006 que "rachou a árvore ao meio" e o laudo técnico de que "a árvore secou".

**Pronto para pull request: sim.** Não há PROBLEMA; `npm run conferir` e `npm run build` passaram. Fica para o Helton decidir se a forma da morte entra (l. 36), e para o ligador o link de Guarany. Nenhuma das ATENÇÕES impede o lote.
