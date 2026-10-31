# Revisão: tostao-e-guarany

Verbete: `verbetes/tostao-e-guarany.md`, primeira revisão, depois da passagem do ligador. Revisor editorial, 31 out. 2026. As duas matérias do *Correio do Estado* foram abertas nesta sessão com WebFetch. A ferramenta devolve extração feita por modelo, não o texto bruto, então nos pontos decisivos pedi o trecho literal. O livro *Os Pioneiros* foi lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (tostao-e-guarany, tostao, guarany, cruzeiro-tostao-e-guarany, cruzeiro-e-tostao, circo-teatro-tostao, circo-rouxinois-do-brasil, frank-e-martin, ligia-mourao) e por `discografia.csv` e `faixas.csv`. Os números de linha valem para o arquivo depois das correções desta revisão (nenhuma linha foi acrescentada nem tirada).

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O Bash foi negado nesta sessão, então o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. Conferi os identificadores à mão contra `dados/lista-mestra.csv` e `verbetes/`.

Os dois comandos precisam rodar e passar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA em três trechos: l. 29 (shows de lançamento nos circos), l. 43 ("se apresentou") e l. 47 ("convidados previstos"). O resto confere com as fichas e com as matérias. A discografia confere com `discografia.csv` e `faixas.csv`, incluindo autores das faixas do compacto e do single |
| 2 | Link abre | OK. As 2 notas com link abrem e levam à matéria citada. ce2011: "cristina medeiros", 22/07/2011, 11h35. ce2008: "Redação", 05/06/2008, 09h44. O título de ce2011 na nota foi ajustado ao título publicado (ver Corrigido direto) |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A mais próxima é "a convite da apresentadora Inezita Barroso" (l. 45), cinco palavras iguais a ce2011. As fichas do livro já são paráfrase |
| 4 | Dados pessoais | OK. Ano e cidade de nascimento dos dois integrantes vêm do cabeçalho da discografia do livro. A "família" de Tostão nos circos e o pai que pagou o material ficaram fora, de propósito, segundo o dossiê. O endereço citado em ce2008 é o da praça, que é lugar público, e também ficou fora. Nenhuma frase removida |
| 5 | Tom | OK. "Vitrine nacional" (l. 45) vem atribuído a Guarany (ce2011: "este programa é uma vitrine nacional"). A afirmação de pioneirismo do ônibus (l. 35) vem atribuída a Tostão, com ressalva. A fonte de 2011 chama a dupla de "uma das duplas mais representativas", e o verbete não repete isso |
| 6 | Divergências | OK, com ATENÇÃO. Aparecem: formação (fim de 1982 x 1983), 27 x 25 anos, "Já Decidi Que Te Amo", Marcelo x Marcel Mello, Guarany x Guarani, separação em 1992 ou 1993. A divergência do dossiê "disco seguinte com Marcelo Mello x produção de Oscar Martins em *Luzes do Além*" não está na seção de divergências. As duas informações estão no texto (l. 29 e l. 52), mas sem ligação entre elas (ver ATENÇÕES) |
| 7 | Ficha | OK. Fundação: pioneiros e ce2011, com as duas versões. Integrantes: pioneiros (cabeçalho da discografia). Gênero: ce2011 ("música sertaneja") e ce2008. Nenhum valor só numérico sem aspas |
| 8 | Força da fonte | OK. Livro de pesquisa e duas matérias do *Correio do Estado*. Não é fonte única |
| 9 | Ligações | OK depois da correção. Todos os identificadores em `[[...]]` existem na lista-mestra ou em `verbetes/`. A identidade de `guarany` está conferida (ver abaixo). Faltavam "Brasão" (l. 21) e "Celsinho" (l. 23), corrigidos |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 210 caracteres. A nota `[^pioneiros]` não listava três seções usadas, corrigido |

### Identidade de `guarany` (dúvida do ligador)

