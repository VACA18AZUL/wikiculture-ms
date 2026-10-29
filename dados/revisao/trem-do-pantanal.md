# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`, versão reescrita pelo redator depois da devolução, com a passagem do ligador. Revisor editorial, 29 out. 2026. Este relatório substitui o anterior. Os números de linha valem para o arquivo atual; a correção feita não mudou a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** A ferramenta de terminal foi negada nesta sessão e o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: não rodou, pelo mesmo motivo. As ligações foram conferidas à mão contra `dados/lista-mestra.csv`.

Quem tiver terminal precisa rodar `npm run conferir` e `npm run build` antes do lote.

## Situação dos apontamentos da revisão anterior

- **PROBLEMA 1 (cópia na l. 18): resolvido.** A expressão agora está entre aspas e atribuída: A Crítica de Campo Grande a trata como "uma das músicas mais simbólicas".
- ATENÇÃO "a imprensa a descreve": resolvida (atribuição a A Crítica).
- ATENÇÃO trajeto do Overmundo (l. 36): resolvida ("Segundo o texto da entrevista..."). Conferido: Bauru, Campo Grande e Corumbá aparecem só na narração do entrevistador, e a palavra Bolívia aparece nela.
- ATENÇÃO tempo verbal (l. 68): resolvida ("abriria", "antecederia").
- Limite anterior (Campo Grande News com HTTP 403): **superado.** As cinco notas desse veículo abriram nesta sessão e foram conferidas.
- UFMS ligada como publicadora: ver ATENÇÕES.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, l. 28). O resto confere com as 14 notas, todas abertas nesta sessão |
| 2 | Link abre | OK. 14 de 14 notas, o link da Wikipédia na ficha e os dois itens de "Para saber mais" (cgn2025a e overmundo). Cada link leva à matéria citada; autor e data conferidos |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos conferidos. A expressão de A Crítica está entre aspas e atribuída |
| 4 | Dados pessoais | OK. O amigo de Roca ligado ao Partidão não é nomeado; nada sobre saúde ou morte de Roca |
| 5 | Tom | OK. "Hino", "marco" e "patrimônio afetivo" vêm sempre atribuídos a quem diz |
| 6 | Divergências | OK. Local e tempo da composição, destino e motivo da viagem, título original, ano da gravação de Diana Pequeno, número de regravações e episódio do festival aparecem com as duas versões, cada uma com sua fonte. O que ficou de fora do dossiê (idade de Roca) está explicado em "Uso no verbete" |
| 7 | Ficha | OK. Autor (cgn2025a, acritica2026, ce2024), Ano "1975" entre aspas (acritica2026, cgn2025a), Formato |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única**: 14 notas, de nove veículos ou instituições independentes |
| 9 | Ligações | OK. Os 27 identificadores do texto existem em `dados/lista-mestra.csv`. Nenhum `[[...]]` dentro das notas de fonte (ver ATENÇÕES sobre UFMS) |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-29`; identificador `trem-do-pantanal` no padrão; resumo com cerca de 190 caracteres |

## PROBLEMAs

**P1. L. 28, motivo da viagem.** Trecho: "Quanto ao motivo, Roca disse ao Campo Grande News que o objetivo principal era comprar pinturas do estilo cusquenho.[^cgn2025a]"
A fonte (cgn2025a) diz: "Na época, ele contou que o objetivo da viagem com Paulinho foi comprar quadros do estilo cusquenho." Há duas diferenças:
- a palavra "principal" não aparece na matéria (procurada nesta sessão; nenhuma ocorrência);
- "na época, ele contou" não diz que Roca falou ao Campo Grande News. A mesma matéria se apoia em entrevista de Roca a Rodrigo Teixeira, de 2012, publicada no livro *Prata da Casa*.

Sugestão para o redator: "Segundo o Campo Grande News, Roca contou que o objetivo da viagem era comprar quadros do estilo cusquenho.[^cgn2025a]"

## ATENÇÕES

- **Fonte única: não há.** Ainda assim, cinco das 14 notas são do Campo Grande News, e várias passagens só têm essa fonte: o relato da viagem de abril de 1975, os 15 minutos, o Fesul de 1980, Diana Pequeno como "pioneira", Almir Sater em 1982 no "disco de estreia", Bando do Velho Jack, os 57 registros do Ecad, Hermanos Irmãos e o remix de 2024. Para a segunda fonte: a dissertação de Faria (UFMS, 2024), citada no dossiê `geraldo-roca`; a tese de Faccioni (PPGLetras/UFMS); o acervo Memória Fonográfica de MS, para os discos de Diana Pequeno e Almir Sater.
- **Dossiê `dados/dossies/trem-do-pantanal.md`: não tem seção "Atualização de".**
- **UFMS e as notas de fonte.** Conferi as notas (l. 75 a 88): **nenhuma tem `[[ufms|UFMS]]` nem outro link interno**, então não havia nada a desfazer ali. O link está no corpo do texto, nas l. 26 ("Em reportagem da [[ufms|UFMS]]"), 38 (revista *InterMeio*, da UFMS) e 64 ("segundo a [[ufms|UFMS]]"). A revisão anterior tirou o link das l. 26 e 64, por serem só atribuição de fonte, e ele voltou. O modelo não proíbe esse uso, então não é correção mecânica e não mexi. O Helton decide se a UFMS fica ligada só na l. 38 (onde a canção é estudada na universidade) ou nas três.
- **L. 44, show de 1990.** O verbete diz que "a plateia reconheceu a canção já na introdução". Roca diz: "Comecei a tocar a introdução e a plateia veio abaixo." O reconhecimento é leitura razoável, mas a fonte fala da reação da plateia. Sugestão: "a plateia reagiu já na introdução".
- **L. 56, "O trio planejava regravar a canção".** A matéria de 2016 traz Jerry Espíndola dizendo "Por enquanto, temos a regravação de Trem do Pantanal" e diz que a nova versão "teve produção e arranjo de Carlos Campi". A regravação parece já existir ou estar em curso em 2016. "Planejava" atenua o que a fonte diz; vale ajustar.
- **L. 28, destino.** O cgn2025a fala em Machu Picchu como fim da viagem, mas também cita Santa Cruz de la Sierra como etapa ("rumo a Santa Cruz de La Sierra, na Bolívia"). O parágrafo apresenta as fontes como se cada uma desse um destino só. Não é divergência escondida, mas pode ser dito com mais precisão.
- **L. 32, livro *Prata da Casa*.** Continua sem link, corretamente: as duas linhas `prata-da-casa` e `prata-da-casa-lp-1982` da lista-mestra não são livro. O cgn2025a confirma que a entrevista de 2012 foi dada a Rodrigo Teixeira e publicada no livro.
- **L. 68, "Teatro do Mundo".** A Crítica diz só "Teatro do Mundo". O link vai para `estacao-cultural-teatro-do-mundo`; identificação provável, a confirmar por quem fizer o verbete do espaço.
- **L. 56, Carles Campi.** A matéria de 2016 grafa "Carlos Campi, produtor de Jorge Drexler", e a de 2022, "Carles Campi Campón". O verbete registra as duas grafias. Não há indício de homônimo.
- **L. 44, Fesul.** A frase sobre o Fesul e a retirada da final é da repórter, que relata o que Roca disse. "Roca disse" é leitura aceitável.

## Corrigido direto

- **L. 18:** acrescentada a chamada `[^cgn2025a]` depois de "composta em 1975 durante uma viagem de trem". As notas do parágrafo (acritica2026 e ce2024) não dizem que a viagem foi de trem: A Crítica diz só "durante uma viagem rumo a Santa Cruz de la Sierra". O cgn2025a, nota que já existia no verbete, diz que Roca e Simões a criaram em 1975 "durante a viagem de trem de Campo Grande a Corumbá". É só a chamada para uma nota existente, sem fato novo.

Nada mais foi alterado. Nenhum link UFMS foi tirado (ver ATENÇÕES). `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhuma frase foi removida por dado pessoal, porque não havia.

