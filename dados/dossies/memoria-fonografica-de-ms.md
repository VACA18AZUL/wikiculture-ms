# Dossiê: memoria-fonografica-de-ms

Arquivo de passagem entre o pesquisador-fontes e o redator-verbete. Cada fato traz a fonte de onde saiu. O que não está aqui não entra no verbete.

## Atenção: sobreposição com outra linha da lista-mestra

A lista-mestra tem duas linhas para o mesmo tema. O Helton decide se são duplicadas.

| Linha | id | Tipo | Situação | Fontes de origem |
|---|---|---|---|---|
| 466 | `memoria-fonografica-de-ms` (este dossiê) | obra | a-pesquisar | Correio do Estado (2011); Campo Grande News (2014) |
| 87 | `projeto-memoria-fonografica-de-ms` | espaco | em-lote | canal do YouTube; Correio do Estado (2011); Campo Grande News (2014) |

O que conferi no repositório, nesta branch:

- Não há `verbetes/memoria-fonografica-de-ms.md` nem `verbetes/projeto-memoria-fonografica-de-ms.md`. A pasta `verbetes/` tem 11 arquivos, nenhum deles sobre este tema.
- Não há dossiê de `projeto-memoria-fonografica-de-ms` em `dados/dossies/`. Este é o primeiro dossiê do tema. A linha 87 diz "em-lote" e cita lotes fase2/fase3 de outra sessão; esses lotes não estão visíveis nesta branch. Se `projeto-memoria-fonografica-de-ms` já tem verbete lá, este dossiê não deve virar um segundo verbete.
- `dados/relacoes.csv` (linhas 233 e 234) e o dossiê `dados/dossies/mis-ms.md` usam o id `memoria-fonografica-de-ms`. Nenhuma relação usa o id com prefixo `projeto-`.
- As duas linhas se apoiam nas mesmas duas matérias (ce2011 e cgn2014) e descrevem o mesmo projeto de Carlos Luz. A linha 87 acrescenta o canal do YouTube como fonte; ele traz o acervo digital do projeto, e o canal consta em `src/lib/links.mjs`. A linha 87 chama o conjunto de "espaco"; a 466, de "obra".
- Não sei se a linha 87 trata o canal como entidade à parte. Isso fica para o Helton. As fontes que li não distinguem "projeto", "acervo" e "canal".

## Identificação

- Nome: "Memória Fonográfica de MS" [ce2011] [cgn2014]; "Memória Fonográfica MS" [cgn2021] [cgn2024]. A lista-mestra registra o canal como "Acervo Digital Memória Fonográfica de MS" (nome visto na página do canal; ver "Fontes descartadas").
- Tipo: projeto de pesquisa e acervo fonográfico (a lista-mestra usa `obra`; a outra linha usa `espaco`). Decisão de tipo fica com o Helton.
- Áreas: musica
- Cidade: não dita expressamente como sede do projeto em nenhuma fonte. As exposições e o museu que o recebe ficam em Campo Grande [cgn2014] [ce2011]. A lista-mestra diz Campo Grande.
- Linha na lista-mestra: sim (`memoria-fonografica-de-ms`; ver sobreposição acima)

## Fontes abertas

| id da nota | Referência completa | URL | Tipo | Entra? |
|---|---|---|---|---|
| ce2011 | Redação, "Museu da Imagem e Som reinaugura hoje", Correio do Estado (Correio B), 03/05/2011 | https://correiodoestado.com.br/correio-b/museu-da-imagem-e-som-reinaugura-hoje/109346/ | imprensa | sim |
| cgn2014 | Renan Nucci, "Exposição traz resgate da música sul-mato-grossense na Capital", Campo Grande News (Lado B), 07/09/2014 | https://www.campograndenews.com.br/lado-b/diversao/exposicao-traz-resgate-da-musica-sul-mato-grossense-na-capital | imprensa | sim |
| cgn2021 | Raul Delvizio, "Coleção de Carlos recorda música de MS em 600 discos 'perdidos'", Campo Grande News (Lado B, Artes), 26/02/2021 | https://www.campograndenews.com.br/lado-b/artes-23-08-2011-08/colecao-de-carlos-recorda-musica-de-ms-em-600-discos-perdidos | imprensa | sim |
| cgn2024 | Jéssica Fernandes, "Maluco por discos de vinil, Carlos tem acervo com mais de 700 cópias", Campo Grande News (Lado B, Comportamento), 23/02/2024 | https://www.campograndenews.com.br/lado-b/comportamento-23-08-2011-08/maluco-por-discos-de-vinil-carlos-tem-acervo-com-mais-de-700-copias | imprensa | sim |

