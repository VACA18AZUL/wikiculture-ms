# Revisão: aurelio-miranda

Verbete: `verbetes/aurelio-miranda.md`, primeira revisão, depois da passagem do ligador. Revisor editorial, 31 out. 2026. Fonte única: o livro *Os Pioneiros*, lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (aurelio-miranda, festao, cruzeiro-tostao-e-centavo, cruzeiro-tostao-e-guarany, cruzeiro-e-tostao, estrada-de-chao, fogo-humano, gravadora-california, tostao, guarany) e por `discografia.csv` e `faixas.csv`. O redator leu só a ficha `aurelio-miranda`. As outras fichas são do mesmo livro e das mesmas seções citadas na nota, e é nelas que aparecem os PROBLEMAs abaixo. Os números de linha valem para o arquivo depois das correções desta revisão (nenhuma linha foi acrescentada nem tirada).

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O Bash foi negado nesta sessão, então o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. Conferi os identificadores à mão contra `dados/lista-mestra.csv` e `verbetes/`.

Os dois comandos precisam rodar e passar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA. As l. 15 a 29 e 37 a 43 conferem com a ficha `aurelio-miranda`. A l. 33 (Festão) contradiz as fichas `festao`, `cruzeiro-tostao-e-centavo` e `cruzeiro-tostao-e-guarany`, das mesmas seções que a nota cita (ver PROBLEMAs) |
| 2 | Link abre | OK. A nota única cita fonte impressa e não tem link |
| 3 | Sem cópia | OK, com ressalva. O original do livro não está no repositório, só as fichas, que já são paráfrase. Várias frases seguem de perto a redação da ficha (por exemplo, l. 21: "Cantou em Rio Verde e, em Campo Grande, no Bar Cinelândia e na Boate Recanto das Corujas"), mas a ficha é texto do projeto, não da fonte |
| 4 | Dados pessoais | OK. Só data e local de nascimento, publicados no cabeçalho da discografia do livro. A hospedagem em hotel e a venda de livros (ficha) ficaram fora. Nenhuma frase removida |
| 5 | Tom | OK. "Clássico regional" (l. 37) vem atribuído ao livro. Sem adjetivo de elogio do redator nem primeira pessoa |
| 6 | Divergências | PROBLEMA. Aparecem: prêmio do Bolinha (1972 x c. 1978) e autoria de *Estrada de Chão*. Ficou escondida a versão de Tostão sobre o 1º Festão (o trio concorreu como trio, não Aurélio sozinho), registrada na ficha `festao` e na ficha `estrada-de-chao`. A versão sobre o circo da dupla também ficou de fora (ver ATENÇÕES) |
| 7 | Ficha | OK. Nascimento: pioneiros ("Discografia"). Atividade: pioneiros. Grupos: pioneiros (Cigano e Ciganinho era só ele, segundo o próprio depoimento, e o texto diz isso na l. 19). Nenhum valor só numérico sem aspas |
| 8 | Força da fonte | OK. Livro de pesquisa com incentivo público, fonte sólida. É fonte única (ver ATENÇÕES) |
| 9 | Ligações | OK depois da correção. Todos os identificadores em `[[...]]` existem na lista-mestra (radio-noroeste, cigano-e-ciganinho, bar-cinelandia, boate-recanto-das-corujas, terra-do-pantanal, show-6-tv-morena, tv-morena, tostao, radio-cultura-de-jales, delinha, cruzeiro-e-tostao, cruzeiro-tostao-e-centavo, chantecler, festao, estrada-de-chao, lavrador-rei-sem-coroa, onesimo-filho, tostao-e-guarany, guarany). `guarany` na l. 43 é Evânio Vargas Padilha (lista-mestra "Guarany (Cherinho)"), e a ficha `guarany` confirma que ele coproduziu *Raízes e Sentimentos*. Os links do ligador não mudaram o sentido de nenhuma frase. Faltava ligar "Califórnia" (l. 27), corrigido |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 208 caracteres |

## PROBLEMAs

