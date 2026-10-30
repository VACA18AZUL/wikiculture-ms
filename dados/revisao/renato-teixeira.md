# Revisão: renato-teixeira

Verbete: `verbetes/renato-teixeira.md`, versão com os cerca de 20 links `[[...]]` inseridos pelo ligador (alteração ainda não commitada sobre 575cb7c). Revisor editorial, 30 out. 2026. As 11 notas foram abertas nesta sessão com WebFetch (extração feita por modelo; nos pontos decisivos pedi o trecho literal). Os números de linha valem para o arquivo atual; as correções feitas não mudaram a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** A ferramenta de terminal foi negada nesta sessão; o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. A conferência das ligações foi feita à mão, com busca em `dados/lista-mestra.csv` (ver ponto 9).
- `git diff` do trabalho do ligador: **NÃO CONFERIDO** pelo terminal. Comparei o texto atual com o dossiê `dados/dossies/renato-teixeira.md` e com as fontes: nenhum fato aparece dentro ou ao redor dos links que não esteja no dossiê, e os textos visíveis dos links repetem a redação do redator. Não encontrei sinal de que o ligador tenha mudado fatos, mas sem o diff isso não está provado.

Antes do pull request, alguém com terminal precisa rodar os dois comandos e o `git diff main -- verbetes/renato-teixeira.md`.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1 a P5): l. 21 "locutor", l. 23 "cidade natal", l. 27 "maior sucesso", l. 43 "nunca ter gravado a canção sozinho", l. 51 "(TV Globo)". O resto confere com as notas |
| 2 | Link abre | OK. 11 de 11 notas abrem e levam à matéria citada; autor e data conferem. No ce2019 a assinatura é de Naiane Mesquita, como na nota, embora a URL da página aponte para outra autora (ver ATENÇÕES) |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos (cgn2017, cgn2015, cgn2022c, cgn2025b, cgn2017b, dmpb) |
| 4 | Dados pessoais | OK. O verbete não traz o nome da companheira, o motivo da mudança, filhos nem idade, que estão em cgn2017. Chico Teixeira aparece só como parceiro, sem o parentesco que o Dicionário registra. Nenhuma frase removida |
| 5 | Tom | **PROBLEMA** (P3): "seu maior sucesso" (l. 27) é superlativo que a fonte não usa. O resto está em tom neutro; "segunda maior cidade do estado" (l. 31) vem da fonte |
| 6 | Divergências | **PROBLEMA** (P2 e P4). Naturalidade (l. 23) apresenta como divergência algo que a fonte não diz; a gravação de "Trem do Pantanal" (l. 43) harmoniza com "sozinho" duas afirmações da mesma matéria. As divergências de prêmios (l. 57 e 58) e de *Garapa*/*Garopa*/*Guarapa* (l. 66) aparecem com as duas versões |
| 7 | Ficha | OK. Nascimento (dmpb), Atividade (dmpb), Parcerias (dmpb; Simões em cgn2022; Roca em cgn2015). Nenhum valor só numérico. `cidade: Dourados` tem apoio em cgn2017 |
| 8 | Fonte única | OK para o verbete: três veículos independentes (Dicionário Cravo Albin, Campo Grande News, Correio do Estado). ATENÇÃO para trechos com fonte única (ver ATENÇÕES) |
| 9 | Ligações | OK depois da correção. Os 21 identificadores ligados existem em `dados/lista-mestra.csv` e correspondem à entidade da lista. Só uma ocorrência apontava para a entidade errada (o show "Tocando em Frente" ligado à canção, l. 51) e foi corrigida. Nomes sem link (Pena Branca, Chico Teixeira, Xavantinho, Natan Soares, Elis Regina, Roberto Carlos, Ceeja, "Romaria", Kuarup) não têm linha na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador `renato-teixeira` no padrão; resumo com cerca de 175 caracteres |

### Conferência dos links do ligador