Observação sobre a leitura: as quatro páginas foram abertas pela ferramenta de busca de páginas, que devolve resumo e não o texto bruto. Para os números, datas, nomes e a relação com o MIS, pedi também a reprodução literal das frases e conferi cada item contra elas. O restante (destaques do acervo, artistas citados, nomes de álbuns) vem do resumo e merece conferência do redator ou do Helton antes de virar frase de verbete.

Independência: ce2011 é do Correio do Estado; cgn2014, cgn2021 e cgn2024 são do Campo Grande News, com autores diferentes. Nas matérias de 2021 e 2024 a informação vem de entrevista com o próprio Carlos Luz; todas as fontes dependem em boa parte de quem toca o projeto. Não achei fonte acadêmica nem cadastro (ver abaixo). O verbete teria duas empresas de imprensa, mas nenhuma fonte institucional ou acadêmica. Registrar essa limitação.

Fontes descartadas e o motivo:

- Canal do YouTube "Acervo Digital Memória Fonográfica de MS" (youtube.com/@memoriafonograficadems, e a aba `/about`): as duas páginas abertas devolveram só cabeçalho e rodapé, com o nome do canal. Sem descrição, sem número de vídeos, sem criadores. Não serve como fonte. Os dados sobre o canal que estão na linha 87 da lista-mestra (mais de 14 mil músicas, 1.097 playlists, descrição citando só Idemar Sprandel) não foram confirmados por mim. O canal está na lista de canais de acervo aceitos do repositório, para links de escuta e vídeo.
- Tese de Alan (repositório da UFMS, `TESE_ALAN_OK.pdf`): endereço recusou conexão; não foi lida. Não há evidência de que cite o projeto.
- Artigo da revista Trilhas da História (UFMS) e texto dos anais da UEMS (sedia 5599): os PDFs vieram comprimidos e ilegíveis na ferramenta; não pude verificar se mencionam o projeto. Fora.
- Artigo em periodicos.franca.unesp.br (História e Cultura): página de verificação de segurança, sem texto. Fora.
- Busca por "Idemar/Ismael Sprandel" e por "Kit de Difusão Musical": nenhuma página tratou do nome ou do kit além da matéria ce2011. Os resultados acadêmicos listados eram sobre outros temas (fonografia em outros estados).
- Repositórios acadêmicos (UFMS, UFGD, BDTD), Itaú Cultural, Mapas da Cultura: não consultados diretamente além das buscas abertas acima; nada encontrado sobre o projeto. Uma busca no repositório da UFMS por "Carlos Luz" pode render fonte acadêmica.
- Outras matérias do Campo Grande News que apareceram na busca ("Com 400 vinis de MS, Plínio tem o sonho de ver acervo transformado em museu", páginas de listagem): tratam de outro colecionador ou são listagens; não abertas.

## Fatos, com fonte

### Trajetória