Conferido: o link não altera o sentido. A linha `guarany` da lista-mestra é "Guarany (Cherinho)", nome civil Evânio Vargas Padilha, nascido em 1965 em Campo Grande. É o parceiro da dupla desde 1982, o mesmo das fichas `guarany` e `tostao-e-guarany` (seção "A União de Tostão & Guarany": "Tostão e Guarany (Evânio)"). As seis menções ligadas a `[[guarany|Guarany]]` (l. 15, 23, 27, 39, 45 e 53) falam todas de Evânio. O primeiro Guarany, Orlei, do trio Cruzeiro, Tostão e Guarany, aparece em separado e ligado a `[[orlei|Orlei]]` na l. 21. Isso confere com as fichas `cruzeiro-tostao-e-guarany` ("Orlei (primeiro Guarany)") e `cruzeiro-tostao-e-centavo`. Os outros links do ligador também não mudam o sentido. `[[tostao-e-mano-cesar|Mano César]]` e `[[frank-e-martin|Frank e Martin]]` apontam para as duplas, o que confere com a ficha `guarany` e com a lista-mestra.

## PROBLEMAs

- **l. 29, shows de lançamento.** Trecho: "Os shows de lançamento incluíram o [[circo-do-goiabinha|Circo do Goiabinha]] e um primeiro fim de semana no [[circo-do-carlao|Circo do Carlão]]." Nenhuma ficha do livro traz isso. O Circo do Goiabinha não aparece em ficha alguma. O Circo do Carlão aparece só na ficha `cruzeiro-e-tostao` ("O primeiro show foi no Circo do Carlão", seção "O Nome Cruzeiro & Tostão"), como primeiro show da **dupla anterior**, Cruzeiro e Tostão. Os dois fatos só estão nas observações da lista-mestra ("Circo onde Tostão e Guarany fizeram shows na época do compacto"; "onde Tostão e Guarany se apresentaram no primeiro fim de semana"), e a lista-mestra não é fonte. Nem ela fala em "lançamento". Para o redator: conferir no livro (seções "O Compacto" e "O Nome Cruzeiro & Tostão") e reescrever só com o que a fonte diz, ou tirar a frase.
- **l. 43, "se apresentou".** Trecho: "Em 5 de junho de 2008, a dupla se apresentou no 5º Sarau da Praça dos Imigrantes". ce2008 é do próprio dia 5 de junho, às 9h44, e só anuncia: "Tostão e Guarany fazem show hoje", "a partir das 19h30min". A matéria não confirma que o show aconteceu. Para o redator: algo como "estava programada para se apresentar" ou "a imprensa anunciou show da dupla".
- **l. 47, convidados do DVD.** Trecho: "Os convidados previstos eram [[aurelio-miranda|Aurélio Miranda]], [...] A fonte só anuncia o lançamento." ce2011 usa o passado para a participação: o DVD "contou com a participação de amigos de longa data, como Aurélio Miranda, Lígia Mourão, Délia (da dupla com Delinho), Grupo Tradição e o Grupo Seis é D+". O que a matéria anuncia é só o lançamento ("Até o final do ano, Tostão e Guarany pretendem fazer em Campo Grande o lançamento oficial do DVD"). "Previstos" inverte o que a fonte diz. Para o redator: dizer que o DVD teve a participação desses nomes e que o lançamento estava previsto.

## ATENÇÕES

- **Título do DVD (l. 47).** ce2011 escreve: intitulado do "Caipira ao digital". As aspas cobrem "Caipira ao digital", mas o "do" pode ser parte do título (*Do caipira ao digital*). O verbete e a lista-mestra (`caipira-ao-digital`) seguem as aspas. Fica registrado. Uma segunda fonte resolveria.
- **Marcelo Mello x Oscar Martins.** O dossiê registra que a parte narrativa do livro diz que o disco seguinte ao compacto foi feito "com Marcelo Mello", mas a discografia dá a produção do LP *Luzes do Além* a Oscar Martins. O verbete traz as duas coisas (l. 29 e l. 52), mas não as aponta como divergência na seção própria (l. 61 a 63). Não chega a esconder a divergência. Sugestão ao redator: acrescentar um item à seção de divergências.
- **Circo da dupla.** A ficha `cruzeiro-e-tostao` registra divergência: Aurélio situa o circo depois de *Menina Rica*, no tempo de Cruzeiro e Tostão. Tostão liga o Circo Teatro Tostão à dupla com Guarany. Este verbete (l. 33) segue a versão de Tostão, que é a da ficha `tostao-e-guarany`. O dossiê não registrou a divergência. Vale citar no verbete de Aurélio ou do circo.
- **"Lígia Mourão" (l. 23).** A ficha `guarany` diz só "Cantou com a Lígia". O sobrenome vem da leitura do pesquisador (dossiê: "Lígia (Mourão)"). Faz sentido, porque os dois estiveram no projeto Seriema em 1982 (ficha `ligia-mourao`; lista-mestra `guarany`), mas a ficha não fecha a identidade.
- **"Celsinho" (l. 23).** Liguei a `cherinho-e-celsinho` com base na lista-mestra: Guarany é Cherinho, e essa foi a dupla dele com Celsinho. A ficha `guarany` só diz "com Celsinho". Se o Helton preferir não ligar sem confirmação no livro, basta tirar o link.
- **`grupo-tradicao` (l. 47).** A própria lista-mestra diz que a identidade do grupo não está confirmada ("talvez grupo gaúcho"). O link pode levar a um homônimo.
- **"Frank e Martin" (l. 39).** A ficha `guarany` diz "formou dupla com Frank e gravou disco". O nome "Frank e Martin" vem da lista-mestra (seção "Campanha Política") e da ficha do LP *Fica Comigo* (1994), cuja ligação com a seção o livro não explica. É provável que seja a mesma dupla, mas a ficha não o diz com todas as letras.
- **Pistas do Campo Grande News.** As matérias de 2013 (30 anos) e de 2023 (homenagem na Câmara) não abriram (403) e ficaram fora, corretamente.
- **Wikipédia.** Não foi conferida. A coluna `wikipedia_pt` está vazia.