| Linha | Link | Entidade na lista-mestra | Resultado |
|---|---|---|---|
| 33 | `deixa-falar` | escola de samba de Campo Grande | certo (cgn2020: "a escola Deixa Falar") |
| 37, 76, 79 | `almir-sater` | Almir Sater | certo |
| 37, 49 | `tocando-em-frente` | canção | certo (parceria no Dicionário; repertório em cgn2022c) |
| 51 | `tocando-em-frente` | canção | **errado**: ali é o nome do show de 2017 com Sater e Sérgio Reis. Link retirado |
| 37, 51, 55, 75, 77 | `sergio-reis` | Sérgio Reis | certo |
| 37, 80, 81 | `fagner` | Fagner | certo |
| 37, 73 | `xangai` | Xangai | certo |
| 37, 51 | `altas-horas` | programa de TV | certo |
| 39, 43 | `paulo-simoes` | Paulo Simões | certo |
| 39 | `assim-os-dias-passarao` | canção | certo (aspas estavam dentro do link; movidas para fora) |
| 39, 43 | `geraldo-roca` | Geraldo Roca | certo |
| 39 | `pantanal-novela` | novela | certo (cgn2022: "último capítulo da novela") |
| 39, 51 | `d-de-destino` | canção | certo |
| 43, 45 | `trem-do-pantanal` | canção | certo |
| 45 | `studio-45` | estúdio em Campo Grande | certo (cgn2015: "studio 45") |
| 45, 66 | `garapa-lp` | LP de 1978 | certo |
| 49 | `saudacoes-pantaneiras-2022` | show de 25/08/2022 | certo |
| 49 | `geraldo-espindola` | Geraldo Espíndola | certo |
| 49 | `marcelo-loureiro` | Marcelo Loureiro | certo |
| 55, 57, 59 | `premio-da-musica-brasileira` | premiação | certo |
| 76 | `ar-almir-sater-renato-teixeira` | álbum *AR* | certo |
| 79 | `mais-ar-almir-sater-renato-teixeira` | álbum *+AR* | certo |

## PROBLEMAs

**P1. L. 21, "trabalhou como locutor".**
A fonte (dmpb) diz "trabalhou como radialista na Rádio Difusora de Taubaté". Radialista é mais amplo que locutor; a função específica não está na fonte. Sugestão: "trabalhou como radialista".

**P2. L. 23, "O Lado B de outubro de 2017 chama Taubaté de sua cidade natal e diz que ele foi criado lá."**
A fonte (cgn2017) não usa "natal" em parte nenhuma (conferido com pedido do trecho literal). O que há são duas falas do próprio Teixeira: "fui criado em Taubaté" e "Monteiro Lobato, que é da minha terra Taubaté". O jornal não chama Taubaté de cidade natal. A divergência de naturalidade, como está escrita, não tem apoio. Repete o que diz o dossiê (Divergências, primeiro item), que deve ter vindo de uma leitura por resumo. Sugestão para o redator: "Em entrevista ao Lado B, em outubro de 2017, Teixeira diz que foi criado em Taubaté e se refere à cidade como 'minha terra'.[^cgn2017]" Cabe ao redator decidir se isso ainda é divergência.

**P3. L. 27, "'Romaria', gravada por Elis Regina em 1977, foi seu maior sucesso".**
O dmpb diz que a música, gravada por Elis Regina em 1977, se tornou "rapidamente um estrondoso sucesso em todo o país" e que "foi gravada, entre outros, por" vários artistas. Não diz "maior sucesso". O superlativo vai além da fonte e fere o ponto de tom. "Recebeu depois muitas regravações" tem apoio. Sugestão: "tornou-se um sucesso nacional e foi gravada depois por vários artistas".

**P4. L. 43, "Afirma nunca ter gravado a canção sozinho e lamenta não tê-la gravado antes de Sater; na mesma matéria, diz que gravou com Roca."**
Na fonte (cgn2025b), "não chegou a gravar a música" é frase da repórter ("apesar de cantar Trem do Pantanal em todo show em homenagem ao Roca, não chegou a gravar a música"), e não fala de Teixeira. A palavra "sozinho" não aparece. Teixeira diz "Eu tive uma oportunidade rara e perdi de gravar Trem do Pantanal antes do Almir" e "Gravei com o Roca Romaria e gravamos juntos o Trem". O "sozinho" é uma interpretação do dossiê para conciliar as duas afirmações e foi atribuído a Teixeira. A regra manda registrar as duas versões sem escolher. Sugestão: "A reportagem diz que ele não chegou a gravar a canção. Na mesma matéria, Teixeira lamenta ter perdido a chance de gravá-la antes de Sater e diz que a gravou com Roca.[^cgn2025b]" A segunda versão também tem apoio em cgn2015 (l. 45).

**P5. L. 51, "No programa [[altas-horas|Altas Horas]] (TV Globo)".**
A fonte (cgn2022b) não diz a emissora; só credita a foto a "Reprodução Globoplay". Sugestão: tirar "(TV Globo)" ou citar uma fonte que diga a emissora.

## ATENÇÕES