## Fontes conferidas

Todas abertas nesta sessão com WebFetch, que devolve extração feita por modelo; nos pontos decisivos pedi o trecho literal.

- cgn2025a (Natália Olliver, 10 set. 2025): abril de 1975, trecho Campo Grande-Corumbá, Machu Picchu, viagem de Simões em 1974, cabines e vagão-dormitório, melodia, quatro meses, praças, Aquidauana/Camisão, 15 minutos, insistência, literalidade, quadros cusquenhos (sem "principal"), primeira a citar o Pantanal, "Todos os trilhos da terra" e livro *Prata da Casa* (2012), show de 1990.
- cgn2025b (Natália Olliver, 16 set. 2025): quadro peruano, Fesul 1980, Glorinha e Onésimo Filho, Diana Pequeno "lançada em 1982" e "pioneira", Almir Sater em 1982 (fala de Roca) e "disco de estreia", Boldrin, novela, Bando do Velho Jack e Tozzette, Renato Teixeira, Luan Santana e Michel Teló, gravações em projetos solo, 57 regravações e Ecad, remix de 2024 e webclipe, "um dos hinos".
- cgn2022 (Thailla Torres, 9 fev. 2022): lançamento previsto para 14 de fevereiro, Carles Campi Campón, Madri, vozes em Campo Grande, Paulo Higa, videoclipe no YouTube.
- cgn2016 (Naiane Mesquita, 3 jun. 2016): "O caminho das canções", roteiro (Generoso Ponce, La Paz 8/6, Cusco 11 e 12/6, Machu Picchu 14/6), visita a Simões na véspera, Márcio de Camillo sobre Corumbá, Carlos Campi.
- cgn2012 (Paula Maciulevicius, 11 out. 2012): meia hora, cabine, Santa Cruz de la Sierra, "só a primeira estrofe", Tablado, festival e desclassificação, Alex Batata, mais de mil vezes, mais de 100 regravações.
- acritica2026 (Iury de Oliveira, 10 abr. 2026), ce2024 (Da Redação, 23 set. 2024), senado2017 (Alcebíades Muniz, 10 fev. 2017), ufms2020 (Ariane Comineti, 1 dez. 2020; "hino não oficial" é fala de Faccioni), overmundo (Rodrigo Teixeira, 14 mar. 2007; resposta sobre Che: "até caberia, mas eu e o Paulinho não tínhamos consciência disso"), cravo, faccioni2023 (resumo; entrevista de junho de 2019), dorsa (v. 15, n. 30, edição de 2009, publicada em 7 nov. 2016), slipcue (*Sinal de Amor*, RCA Victor, 1981, sem faixas). Wikipédia da ficha: abre e trata da canção.

**Pronto para pull request: não.** Falta o P1 (l. 28), que é uma correção de uma frase. E `npm run conferir` e `npm run build` precisam rodar e passar, porque não puderam ser executados nesta sessão.