- A Memória Fonográfica de MS é descrita em 2011 como projeto de Carlos Luz e de um segundo pesquisador, com sobrenome Sprandel; a matéria grafa o prenome como "Ismael" na abertura e "Idemar" na seção da exposição (ver Divergências). Os dois são apresentados como criadores do Kit de Difusão Musical da Fundação de Cultura de MS (FCMS). [ce2011]
- Em 2011, a dupla mantinha havia dez anos um acervo de LPs e CDs de todas as vertentes musicais de MS, com 30 mil músicas catalogadas, de obras dos anos 1950 até a época da matéria. [ce2011]
- Em 2011, a trilha sonora da exposição audiovisual "Os Pioneiros – A Origem da Música Sertaneja de Mato Grosso do Sul", na reinauguração do MIS em 03/05/2011, vinha do projeto. [ce2011]
- Em 2014, a matéria atribui a ideia do projeto apenas a Carlos Luz e diz que a exposição "Memória Fonográfica" partiu do acervo que o projeto doou ao MIS; o projeto foi financiado pelo Fundo de Investimentos Culturais (FIC) da FCMS. [cgn2014]
- Em 2021, Carlos Luz diz ter começado a preservar no início dos anos 2000 e ter passado cerca de 20 anos na busca. A matéria afirma que o acervo, em vez de ficar em casa, foi compartilhado com o MIS e que o restante da coleção está lá; em casa ele mostrou cerca de 10% do total. [cgn2021]
- Em 2021, o projeto aparece como trabalho de preservação e digitalização da produção musical de MS. O processo descrito é manual: localizar o disco, digitalizar capa, contracapa, encarte e faixas e preencher à mão título e compositores; a captura é feita com acompanhamento de museólogos. [cgn2021]
- Em 2021, Carlos Luz diz que pode levar mais 10 a 15 anos para resgatar o que ainda está perdido; há discos cuja existência ele conhece e que ainda não achou. [cgn2021]
- Em 2024, a finalidade declarada é catalogar e preservar a produção artística de quem nasceu, morou ou viveu em MS e contribuiu com a cultura do estado, de 1950 até hoje; o objetivo da pesquisa, segundo ele, é alimentar o MIS. [cgn2024]
- Em 2024, o projeto abrange sertanejo, samba, axé, forró, rap, reggae, erudito, blues, rock, pop, jazz e gospel. [cgn2024]
- Em 2024, Carlos Luz diz que começou em 2000, ao digitalizar e montar o catálogo de uma gravadora, o que o levou a pesquisar músicos de MS; fez viagens a São Paulo para visitar sebos, livrarias e lojas de discos antigos. Ele diz se considerar pesquisador, não colecionador. [cgn2024]
- Em 2024, a matéria diz, segundo Carlos Luz, que as gravadoras que distribuíam vinis para o país ficavam só em São Paulo e no Rio e que músicos regionais lançavam, no máximo, 500 cópias por disco, o que dificulta achar exemplares em bom estado. [cgn2024]
- A matéria de 2024 informa que o projeto aceita contato de quem tiver vinis, CDs ou fitas de artistas sul-mato-grossenses, para avaliação e possível compra. O telefone consta na matéria e fica fora do dossiê. [cgn2024]

Sobre Carlos Luz (para o verbete dele, se houver; ver proposta de nomes):

- Natural de Presidente Bernardes (SP); representante comercial; foi professor de cursinho de inglês. [cgn2021]
- Em São Paulo, trabalhou com catalogação em gravadoras de vídeo; em MS, trabalhou nas gravadoras Sapucay (2021) / Sapucay Discos (2024) e Pantanal, onde conheceu artistas e colecionadores. [cgn2021] [cgn2024]
- Segundo a matéria de 2024, nessa época trios, duplas e grupos levavam ao representante comercial discos de vinil gravados no início da carreira, embora os CDs estivessem em alta. [cgn2024]
- Idade e dados da casa e da família ficam fora.

### Obras, produções, publicações

Itens citados como parte do acervo. Cada item tem a nota da matéria que o cita; ano e ficha técnica não vêm do link de escuta.