- **l. 33, vencedor do 1º Festão.** Trecho: "O livro aponta Aurélio como vencedor do 1º [[festao|Festão]] (1979), com [[estrada-de-chao|*Estrada de Chão*]] e [[lavrador-rei-sem-coroa|*Lavrador Rei Sem Coroa*]]." O que o livro diz, pelas fichas: *Estrada de Chão* venceu e *Lavrador Rei Sem Coroa* ficou em **segundo** lugar (ficha `festao`, seção "Os Campeões do Festão"; ficha `cruzeiro-tostao-e-centavo`: "Ganhou o 1º Festão [...] com Estrada de Chão e o 2º lugar com Lavrador Rei Sem Coroa"). A frase põe as duas canções como vencedoras. Além disso, a ficha `festao` registra a divergência: "Onésimo atribui o 1º e o 2º lugares a Aurélio Miranda; Tostão diz que o trio se apresentou como trio, não como Aurélio solo". A ficha `estrada-de-chao` traz o mesmo: "Tostão diz que a inscrição foi feita em nome do trio e saiu com o nome de Aurélio". O verbete mostra só a versão que dá a vitória a Aurélio. Para o redator: separar 1º e 2º lugares e registrar a versão de Tostão, com a mesma nota.
- **l. 33, 2º Festão.** Trecho: "Segundo [[onesimo-filho|Onésimo Filho]], citado no livro, ele também ganhou o 2º Festão; nenhuma outra fonte lida confirma essa segunda vitória." O que o livro diz, pelas fichas: (a) a ficha `festao` lê a fala de Onésimo como atribuição do **1º e do 2º lugares** a Aurélio, não do 2º Festão. A ficha `aurelio-miranda` lê "2º Festão". As duas fichas do mesmo trecho discordam. (b) O livro dá o 2º Festão ao trio Cruzeiro, Tostão e Guarany, com Aurélio (Cruzeiro), Tostão e Orlei, com *Fogo Humano*, segundo Tostão (fichas `festao`, `cruzeiro-tostao-e-guarany` e `fogo-humano`, seções "Os Campeões do Festão" e "O Final Prematuro do Trio", as duas citadas na nota). Então "nenhuma outra fonte lida confirma" não vale para o próprio livro. Para o redator ou o atualizador: conferir no livro o que Onésimo disse e reescrever com as duas leituras e com a versão de Tostão sobre *Fogo Humano*.

## ATENÇÕES

- **Fonte única.** O verbete se apoia só em *Os Pioneiros*. É fonte sólida e basta pela regra, mas o dossiê pede uma segunda (imprensa ou Mapa Cultural). A matéria do *Correio do Estado* de 22/07/2011, usada em `tostao-e-guarany`, cita Aurélio como autor de "Estrada de chão" e como convidado do DVD da dupla. Fica para o atualizador.
- **l. 27, circo da dupla.** "A dupla [...] teve sucesso com *Menina Rica* e montou um circo." A ficha `cruzeiro-e-tostao` diz que essa é a versão de Aurélio ("Estouraram com Menina Rica, segundo Aurélio") e registra divergência: Tostão liga o circo (Circo Teatro Tostão) à dupla com Guarany. O verbete dá a versão de Aurélio como fato. O dossiê não registrou essa divergência. Por isso fica como ATENÇÃO, mas convém atribuir ("segundo Aurélio") ou pôr as duas versões.
- **l. 27, "gravação feita na Califórnia".** Antes da correção a frase podia ser lida como o estado norte-americano. A ficha `cruzeiro-e-tostao` e a ficha `gravadora-california` dizem que é a gravadora de Mário Vieira, em São Paulo (LP *Os Rouxinóis do Brasil*, 1978). O link resolve a ambiguidade. Se o redator quiser, pode escrever "pela gravadora Califórnia".
- **Resumo.** "integrou as duplas e o trio Cruzeiro, Tostão e Centavo" lê-se mal, porque não nomeia as duplas. Não é erro de fato.
- **`cidade: Cuiabá`.** Ele começou em Cuiabá, mas segundo o próprio verbete viveu e atuou em Campo Grande a partir de 1977. A lista-mestra também diz Cuiabá. Fica para o Helton decidir.
- **Trio Cruzeiro, Tostão e Guarany.** O verbete não cita essa formação (com Orlei), que o livro registra e que já tem linha na lista-mestra. Não é PROBLEMA, mas ajuda a resolver o PROBLEMA do 2º Festão.
- **Wikipédia.** Não foi conferida, nem pelo pesquisador nem nesta revisão. A coluna `wikipedia_pt` está vazia.

## Corrigido direto

- **l. 27:** "a gravação feita na Califórnia" passou a "a gravação feita na [[gravadora-california|Califórnia]]". Ligação para verbete existente, sem mudar o texto.
- **l. 21:** `[[terra-do-pantanal|Terra do Pantanal]]` passou a `[[terra-do-pantanal|*Terra do Pantanal*]]`, em itálico como os outros títulos de canção do verbete.

Nenhuma frase foi removida. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- pioneiros: Rodrigo Teixeira, *Os Pioneiros*, 2009, pelas fichas listadas acima e por `discografia.csv` e `faixas.csv` (*Raízes e Sentimentos*, 1988, independente, produção e direção de Guarany e Miranda, 12 faixas, quase todas de Aurélio, com *Estrada de Chão* e *Minha Doce Poxoréu*). Sustenta nascimento, Cuiabá 1963, Rádio Noroeste, Cigano e Ciganinho, Coxim, Rio Verde, Cinelândia, Recanto das Corujas, Show 6 em 1972, Bolinha e as duas versões, Jales em 1974, volta em 1977, dupla com Tostão, Delinha e Califórnia, *Menina Rica*, trio com Centavo, Chantecler, fim em 1982, autoria de *Estrada de Chão* e as duas versões, e o cabeçalho de 3 LPs e 3 CDs. **Não sustenta** a l. 33 como está escrita.

**Pronto para pull request: não.** Há dois PROBLEMAs na l. 33 (resultado do 1º Festão e divergência escondida; 2º Festão), e `npm run conferir` e `npm run build` não rodaram nesta sessão.
