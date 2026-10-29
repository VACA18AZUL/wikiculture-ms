# Revisão: delinha

Verbete: `verbetes/delinha.md`, versão do redator com os links internos do ligador. Revisor editorial, 29 out. 2026. As oito notas foram abertas nesta sessão com WebFetch, que devolve extração feita por modelo e não o texto bruto. Nos pontos decisivos, pedi o trecho literal. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("11 verbetes conferidos", "Nenhum erro"). Rodado antes e depois das correções.
- `npm run build`: **passou** (24 páginas). Rodado antes e depois das correções.
- `node scripts/ligacoes.mjs`: rodou. Para este verbete sugeriu só a l. 28, que é o título de seção "### Dupla Délio e Delinha". Título não leva link, então nada a fazer.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, P2, P3, P4, P5, P6 abaixo) |
| 2 | Link abre | OK (8 de 8 notas, mais o link de "Para saber mais"; cada um leva à matéria citada, com título, autor e data conferidos) |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A mais longa: "32 títulos entre LPs, CDs, DVDs e compactos" (7 palavras, cde2022). A conferência foi feita sobre extrações e trechos pedidos, não sobre o texto bruto inteiro. |
| 4 | Dados pessoais | OK. Nenhuma frase removida. Ver a explicação abaixo. |
| 5 | Tom | OK. Os dois superlativos vêm atribuídos ("O Correio do Estado descreve...", "falam em..."). Mas um deles está atribuído à fonte errada (P3). |
| 6 | Divergências | **PROBLEMA** (P2: divergência sobre o início da carreira solo escondida). Ver também as ATENÇÕES sobre nome civil e *O Sol e a Lua*. |
| 7 | Ficha | OK. Nome civil: cde2022, dc2022, msn2022 e tdms2013. Nascimento: dc2022, e tdms2013 confirma data e distrito. Morte: cde2022, dc2022 e msn2022. Atividade, Grupos e Alcunha: cde2022. Não há valor numérico. |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** São seis veículos independentes: Correio do Estado, Campo Grande News (via Diário Corumbaense), MS Notícias, Recanto Caipira, Glossário da Música Sul-Mato-Grossense e Tudo do MS. O Jornal Notícias do Estado serve só para o documentário. |
| 9 | Ligações | OK depois da correção. Os 8 identificadores existem em `dados/lista-mestra.csv`: delio-e-delinha, delio, zacarias-mourao, zedu, por-onde-andei-wilson-koller, dama-do-rasqueado-delinha, marinete-pinheiro, mostra-sesc-de-cinema. Acrescentei o link para `gravadora-california`, que tem linha na lista-mestra. Os outros nomes sem link (Capitão Barduíno, Maciel Corrêa, Zézinho Nantes, Tonico e Tinoco, Mário Vieira, Wilson Koller) não têm linha. Há dúvida de homônimo em `zedu` (ATENÇÕES). |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29` (hoje), identificador `delinha` no padrão, resumo com cerca de 172 caracteres. |

### Dados pessoais (ponto 4), em detalhe

As fontes trazem muito dado pessoal: internações, doença e causa da morte (cde2022, dc2022, msn2022, rc), os dois casamentos e a morte do segundo marido (dc2022, gms2020), o bairro e a casa onde morava (dc2022), "filha única" e as mortes dos pais (dc2022), o nome do filho (cde2022, dc2022, msn2022, rc). **Nada disso está no verbete.** A morte de Délio aparece só com data e cidade, sem a causa.

Ficaram três menções leves à família. As fontes as tratam como parte da trajetória, e a regra do PLANO.md ("além do que a fonte publicou como parte da trajetória") as permite:
- l. 24: "foi com os pais para Campo Grande aos 8 anos" (dc2022; cde2022 diz só "se mudou para Campo Grande aos 8 anos").
- l. 26: o coral "por iniciativa da mãe" (cde2022). É como ela começou a cantar.
- l. 44: "passou a cantar com o filho" (msn2022). Fala do parceiro de palco, sem nome. A fonte diz "viúva", e o verbete deixou isso fora.

Se o Helton quiser enxugar, "com os pais" (l. 24) pode sair sem perda.

## PROBLEMAs

**P1. l. 26, "o nome [[delio-e-delinha|Délio e Delinha]] foi dado pelo locutor Capitão Barduíno."**
A fonte (gms2020) diz, literalmente: "No começo da carreira levavam o nome de Duo Pintassilgo, mas o Capitão Barduíno os batizou de Délio e Delinha." Ela não diz que Barduíno era locutor. No dossiê, "locutor" e a Rádio Bandeirantes vêm de um resumo de busca do livro *Os Pioneiros*, que ninguém abriu. Sugestão: tirar "locutor".

**P2. l. 44, "Depois da morte de [[delio|Délio]], Delinha seguiu em carreira solo, segundo o Correio do Estado, o Campo Grande News e o Recanto Caipira.[^cde2022][^dc2022][^rc]"** (pontos 1 e 6)
- cde2022 sustenta: "Delinha estava em carreira solo desde o falecimento de seu parceiro Délio, em 2010."
- rc sustenta: ela "continuou cantando sozinha" depois da morte de Délio.
- dc2022 (Campo Grande News) **não sustenta**. Diz: "Após o luto, Delinha seguiu carreira solo." O luto é o da morte do segundo marido, em 2012. As duas frases anteriores tratam do novo casamento e da morte dele.

Há, portanto, uma divergência escondida: carreira solo desde 2010 (Correio, Recanto) ou só depois de 2012 (Campo Grande News). Sugestão para o redator: tirar o Campo Grande News e o `[^dc2022]` da primeira frase e acrescentar algo como "O Campo Grande News situa o início da carreira solo depois de 2012.[^dc2022]". O motivo (morte do segundo marido) é vida familiar e fica fora.

**P3. l. 62, "O Correio do Estado e o Campo Grande News falam em 32 títulos entre LPs, CDs, DVDs e compactos, a maior discografia de artistas de Mato Grosso do Sul.[^cde2022][^dc2022]"**
cde2022 traz os 32 títulos ("Juntos lançaram 32 títulos entre LP's, CD's, DVD's e compactos."), mas não usa "maior" nem "discografia". O superlativo está só em dc2022: "Délio e Delinha foram os artistas sul-mato-grossenses com a maior discografia da história do Estado com 32 títulos." Sugestão: manter os 32 títulos nas duas fontes e atribuir "a maior discografia" só ao Campo Grande News.

**P4. l. 58, "O Diário Corumbaense a chama também de 'cantora de chamamé' e o MS Notícias de 'chamamezeira'."**
A expressão "cantora de chamamé" **não existe** em dc2022. A matéria usa "chamamezeira" ("A chamamezeira nasceu em Vista Alegre, distrito de Maracaju, em 07 de setembro de 1936."). O MS Notícias também usa "chamamezeira". Sugestão: "O Diário Corumbaense e o MS Notícias a chamam também de 'chamamezeira'."

**P5. l. 58, "O Glossário lista, na discografia da dupla, rasqueado, cana-verde, arrasta-pé, xote, guarânia e canção rancheira.[^gms2020]"**
"Guarânia" não aparece em gms2020: perguntei duas vezes e a resposta foi nenhuma ocorrência. Os gêneros nas faixas do álbum de 1963 são rasqueado, "Xotis", arrasta-pé, cana verde e canção rancheira. "Xote" aparece também como item do menu de gêneros do site. Sugestão: tirar "guarânia".

**P6. l. 34, "O Recanto Caipira diz que a dupla fez a trilha de *Lá no meu sertão* (1961), primeiro filme de Tonico e Tinoco."**
A fonte (rc) diz que a dupla **participou** da trilha sonora do filme, dirigido por Eduardo Llorente. "Fez a trilha" vai além disso. Sugestão: "participou da trilha".

## ATENÇÕES

- **Fonte única: não se aplica** (ponto 8). Para ir além da imprensa, a segunda leitura que falta é acadêmica: *Os Pioneiros* (Rodrigo Teixeira, Ed. UFMS, 2014) e a dissertação de Rodrigo Teixeira Gonçalves (UFMS, 2014), já listadas em `delio-e-delinha` na lista-mestra.
- **Dossiê `dados/dossies/delinha.md`: não tem seção "Atualização de".**
- **Nome civil.** O dossiê registra a divergência: "Delanira Pereira Gonçalves" em quatro fontes (cde2022, dc2022, msn2022, tdms2013) e "Delanira Gonçalves Pompeu" em rc. O verbete mostra só a primeira. A segunda é sobrenome de casada (Délio era José Pompeu), e registrá-la expõe o casamento que o verbete deixou fora de propósito. Por isso ficou como ATENÇÃO, não como PROBLEMA. O Helton decide se a variante entra.
- **l. 36, ano de *O Sol e a Lua*.** O texto de rc diz que a dupla se reuniu em 1978 para esse disco independente. A discografia da mesma página lista duas edições, 1964 (Centaurus) e 1978. O verbete cita só 1978. O Correio liga a canção ao retorno dos anos 1980. A divergência já está registrada, mas falta a contradição interna de rc.
- **l. 38, homônimo em `[[zedu|José Eduardo Moraes (Zédu)]]`.** rc chama José Eduardo Moraes de repórter cinematográfico. A linha `zedu` da lista-mestra descreve um cantor (show de 2013 no CREA-MS, homenagem a Manoel de Barros). Pode não ser a mesma pessoa. O dossiê já pedia confirmação. Até lá, o mais seguro é tirar o link e deixar só o nome. Não alterei, porque não há certeza.
- **l. 30, "Ela ficou conhecida como 'casal de onças do Mato Grosso'."** "Ela" retoma "a dupla", mas pode ser lido como Delinha. Sugestão de redação: "A dupla ficou conhecida...".
- **l. 48, "foi lançado em 2016".** msn2022 diz "Quando completou 80 anos, em 2016", e dc2022 diz que em 2016, aos 80 anos, ela "tornou-se tema do documentário". "Lançado" é leitura razoável. A lista-mestra registra o filme como de 2017 (ano do prêmio). A diferença está explicada no dossiê.
- **l. 40.** cde2010 diz que Délio morreu "na Capital", sem nome de cidade. No Correio do Estado, isso quer dizer Campo Grande. A matéria é de 9 fev. e diz "ontem", o que reforça o 8 de fevereiro de rc.
- **Leitura por extração.** Todas as páginas foram lidas por WebFetch. Os trechos literais citados acima foram pedidos um a um.

## Corrigido direto

- l. 64: "gravadora Califórnia" virou "gravadora [[gravadora-california|Califórnia]]". O identificador existe na lista-mestra, com rc e gms2020 como origem. É só o link, sem fato novo.

Nada mais foi alterado. Nenhuma frase foi removida por dado pessoal, porque não havia. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na lista-mestra não foi mudada.

## Fontes conferidas

- cde2022: Rodrigo Almeida, *Correio do Estado*, 16 jun. 2022. Sustenta nome civil, Maracaju, mudança aos 8 anos, coral e mãe, mais de 50 anos de dupla, "carreira mais bem sucedida", separação nos anos 1970 e volta nos 1980 com "O sol e a lua", carreira solo desde 2010, 32 títulos e a conta de Délio (14 de 78 rpm, 4 compactos, 5 CDs, feita em 2007), homenagem da Sectur. Não diz "maior discografia".
- dc2022: *Diário Corumbaense*, 16 jun. 2022, com crédito ao *Campo Grande News*. Sustenta nascimento (7 set. 1936, Vista Alegre, Maracaju), mudança aos 8 anos, "casal de onças", oito anos em São Paulo, volta em 1993, live para 56 mil pessoas, pen drive, "maior discografia" e a composição em 19/2/14/4/2, documentário de 2016, luto de três dias, velório na Câmara, "chamamezeira". Situa a carreira solo depois de 2012 (P2).
- msn2022: Tero Queiroz, *MS Notícias*, 16 jun. 2022. Sustenta a morte de Délio em 9 fev. 2010, o canto com o filho, o documentário (Marinete Pinheiro, 2016), os títulos de embaixadora (municipal em 2016, estadual depois), velório, sepultamento no Jardim da Paz, "chamamezeira".
- rc: Sandra Cristina Peripato, *Recanto Caipira*, sem data. Sustenta 19 anos, rádios Bandeirantes e Nove de Julho, Zacarias Mourão, 78 rpm de 1959 pela Califórnia, participação na trilha de *Lá no meu sertão*, 1978 e 1993, projeto dos 50 anos (2 jun. 2007, Maciel Corrêa, Zézinho Nantes, CD e DVD em dez. 2007, Zédu), morte de Délio em 8 fev. 2010, "continuou cantando sozinha".
- gms2020: *Glossário da Música Sul-Mato-Grossense*, sem autor e sem data. Sustenta o trio "Duas Damas e Um Valete", Duo Pintassilgo, Capitão Barduíno (sem "locutor"), ajuda de Zacarias Mourão, rádio sem remuneração por "5 anos e um mês", 78 rpm de 1959, volta ao estado natal e sucesso, *O Casal de Onça de Mato Grosso* (12 faixas, Califórnia, Mário Vieira), gêneros (sem guarânia).
- cde2010: Scheila Canto, *Correio do Estado*, 9 fev. 2010. Sustenta a morte de Délio "ontem", na Capital.
- tdms2013: Hosana de Lourdes, *Tudo do MS*, 9 nov. 2013. Sustenta 7 set. 1936 e Vista Alegre, e a biografia *Por onde andei*, do jornalista Wilson Koller, lançada no sábado, dia 9, na Concha Acústica de Maracaju.
- jne2017: Daniele Silva, *Jornal Notícias do Estado*, 14 jul. 2017. Sustenta a direção de Marinete Pinheiro, os 34 filmes premiados e a licença de direitos autorais.

**Pronto para pull request: não.** São seis PROBLEMAs de fidelidade à fonte. Um deles (P2) esconde uma divergência. Todos têm correção curta. O redator resolve com a releitura das três fontes envolvidas (gms2020, dc2022, rc). Não há dado pessoal a remover.
