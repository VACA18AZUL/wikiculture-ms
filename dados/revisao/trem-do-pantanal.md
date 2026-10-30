# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`. Revisor editorial, 30 out. 2026. Nova rodada. Desde o relatório anterior (commit 7d19055), a única mudança no verbete veio no commit 0a8b95e, na l. 54: "nunca a gravou" foi trocado pelas duas versões da fonte. Conferi com `git diff 7d19055 HEAD`, e o resto do arquivo está igual. Este relatório substitui o anterior. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("17 verbetes conferidos. [...] Nenhum erro.").
- `npm run build`: **passou** (33 páginas).
- `node scripts/ligacoes.mjs`: rodou. As sugestões são as mesmas da rodada anterior: "Pantanal" -> `pantanal-novela` (bioma, falso positivo), "Prata da Casa" (l. 34, o livro, que não tem linha), "Diana Pequeno" (l. 50, já ligada no mesmo parágrafo) e "Onésimo Filho" (l. 46, ver ATENÇÕES).

**Fontes abertas nesta sessão.** A **cgn2025b abriu desta vez** e sustenta a frase alterada. Também abriram as outras notas do Campo Grande News (cgn2025a, cgn2022, cgn2016, cgn2012), que tinham dado 403 na rodada anterior, além de faccioni2023, dorsa, slipcue e a Wikipédia (`links`). Em todas conferem título, autor, data e os pontos que o verbete cita. Acritica2026, ce2024, senado2017, ufms2020, overmundo, cravo e cravosater abriram na rodada anterior, no mesmo dia, e os trechos que citam não mudaram.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. L. 54, "nunca a gravou" | **Resolvido.** Agora a frase diz: "Segundo a reportagem, [[renato-teixeira\|Renato Teixeira]], que canta a música em shows em homenagem a Roca, não chegou a gravá-la; na mesma matéria, Teixeira diz que a gravou com Roca.[^cgn2025b]". Na cgn2025b, reaberta, a repórter diz que ele, apesar de cantar a música nos shows em homenagem a Roca, "não chegou a gravar a música". Teixeira diz: "gravamos juntos o Trem". As duas versões aparecem, e a redação já não contradiz o verbete `renato-teixeira`. O dossiê (l. 81) também foi ajustado |
| ATENÇÃO. Notas do Campo Grande News com 403 | **Resolvido.** As cinco abriram nesta sessão |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. A frase corrigida da l. 54 confere com a cgn2025b. As notas do Campo Grande News confirmam os pontos citados: abril de 1975, 15 minutos, quatro meses, quadros cusquenhos e "Todos os trilhos da terra" (cgn2025a); meia hora, cabine, Santa Cruz de la Sierra, Tablado, desclassificação, Alex Batata, mais de mil vezes e mais de cem regravações (cgn2012); roteiro e integrantes do Hermanos Irmãos, Carlos Campi e a fala de Márcio de Camillo sobre Corumbá (cgn2016); 14 de fevereiro, Carles Campi Campón, Madri, vozes em Campo Grande e Paulo Higa (cgn2022). O resto não mudou desde a revisão anterior |
| 2 | Link abre | OK. Todas as notas e o link da Wikipédia abriram na rodada anterior ou nesta, todas em 30 out. 2026 |
| 3 | Sem cópia | OK. A frase nova diz "não chegou a gravá-la", e a fonte diz "não chegou a gravar a música". A coincidência é de quatro palavras |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK. Os elogios ("hino", "marco", "uma das músicas mais simbólicas") são sempre atribuídos |
| 6 | Divergências | OK. Aparecem a autoria (três versões), o início e a duração da composição, o destino e o motivo da viagem, o título original, o ano da gravação de Diana Pequeno, o disco de Sater, a gravação de Renato Teixeira e o total de regravações |
| 7 | Ficha | OK. Autor, Ano "1975" entre aspas e Formato, todos com apoio no texto |
| 8 | Força da fonte | OK. São 15 notas, de dez veículos ou instituições |
| 9 | Ligações | OK. Os identificadores existem na lista-mestra. As sugestões do script são falsos positivos ou casos já registrados em ATENÇÕES |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 185 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **L. 20, "As demais fontes do verbete que tratam da autoria citam só Roca e Simões.[^cravo]".** A nota `[^cravo]` não sustenta uma afirmação sobre as outras fontes. Lida na ordem, a frase está certa. Sugestão de redação: "As fontes de fora do Dicionário...".
- **L. 46, Onésimo Filho.** A lista-mestra tem `onesimo-filho` (TV Morena, Festão, *Os Pioneiros*). Provavelmente é a mesma pessoa, mas nenhuma fonte do verbete diz isso. Não liguei.
- **L. 54, fala de Teixeira.** Na mesma matéria, ele também diz "perdi de gravar Trem do Pantanal antes do Almir". O verbete não traz essa frase, o que não esconde nada: ela não contradiz nenhuma das duas versões registradas.
- **Fonte única por trecho.** Várias passagens só têm o Campo Grande News: a viagem de 1975, o Fesul de 1980, Diana Pequeno como primeira a gravar, o Bando do Velho Jack, os 57 registros do Ecad, o Hermanos Irmãos e o remix de 2024. Segundas fontes possíveis: a dissertação de Faria (UFMS, 2024), a tese de Faccioni e o acervo Memória Fonográfica de MS.
- **L. 30, destino.** Santa Cruz de la Sierra e Machu Picchu podem ser etapas da mesma viagem, como anota o dossiê. O parágrafo poderia dizer isso com mais precisão.
- **L. 66, Faccioni.** Para ele, a canção "pode ser considerada" hino não oficial. O verbete diz que ele "a considera", o que reforça um pouco a fala.
- **L. 70, "Teatro do Mundo".** O link `estacao-cultural-teatro-do-mundo` é uma identificação provável, que ainda precisa ser confirmada.
- **UFMS ligada como publicadora** nas l. 28, 40 e 66. O Helton decide se fica ligada só na l. 40.
- **Rodrigo Teixeira.** O entrevistador do Overmundo e do livro *Prata da Casa* tem o mesmo nome do integrante do Hermanos Irmãos. O verbete não os junta, e está certo.

## Corrigido direto

Nada nesta rodada. As 15 notas definidas são usadas, e o valor numérico da ficha está entre aspas. Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

Nesta sessão: cgn2025b, cgn2025a, cgn2022, cgn2016, cgn2012, faccioni2023, dorsa, slipcue e a Wikipédia, abertas em 30 out. 2026. Na rodada anterior, do mesmo dia: acritica2026, ce2024, senado2017, ufms2020, overmundo, cravo e cravosater.

**Pronto para pull request: sim.** O P1 anterior foi resolvido com as duas versões que a fonte traz, todas as notas abriram, e `npm run conferir` e `npm run build` passam.
