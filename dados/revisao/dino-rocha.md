# Revisão: dino-rocha

Verbete: `verbetes/dino-rocha.md`, primeira revisão, depois da passagem do ligador. Revisor editorial, 30 out. 2026. O verbete se apoia só no livro *Os Pioneiros*, lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (dino-rocha, zacarias-mourao, amambay-e-amambai) e por `discografia.csv`. Não há nota com link. Os números de linha valem para o arquivo depois das correções desta revisão (nenhuma linha foi acrescentada nem tirada).

## Portão de evidências

- `npm run conferir`: **passou.** "17 verbetes conferidos. [...] Nenhum erro." Rodado antes e depois das correções.
- `npm run build`: **passou.** "33 page(s) built", com `/verbetes/dino-rocha/index.html` gerado. Rodado antes e depois das correções.
- `node scripts/ligacoes.mjs`: neste verbete, aponta "Pantanal" na l. 29 (falso positivo: é parte do título *Menino do Pantanal*, não a novela), segundas menções de nomes já ligados (Os Filhos de Goiás, Zé Corrêa, Gaivota Pantaneira, Guilherme Rondon) e "Rodrigo Teixeira" na l. 37, que tem linha na lista-mestra (`rodrigo-teixeira`, o autor do livro; ver ATENÇÕES).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, com ATENÇÕES. Cada parágrafo confere com as fichas. Três frases citavam seção que não traz o fato: "era o caçula" (l. 19, removido; ver ponto 4), "conheceu Zacarias em 1972, na Exposição de Rio Verde" (l. 29, está em "O batismo de Dino Rocha") e "clássico regional" (l. 43, está em "A Primeira Turma"). Nas duas últimas acrescentei a nota da seção certa, já definida no verbete (ver Corrigido direto). Ficam ATENÇÕES de precisão nas l. 23, 27 e 43 |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link; todas citam o livro pela seção |
| 3 | Sem cópia | OK. As fichas já são paráfrase do livro; a frase do verbete não repete sequência longa de nenhuma ficha. A comparação com o texto do livro não é possível no repositório |
| 4 | Dados pessoais | **PROBLEMA, resolvido nesta revisão.** l. 19: "e era o caçula" é dado de vida familiar (ordem entre irmãos), não trajetória, e a nota citada (`pioneiros-disc`) não o traz; o dado está na ficha da seção "Cultura Fronteiriça". Removi o trecho. Nada mais de pessoal no texto |
| 5 | Tom | OK. "Principal representante do chamamé de sanfona duetada" e "artista mais gravado" (l. 37) vêm atribuídos ao livro de Rodrigo Teixeira; "clássico regional" (l. 43), ao livro; "Príncipe do Chamamé", à contracapa |
| 6 | Divergências | OK. Origem com as três versões (Fazenda Boqueirão em Juti, Ponta Porã segundo Dino, Santa Luzia na contracapa), estilo (Dino x Amambaí), origem do nome artístico (locutor de Araçatuba x Dino Franco), discografia (18 LPs e 8 CDs no cabeçalho x 9 listados). A divergência do dossiê sobre a primeira ida à Califórnia (1973, segundo Dino) não aparece porque o verbete não fala dessa ida; não há versão escolhida |
| 7 | Ficha | OK. Nome civil, nascimento: `pioneiros-disc`. Atividade, instrumento, gênero: `pioneiros-turma` e `pioneiros-disc`. Apelido: `pioneiros-disc` (contracapa). Grupos: `pioneiros-dino` (5 Nativos, Amambay e Amambaí) e `pioneiros-filhos`. "Nascimento" está entre aspas sem precisar (não é só numérico); não atrapalha |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimentos e discografia reproduzida dos encartes: fonte sólida. **Fonte única** (ver ATENÇÕES) |
| 9 | Ligações | OK. Todos os identificadores em `[[...]]` existem na lista-mestra. "Rodrigo Teixeira" (l. 37) pode ser ligado a `rodrigo-teixeira` |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-30`, identificador no padrão, resumo com cerca de 165 caracteres. Notas no formato do `LEIA-ME.md` da fonte, por seção |

## PROBLEMAs

1. **l. 19, dado familiar (resolvido pela remoção).** Trecho original: "Nasceu em 23 de maio de 1951, na Fazenda Boqueirão, distrito de Juti, e era o caçula.[^pioneiros-disc]". A ficha da discografia traz só nome civil, data e local; "era o caçula e tinha nove anos em 1960" está na ficha da seção "Cultura Fronteiriça" e é dado de família. Pela regra de dados pessoais, removi "e era o caçula". Texto atual: "Nasceu em 23 de maio de 1951, na Fazenda Boqueirão, distrito de Juti.[^pioneiros-disc]". Nada fica para o redator.

## ATENÇÕES

- **Fonte única.** Todas as notas citam *Os Pioneiros* (Teixeira, 2009). Pela regra decidida em 30/10/2026, uma fonte sólida basta. A segunda fonte natural é imprensa: cgn2012 e cgn2016, usadas em `zacarias-mourao` e `amambay-e-amambai`, citam Dino Rocha de passagem; a dissertação de Gonçalves (UFMS, 2014) segue sem leitura.
- **l. 27, "foi à capital".** Trecho: "No mesmo ano foi à capital com um trio e tocou no programa de [[ramao-achucarro|Ramão Achucarro]] na [[radio-cultura|Rádio Cultura]].[^pioneiros-ado]". A ficha diz "foi a Campo Grande com um trio de dois violonistas paraguaios". Em 1968 Campo Grande não era capital (o estado era Mato Grosso, com capital em Cuiabá); "a capital" pode ser lido como Cuiabá. Sugestão ao redator: "foi a Campo Grande".
- **l. 23, Ponta Porã e 1960.** Trecho: "O próprio Dino diz ser de Ponta Porã, onde passou a viver e onde descobriu a música, sem professor, em 1960.[^pioneiros-cultura]". A ficha de "Cultura Fronteiriça" diz que ele descobriu a música depois de passar a viver em Ponta Porã, e o 1960 marca a mudança, não a descoberta. A frase "diz ser de Ponta Porã" vem dos dados de outra ficha (sem seção indicada). Sugestão: "O próprio Dino diz ser de Ponta Porã, onde passou a viver em 1960 e descobriu a música, sem professor."
- **l. 43, Los Tammy's.** "Numa seleção de polcas de [[los-tammys|Los Tammy's]] (1978)" vem da seção "Discografia: Los Tammy's / Victor Hugo", que não tem nota no verbete; a frase cita `pioneiros-disc`. O redator pode criar a nota dessa seção.
- **l. 19, tempo verbal.** "é acordeonista e compositor": as fontes não dizem se ele está vivo; o livro é de 2009. O presente segue o livro; não há dado de morte a conferir.
- **l. 37, "Rodrigo Teixeira".** Tem linha na lista-mestra (`rodrigo-teixeira`, autor de *Os Pioneiros*). Fica para o ligador.
- **Ficha "cidade: Ponta Porã".** Escolha razoável (onde viveu e começou, segundo ele), mas o nascimento é em Juti. Sem conflito com o texto, que mostra as versões.

## Corrigido direto

- **l. 19:** removido "e era o caçula" (dado familiar; ver PROBLEMA 1).
- **l. 29:** acrescentada a nota `[^pioneiros-batismo]` ao lado de `[^pioneiros-dino]`. O encontro com Zacarias em 1972, na Exposição de Rio Verde, vem da seção "O batismo de Dino Rocha", já definida no verbete.
- **l. 43:** acrescentada a nota `[^pioneiros-turma]` ao lado de `[^pioneiros-batismo]`. "Clássico regional" vem da seção "A Primeira Turma – Os Desbravadores dos 50", já definida no verbete.

Nenhum fato foi acrescentado. `status` continua `rascunho`. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- *Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `discografia.csv`:
  - "Discografia: Dino Rocha" (`pioneiros-disc`): nome civil, 23/5/1951, Fazenda Boqueirão (Juti), Santa Luzia na contracapa, padrinho e "Príncipe do Chamamé", 18 LPs e 8 CDs, os nove LPs com gravadora e produção, as faixas com Zacarias, *Baile Correntino*.
  - "Cultura Fronteiriça" (`pioneiros-cultura`): Ponta Porã, descoberta da música, Hermínio Giménez, "Antes do Boqueirão".
  - "Dino Rocha" (`pioneiros-dino`): 5 Nativos (1965), Recanto das Corujas (1968), Boate Guarany e Paraná (1969), volta em 1970, acordeonista da dupla a partir de dezembro de 1972.
  - "Ado & Adail" (`pioneiros-ado`): trio e Ramão Achucarro na Rádio Cultura, em 1968.
  - "O batismo de Dino Rocha" (`pioneiros-batismo`): Exposição de Rio Verde em 1972, viagem para gravar *Voltei Amor*, o nome dado em Araçatuba, Dino Franco, volta a Campo Grande em 1977, Mário Vieira, parceria com Zacarias e "Gaivota Pantaneira".
  - "Os Filhos de Goiás" e "Apresentação / O Livro" (`pioneiros-filhos`): empréstimo ao grupo, os três discos, rádios paulistas.
  - "Nos Embalos do Circo" (`pioneiros-circo`): dramas de circo, o dono do bar.
  - "A Primeira Turma" (`pioneiros-turma`): duetado, mais gravado com Délio & Delinha, "clássico regional".
  - "O estilo" (`pioneiros-estilo`): versões de Dino e de Amambaí.
  - "Discografia: Adail & Tesouro" (`pioneiros-adail`): direção de *Sereia Loira* (1974).
  - "Discografia: Amambay & Amambaí" (`pioneiros-amambay`): *Voltei Amor*, *Os Mestiços*, *Os Filhos da Terra* (1982 e 1985).

**Pronto para pull request: sim.** O único PROBLEMA (dado familiar na l. 19) foi resolvido pela remoção nesta revisão e não deixa trabalho para o redator. `npm run conferir` e `npm run build` passaram depois das correções. Ficam ATENÇÕES de redação (l. 23, 27 e 43), a nota da seção de Los Tammy's e a condição de fonte única; nenhuma impede o lote.

**Decisão do fechamento (30/10/2026): devolvido.** A regra do ciclo manda devolver todo verbete em que se achou dado pessoal, mesmo já removido. Ao reescrever, o redator deve corrigir também a l. 27 ("foi à capital": em 1968 Campo Grande ainda não era capital) e a l. 23 (1960 é a mudança para Ponta Porã, não a descoberta da música), e dar nota própria à frase sobre Los Tammy's.
