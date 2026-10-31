# Revisão: tostao-e-guarany

Verbete: `verbetes/tostao-e-guarany.md`, segunda revisão, depois da devolução e da reescrita. Revisor editorial, 31 out. 2026. As duas matérias do *Correio do Estado* foram reabertas nesta sessão com WebFetch. A ferramenta devolve extração feita por modelo, não o texto bruto. O livro *Os Pioneiros* foi lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (tostao-e-guarany, tostao, guarany, cruzeiro-tostao-e-guarany, cruzeiro-tostao-e-centavo, circo-teatro-tostao, circo-rouxinois-do-brasil, frank-e-martin) e por `discografia.csv` e `faixas.csv`. Os números de linha valem para o arquivo depois das correções desta revisão. Uma linha em branco foi acrescentada antes de "### Circos, ônibus e campanhas", e daí em diante as linhas descem uma posição em relação à versão do redator.

## Os PROBLEMAs da revisão anterior

| PROBLEMA anterior | Situação |
|---|---|
| Shows de lançamento no Circo do Goiabinha e no Circo do Carlão, sem apoio nas fichas | **Resolvido.** A frase saiu. O parágrafo (l. 29) traz só o compacto duplo e o disco com Marcelo Mello e os músicos, o que confere com a ficha `tostao-e-guarany` (seção "O Compacto") |
| "a dupla se apresentou" em 5 jun. 2008, quando a matéria só anuncia | **Resolvido.** A l. 43 diz que o *Correio do Estado* "anunciou show da dupla", o que confere com ce2008 ("fazem show hoje", 9h44) |
| "Os convidados previstos eram..." para o DVD, quando a matéria usa o passado | **Resolvido.** A l. 47 diz "o DVD contou com a participação de", e só o lançamento aparece como previsto. Confere com ce2011 |
| ATENÇÃO anterior: Marcelo Mello x Oscar Martins fora da seção de divergências | **Resolvido.** Item novo "Disco após o compacto" (l. 63) |

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O Bash foi negado para `npm` nesta sessão.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: rodou. Aponta menções sem link nas l. 15, 21, 33, 45 e 51. Nenhuma pede correção. A l. 15 é o nome em negrito do próprio verbete. As l. 33, 45 e 51 repetem nomes já ligados no mesmo parágrafo ou item. Na l. 21, "o primeiro Guarany foi Orlei" fala de **Orlei** e **não** pode ser ligado a `guarany`, que é Evânio.

