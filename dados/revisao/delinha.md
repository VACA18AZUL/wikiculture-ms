# Revisão: delinha

Verbete: `verbetes/delinha.md`, versão reescrita pelo redator depois da segunda devolução (commit 4a8b8d0). Revisor editorial, 30 out. 2026. Este relatório substitui o de 29 out. 2026. As oito notas foram abertas nesta sessão com WebFetch, que devolve extração feita por modelo e não o texto bruto; nos pontos decisivos pedi o trecho literal. Os números de linha valem para o arquivo atual, que não foi alterado nesta revisão.

## Portão de evidências

- `npm run conferir`: **passou.** "12 verbetes conferidos. [...] Nenhum erro."
- `npm run build`: **passou.** "25 page(s) built", com `/verbetes/delinha/index.html` gerado.
- `node scripts/ligacoes.mjs`: aponta, neste verbete, "Délio e Delinha" e "Délio" na l. 28 (é o título de seção "Dupla Délio e Delinha"; o nome já está ligado na l. 18 e no corpo), "Zédu" na l. 38 (dúvida de homônimo, ver ATENÇÕES) e "Maciel Corrêa" na l. 38 (linha nova na lista-mestra, ver ATENÇÕES).

## Situação dos apontamentos da revisão anterior

- **P1 (l. 54, luto "decretado"): resolvido.** Agora: "O governador anunciou que decretaria luto de três dias no estado.[^dc2022]", só com dc2022. Confere: o governador "vai decretar luto de três dias em todo o Estado". msn2022 saiu dessa frase.
- **P2 (l. 38, Zédu "entre os idealizadores"): resolvido.** Agora: "O Recanto Caipira atribui o trabalho ao empenho do repórter cinematográfico José Eduardo Moraes (Zédu), entre outros." Confere com rc ("empenho"), e o filho não é nomeado.
- **ATENÇÃO "foi lançado em 2016" (l. 48): resolvida.** Agora "é de 2016, ano em que ela completou 80 anos", apoiado em msn2022 ("Aos 80 anos, em 2016, ela foi tema do documentário").
- ATENÇÃO que continua: nome civil variante (ver ATENÇÕES).
- `npm run conferir` e `npm run build`, que não tinham rodado: rodaram e passaram.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada parágrafo confere com as notas que cita. Na l. 54, a chamada a dc2022 no velório e no sepultamento não acrescenta apoio (ver ATENÇÕES), mas msn2022, citada junto, sustenta a frase inteira |
| 2 | Link abre | OK. 8 de 8 notas, mais o link de "Para saber mais" (o mesmo de rc); cada um leva à matéria citada, com título, autor e data conferidos |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A frase mais próxima é "pagamento de licença de direitos autorais" (l. 48), seis palavras iguais a jne2017. A conferência foi feita sobre extrações e trechos pedidos, não sobre o texto bruto inteiro |
| 4 | Dados pessoais | OK. Nenhuma frase removida. Saúde, causa da morte, casamentos, segundo marido e nome do filho continuam fora. Ficam as três menções leves já aceitas antes, que as fontes tratam como trajetória: "com os pais" (l. 24), "por iniciativa da mãe" (l. 26), "com o filho", sem nome (l. 44) |
| 5 | Tom | OK. "Maior sucesso" (Correio) e "maior discografia" (Campo Grande News) vêm atribuídos à fonte certa |
| 6 | Divergências | OK. Origem, separação e retorno, morte de Délio, carreira solo, discografia e *O Sol e a Lua* aparecem com as versões de cada fonte. Nome civil variante segue como ATENÇÃO |
| 7 | Ficha | OK. Nome civil: cde2022, dc2022. Nascimento: dc2022 e tdms2013. Morte: cde2022, dc2022 (data da matéria), msn2022 ("nesta quinta-feira (16.jun.22) [...] em Campo Grande"). Atividade, Grupos e Alcunha: cde2022. Sem valor só numérico |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** Seis veículos independentes: Correio do Estado, Campo Grande News (via Diário Corumbaense), MS Notícias, Recanto Caipira, Glossário da Música Sul-Mato-Grossense e Tudo do MS, mais o Jornal Notícias do Estado para o documentário |
| 9 | Ligações | OK, com ATENÇÃO. Os 8 identificadores existem em `dados/lista-mestra.csv`: delio-e-delinha, delio, zacarias-mourao, gravadora-california, por-onde-andei-wilson-koller, dama-do-rasqueado-delinha, marinete-pinheiro, mostra-sesc-de-cinema. Zédu e Maciel Corrêa têm linha, mas há dúvida de homônimo (ver ATENÇÕES). Capitão Barduíno, Zézinho Nantes, Tonico e Tinoco, Mário Vieira e Wilson Koller não têm linha |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29` (data da reescrita), identificador `delinha` no padrão, resumo com cerca de 175 caracteres. Notas no formato do modelo, com "Acesso em" |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única: não se aplica** (ponto 8). Para ir além da imprensa, a segunda leitura que falta é acadêmica: *Os Pioneiros* (Rodrigo Teixeira, Ed. UFMS, 2014) e a dissertação de Rodrigo Teixeira Gonçalves (UFMS, 2014), já listadas em `delio-e-delinha` na lista-mestra.
- **Dossiê `dados/dossies/delinha.md`: não tem seção "Atualização de".** O "Uso no verbete" registra que a reescrita não reabriu as fontes; esta revisão as reabriu.
- **l. 54, dc2022 no velório e no sepultamento.** Trecho: "O velório foi na Câmara Municipal e o sepultamento no Cemitério Jardim da Paz.[^dc2022][^msn2022]". No corpo de dc2022 não há velório nem sepultamento; o velório na Câmara aparece só como título de um link "Saiba mais" ("Corpo de Delinha é velado na Câmara Municipal de Campo Grande"). msn2022 sustenta as duas coisas ("está sendo velada [...] na Câmara Municipal de Campo Grande"; sepultamento no Jardim da Paz). Sugestão: deixar só `[^msn2022]` nessa frase. A revisão anterior disse que o velório aparecia em dc2022; a afirmação vinha do título do link, não do texto.
- **Maciel Corrêa (l. 38).** O garimpo da rodada 8 criou a linha `maciel-correa` na lista-mestra (prioridade baixa, "ligação com MS a confirmar em fonte própria"), a partir de matérias sobre um colecionador de discos, sem detalhe sobre o artista. Pode ser o mesmo Maciel Corrêa que participou do projeto dos 50 anos da dupla, mas nenhuma fonte liga os dois. Não liguei. Se o garimpeiro ou o pesquisador confirmarem, vira `[[maciel-correa|Maciel Corrêa]]`.
- **Zédu (l. 38).** Continua em texto simples: a linha `zedu` da lista-mestra (cantor, show de 2013) não diz que é o repórter cinematográfico José Eduardo Moraes.
- **Nome civil.** O dossiê registra a divergência: "Delanira Pereira Gonçalves" em quatro fontes (cde2022, dc2022, msn2022, tdms2013) e "Delanira Gonçalves Pompeu" em rc. O verbete mostra só a primeira. A segunda é sobrenome de casada (Délio era José Pompeu), e registrá-la expõe o casamento que o verbete deixou fora de propósito. Por isso ficou como ATENÇÃO, não como PROBLEMA. O Helton decide se a variante entra.
- **l. 52, homenagem da Sectur "de 2022".** cde2022 diz que ela foi homenageada "recentemente" no Arraial de Santo Antônio. O ano vem da data da matéria (16 jun. 2022), não do texto. Inferência razoável.
- **l. 30, "a de maior sucesso".** cde2022 diz "a carreira mais bem sucedida de Mato Grosso do Sul". A paráfrase está atribuída e é fiel no sentido.
- **l. 40.** cde2010 diz que Délio morreu "ontem às 16h", em matéria de 9 fev. 2010, e o título diz "na Capital"; o texto não nomeia a cidade. O "ontem" reforça o 8 de fevereiro do Recanto.
- **l. 44, carreira solo depois de 2012.** dc2022 não dá o ano da carreira solo: diz que ela perdeu o segundo marido em 2012 e que, "após o luto", seguiu carreira solo. "Situa o início da carreira solo depois de 2012" é leitura fiel, que deixa fora o dado familiar.
- **Leitura por extração.** Todas as páginas foram lidas por WebFetch. Os trechos literais citados foram pedidos um a um.

## Corrigido direto

Nada. Não havia erro mecânico a corrigir. O arquivo do verbete não foi alterado nesta revisão.

Nenhuma frase foi removida por dado pessoal, porque não havia. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

Todas abertas nesta sessão (30 out. 2026).

- cde2022: Rodrigo Almeida, *Correio do Estado*, 16 jun. 2022. Sustenta nome civil, Maracaju, mudança aos 8 anos, coral e mãe, mais de 50 anos de dupla, "carreira mais bem sucedida", separação nos anos 1970 e volta nos 1980 com "O sol e a lua", carreira solo depois da morte de Délio em 2010, 32 títulos e a conta de Délio (14 de 78 rpm, 4 compactos, 5 CDs), homenagem da Sectur no Arraial de Santo Antônio. Não diz "maior discografia".
- dc2022: *Diário Corumbaense*, 16 jun. 2022, com crédito ao *Campo Grande News*. Sustenta nome civil, nascimento (7 set. 1936, Vista Alegre, Maracaju), "Mudou-se com os pais para Campo Grande quando tinha 8 anos", "casal de onças", oito anos em São Paulo, volta "de verdade" em 1993, carreira solo "após o luto" (a frase anterior situa o luto em 2012), live para 56 mil pessoas, pen drive com mais de 300 músicas, "maior discografia da história do Estado" e a composição em 19/2/14/4/2, documentário em 2016, "chamamezeira", luto que o governador "vai decretar". Não traz velório nem sepultamento no corpo (só no título de um link "Saiba mais").
- msn2022: Tero Queiroz, *MS Notícias*, 16 jun. 2022. Sustenta a morte em 16 jun. 2022 em Campo Grande, aos 85 anos, a morte de Délio em 9 fev. 2010, o canto com o filho, o documentário (Marinete Pinheiro, 2016, aos 80 anos dela), os títulos de embaixadora (municipal em 2016, estadual depois), velório na Câmara, sepultamento no Jardim da Paz, "chamamezeira". Não fala de luto oficial.
- rc: Sandra Cristina Peripato, *Recanto Caipira*, sem data. Sustenta 19 anos, rádios Bandeirantes e Nove de Julho, Zacarias Mourão, 78 rpm de 1959 pela Califórnia, participação na trilha de *Lá no meu sertão* (1961), reunião em 1978 com *O Sol e a Lua* e discografia com 1964 e 1978, 1993, projeto dos 50 anos (2007, Campo Grande, Maciel Corrêa, Zézinho Nantes, CD e DVD em dez. 2007, "empenho" de Zédu), morte de Délio em 8 fev. 2010, seguiu cantando sozinha.
- gms2020: *Glossário da Música Sul-Mato-Grossense*, sem autor e sem data. Sustenta o trio "Duas Damas e Um Valete", Duo Pintassilgo, Capitão Barduíno (sem "locutor"), ajuda de Zacarias Mourão, rádio sem remuneração por "5 anos e um mês", 78 rpm de 1959, volta ao estado natal e sucesso, *O Casal de Onça de Mato Grosso* (12 faixas, Califórnia, Mário Vieira), gêneros (sem guarânia).
- cde2010: Scheila Canto, *Correio do Estado*, 9 fev. 2010. Sustenta a morte de Délio "ontem às 16h"; o título diz "na Capital".
- tdms2013: Hosana de Lourdes, *Tudo do MS*, 9 nov. 2013. Sustenta 7 set. 1936 e Vista Alegre, e a biografia *Por onde andei*, do jornalista Wilson Koller, lançada no sábado, dia 9, na Concha Acústica de Maracaju.
- jne2017: Daniele Silva, *Jornal Notícias do Estado*, 14 jul. 2017. Sustenta a direção de Marinete Pinheiro, os 34 filmes premiados e a licença de direitos autorais.

**Pronto para pull request: sim.** Os dois PROBLEMAs da revisão anterior (luto "decretado" e "idealizadores") foram resolvidos, não há PROBLEMA novo, e `npm run conferir` e `npm run build` passaram. Ficam ATENÇÕES para o redator ou para o Helton: tirar `[^dc2022]` da frase do velório (l. 54), o nome civil variante e as dúvidas de homônimo de Zédu e Maciel Corrêa. Nenhuma delas impede o lote. Não há dado pessoal a remover.