- Álbum mais antigo da coleção de Carlos Luz: *Os melhores da música matogrossense* (1953), com sete artistas de Dourados. [cgn2021]
- LP de Franquito, cantor de Aquidauana, nascido em 1947 (segundo a matéria de 2021); gravando desde 1959 (segundo a de 2024); músicas citadas: "Adelita", "Donde Estará Mi Vida" e "Ella". A trilha do filme *Meu Destino em Suas Mãos*, protagonizado por ele, também está no acervo. [cgn2021] [cgn2024]
- Discos de Délio e Delinha: discografia completa segundo 2021, com início das gravações em 1959; 22 discos segundo 2024, com os álbuns *Sorria meu amor* e *Defendendo o que é nosso*. [cgn2021] [cgn2024]
- Primeiro álbum de Linda Morena (capa fotografada no paliteiro da UFMS). [cgn2021]
- Disco de Herminio Gimenez com polca paraguaia, com o Conjunto Ponta Porã. [cgn2021]
- LP com gravação ao vivo (1975, teatro do Rio de Janeiro) de Glauce Rocha em monólogo de *O belo indiferente*, de Jean Cocteau. [cgn2021]
- *Parada Sertaneja* (a legenda de uma foto diz "Parada Pantaneira"), de Rodrigues e Rodriguinho e Beth e Betinha, com José Bétio, músico que tinha programa de rádio; Carlos Luz levou 24 anos para achar o disco e o localizou no mês anterior à matéria. [cgn2024]
- Disco de Almir Sater com autógrafo no verso da capa. [cgn2024]
- Artistas citados nas matérias sem detalhe de obra: Geraldo Roca, Tetê Espíndola, Grupo Acaba, Dino Rocha, Dozinho Borges, Maciel Corrêa, Canto da Terra, Lírio Selvagem (legenda de foto), Geraldo Espíndola (autor de "Cunhataiporã"), Jandira e Benites, Tostão e Guarani (também "Guarany"), Romance e Romarinho, Castelo e Mansão, Jads e Jadson, Paulo Simões, Amambai (também "Amambaí"), Zé Corrêa. [cgn2021] [cgn2024] Estar na lista não prova que o disco esteja no acervo; a matéria os cita como artistas lembrados.

### Exposições, apresentações, prêmios

- 03/05/2011: o projeto fornece a trilha sonora de "Os Pioneiros" na reinauguração do MIS (Correio do Estado, 03/05/2011). [ce2011]
- Exposição "Memória Fonográfica", no MIS, aberta em 08/09/2014, às 19h, até 30/09/2014, de segunda a sexta, das 7h30 às 17h30. Promovida pela FCMS por meio do MIS; mostra discos gravados a partir da década de 1960, com apresentações sobre os artistas, capas, apresentações multimídia, totens de escuta com partes do acervo digitalizado e trechos de "Os Pioneiros". [cgn2014]
- O diretor-presidente da FCMS, Américo Calheiros, disse que a mostra ajuda a resgatar a história da música de MS. [cgn2014]
- Em 2014 o projeto é financiado pelo FIC da FCMS. Não há prêmio registrado. [cgn2014]

### Ficha (caixa lateral)

- Nome: Memória Fonográfica de MS [ce2011] [cgn2014]
- Responsável: Carlos Luz [cgn2014] [cgn2021] [cgn2024]; com Sprandel (prenome em divergência) em 2011 [ce2011]
- Início: não confirmado. Carlos Luz fala em 2000 [cgn2024] e em início dos anos 2000 [cgn2021]; em 2011 a matéria diz "dez anos" [ce2011]
- Tipo de acervo: LPs, CDs e, em 2024, fitas cassete aceitas por doação ou compra [ce2011] [cgn2024]
- Recorte temporal: de 1950 em diante [ce2011] [cgn2024]; 1954 em diante [cgn2021]
- Financiamento: FIC da FCMS (2014) [cgn2014]
- Destino do acervo: MIS [cgn2014] [cgn2021] [cgn2024]
- Links: canal do YouTube `https://www.youtube.com/@memoriafonograficadems` (aberto em 30/10/2026: só cabeçalho; confirma o nome do canal, não o resto). Entra em `links` com essa ressalva, conforme o CLAUDE.md, se o redator confirmar o canal com `npm run links`.

