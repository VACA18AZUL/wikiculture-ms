# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`. Revisor editorial, 29 out. 2026, depois da passagem do ligador. Os números de linha abaixo valem para o arquivo atual. As correções feitas não mudaram a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **passou** ("11 verbetes conferidos", "Nenhum erro"). Rodado antes e depois das correções.
- `npm run build`: **passou** (24 páginas). Rodado antes e depois das correções.
- `node scripts/ligacoes.mjs`: rodou. Para este verbete apontou "Pantanal" nas l. 18, 26, 28, 32, 36 e 38. São todos o bioma ou parte do título da canção, não a novela, e o script errou. Apontou também "Prata da Casa" na l. 32 (ver ATENÇÕES) e "Diana Pequeno" na l. 48, que é a segunda menção no parágrafo, com a primeira já ligada.

**Limite desta revisão:** o *Campo Grande News* devolveu HTTP 403 à ferramenta de leitura nas cinco notas desse veículo (cgn2025a, cgn2025b, cgn2022, cgn2016, cgn2012). O archive.org também não pôde ser consultado. Essas notas sustentam a maior parte de "Origem", "Primeiras apresentações" e "Gravações e regravações". Ficam **NÃO CONFERIDAS** quanto a apoio, link e cópia. As outras nove notas foram abertas nesta sessão.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK nas frases apoiadas em acritica2026, ce2024, senado2017, ufms2020, overmundo, cravo, faccioni2023, dorsa e slipcue. NÃO CONFERIDO nas frases apoiadas só no Campo Grande News (l. 22, 24, parte de 26 e 28, parte de 32, l. 42, 44, parte de 48, 50, 52, 54, 56, 58, 60 e parte de 64) |
| 2 | Link abre | OK nas 9 notas abertas e no link da Wikipédia na ficha. NÃO CONFERIDO: as 5 notas do Campo Grande News e os dois itens de "Para saber mais" que apontam para cgn2025a e overmundo (o de Overmundo abre) |
| 3 | Sem cópia | PROBLEMA (l. 18). Notas do Campo Grande News: NÃO CONFERIDO |
| 4 | Dados pessoais | OK. O amigo de Roca ligado ao Partidão não é nomeado, e nada sobre saúde ou morte de Roca entrou |
| 5 | Tom | OK, com ATENÇÕES (l. 18, l. 68) |
| 6 | Divergências | OK. Local e tempo da composição, destino e motivo da viagem, título original, ano da gravação de Diana Pequeno, número de regravações e episódio do festival aparecem com as duas versões, cada uma com sua fonte. O que o dossiê lista e ficou de fora (idade de Roca, "Todos os Trilhos da Terra" do Overmundo) foi explicado no "Uso no verbete" e não é divergência escondida: o Overmundo não diz que esse era o título original, conferido nesta sessão |
| 7 | Ficha | OK. Autor (l. 18), Ano "1975" entre aspas (l. 18, acritica2026), Formato |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única**: são 14 notas, de nove veículos ou instituições independentes. Mas o Campo Grande News sustenta sozinho boa parte da história (ver ATENÇÕES) |
| 9 | Ligações | OK depois das correções (ver "Corrigido direto" e ATENÇÕES sobre UFMS e *Prata da Casa*) |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-29`; identificador `trem-do-pantanal` no padrão; resumo com cerca de 190 caracteres; sem `cidade`, o que é coerente com o dossiê |

## PROBLEMAs

1. **L. 18, cópia.** Trecho: "A imprensa a descreve como uma das músicas mais simbólicas da cultura de Mato Grosso do Sul." A matéria de A Crítica (acritica2026) diz "...celebra o legado de uma das músicas mais simbólicas da cultura de Mato Grosso do Sul". São 12 palavras seguidas, sem aspas. O redator escolhe entre pôr a expressão entre aspas, atribuída a A Crítica, ou reescrever. Ver também a ATENÇÃO de tom sobre "a imprensa".

## ATENÇÕES

- **Fonte única: não há.** Ainda assim, cinco das 14 notas são do Campo Grande News, e várias passagens só têm essa fonte: o relato da viagem de abril de 1975, os 15 minutos, o Fesul de 1980, a primeira gravação de Diana Pequeno como "primeira", Almir Sater em 1982 no "disco de estreia", Bando do Velho Jack, os 57 registros do Ecad, Hermanos Irmãos e o remix de 2024. Para a segunda fonte: a dissertação de Faria (UFMS, 2024), citada no dossiê `geraldo-roca`; a tese de Faccioni (PPGLetras/UFMS); o acervo Memória Fonográfica de MS, para a ficha dos discos de Diana Pequeno e Almir Sater; e a Enciclopédia Itaú Cultural ou o Cravo Albin de Almir Sater, para o disco de 1982.
- **UFMS ligada como publicadora (pedido do ligador).** Nas l. 26 ("Em reportagem da UFMS") e 64 ("segundo a UFMS"), a universidade aparece só como quem publicou a notícia ufms2020. É atribuição de fonte, não relação com a canção. O link criava uma entrada em "páginas que apontam para cá" no futuro verbete da UFMS sem relação real. **Tirei o link nessas duas linhas.** Mantive `[[ufms|UFMS]]` na l. 38, onde a UFMS é a instituição da revista *InterMeio*, que publicou a análise acadêmica da canção. Ali a ligação diz algo sobre a obra: ela é estudada na universidade. Se o Helton preferir zero ou três links, a mudança é só de colchetes.
- **"Livro *Prata da Casa*" (l. 32), dúvida do ligador.** O verbete fala de um livro, ao qual Roca deu entrevista em 2012. Na lista-mestra há duas linhas com esse nome, e nenhuma é livro: `prata-da-casa` (disco coletivo produzido pela UFMS) e `prata-da-casa-lp-1982` (LP do festival Prata da Casa). O título da matéria ce2016 ("Histórias de Paulo Simões e 'Prata da Casa' são contadas em livros") indica um livro *sobre* o Prata da Casa, que é uma terceira coisa. O cgn2025b grafa "Pratas da Casa", segundo o dossiê. **Deixar sem link, como está.** Ligar a `prata-da-casa` diria que a entrevista foi dada a um disco. Sugestão ao pesquisador ou ao garimpeiro: abrir ce2016, achar autor e ano do livro e propor uma linha própria, por exemplo `prata-da-casa-livro`. Não abri ce2016 nem cgn2025a nesta sessão, então não confirmei autor nem ano.
- **L. 18, "A imprensa a descreve".** A expressão vem de um só veículo (A Crítica). "A imprensa" generaliza a atribuição. Sugestão: "A Crítica de Campo Grande a descreve...", resolvendo também o PROBLEMA 1.
- **L. 36, trajeto do trem.** No Overmundo, "partia de Bauru, em São Paulo, passava por Campo Grande, chegava até Corumbá" é texto do entrevistador, não fala de Roca. No verbete, a frase vem logo depois de "Descreveu-a como..." e pode ser lida como fala dele. Sugestão: "Segundo o texto da entrevista, a letra se refere...".
- **L. 68, tempo verbal.** "O show abre uma retrospectiva da carreira e antecipa um álbum" está no presente, logo depois de "estava marcado". A fonte é anterior ao show. Sugestão: "Segundo a matéria, o show abriria uma retrospectiva e antecederia um álbum ao vivo previsto para 2026". É a mesma ressalva feita em `dados/revisao/paulo-simoes.md`.
- **L. 68, "Teatro do Mundo".** A Crítica diz só "Teatro do Mundo". O link vai para `estacao-cultural-teatro-do-mundo` (Campo Grande), e a identificação é provável, mas nenhuma fonte do verbete usa o nome completo. Corrigi o texto visível (ver abaixo). Quem fizer o verbete do espaço confirma que é o mesmo lugar.
- **L. 56, Carles Campi.** A matéria de 2016 grafa "Carlos Campi", e a de 2022, "Carles Campi Campón". A identificação dos dois vem do dossiê e das matérias do Campo Grande News, que não abri. Não há indício de homônimo.

## Corrigido direto

- **L. 26:** `Em reportagem da [[ufms|UFMS]]` passou a `Em reportagem da UFMS`. A UFMS só publica a fonte (ver ATENÇÕES).
- **L. 64:** `segundo a [[ufms|UFMS]]` passou a `segundo a UFMS`. Mesmo motivo.
- **L. 68:** texto do link `[[estacao-cultural-teatro-do-mundo|Estação Cultural Teatro do Mundo]]` passou a `[[estacao-cultural-teatro-do-mundo|Teatro do Mundo]]`, e "na" passou a "no", como a fonte grafa. O identificador não mudou.
- **L. 56:** primeira menção a Carles Campi ligada: `[[carles-campi-campon|Carles Campi]]`. Na l. 58, o mesmo nome já estava ligado.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Depois das correções, `npm run conferir` e `npm run build` passaram de novo.

## Fontes conferidas

- Abertas nesta sessão: acritica2026, ce2024, senado2017, ufms2020, overmundo (autor Rodrigo Teixeira, 14 mar. 2007, conferidos na página), cravo, faccioni2023 (resumo), dorsa (página e resumo; v. 15, n. 30, edição de 2009, publicada em 7 nov. 2016, conferidos), slipcue (LP *Sinal de Amor*, RCA Victor, 1981, sem faixas). Link da Wikipédia na ficha: abre e trata da canção.
- Não abertas (HTTP 403): cgn2025a, cgn2025b, cgn2022, cgn2016, cgn2012.

Dossiê `dados/dossies/trem-do-pantanal.md`: **não tem seção "Atualização de".**

**Pronto para pull request: não.** Falta corrigir o PROBLEMA 1 (cópia na l. 18), que é rápido. E alguém com acesso ao Campo Grande News precisa conferir as cinco notas desse veículo, que sustentam cerca de metade do texto e não puderam ser abertas nesta revisão.
