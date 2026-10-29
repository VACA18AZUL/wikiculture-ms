# Revisão: delinha

Verbete: `verbetes/delinha.md`, versão reescrita pelo redator depois da devolução. Revisor editorial, 29 out. 2026. Este relatório substitui o anterior. As oito notas foram abertas nesta sessão com WebFetch, que devolve extração feita por modelo e não o texto bruto; nos pontos decisivos pedi o trecho literal. Os números de linha valem para o arquivo atual; as correções feitas não mudaram a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** A ferramenta de terminal foi negada nesta sessão e o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: não rodou, pelo mesmo motivo. As ligações foram conferidas à mão contra `dados/lista-mestra.csv`.

Quem tiver terminal precisa rodar `npm run conferir` e `npm run build` antes do lote.

## Situação dos apontamentos da revisão anterior

- P1 ("locutor" Capitão Barduíno): **resolvido.** O texto diz só "foi dado por Capitão Barduíno", como a fonte.
- P2 (carreira solo, divergência escondida): **resolvido.** A l. 44 traz Correio e Recanto para a carreira solo depois de 2010, e o Campo Grande News à parte, "depois de 2012", sem o motivo familiar.
- P3 ("maior discografia" atribuída ao Correio): **resolvido.** Agora só o Campo Grande News.
- P4 ("cantora de chamamé"): **resolvido.** "Chamamezeira" nas duas fontes.
- P5 ("guarânia"): **resolvido.** Retirada.
- P6 ("fez a trilha"): **resolvido.** "Participou da trilha".
- ATENÇÕES antigas resolvidas: "A dupla ficou conhecida" (l. 30); link `zedu` retirado (dúvida de homônimo), Zédu fica em texto simples; contradição interna do Recanto sobre *O Sol e a Lua* (1964 e 1978) agora registrada (l. 36).
- ATENÇÕES antigas que continuam: nome civil variante e "lançado em 2016" (ver ATENÇÕES).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1 na l. 54 e P2 na l. 38). O resto confere com as oito notas |
| 2 | Link abre | OK. 8 de 8 notas, mais o link de "Para saber mais"; cada um leva à matéria citada, com título, autor e data conferidos |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A conferência foi feita sobre extrações e trechos pedidos, não sobre o texto bruto inteiro |
| 4 | Dados pessoais | OK. Nenhuma frase removida. Saúde, causa da morte, casamentos, segundo marido e nome do filho continuam fora. Ficam as três menções leves já aceitas antes, que as fontes tratam como trajetória: "com os pais" (l. 24), "por iniciativa da mãe" (l. 26), "com o filho", sem nome (l. 44) |
| 5 | Tom | OK. "Maior sucesso" (Correio) e "maior discografia" (Campo Grande News) vêm atribuídos à fonte certa |
| 6 | Divergências | OK. Origem, separação e retorno, morte de Délio, carreira solo, discografia e *O Sol e a Lua* aparecem com as versões de cada fonte. Nome civil variante segue como ATENÇÃO |
| 7 | Ficha | OK. Nome civil: cde2022, dc2022, msn2022, tdms2013. Nascimento: dc2022 e tdms2013. Morte: cde2022, dc2022, msn2022. Atividade, Grupos e Alcunha: cde2022. Sem valor só numérico |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** Seis veículos independentes: Correio do Estado, Campo Grande News (via Diário Corumbaense), MS Notícias, Recanto Caipira, Glossário da Música Sul-Mato-Grossense e Tudo do MS, mais o Jornal Notícias do Estado para o documentário |
| 9 | Ligações | OK. Os 8 identificadores existem em `dados/lista-mestra.csv`: delio-e-delinha, delio, zacarias-mourao, gravadora-california, por-onde-andei-wilson-koller, dama-do-rasqueado-delinha, marinete-pinheiro, mostra-sesc-de-cinema. Nomes sem link (Capitão Barduíno, Maciel Corrêa, Zézinho Nantes, Zédu, Tonico e Tinoco, Mário Vieira, Wilson Koller) não têm linha ou têm dúvida de homônimo |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29`, identificador `delinha` no padrão, resumo com cerca de 170 caracteres. Formato das notas corrigido (ver "Corrigido direto") |

## PROBLEMAs

**P1. l. 54, "O governador decretou luto de três dias no estado.[^dc2022][^msn2022]"**
- dc2022 diz que o governador "afirmou que vai decretar luto de três dias em todo o Estado". É um anúncio, não o decreto.
- msn2022 não menciona luto nem governador (conferido nesta sessão).
A frase vai além das duas fontes. Sugestão para o redator: "O governador anunciou que decretaria luto de três dias no estado.[^dc2022]". Manter msn2022 só para o velório e o sepultamento, que ele sustenta (o velório na Câmara também aparece em dc2022).

**P2. l. 38, "O Recanto Caipira cita José Eduardo Moraes (Zédu) entre os idealizadores."**
A fonte (rc) diz: "Esse trabalho resultou do empenho do repórter cinematográfico José Eduardo Moraes (o Zédu), e também de João Paulo, filho de Délio e Delinha." A palavra "idealizador" não aparece na página (procurada nesta sessão). "Empenho" não é o mesmo que ter idealizado. Sugestão: "O Recanto Caipira atribui o trabalho ao empenho do repórter cinematográfico José Eduardo Moraes (Zédu), entre outros." Não é preciso nomear o filho.

## ATENÇÕES

- **Fonte única: não se aplica** (ponto 8). Para ir além da imprensa, a segunda leitura que falta é acadêmica: *Os Pioneiros* (Rodrigo Teixeira, Ed. UFMS, 2014) e a dissertação de Rodrigo Teixeira Gonçalves (UFMS, 2014), já listadas em `delio-e-delinha` na lista-mestra.
- **Dossiê `dados/dossies/delinha.md`: não tem seção "Atualização de".**
- **Nome civil.** O dossiê registra a divergência: "Delanira Pereira Gonçalves" em quatro fontes (cde2022, dc2022, msn2022, tdms2013) e "Delanira Gonçalves Pompeu" em rc. O verbete mostra só a primeira. A segunda é sobrenome de casada (Délio era José Pompeu), e registrá-la expõe o casamento que o verbete deixou fora de propósito. Por isso ficou como ATENÇÃO, não como PROBLEMA. O Helton decide se a variante entra.
- **l. 48 e l. 70, "foi lançado em 2016".** msn2022 diz que, aos 80 anos, em 2016, ela virou tema do documentário; dc2022, que "virou estrela de um documentário". Nenhuma das duas usa "lançado". É leitura razoável, mas vale trocar por "é de 2016" ou "tem Delinha como tema desde 2016". A lista-mestra registra o filme como de 2017 (ano do prêmio).
- **l. 52, homenagem da Sectur "de 2022".** cde2022 diz que ela foi homenageada "recentemente" no Arraial de Santo Antônio. O ano vem da data da matéria (16 jun. 2022), não do texto. Inferência razoável.
- **l. 30, "a de maior sucesso".** cde2022 diz "a carreira mais bem sucedida de Mato Grosso do Sul". A paráfrase está atribuída e é fiel no sentido.
- **l. 40.** cde2010 diz que Délio morreu "na Capital", sem nome de cidade, e "ontem", em matéria de 9 fev. 2010, o que reforça o 8 de fevereiro do Recanto.
- **Leitura por extração.** Todas as páginas foram lidas por WebFetch. Os trechos literais citados foram pedidos um a um.

## Corrigido direto

- **Notas de fonte (l. 76 a 83):** acrescentado "Acesso em 29 out. 2026." ao fim das oito notas, como pede o modelo (`modelos/verbete.md`: "Acesso em dia mês ano."). Todas as oito páginas foram abertas nesta data, nesta revisão. Nenhum outro dado das notas mudou.

Nada mais foi alterado. Nenhuma frase foi removida por dado pessoal, porque não havia. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na lista-mestra não foi mudada.

## Fontes conferidas

- cde2022: Rodrigo Almeida, *Correio do Estado*, 16 jun. 2022. Sustenta nome civil, Maracaju, mudança aos 8 anos, coral e mãe, mais de 50 anos de dupla, "carreira mais bem sucedida", separação nos anos 1970 e volta nos 1980 com "O sol e a lua", carreira solo desde 2010, 32 títulos e a conta de Délio (14 de 78 rpm, 4 compactos, 5 CDs), homenagem da Sectur "recentemente". Não diz "maior discografia".
- dc2022: *Diário Corumbaense*, 16 jun. 2022, com crédito ao *Campo Grande News*. Sustenta nascimento (7 set. 1936, Vista Alegre, Maracaju), mudança com os pais aos 8 anos, "casal de onças", oito anos em São Paulo, volta em 1993, carreira solo "após o luto" (frases anteriores situam em 2012), live para 56 mil pessoas, pen drive, "maior discografia" e a composição em 19/2/14/4/2, documentário em 2016, velório na Câmara, "chamamezeira". Sobre o luto oficial diz só que o governador "vai decretar" (P1).
- msn2022: Tero Queiroz, *MS Notícias*, 16 jun. 2022. Sustenta a morte de Délio em 9 fev. 2010, o canto com o filho, o documentário (Marinete Pinheiro, 2016), os títulos de embaixadora (municipal em 2016, estadual depois), velório, sepultamento no Jardim da Paz, "chamamezeira". Não fala de luto oficial (P1).
- rc: Sandra Cristina Peripato, *Recanto Caipira*, sem data. Sustenta 19 anos, rádios Bandeirantes e Nove de Julho, Zacarias Mourão, 78 rpm de 1959, participação na trilha de *Lá no meu sertão* (1961), reunião em 1978 com *O Sol e a Lua* e discografia com 1964 e 1978, 1993, projeto dos 50 anos (2 jun. 2007, Campo Grande, Maciel Corrêa, Zézinho Nantes, CD e DVD em dez. 2007, "empenho" de Zédu, sem "idealizador", P2), morte de Délio em 8 fev. 2010, "continuou cantando sozinha".
- gms2020: *Glossário da Música Sul-Mato-Grossense*, sem autor e sem data. Sustenta o trio "Duas Damas e Um Valete", Duo Pintassilgo, Capitão Barduíno (sem "locutor"), ajuda de Zacarias Mourão, rádio sem remuneração por "5 anos e um mês", 78 rpm de 1959, volta ao estado natal e sucesso, *O Casal de Onça de Mato Grosso* (12 faixas, Califórnia, Mário Vieira), gêneros (sem guarânia).
- cde2010: Scheila Canto, *Correio do Estado*, 9 fev. 2010. Sustenta a morte de Délio "ontem", na Capital.
- tdms2013: Hosana de Lourdes, *Tudo do MS*, 9 nov. 2013. Sustenta 7 set. 1936 e Vista Alegre, e a biografia *Por onde andei*, do jornalista Wilson Koller, lançada no sábado, dia 9, na Concha Acústica de Maracaju.
- jne2017: Daniele Silva, *Jornal Notícias do Estado*, 14 jul. 2017. Sustenta a direção de Marinete Pinheiro, os 34 filmes premiados e a licença de direitos autorais.

**Pronto para pull request: não.** Os seis PROBLEMAs antigos foram resolvidos, mas há dois novos de fidelidade à fonte (P1, luto "decretado"; P2, "idealizadores"), cada um com correção de uma frase. E `npm run conferir` e `npm run build` precisam rodar e passar, porque não puderam ser executados nesta sessão. Não há dado pessoal a remover.