## Ligações com outros nomes

| Identificador do outro nome | Tipo de relação | Fonte | Já tem verbete? | Já está na lista-mestra? |
|---|---|---|---|---|
| carlos-luz | criou (idealizador) | cgn2014, cgn2021, cgn2024, ce2011 | não | sim (já em relacoes.csv) |
| idemar-sprandel | criou (cocriador em 2011; prenome em divergência) | ce2011 | não | não (proposto) |
| mis-ms | acervo-em (acervo doado/compartilhado; exposição de 2014) | cgn2014, cgn2021, cgn2024 | não | sim (já em relacoes.csv) |
| fundacao-de-cultura-de-ms | relacionado-a (FIC da FCMS financiou; Kit de Difusão Musical; exposição de 2014) | cgn2014, ce2011 | sim | sim |
| kit-de-difusao-musical | relacionado-a (criado por Carlos Luz e Sprandel na FCMS) | ce2011 | não | não (proposto) |
| os-pioneiros-origem-da-musica-sertaneja-ms | relacionado-a (trilha sonora, 2011) | ce2011 | não | sim (ver duplicidade abaixo) |
| franquito | relacionado-a (disco no acervo) | cgn2021, cgn2024 | não | não (proposto) |
| delio-e-delinha | relacionado-a (discos no acervo) | cgn2021, cgn2024 | não | sim |
| almir-sater | relacionado-a (disco no acervo) | cgn2024 | sim | sim |
| conjunto-ponta-pora | relacionado-a (disco com Herminio Gimenez) | cgn2021 | não | sim |
| rodrigues-e-rodriguinho | relacionado-a (Parada Sertaneja) | cgn2024 | não | sim |
| glauce-rocha | relacionado-a (LP de 1975) | cgn2021 | não | sim |
| linda-morena | relacionado-a (primeiro álbum no acervo) | cgn2021 | não | não (proposto) |
| sapucay-discos | relacionado-a (Carlos Luz trabalhou na gravadora) | cgn2021, cgn2024 | não | não (proposto) |
| gravadora-pantanal | relacionado-a (idem) | cgn2021, cgn2024 | não | não (proposto) |
| jose-betio | relacionado-a (aparece em disco do acervo) | cgn2024 | não | não (proposto) |

Nomes citados nas fontes e não propostos: Américo Calheiros (presidente da FCMS em 2011 e 2014), Rodrigo Teixeira (já na lista-mestra, `rodrigo-teixeira`), José Mojica Marins (diretor ou produtor de *Meu Destino em Suas Mãos*; ligação com MS só por este filme), Jean Cocteau, Herminio Gimenez, os artistas citados sem detalhe (ver "Obras") e os fotógrafos e museólogos não nomeados.

Pontos de atenção para o garimpeiro: há dois ids para "Os Pioneiros" na lista-mestra (`os-pioneiros-origem-da-musica-sertaneja-de-ms`, linha 88, e `os-pioneiros-origem-da-musica-sertaneja-ms`, linha 468). Usei o segundo, que o dossiê do MIS adotou.

## Divergências entre fontes

