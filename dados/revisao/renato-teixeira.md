# Revisão: renato-teixeira

Verbete: `verbetes/renato-teixeira.md`, versão reescrita pelo redator (commit 0506b69, 30 out. 2026, 18:51 UTC) com a ligação do ligador ainda não commitada. Revisor editorial, 30 out. 2026, segunda rodada. Este relatório substitui o anterior, da manhã do mesmo dia. Os números de linha valem para o arquivo atual; a correção feita não mudou a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **passou** ("14 verbetes conferidos. Nenhum erro."), antes e depois da correção.
- `npm run build`: **passou** (28 páginas), antes e depois da correção.
- `node scripts/ligacoes.mjs`: rodou. Sugestões para este verbete: "Rádio Difusora" -> `radio-difusora` (a linha da lista-mestra é a rádio de Campo Grande, não a de Taubaté: não ligar); "Trem do Pantanal" e "Geraldo Roca" no título de seção (títulos não levam link); "Tocando em Frente" na l. 51 (é o show de 2017 e a canção no Altas Horas; ver correção). Nenhuma ligação faltando.
- `git diff 30202a6 0506b69` (reescrita do redator): mudaram só as l. 21, 23, 27, 43 e 51, exatamente os cinco trechos apontados. O resto do texto é igual ao revisado de manhã.
- `git diff HEAD` (ligador): uma única mudança, o link `[[tocando-em-frente|...]]` no nome do show de 2017 (l. 51). Nenhum fato mudou. É o mesmo link errado que a revisão anterior tinha retirado; foi retirado de novo.
- Fontes reabertas nesta rodada com WebFetch: dmpb (trechos literais de "radialista", "estrondoso sucesso em todo o país", Grammy de 2018 com *+Ar*, "Terra de sonhos"/"Terra dos sonhos" e "Orquestra do Estado de Mato Grosso") e ce2019 (abre; Naiane Mesquita, 23/07/2019). **As notas do Campo Grande News (cgn2017, cgn2017b, cgn2022, cgn2022b, cgn2022c, cgn2022d, cgn2020, cgn2015, cgn2025b) deram HTTP 403 ao WebFetch nesta rodada**, e o archive.org não está acessível ao ambiente. Os trechos reescritos que dependem delas (l. 23, 43, 51) foram conferidos contra as transcrições literais da revisão anterior, reproduzidas no fim deste relatório.

## Situação dos apontamentos da revisão anterior

