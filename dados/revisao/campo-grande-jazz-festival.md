# Revisão: campo-grande-jazz-festival

Verbete: `verbetes/campo-grande-jazz-festival.md` (`atualizado: 2026-11-01`). Primeira revisão. Revisor editorial, 1 nov. 2026.

Fontes conferidas nesta sessão (as duas abriram por WebFetch, que devolve paráfrase com trechos curtos entre aspas; as frases citadas abaixo vieram entre aspas):
- **cgn2024a**: Thailla Torres, "Capital ganha 1º Festival de Jazz com shows até em terminais de ônibus", *Campo Grande News*, "13/03/2024 08:29".
- **cgn2024b**: Thailla Torres, "Festival de Jazz começa hoje com espetáculo no Terminal Moreninhas", *Campo Grande News*, "25/03/2024 12:06".

## Resultado de `npm run conferir` e `npm run build`

Os dois passam, antes e depois da correção ("Nenhum erro"; 51 páginas geradas).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** nas l. 40, 44 e 46 (ver PROBLEMAs 1 e 2). O resto confere: "primeiro festival exclusivamente voltado para o jazz" (a); 25 a 31 de março; "Todas as atividades serão gratuitas" (b); "iniciativa dos produtores Adriel Santos e Franciella Cavalheri" (a, b); "realização da Cravo Filmes" (a); FMIC em 2019 (a); Porto Alegre, Recife e Manaus (a); "homenagear em toda edição um artista pela pioneira contribuição ao jazz em Mato Grosso do Sul" (a); "As performances terão 40 minutos e começam às 18h" (a, b); adaptação do Armazém (a, b); grade de programação igual nas duas; Ryan Keberle "trombonista", "de Nova York (EUA)"; Katie Thiroux Trio "da Califórnia (EUA)"; Miguel Tatoon (a) |
| 2 | Link abre | OK. As duas URLs abriram e são as matérias certas (autora e data conferidas) |
| 3 | Sem cópia | **PROBLEMA** na l. 44 (ver PROBLEMA 3) |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK. "Primeiro festival da cidade dedicado exclusivamente ao gênero" está atribuído à imprensa |
| 6 | Divergências | **PROBLEMA**. A divergência registrada nas l. 44-46 não existe nas fontes (PROBLEMA 1), e a divergência real que o dossiê registrou em cgn2024b, entre texto corrido e grade, ficou fora (PROBLEMA 4) |
| 7 | Ficha | OK. Datas e entrada (a, b), realização (a), idealização e produção (a, b), locais (grade das duas). Não há valor só numérico |
| 8 | Força da fonte | OK. Imprensa local com autoria e data. As duas matérias são da mesma autora e do mesmo veículo (ver ATENÇÕES) |
| 9 | Ligações | OK. `node scripts/ligacoes.mjs` não aponta nada neste verbete. Os 15 identificadores existem na lista-mestra e apontam para o que o texto quer dizer. The Mini Boys, FMIC e os terminais não estão na lista-mestra e ficam sem link |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-11-01`, id no padrão, resumo com cerca de 200 caracteres |

## PROBLEMAs

1. **l. 44 e 46, divergência sobre Antônio Porto que as fontes não trazem.**
   - Trecho, l. 44: "A mesma matéria cita [[antonio-porto|Antônio Porto]] [...] e lista para ele apenas um show com o [[ddg4|DDG4]] em 30 de março." Trecho, l. 46: "A matéria de 25 de março apresenta o show de 30 de março como concerto em homenagem a [[antonio-porto|Antônio Porto]]. As duas versões ficam registradas, sem escolha entre elas."
   - O que as fontes dizem: as duas matérias trazem a mesma frase, "Haverá ainda um concerto dedicado ao multi-instrumentista Antônio Porto", e a mesma linha na grade de 30/03, 19h: "ANTÔNIO PORTO IN CONCERT" / "DDG4 (SP/BR)". Nenhuma das duas usa "homenagem" para Antônio Porto; a palavra só aparece para Miguel Tatoon ("HOMENAGEM A MIGUEL TATOON", 31/03). Não há divergência: a matéria de 13/03 não lista "apenas um show", e a de 25/03 não fala em "homenagem".
   - Origem: o dossiê leu a matéria de 25/03 por paráfrase, e o redator não conseguiu reabrir as páginas (HTTP 403, anotado em "Uso no verbete").
   - Para o redator: retirar a l. 46 e o fim da l. 44; registrar, com as duas notas, que as duas matérias anunciam um concerto dedicado a Antônio Porto em 30/03, ao lado do DDG4.

2. **l. 40, nome da atividade da manhã de 30/03.**
   - Trecho: "A atividade da manhã de 30 de março é chamada de "Café Musical" na matéria de 13 de março [...] e de "Brunch – DDG4" na de 25 de março."
   - O que a fonte diz: a matéria de 13/03 usa os dois nomes. No texto corrido: "No sábado pela manhã haverá um 'Café Musical', no Teatro Aracy Balabanian, com os integrantes do DDG4"; na grade: "Brunch - DDG4 (SP/BR)". A de 25/03 traz "Brunch - DDG4 (SP/BR)" na grade. A variação está dentro da matéria de 13/03, e não entre as duas.
   - Para o redator: reescrever a atribuição (texto corrido x grade).

3. **l. 44, cópia.**
   - Trecho do verbete: "lançou em 1992 o primeiro disco de jazz gravado no estado".
   - Fonte (cgn2024a): "Miguelito lançou em 1992 o primeiro disco de jazz gravado em solo sul-mato-grossense". Nove palavras seguidas iguais ("lançou em 1992 o primeiro disco de jazz gravado").
   - Para o redator: reescrever com palavras próprias (a mesma frase está na observação da linha `miguel-tatoon` da lista-mestra).

4. **Divergência do dossiê que ficou fora.**
   - O dossiê registrou, sem confirmar, que em cgn2024b o texto corrido e a grade divergem. Nesta sessão a divergência foi confirmada: o texto corrido diz "Os shows na Esplanada começam com os concertos dos grupos sul-mato-grossenses El Trio, Urbem e Barah Trio", enquanto a grade da mesma matéria (e a de cgn2024a) põe os três nos terminais de 25 a 27/03, e só Urbem (29/03) e El Trio (31/03) no Armazém Cultural. Barah Trio não aparece no Armazém em nenhuma grade.
   - O verbete segue a grade (l. 27 e 31-38), o que está certo, mas não registra a outra versão.
   - Para o redator: uma frase com nota [^cgn2024b], registrando a versão do texto corrido sem escolher.

## ATENÇÕES

- **l. 21, nota da realização.** A frase "a realização foi da [[cravo-filmes|Cravo Filmes]]" vem seguida de [^cgn2024a][^cgn2024b], mas só a matéria de 13/03 cita a Cravo Filmes; a de 25/03 não cita realizadora nem apoiadores. A nota a basta. Não corrigi, porque mexe na atribuição de fonte de uma frase; fica para o redator.
- **l. 27, tempo verbal.** "Reuniu shows curtos" e "ocorreu no Armazém Cultural" estão no passado, mas as fontes só descrevem a programação anunciada (a l. 40 já avisa). Sugestão: "previa" ou "foi anunciada com".
- **l. 27, Armazém.** "Tratamento acústico" está em cgn2024a; cgn2024b fala em "sala adequada acusticamente". Compatível.
- **Fontes da mesma autora e do mesmo veículo**, ambas de antes ou do dia da abertura. Nada relata como o festival transcorreu nem se houve edições depois de 2024. Basta pela regra de fonte única, mas vale buscar cobertura posterior.
- **Homônimo `antonio-porto`.** A linha da lista-mestra veio de outra matéria ("citado como parceiro de composição de Paulo Simões; confirmar área"). As matérias do festival o chamam de multi-instrumentista sul-mato-grossense ligado à cena de jazz dos anos 1990. Provavelmente é a mesma pessoa, mas nada no texto confirma.
- **`dados/relacoes.csv`.** As linhas 1452 e 1851 (`antonio-porto homenageado-por campo-grande-jazz-festival`) e as observações das linhas 2035 e 2189 repetem a falsa divergência do PROBLEMA 1. A relação de homenagem tem apoio só em "concerto dedicado"; a homenagem oficial do festival é a Miguel Tatoon. Fica para o garimpeiro; o revisor não edita `relacoes.csv` no fluxo paralelo.
- **Seção "Para saber mais".** Repete as duas URLs das notas. O modelo permite; não é problema.
- **Wikipédia**: não há conferência registrada no dossiê nem na lista-mestra (`wikipedia_pt` vazio).

## Correções feitas

- Notas `cgn2024a` e `cgn2024b`: acrescentado "Acesso em 1 nov. 2026.", no formato de `modelos/verbete.md`. As duas URLs foram abertas nesta sessão.

Nenhum fato foi acrescentado e o `status` continua `rascunho`.

**Pronto para pull request: não** (PROBLEMAs 1 a 4).