Os dois comandos precisam rodar e passar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada parágrafo confere com as fichas e com as matérias. Antes da dupla: fichas `tostao`, `guarany`, `cruzeiro-tostao-e-guarany`. Formação: ficha `tostao-e-guarany`, ce2011 (1983, 27 anos, DVD de 25 anos) e ce2008 (25 anos). Compacto e disco: ficha `tostao-e-guarany`. Circos: fichas `tostao`, `circo-teatro-tostao` e `circo-rouxinois-do-brasil`. Ônibus de 1986, separação e volta: ficha `tostao-e-guarany`. 2008: ce2008. 2011: ce2011. Discografia: `discografia.csv` e `faixas.csv` (gravadoras, créditos, faixas e autores), mais ce2011 para *Luzes do Além*, *Recordações* e o ao vivo |
| 2 | Link abre | OK. ce2011 (Cristina Medeiros, 22/07/2011, 11h35, título publicado com "pograma") e ce2008 ("Redação", 05/06/2008, 09h44) abrem e levam às matérias citadas |
| 3 | Sem cópia | OK, com a ressalva do método (WebFetch não devolve o texto bruto). Nos trechos literais obtidos não há sequência de mais de oito palavras iguais. As fichas do livro já são paráfrase |
| 4 | Dados pessoais | OK. Do nascimento dos integrantes, o verbete dá só ano e cidade, tirados do cabeçalho da discografia do livro. A família de Tostão nos circos, o pai que pagou o material, o tio Chero e o endereço da praça ficaram fora. Nenhuma frase removida |
| 5 | Tom | OK. "Vitrine nacional" vem atribuído a Guarany. O pioneirismo do ônibus vem atribuído a Tostão, com ressalva. O "uma das duplas mais representativas" de ce2011 não foi repetido. Sem promoção: os eventos de 2008 e 2011 aparecem como anunciados |
| 6 | Divergências | OK. Formação (fim de 1982 x 1983), 27 x 25 anos, "Já Decidi Que Te Amo", Marcelo x Marcel Mello, disco seguinte com Marcelo Mello x Oscar Martins, Guarany x Guarani e separação em 1992 ou 1993: todas as divergências do dossiê aparecem |
| 7 | Ficha | OK. Fundação: pioneiros e ce2011, com as duas versões. Integrantes: pioneiros (cabeçalho da discografia). Gênero: ce2011 e ce2008 ("dupla sertaneja"). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa e duas matérias do *Correio do Estado*. Não é fonte única |
| 9 | Ligações | OK depois da correção. Todos os identificadores em `[[...]]` existem em `dados/lista-mestra.csv`. Faltava ligar "Cruzeiro" e "Centavo" na l. 51, corrigido. As identidades de `guarany` (Evânio) e `orlei` (primeiro Guarany) continuam certas |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com 210 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Resumo (l. 6).** "Segundo o livro Os Pioneiros, começou no fim de 1982; gravou compacto (1984), LP (1985) e single (1995) e participou do programa Viola, minha Viola." O programa vem de ce2011, não do livro, mas a frase pode ser lida como se tudo viesse do livro. Sugestão ao redator: separar ("...single (1995). Participou do programa...").
- **"Frank e Martin" (l. 39).** "Guarany formou a dupla Frank e Martin e gravou um disco." A ficha `guarany` diz "formou dupla com Frank e gravou disco". O nome da dupla vem da lista-mestra (`frank-e-martin`, seção "Campanha Política": "Dupla de Guarany com Frank") e do LP *Fica Comigo* (1994), que a ficha `frank-e-martin` diz não ter ligação explicada no livro. A redação nova é mais afirmativa que a ficha. Se o Helton tiver o livro, vale conferir a seção "Campanha Política".
- **`cruzeiro` x `aurelio-miranda` (l. 51).** Liguei "Cruzeiro" a `cruzeiro`, que tem linha própria na lista-mestra. As fichas `cruzeiro-tostao-e-centavo` e `cruzeiro-tostao-e-guarany` dão Aurélio Miranda como integrante no lugar de Cruzeiro, então as duas linhas parecem ser a mesma pessoa. Fica para o garimpeiro unificar.
- **"Toca acordeon e violão" (l. 23).** A ficha `guarany` diz "Tocava". O presente vai um pouco além da ficha, mas sem mudar o fato.
- **Título do DVD (l. 47).** ce2011 escreve: intitulado do "Caipira ao digital". O "do" pode ser parte do título (*Do caipira ao digital*). O verbete e a lista-mestra seguem as aspas da matéria.
- **"Lígia Mourão" e "Celsinho" (l. 23).** A ficha `guarany` diz só "a Lígia" e "Celsinho". O sobrenome e o link para `cherinho-e-celsinho` vêm do dossiê e da lista-mestra, e a ficha não fecha as identidades.
- **`grupo-tradicao` (l. 47).** A lista-mestra diz que a identidade do grupo não está confirmada. O link pode levar a um homônimo.
- **Circo da dupla.** Segundo a revisão anterior, a ficha `cruzeiro-e-tostao` registra versão de Aurélio que põe o circo no tempo de Cruzeiro e Tostão. Este verbete segue a ficha `tostao-e-guarany`, e o dossiê não registra a divergência. Vale tratar no verbete do circo ou de Aurélio.
- **Pistas do Campo Grande News** (30 anos em 2013, homenagem na Câmara em 2023): não abriram (403) e ficaram fora, corretamente.
- **Wikipédia.** Não conferida. A coluna `wikipedia_pt` está vazia.

## Corrigido direto

- **l. 30:** acrescentada a linha em branco que faltava entre o fim do parágrafo do compacto e o título "### Circos, ônibus e campanhas".
- **l. 51:** "(Tostão, Cruzeiro e Centavo)" passou a "(Tostão, [[cruzeiro|Cruzeiro]] e [[centavo|Centavo]])". As duas linhas existem na lista-mestra. Centavo é João Silvestre da Silva, do trio (ficha `cruzeiro-tostao-e-centavo`).

Nenhuma frase foi removida. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- pioneiros: Rodrigo Teixeira, *Os Pioneiros*, 2009, pelas fichas listadas acima e por `discografia.csv` e `faixas.csv`. Sustenta a última dupla estudada, nomes civis, anos e cidades de nascimento, Tostão antes de Aurélio, as formações anteriores (com Orlei como primeiro Guarany), Brasão, o Festão de 1979 da plateia, Lígia e Celsinho, acordeon e violão, o fim de 1982 e a inversão das vozes, o compacto duplo e o disco com Marcelo Mello e os músicos, os dois circos e o Circo Teatro Tostão nos bairros, os dramas de circo, o ônibus de 1986 e a afirmação de Tostão, a separação em 1992 ou 1993, Mano César, a dupla com Frank, a volta em 1995 e a discografia de 1984, 1985 e 1995.
- ce2011: Cristina Medeiros, *Correio do Estado*, 22/07/2011. Sustenta a formação em 1983, 27 anos de carreira, ao menos 10 anos no programa a convite de Inezita Barroso, TV Cultura, 24 de julho com reprise no dia 30, "vitrine nacional", o repertório, o DVD de 25 anos com os participantes no passado ("participaram"), o lançamento previsto até o fim do ano em Campo Grande, *Luzes do além* (1985), o single (1995), *Recordações* (2000) e o ao vivo (2008).
- ce2008: Redação, *Correio do Estado*, 05/06/2008, 09h44. Sustenta o show anunciado para "hoje" às 19h30 no 5º Sarau da Praça dos Imigrantes, entrada franca, Fundac, "junta há 25 anos" e o CD/DVD ao vivo em preparação.

**Pronto para pull request: sim**, quanto ao conteúdo: os três PROBLEMAs anteriores foram resolvidos e não há PROBLEMA novo. Antes, `npm run conferir` e `npm run build` precisam rodar e passar, porque não rodaram nesta sessão.