- **P1 (l. 21, "locutor"): resolvido.** Agora "trabalhou como radialista", como no dmpb ("trabalhou como radialista na Rádio Difusora de Taubaté").
- **P2 (l. 23, "cidade natal"): resolvido.** Agora "Em entrevista ao Lado B, em outubro de 2017, Teixeira diz que foi criado em Taubaté e se refere à cidade como 'minha terra'", o que corresponde às falas "fui criado em Taubaté" e "minha terra Taubaté" de cgn2017. A frase não apresenta mais isso como divergência de naturalidade.
- **P3 (l. 27, "maior sucesso"): resolvido.** Agora "tornou-se um sucesso nacional e foi gravada depois por vários artistas"; o dmpb diz "tornando-se rapidamente um estrondoso sucesso em todo o país" e "foi gravada, entre outros, por" Tião Carreiro e Pardinho, Sérgio Reis, Inezita Barroso e outros.
- **P4 (l. 43, "sozinho"): resolvido.** Agora "A reportagem diz que ele não chegou a gravar a canção. Na mesma matéria, Teixeira lamenta ter perdido a chance de gravá-la antes de Sater e diz que a gravou com Roca." As duas versões aparecem, cada uma atribuída a quem diz.
- **P5 (l. 51, "(TV Globo)"): resolvido.** A emissora saiu do texto.
- **Link do show "Tocando em Frente" (l. 51):** o ligador o recolocou; retirado de novo (ver Corrigido direto).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Os cinco trechos reescritos têm apoio: l. 21 e 27 reconferidos no dmpb nesta rodada; l. 23, 43 e 51 conferidos contra as transcrições literais de cgn2017, cgn2025b e cgn2022b (403 nesta rodada). O resto do texto não mudou desde a revisão anterior, que o deu como conferido |
| 2 | Link abre | dmpb e ce2019: OK nesta rodada. Notas do Campo Grande News: **NÃO CONFERIDO nesta rodada** (403 ao WebFetch, provável bloqueio de robôs); as nove abriram de manhã e levavam às matérias citadas |
| 3 | Sem cópia | OK. As frases novas não repetem mais de oito palavras das fontes ("tornou-se um sucesso nacional" contra "tornando-se rapidamente um estrondoso sucesso em todo o país"; "minha terra" está entre aspas e atribuído) |
| 4 | Dados pessoais | OK. Sem nome da companheira, motivo da mudança, filhos nem idade (que estão em cgn2017). Chico Teixeira aparece só como parceiro |
| 5 | Tom | OK. O superlativo da l. 27 saiu. "Segunda maior cidade do estado" (l. 31) vem da fonte |
| 6 | Divergências | OK. Gravação de "Trem do Pantanal" (l. 43 e 45) com as duas versões; prêmios (l. 57 e 58) e *Garapa*/*Garopa*/*Guarapa* (l. 66) com as versões de cada fonte. Naturalidade (l. 23): Santos pelas fontes, Taubaté como lugar de criação na fala dele, sem forçar divergência |
| 7 | Ficha | OK. Nascimento e Atividade (dmpb), Parcerias (dmpb; Simões em cgn2022; Roca em cgn2015). Nenhum valor só numérico. `cidade: Dourados` com apoio em cgn2017 |
| 8 | Força da fonte | OK. Três veículos independentes (Dicionário Cravo Albin, Campo Grande News, Correio do Estado). Trechos com fonte única em ATENÇÕES |
| 9 | Ligações | OK depois da correção. Identificadores existem na lista-mestra. `tocando-em-frente` está certo na l. 37 (parceria no Dicionário) e na l. 49 (repertório de 2022); na l. 51 era o show e foi retirado. Não há linha do show na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 170 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Contradição entre os dois verbetes do lote.** Este verbete diz, com cgn2025b e cgn2015, que Teixeira gravou "Trem do Pantanal" com Roca (l. 43 e 45). O verbete `trem-do-pantanal` (l. 54) diz que ele "nunca a gravou". Está apontado como PROBLEMA em `dados/revisao/trem-do-pantanal.md`; o dossiê `dados/dossies/trem-do-pantanal.md` (l. 81) repete o "nunca a gravou".
- **L. 78, "O Dicionário não esclarece se a orquestra é do estado de Mato Grosso do Sul."** O dmpb diz "Orquestra do Estado de Mato Grosso", no texto e na discografia. A frase não afirma fato novo, mas levanta uma hipótese que nenhuma fonte levanta. Sugestão ao redator: retirar a frase e deixar o nome como a fonte dá.
- **"Terra de sonhos" (l. 78) e "Terra dos sonhos" (l. 59).** A própria página do Dicionário usa as duas formas: "Terra de sonhos" no parágrafo de 2017 e na discografia, "Terra dos sonhos" no parágrafo de 2018. O verbete segue cada trecho. Se for o mesmo disco, vale uma nota de grafia.
- **Fonte única por trecho.** O Dicionário Cravo Albin sustenta sozinho a formação (l. 21), os festivais (l. 27), a lista de parceiros (l. 37), os prêmios de 1992, 2011 e 2018 e quase toda a discografia. O Campo Grande News sustenta sozinho a mudança para Dourados e o show no Ceeja (cgn2017), a homenagem da Deixa Falar (cgn2020) e o CD com Roca (cgn2015). Onde buscar segunda fonte: Enciclopédia Itaú Cultural, acervo Memória Fonográfica de MS, catálogos da Kuarup e da RCA, premiodamusica.com.br, latingrammy.com, Correio B e O Progresso (Dourados).
- **Discografia, *+Ar* (l. 79).** A lista de discos do Dicionário traz "2018 Ar", e o texto da mesma página fala em "+Ar". O item segue o texto. Provável erro de cadastro.
- **Grammy Latino (l. 58).** Nome da categoria difere entre ce2019 ("Melhor Álbum de Raízes em Língua Portuguesa") e cgn2017b ("melhor álbum de música de raízes brasileiras"). Mesma categoria; o Helton decide se registra.
- **"D de Destino" (l. 39).** cgn2022 atribui a Sater e Teixeira; outra fonte do projeto inclui Paulo Simões. Tratar no verbete da canção.
- **Residência atual.** A fonte mais recente que diz que ele vive em MS é de outubro de 2022 (cgn2022b).
- **`sergio-reis`, `fagner`, `xangai`.** Na lista-mestra com "vínculo com MS não indicado". Links corretos; vão aparecer como desejados.
- **Ligador.** Pela segunda vez ligou o show de 2017 à canção. Vale registrar no fluxo que o nome do show não deve receber `tocando-em-frente`.

## Corrigido direto

- **L. 51:** `noticiou o show "[[tocando-em-frente|Tocando em Frente]]", com Sater` passou a `noticiou o show "Tocando em Frente", com Sater`. Identificador de link errado: ali é o show de 2017 com Sater e Sérgio Reis (cgn2017b), não a canção.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato acrescentado, nenhuma frase removida por dado pessoal (não havia). Lista-mestra, relações, propostas e fila não foram tocadas. Sem commit.