## Corrigido direto

- **l. 21:** "cantou em dupla com Brasão" passou a "cantou em dupla com [[brasao-e-tostao|Brasão]]". A linha `brasao-e-tostao` existe na lista-mestra.
- **l. 23:** "e com Celsinho" passou a "e com [[cherinho-e-celsinho|Celsinho]]". A linha existe na lista-mestra (ver ATENÇÕES).
- **l. 65, nota `[^pioneiros]`:** acrescentadas as seções "O Encontro de Aurélio e Adir", "Os Campeões do Festão" e "O Final Prematuro do Trio". Elas sustentam as l. 21 e 23 (fichas `tostao`, `guarany` e `cruzeiro-tostao-e-guarany`) e não estavam listadas.
- **l. 66, nota `[^ce2011]`:** o título passou de "Tostão e Guarany estarão no programa Viola, minha Viola" ao título publicado, "Tostão e Guarany estarão no pograma 'Viola, minha Viola'". O erro "pograma" é da página.

Nenhuma frase foi removida. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- pioneiros: Rodrigo Teixeira, *Os Pioneiros*, 2009, pelas fichas listadas acima e por `discografia.csv` e `faixas.csv`. Sustenta a última dupla estudada, nomes civis, anos e cidades de nascimento, Tostão antes de Aurélio, as formações anteriores (com Orlei como primeiro Guarany), Brasão, o Festão de 1979 da plateia, Lígia e Celsinho, acordeon e violão, o fim de 1982 e a inversão das vozes, compacto duplo e disco com Marcelo Mello e músicos, os dois circos e o Circo Teatro Tostão nos bairros, dramas de circo, ônibus em 1986 e a afirmação de Tostão, a separação em 1992 ou 1993, Mano César, a dupla com Frank, a volta em 1995 e a discografia de 1984, 1985 e 1995. **Não sustenta** a segunda frase da l. 29.
- ce2011: Cristina Medeiros, *Correio do Estado*, 22/07/2011. Sustenta a formação em 1983, 27 anos de carreira, ao menos 10 anos no programa a convite de Inezita Barroso, TV Cultura, 24 de julho com reprise no dia 30, "vitrine nacional", o repertório (Guarany, Aurélio Miranda, pot-pourri do Trio Parada Dura, Goiá), o DVD de 25 anos e os participantes, o lançamento previsto até o fim do ano em Campo Grande, *Luzes do além* (1985), o single (1995), *Recordações* (2000) e o ao vivo (2008). **Não sustenta** "convidados previstos" (l. 47).
- ce2008: Redação, *Correio do Estado*, 05/06/2008. Sustenta o 5º Sarau, o show "hoje" às 19h30, entrada franca, Fundac, "junta há 25 anos" e o CD/DVD ao vivo em preparação. **Não sustenta** que o show aconteceu (l. 43).

**Pronto para pull request: não.** Há três PROBLEMAs (l. 29, 43 e 47), todos de redação contra a fonte e de correção simples, e `npm run conferir` e `npm run build` não rodaram nesta sessão.
