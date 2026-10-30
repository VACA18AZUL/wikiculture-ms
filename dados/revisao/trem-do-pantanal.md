# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`, versão reescrita pelo redator depois da terceira devolução (commit e517849), com a ligação acrescentada pelo ligador (ainda não commitada). Revisor editorial, 30 out. 2026. Este relatório substitui o anterior, do mesmo dia. As 14 notas, o link da Wikipédia e a página do Dicionário Cravo Albin sobre Almir Sater foram abertos nesta sessão com WebFetch (extração feita por modelo; nos pontos decisivos pedi o trecho literal). Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O ambiente negou permissão ao Bash nesta sessão, e o comando não rodou. Precisa rodar antes do pull request.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. As ligações foram conferidas à mão (ponto 9).
- `git diff` do verbete contra o último commit, obtido antes da negação: a única mudança do ligador é `Almir Sater` → `[[almir-sater|Almir Sater]]` na l. 20. Nenhum fato foi alterado.

## Situação dos apontamentos da revisão anterior

- **P1 (autoria no Dicionário Cravo Albin): resolvido.** A l. 20 diz agora: "o Dicionário Cravo Albin a credita a Roca e Simões no texto do verbete de Roca, mas a lista de obras da mesma página inclui [[almir-sater|Almir Sater]] como coautor". Confere com a página, reaberta nesta sessão: "Compôs em parceria com Paulo Simões a música 'Trem do Pantanal'" (dados artísticos) e "Trem do Pantanal (c/ Paulo Simões e Almir Sater)" (Obras). A ficha continua com Roca e Simões, como sugerido. O dossiê registra a correção ("Rodada de 30 out. 2026").
- ATENÇÕES que continuam: UFMS ligada como publicadora, destino da viagem, *Prata da Casa*, Teatro do Mundo, grafia de Carles Campi (ver ATENÇÕES).
- Apontamento novo desta rodada: P1 abaixo (disco de estreia de Almir Sater), que não tinha sido visto na revisão anterior.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, com ATENÇÃO na l. 20 ("As outras fontes lidas citam só Roca e Simões", ver ATENÇÕES). Os demais parágrafos conferem com as notas que citam, reabertas nesta sessão; a frase nova da l. 20 sobre o Cravo confere com a página |
| 2 | Link abre | OK. 14 de 14 notas, o link da Wikipédia na ficha (abre, trata da canção, credita Roca e Simões e tem 14 referências) e os dois itens de "Para saber mais" (cgn2025a e overmundo). Cada link leva à matéria citada; autor e data conferidos |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A frase nova da l. 20 parafraseia o Cravo. As expressões de A Crítica e da Rádio Senado estão atribuídas |
| 4 | Dados pessoais | OK. O amigo de Roca ligado ao Partidão não é nomeado; nada sobre saúde, família ou morte de Roca (o filho citado em cgn2025a, junto ao show de 1990, ficou fora) |
| 5 | Tom | OK. "Hino", "marco" e "patrimônio afetivo" vêm sempre atribuídos a quem diz. A seção "Apresentações recentes" usa o futuro do pretérito e diz que a matéria não confirma o show |
| 6 | Divergências | **PROBLEMA** (P1, disco de estreia de Almir Sater). A divergência de autoria do Cravo, apontada na revisão anterior, está resolvida (l. 20). As demais divergências (local e tempo da composição, destino e motivo da viagem, título original, ano da gravação de Diana Pequeno, número de regravações, episódio do festival) aparecem com as versões de cada fonte |
| 7 | Ficha | OK. Autor (cgn2025a, acritica2026, ce2024, senado2017), Ano "1975" entre aspas (cgn2025a, acritica2026), Formato. A coautoria de Sater, só na lista de obras do Cravo, está no texto (l. 20) |
| 8 | Fonte única | OK. Não há ATENÇÃO de fonte única: 14 notas, de dez veículos ou instituições independentes (Campo Grande News, A Crítica, Correio do Estado, Rádio Senado, UFMS, Overmundo, Dicionário Cravo Albin, Anais ProfLetras/Coliteras, InterMeio, Slipcue) |
| 9 | Ligações | OK, conferido à mão (`ligacoes.mjs` NÃO CONFERIDO; ver Portão). Os 27 identificadores do texto existem em `dados/lista-mestra.csv`. A ligação nova do ligador (`[[almir-sater|Almir Sater]]`, l. 20) aponta para o identificador certo e não muda o texto. Nenhum `[[...]]` nas notas de fonte |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30` (data da reescrita); identificador `trem-do-pantanal` no padrão; resumo com cerca de 185 caracteres |

## PROBLEMAs

**P1. Disco de estreia de Almir Sater: o dossiê registra a divergência, o verbete não.**
Trecho do verbete, l. 52: "O mesmo jornal diz que [[almir-sater|Almir Sater]] a gravou em 1982, no disco de estreia dele, e que essa versão a tornou conhecida no país.[^cgn2025b]"
O que a fonte citada diz (cgn2025b): a versão de Almir foi "lançada no disco de estreia do cantor" (texto da repórter), e, segundo Roca, o auge da música veio em 1982, quando Almir a regravou. A frase do verbete reproduz isso corretamente.
O que a outra fonte diz: o Dicionário Cravo Albin, página "Almir Sater" (https://dicionariompb.com.br/artista/almir-sater/, aberta nesta sessão), diz "Gravou o primeiro disco em 1981, pela Continental" e lista na discografia "1981 Continental LP Almir Sater" e "1982 RGE LP Doma". Ou o disco de 1982 não é o de estreia, ou a gravação não é de 1982. O verbete `almir-sater` do próprio projeto usa essa fonte e dá o primeiro disco em 1981 (l. 30 e 72-73 de `verbetes/almir-sater.md`).
O dossiê `dados/dossies/trem-do-pantanal.md` registra o conflito ("Ficou de fora", l. 197: "o verbete de Almir Sater, que cita o Dicionário Cravo Albin, data o primeiro disco em 1981 e *Doma* em 1982; não foi reconciliado aqui"; ver também l. 146 e 164). Pela regra do ponto 6, divergência registrada no dossiê e ausente do verbete é PROBLEMA. Não é correção mecânica: exige frase e nota novas.
Sugestão para o redator: depois da frase da l. 52, uma frase que registre que o Dicionário Cravo Albin situa o primeiro disco de Sater em 1981, pela Continental, e lista *Doma* (RGE) em 1982, com nota nova para a página "Almir Sater" do Cravo. Sem dizer em qual disco a canção está, porque nenhuma fonte aberta diz.

## ATENÇÕES

- **Fonte única: não há.** Ainda assim, cinco das 14 notas são do Campo Grande News, e várias passagens só têm essa fonte: o relato da viagem de abril de 1975, os 15 minutos, o Fesul de 1980, Diana Pequeno como "pioneira", Almir Sater no "disco de estreia", Bando do Velho Jack, os 57 registros do Ecad, Hermanos Irmãos e o remix de 2024. Para a segunda fonte: a dissertação de Faria (UFMS, 2024), citada no dossiê `geraldo-roca`; a tese de Faccioni (PPGLetras/UFMS); o acervo Memória Fonográfica de MS, para os discos de Diana Pequeno e Almir Sater.
- **L. 20, "As outras fontes lidas citam só Roca e Simões.[^cravo]"** A nota `[^cravo]` não sustenta uma afirmação sobre as outras fontes; e três delas (faccioni2023, dorsa e slipcue, nos trechos lidos) não citam autoria nenhuma. As que citam autoria (cgn2025a, cgn2012, acritica2026, ce2024, senado2017, ufms2020, overmundo, Wikipédia) dão só Roca e Simões, e o conteúdo está certo. Sugestão: "As demais fontes do verbete que tratam da autoria citam só Roca e Simões." Não corrigi porque muda o sentido da frase.
- **Cravo Albin, página "Almir Sater".** A lista de obras dessa página traz "Trem do Pantanal (c/ Geraldo Roca)", sem Simões: um terceiro crédito, diferente dos dois da página de Roca. Essa página não é fonte do verbete e o dossiê não registra o dado, por isso não é PROBLEMA aqui. Se o redator acrescentar a página para resolver o P1, vai ter de registrar também esse crédito.
- **L. 20 e 18, ligação repetida.** O ligador ligou "Almir Sater" na l. 20, e o nome já está ligado na l. 18 e de novo na l. 52. Não muda fato; é escolha de estilo.
- **L. 66, Faccioni.** O verbete diz que Faccioni "também a considera hino não oficial"; a matéria da UFMS diz que, para ele, a canção "pode ser considerada um hino não oficial". A frase reforça um pouco a fala, sem contrariá-la.
- **Dossiê `dados/dossies/trem-do-pantanal.md`: não tem seção "Atualização de".**
- **UFMS ligada como publicadora.** O link `[[ufms|UFMS]]` está no corpo do texto nas l. 28 ("Em reportagem da UFMS"), 40 (revista *InterMeio*, da UFMS) e 66 ("segundo a UFMS"); nenhuma nota de fonte tem link interno. O modelo não proíbe esse uso, então não mexi. O Helton decide se fica ligada só na l. 40 ou nas três.
- **L. 30, destino.** O cgn2025a fala em Machu Picchu como fim da viagem; o dossiê anota que Santa Cruz de la Sierra e Machu Picchu podem ser etapas da mesma viagem, sem que as fontes digam. O parágrafo apresenta as fontes como se cada uma desse um destino só. Não é divergência escondida, mas pode ser dito com mais precisão.
- **L. 34, livro *Prata da Casa*.** Continua sem link, corretamente: as linhas `prata-da-casa` e `prata-da-casa-lp-1982` da lista-mestra não são livro.
- **L. 70, "Teatro do Mundo".** A Crítica diz só "Teatro do Mundo". O link vai para `estacao-cultural-teatro-do-mundo`; identificação provável, a confirmar por quem fizer o verbete do espaço.
- **L. 58, Carles Campi.** A matéria de 2016 grafa "Carlos Campi, produtor de Jorge Drexler", e a de 2022, "Carles Campi Campón". O verbete registra as duas grafias. Não há indício de homônimo.
- **L. 52, novela.** O verbete diz que a novela *Pantanal* "também ajudou na difusão". Roca credita "ainda mais" o sucesso à novela. A frase atenua um pouco a fala, sem contrariá-la.
- **Rodrigo Teixeira.** O entrevistador do Overmundo (2007) e do livro *Prata da Casa* (2012) e o integrante do Hermanos Irmãos (l. 58) têm o mesmo nome. Nenhuma fonte diz que são a mesma pessoa; o verbete não os junta, corretamente.

## Corrigido direto

Nada. Não encontrei erro mecânico: as 14 notas definidas são usadas, os identificadores existem, o único valor numérico da ficha está entre aspas e as notas seguem o formato. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhuma frase foi removida por dado pessoal, porque não havia. Nenhum arquivo de proposta foi criado, a lista-mestra não foi tocada e a situação na fila não foi mudada.

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
- cravo (sem autor e sem data): Guizzo, "espécie de hino da moderna música popular urbana"; parceria com Simões no texto e "c/ Paulo Simões e Almir Sater" na lista de obras (antigo P1, resolvido).
- Cravo Albin, página "Almir Sater" (não é nota do verbete; aberta para o P1): primeiro disco em 1981, pela Continental; *Doma*, RGE, 1982; "Trem do Pantanal (c/ Geraldo Roca)" na lista de obras.
- faccioni2023 (resumo, 1 dez. 2023): análise do discurso, letra e entrevista de junho de 2019, formações discursivas bélicas e ideais de liberdade.
- dorsa (InterMeio, v. 15, n. 30, edição de 2009, publicada em 7 nov. 2016): canção como texto-base de análise intertextual e interdiscursiva.
- slipcue: *Sinal de Amor*, RCA Victor, 1981, sem faixas.
- Wikipédia (ficha): abre, trata da canção, tem referências.

**Pronto para pull request: não.** O P1 da revisão anterior (coautoria de Almir Sater no Cravo Albin) foi resolvido, e a ligação do ligador não alterou fatos. Faltam duas coisas: (1) o P1 desta revisão (disco de estreia de Almir Sater, divergência registrada no dossiê e ausente do verbete), que se resolve com uma frase e uma nota; (2) rodar `npm run conferir` e `npm run build`, que não rodaram nesta sessão por falta de permissão ao Bash.