## Fontes conferidas na revisão anterior (30 out. 2026, manhã)

Transcrições obtidas então, usadas nesta rodada para os trechos do Campo Grande News que não abriram (ver Portão).

- dmpb (Dicionário Cravo Albin, sem autor e sem data): Renato Teixeira de Oliveira, 20/5/1945, Santos; Ubatuba; Taubaté dos 14 aos 24; "radialista" na Difusora; São Paulo em 1967; III FMPB "Dadá Maria" (finalista), IV FMPB "Madrasta" com Roberto Carlos, VII FIC "Marinheiro"; "Romaria" com Elis em 1977, "estrondoso sucesso"; parceiros; Sharp 1992, PMB 2011, indicações em 2016 e 2018, Grammy 2018 com *+Ar*; discografia (*Romaria* 1978, *Garopa* e *Guarapa* 1980, ..., "2018 Ar" na lista e "+Ar" no texto, *Terra de sonhos* 2017, *Ao vivo no Sesc – 1978* em 2024). Não menciona MS nem Dourados.
- cgn2017 (Helio de Freitas, 2 out. 2017): "segunda cidade de Mato Grosso do Sul"; "principal hotel da cidade, na área central"; apartamento em reforma; "100, 120 shows por ano"; folgas; show "de graça" para alunos do Ceeja, 40 anos de MS; bate-papo com violão sobre a cultura sul-mato-grossense; "fui criado em Taubaté", "minha terra Taubaté"; sem "natal".
- cgn2017b (Mariana Lopes, 17 set. 2017): continuação de *Ar* com composições novas, previsto até o fim de 2017, sem data; show "Tocando em Frente" com Sérgio Reis em dezembro, data não confirmada; *Ar* venceu a 17ª edição do Grammy Latino em 2016.
- cgn2022 (Thailla Torres, 13 nov. 2022): show de 12/11/2022; "Assim os Dias Passarão" de Sater, Teixeira e Simões, partida de Roca, último capítulo da novela; "D de Destino" abriu o show, "composta em parceria com Renato Teixeira".
- cgn2022b (Thailla Torres, 23 out. 2022): programa de 22/10; "Renato, que vive em Mato Grosso do Sul"; Sater "Virei fã. Depois de muito tempo que fui conhecê-lo pessoalmente"; Teixeira sobre a amizade "Há muitos anos já"; três músicas; sem emissora.
- cgn2022c (Thailla Torres, 23 ago. 2022): "santista"; "decidiu viver em Mato Grosso do Sul"; MPB, country e folk, caipira e sertaneja; "Saudações Pantaneiras", quinta (25), Praça do Rádio Clube, 123 anos, 18h30, gratuito, com Geraldo Espíndola e Marcelo Loureiro; repertório "Romaria", "Frete", "Tocando em Frente".
- cgn2022d (Thailla Torres, 25 ago. 2022): mesmo show, data, local, 18h30, gratuito; sem repertório.
- cgn2020 (Adriano Fernandes e Alana Portela, 14 fev. 2020): "Este ano a escola Deixa Falar vai homenagear o músico Renato Teixeira"; sem detalhe do enredo.
- cgn2015 (Paula Maciulevicius, 26 dez. 2015): CD pronto, previsto para o início de 2016; Roca no "studio 45", Teixeira em casa em São Paulo; "gravaram juntos pela primeira vez" "Romaria" e "Trem do Pantanal"; LP *Garapa*, viola de 10 cordas, 1978.
- cgn2025b (Natália Olliver, 16 set. 2025): "amigo da dupla"; canta a música "em todo show em homenagem ao Roca"; "não chegou a gravar a música" (repórter); "perdi de gravar Trem do Pantanal antes do Almir"; "gravamos juntos o Trem" (Teixeira).
- ce2019 (Naiane Mesquita, 23 jul. 2019): PMB 2016, melhor dupla regional, 27ª edição; *AR*, Melhor Álbum de Raízes em Língua Portuguesa no 17º Grammy Latino; *+AR* em 2018, mesma categoria.

## Pronto para pull request

**Sim**, com a ressalva do Portão: as notas do Campo Grande News não reabriram nesta rodada (403), e os trechos reescritos foram conferidos contra as transcrições literais da revisão anterior. Os cinco PROBLEMAs anteriores foram resolvidos, o link errado do ligador foi retirado, e `npm run conferir` e `npm run build` passam. A contradição sobre a gravação de "Trem do Pantanal" está no outro verbete do lote (`trem-do-pantanal`, l. 54) e é PROBLEMA de lá, não daqui.