- Criadores: Carlos Luz e "Ismael Sprandel" na abertura de ce2011 e Carlos Luz e "Idemar Sprandel" na seção da exposição, no mesmo texto [ce2011]; apenas Carlos Luz [cgn2014] [cgn2021] [cgn2024]. A lista-mestra (linha 87) diz que a descrição do canal cita só Idemar Sprandel, mas não consegui abrir o canal para conferir.
- Tamanho do catálogo: 30 mil músicas catalogadas (2011) [ce2011]; mais de 50 mil músicas catalogadas (2021) [cgn2021]; a linha 87 da lista-mestra cita "mais de 14 mil músicas no canal", não confirmado por mim. Os números medem coisas diferentes (catalogadas ou no canal) e em anos diferentes.
- Vinis e CDs: mais de 600 discos de vinil e acervo completo de CDs de raridades (2021) [cgn2021]; mais de 700 vinis e 2 mil CDs digitalizados (2024) [cgn2024].
- Início do trabalho: "dez anos" antes de 2011 [ce2011]; início dos anos 2000, "cerca de 20 anos" de busca em 2021 [cgn2021]; 2000 [cgn2024].
- Recorte do acervo: anos 1950 em diante [ce2011]; a partir da década de 60, na exposição de 2014 [cgn2014]; 1954 até hoje, na linha fina de 2021 [cgn2021], com o álbum mais antigo de 1953 [cgn2021]; desde 1950 [cgn2024].
- Relação com o MIS: em 2011 o projeto aparece como autor da trilha sonora e a matéria não diz que o acervo pertence ao museu [ce2011]; em 2014, o acervo foi doado ao MIS [cgn2014]; em 2021, foi compartilhado e o resto da coleção está no MIS [cgn2021]; em 2024, o objetivo é alimentar o MIS [cgn2024]. O que está no MIS e o que está com Carlos Luz muda de matéria para matéria.
- Escopo musical: "todas as vertentes musicais" [ce2011] (o dossiê `mis-ms.md` afirma que essa matéria não diz "todas as vertentes"; reli o trecho e a frase está lá. Registro para o Helton corrigir o dossiê do MIS); lista de gêneros em 2024 [cgn2024].
- Financiamento: FIC da FCMS [cgn2014]; ce2011 cita o FIC só para a exposição "Os Pioneiros" e o livro de Rodrigo Teixeira, não para a Memória Fonográfica; cgn2021 e cgn2024 não falam de financiamento.
- Nome: "Memória Fonográfica de MS" [ce2011] [cgn2014]; "Memória Fonográfica MS" [cgn2021] [cgn2024]; canal "Acervo Digital Memória Fonográfica de MS".
- Filme de Franquito: *Meu destino em suas mãos* dirigido por José Mojica Marins [cgn2021]; produzido por "Zé do Caixão" [cgn2024]. Ambas as fontes se referem à mesma pessoa, com funções diferentes.
- Franquito: nascido em 1947 em Aquidauana [cgn2021]; gravava desde 1959 [cgn2024]. Não divergem, mas são datas de fatos diferentes.
- Disco *Parada Sertaneja* / "Parada Pantaneira" [cgn2024], na mesma matéria. Grafias de artistas: Tostão e Guarani/Guarany, Amambai/Amambaí, Romance e Romarinho [cgn2024] (a lista-mestra traz "Romerinho").
- Gravadora: "Sapucay" [cgn2021] e "Sapucay Discos" [cgn2024]; "Pantanal" sem outros dados [cgn2021] [cgn2024].

## Não confirmado

Pistas que apareceram sem fonte aberta e lida. Não entram no verbete.

- Descrição do canal do YouTube, número de vídeos e de playlists, "14 mil músicas", "1.097 playlists" e a menção só a Idemar Sprandel (tudo da linha 87 da lista-mestra; canal não abriu).
- Quem é Idemar (ou Ismael) Sprandel: nenhuma fonte além de ce2011 o cita.
- Quando e como o canal do YouTube nasceu, e quem o mantém.
- Quanto do acervo está de fato no MIS, em que forma (doação, comodato, cópia digital) e se há catálogo consultável. O dossiê do MIS já lista a mesma dúvida.
- Cidade de residência de Carlos Luz: as fontes não dizem (a matéria de 2024 foi feita na casa dele, sem cidade).
- Vínculo com a Sapucay e a Pantanal: períodos e funções exatos; só "trabalhou" e "representante comercial" nas matérias.
- Qualquer fonte acadêmica que trate do projeto: não achei. Uma busca por "Carlos Luz" nos repositórios da UFMS e da UFGD ficou fora do alcance desta rodada.
- Qual o ano de criação do Kit de Difusão Musical e se ele é um programa ou um produto da FCMS.

## Uso no verbete

Preenchido pelo redator depois de escrever: o que entrou, o que ficou de fora e por quê.

-