- **Fonte única: o verbete não depende de fonte única** (onze notas, três veículos independentes). Mas há trechos inteiros com fonte única, o Dicionário Cravo Albin, lido por extração e não em HTML bruto: formação e primeiros anos (l. 21), festivais (l. 27), a lista de parceiros (l. 37), os prêmios de 1992, 2011 e 2018 (l. 55, 56, 59) e toda a discografia (l. 63 a 82), salvo *Garapa* e o anúncio de *+Ar*. Também com fonte única no Campo Grande News: mudança para Dourados e show no Ceeja (cgn2017), homenagem da Deixa Falar (cgn2020), o CD com Roca (cgn2015). Onde buscar a segunda fonte: a Enciclopédia Itaú Cultural (deu 403 ao pesquisador; tentar de novo), o acervo Memória Fonográfica de MS e catálogos da Kuarup e da RCA para a discografia, premiodamusica.com.br e latingrammy.com para os prêmios, e o Correio B e o O Progresso (Dourados) para a mudança de 2017.
- **Discografia, *+Ar* (l. 79).** A lista de discos do Dicionário traz "2018 Ar – Universal Music (c/Almir Sater)", com *Ar* repetido em 2015. O texto biográfico da mesma página diz que em 2018 ele lançou "o CD '+Ar', pela Universal Music". O item do verbete tem apoio no texto biográfico. É provável erro de cadastro, não divergência, mas a nota de abertura da seção ("Títulos e anos conforme o Dicionário") não reflete isso.
- **Grammy Latino, nome da categoria (l. 58).** O Correio (ce2019) diz "Melhor Álbum de Raízes em Língua Portuguesa". O Lado B de 2017 (cgn2017b) diz "melhor álbum de música de raízes brasileiras". O item usa o nome do Correio e cita as duas fontes. É a mesma categoria com nomes diferentes; o Helton decide se vale registrar.
- **Prêmio da Música Brasileira 2016 (l. 57).** O Correio diz "27ª edição". O verbete não dá o número, o que está certo, mas o Dicionário dá "22º" para 2011. Sem conflito; só para registro.
- **"D de Destino" (l. 39).** A matéria citada (cgn2022) atribui a canção a Sater em parceria com Teixeira, e o verbete atribui isso à matéria. A lista-mestra e o dossiê dizem que, em outra fonte do projeto, Paulo Simões também é coautor. Não é divergência entre fontes deste verbete, mas o verbete de "D de Destino" vai ter que tratar disso.
- **Correio do Estado, autoria (ce2019).** A assinatura na página é de Naiane Mesquita, como na nota, mas a URL aponta para outra autora (Glaucea Vaccari). A nota segue a assinatura, que é o correto.
- **Residência atual.** A fonte mais recente que diz que ele vive em MS é de outubro de 2022 (cgn2022b). O resumo ("vive em Mato Grosso do Sul desde 2017, segundo a imprensa local") e o campo `cidade` dependem disso.
- **Ligações para nomes sem vínculo com MS.** `sergio-reis`, `fagner` e `xangai` estão na lista-mestra com a observação "vínculo com MS não indicado" e prioridade baixa. Os links estão certos e são permitidos, mas vão aparecer como verbetes desejados. O Helton decide se ficam.
- **"Tocando em Frente" na l. 49.** O link para a canção ficou. Ali é a canção no repertório de 2022 (cgn2022c), não o show.

## Corrigido direto

- **L. 51:** `noticiou o show "[[tocando-em-frente|Tocando em Frente]]", com Sater` passou a `noticiou o show "Tocando em Frente", com Sater`. O link apontava para a canção, e ali se trata do show de 2017 com Sater e Sérgio Reis (cgn2017b: "o show 'Tocando em Frente', que além da parceria com Renato Teixeira, também conta com Sérgio Reis"). Não há linha do show na lista-mestra. Identificador de link errado.
- **L. 39:** `[[assim-os-dias-passarao|"Assim os Dias Passarão"]]` passou a `"[[assim-os-dias-passarao|Assim os Dias Passarão]]"`, para as aspas ficarem fora do link, como nos demais títulos de canção do verbete.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhuma frase foi removida por dado pessoal, porque não havia. Nenhum arquivo de proposta foi criado, a lista-mestra não foi tocada, a situação na fila não foi mudada e não houve commit.

## Fontes conferidas

Todas abertas nesta sessão (30 out. 2026) com WebFetch.

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

**Pronto para pull request: não.** Há cinco PROBLEMAs de frase sem apoio (P1 a P5), dois deles também de divergência (P2 e P4) e um de tom (P3). Todos se resolvem com ajustes de redação, sem pesquisa nova. Além disso, `npm run conferir` e `npm run build` não rodaram nesta sessão e o diff do ligador não foi visto pelo terminal.
