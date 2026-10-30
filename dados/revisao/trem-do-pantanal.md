# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`, versão reescrita pelo redator depois da segunda devolução (commit bf9ae78). Revisor editorial, 30 out. 2026. Este relatório substitui o de 29 out. 2026. As 14 notas e o link da Wikipédia foram abertos nesta sessão com WebFetch (extração feita por modelo; nos pontos decisivos pedi o trecho literal). Os números de linha valem para o arquivo atual; a correção feita não mudou a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **passou.** "12 verbetes conferidos. [...] Nenhum erro." Rodado antes e depois da correção mecânica, com o mesmo resultado.
- `npm run build`: **passou.** "25 page(s) built", com `/verbetes/trem-do-pantanal/index.html` gerado.
- `node scripts/ligacoes.mjs`: aponta, neste verbete, "Pantanal" (l. 18, 26, 28, 32, 36, 38) como possível `pantanal-novela` e "Prata da Casa" (l. 32) como possível `prata-da-casa`: falsos positivos (a região, não a novela; o livro, não o disco). Aponta também a segunda menção a Diana Pequeno na l. 48, que já está ligada na primeira menção do mesmo parágrafo. Nada a ligar.

## Situação dos apontamentos da revisão anterior

- **P1 (l. 28, motivo da viagem): resolvido.** O texto agora diz "segundo o Campo Grande News, Roca contou que o objetivo da viagem era comprar quadros do estilo cusquenho", sem "principal" e sem dizer que Roca falou ao jornal. Confere com cgn2025a: "o objetivo da viagem com Paulinho foi comprar quadros do estilo cusquenho". A frase veio com "Segundo" em maiúscula no meio da frase; corrigido (ver "Corrigido direto").
- **ATENÇÃO do show de 1990 (l. 44): resolvida.** "A plateia reagiu já na introdução", como em cgn2025a ("Comecei a tocar a introdução e a plateia veio abaixo").
- **ATENÇÃO "O trio planejava regravar" (l. 56): resolvida.** "O projeto do trio incluía a regravação da canção". cgn2016 diz que o trio "regravou com produção e arranjo de Carlos Campi".
- ATENÇÕES que continuam: UFMS ligada como publicadora, destino da viagem, *Prata da Casa*, Teatro do Mundo, grafia de Carles Campi (ver ATENÇÕES).
- `npm run conferir` e `npm run build`, que não tinham rodado: rodaram e passaram.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada parágrafo confere com as notas que cita, todas abertas nesta sessão. Os três trechos reescritos (l. 28, 44, 56) conferem com cgn2025a e cgn2016 |
| 2 | Link abre | OK. 14 de 14 notas, o link da Wikipédia na ficha (abre, trata da canção e tem 14 referências) e os dois itens de "Para saber mais" (cgn2025a e overmundo). Cada link leva à matéria citada; autor e data conferidos |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. As expressões de A Crítica ("uma das músicas mais simbólicas") e da Rádio Senado estão atribuídas |
| 4 | Dados pessoais | OK. O amigo de Roca ligado ao Partidão não é nomeado; nada sobre saúde ou morte de Roca |
| 5 | Tom | OK. "Hino", "marco" e "patrimônio afetivo" vêm sempre atribuídos a quem diz. A seção "Apresentações recentes" usa o futuro do pretérito e diz que a matéria não confirma o show |
| 6 | Divergências | **PROBLEMA** (P1, autoria no Dicionário Cravo Albin). As demais divergências (local e tempo da composição, destino e motivo da viagem, título original, ano da gravação de Diana Pequeno, número de regravações, episódio do festival) aparecem com as versões de cada fonte |
| 7 | Ficha | OK. Autor (cgn2025a, acritica2026, ce2024), Ano "1975" entre aspas (cgn2025a, acritica2026), Formato. Ver P1 sobre a autoria |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única**: 14 notas, de nove veículos ou instituições independentes (Campo Grande News, A Crítica, Correio do Estado, Rádio Senado, UFMS, Overmundo, Dicionário Cravo Albin, Anais ProfLetras/Coliteras, InterMeio, Slipcue) |
| 9 | Ligações | OK. Os 27 identificadores do texto existem em `dados/lista-mestra.csv`. Os apontamentos de `ligacoes.mjs` são falsos positivos (ver Portão). Nenhum `[[...]]` nas notas de fonte |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-29` (data da reescrita); identificador `trem-do-pantanal` no padrão; resumo com cerca de 185 caracteres |

## PROBLEMAs

**P1. Autoria: o Dicionário Cravo Albin, fonte do verbete, também credita a canção a Almir Sater, e o verbete não registra.**
Trechos do verbete: ficha, l. 7 ("Autor: Geraldo Roca e Paulo Simões"); l. 18 ("canção de [[geraldo-roca|Geraldo Roca]] e [[paulo-simoes|Paulo Simões]]"); a nota `[^cravo]` é usada na l. 64.
A fonte (cravo, verbete "Geraldo Roca") diz duas coisas. No texto, em "Dados artísticos": "Compôs em parceria com Paulo Simões a música 'Trem do Pantanal'". Na lista "Obras": "Trem do Pantanal (c/ Paulo Simões e Almir Sater)" (o mesmo acontece com "Aqui agora crianças"). As demais 13 fontes creditam só Roca e Simões, e nenhuma dá Sater como coautor.
A divergência está numa fonte citada no verbete e não aparece nem no texto nem no dossiê (que lista cravo entre as fontes que creditam só Roca e Simões). A regra de divergência não tem exceção, mesmo quando uma versão parece erro de cadastro. Não é correção mecânica, porque exige uma frase nova.
Sugestão para o redator, no fim do primeiro parágrafo ou na seção "Origem": "O Dicionário Cravo Albin credita a canção a Roca e Simões no texto do verbete de Roca, mas a lista de obras da mesma página inclui Almir Sater como coautor.[^cravo]" A ficha pode continuar com Roca e Simões, que é o que dizem todas as fontes no texto corrido; o Helton decide.

## ATENÇÕES

- **Fonte única: não há.** Ainda assim, cinco das 14 notas são do Campo Grande News, e várias passagens só têm essa fonte: o relato da viagem de abril de 1975, os 15 minutos, o Fesul de 1980, Diana Pequeno como "pioneira", Almir Sater em 1982 no "disco de estreia", Bando do Velho Jack, os 57 registros do Ecad, Hermanos Irmãos e o remix de 2024. Para a segunda fonte: a dissertação de Faria (UFMS, 2024), citada no dossiê `geraldo-roca`; a tese de Faccioni (PPGLetras/UFMS); o acervo Memória Fonográfica de MS, para os discos de Diana Pequeno e Almir Sater.
- **Dossiê `dados/dossies/trem-do-pantanal.md`: não tem seção "Atualização de".**
- **Verbete `almir-sater`.** Segundo o "Uso no verbete" do dossiê, o verbete de Almir Sater também cita o Dicionário Cravo Albin. Quem cuidar dele deve ver se a coautoria da lista de obras do Cravo (P1) aparece lá. Fora do escopo desta revisão; não conferi.
- **UFMS ligada como publicadora.** O link `[[ufms|UFMS]]` está no corpo do texto nas l. 26 ("Em reportagem da UFMS"), 38 (revista *InterMeio*, da UFMS) e 64 ("segundo a UFMS"); nenhuma nota de fonte tem link interno. O modelo não proíbe esse uso, então não mexi. O Helton decide se fica ligada só na l. 38 ou nas três.
- **L. 28, destino.** O cgn2025a fala em Machu Picchu como fim da viagem, mas também cita Santa Cruz de la Sierra como etapa ("rumo a Santa Cruz de La Sierra, na Bolívia"). O parágrafo apresenta as fontes como se cada uma desse um destino só. Não é divergência escondida, mas pode ser dito com mais precisão.
- **L. 32, livro *Prata da Casa*.** Continua sem link, corretamente: as duas linhas `prata-da-casa` e `prata-da-casa-lp-1982` da lista-mestra não são livro. O cgn2025a confirma que a entrevista de 2012 foi dada a Rodrigo Teixeira e publicada no livro.
- **L. 68, "Teatro do Mundo".** A Crítica diz só "Teatro do Mundo". O link vai para `estacao-cultural-teatro-do-mundo`; identificação provável, a confirmar por quem fizer o verbete do espaço.
- **L. 56, Carles Campi.** A matéria de 2016 grafa "Carlos Campi, produtor de Jorge Drexler", e a de 2022, "Carles Campi Campón". O verbete registra as duas grafias. Não há indício de homônimo.
- **L. 44, Fesul.** A frase sobre o Fesul e a retirada da final é da repórter, que relata o que Roca disse. "Roca disse" é leitura aceitável.
- **L. 50, novela.** O verbete diz que a novela *Pantanal* "também ajudou na difusão". Roca diz mais: "Mas foi mais ainda por causa da novela". A frase atenua um pouco a fala, sem contrariá-la.
- **Rodrigo Teixeira.** O entrevistador do Overmundo (2007) e do livro *Prata da Casa* (2012) e o integrante do Hermanos Irmãos (l. 56) têm o mesmo nome. Nenhuma fonte diz que são a mesma pessoa; o verbete não os junta, corretamente.

## Corrigido direto

- **L. 28:** "Quanto ao motivo, Segundo o Campo Grande News" passou a "Quanto ao motivo, segundo o Campo Grande News" (maiúscula no meio da frase, deixada pela reescrita). Só a letra mudou.

Nada mais foi alterado. Nenhum link UFMS foi tirado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhuma frase foi removida por dado pessoal, porque não havia. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

Todas abertas nesta sessão (30 out. 2026) com WebFetch, que devolve extração feita por modelo; nos pontos decisivos pedi o trecho literal.

- cgn2025a (Natália Olliver, 10 set. 2025): abril de 1975, trecho Campo Grande-Corumbá, Bolívia e Machu Picchu; Simões fez a viagem em 1974 e "propôs isso a Geraldo"; cabines e vagão-dormitório; melodia; "falei o começo da música para ele"; Aquidauana/Camisão; 15 minutos; insistência; literalidade; quatro meses; praças; quadros cusquenhos; primeira canção a citar o Pantanal; entrevista a Rodrigo Teixeira no livro *Prata da Casa* (2012) com "Todos os trilhos da terra"; show de 1990.
- cgn2025b (Natália Olliver, 16 set. 2025): quadro peruano; "um dos hinos"; Fesul 1980, Grupo Acaba, Glorinha e Onésimo Filho; Diana Pequeno "lançada em 1982", "pioneira", "não teve grande repercussão comercial"; Almir Sater no "disco de estreia" e "pico" em 1982; Boldrin e novela; Bando do Velho Jack e Tozzette ("até fora do estado"); Renato Teixeira "não chegou a gravar"; Luan Santana e Michel Teló; gravações em projetos solo; 57 regravações, Ecad e "leis de proteção de dados"; remix de 2024 e webclipe.
- cgn2022 (Thailla Torres, 9 fev. 2022): lançamento previsto para 14 de fevereiro, Carles Campi Campón, estúdio em Madri, vozes em Campo Grande, Paulo Higa, videoclipe no YouTube.
- cgn2016 (Naiane Mesquita, 3 jun. 2016): "O caminho das canções"; integrantes; roteiro (Praça Generoso Ponce, La Paz 8/6, Cusco 11 e 12/6, Machu Picchu 14/6); visita a Simões ("Fomos ontem a casa dele"); regravação "com produção e arranjo de Carlos Campi"; Márcio de Camillo sobre Corumbá.
- cgn2012 (Paula Maciulevicius, 11 out. 2012): meia hora, cabine, Santa Cruz de la Sierra, "só a primeira estrofe"; Tablado no Rio, onde os dois moravam, show que "sai tudo errado"; festival em MS e desclassificação, com Roca discordando de que a letra fosse subversiva ("não tem nada de manifestação"); Alex Batata; mais de mil vezes; mais de 100 regravações.
- acritica2026 (Iury de Oliveira, 10 abr. 2026): "uma das músicas mais simbólicas", 1975, "rumo a Santa Cruz de la Sierra", marco, patrimônio afetivo e cultural, show de 16/4 às 19h no Sesc Teatro Prosa, gratuito, banda, retrospectiva, álbum ao vivo em 2026, versão gravada no Teatro do Mundo em 2023.
- ce2024 (Da Redação, 23 set. 2024): parceria com Simões, "sucesso na voz de Almir Sater".
- senado2017 (Alcebíades Muniz, 10 fev. 2017): LP *Sinal de Amor*, RCA, 1981, com a canção; "hino não oficial".
- ufms2020 (Ariane Comineti, 1 dez. 2020): viagem a Machu Picchu, acordes depois de Miranda, "Sobre todos os trilhos da Terra", pedidos do público; "hino não oficial" é fala de Faccioni.
- overmundo (Rodrigo Teixeira, 14 mar. 2007): elegia ao Pantanal, proscrito, amigo do Partidão e Santa Cruz (fala de Roca); trajeto Bauru-Campo Grande-Corumbá-Bolívia (narração do entrevistador); Che Guevara.
- cravo (sem autor e sem data): Guizzo, "espécie de hino da moderna música popular urbana"; parceria com Simões no texto e Sater na lista de obras (P1).
- faccioni2023 (resumo, 1 dez. 2023): análise do discurso, letra e entrevista de junho de 2019, formações discursivas bélicas e ideais de liberdade.
- dorsa (InterMeio, v. 15, n. 30, edição de 2009, publicada em 7 nov. 2016): canção como texto-base de análise intertextual e interdiscursiva.
- slipcue: *Sinal de Amor*, RCA Victor, 1981, sem faixas.
- Wikipédia (ficha): abre, trata da canção, tem referências.

**Pronto para pull request: não.** Os apontamentos da revisão anterior foram resolvidos, e `npm run conferir` e `npm run build` passaram. Resta o P1 (coautoria de Almir Sater na lista de obras do Cravo Albin, não registrada), que se resolve com uma frase. Se o Helton entender que a lista de obras do Cravo é erro de cadastro e não precisa ser registrada, o verbete fica pronto.
