# Revisão: trem-do-pantanal

Verbete: `verbetes/trem-do-pantanal.md`, versão reescrita pelo redator (commit 3acf4cd, 30 out. 2026, 18:51 UTC) com as ligações do ligador ainda não commitadas. Revisor editorial, 30 out. 2026, nova rodada. Este relatório substitui o anterior, do mesmo dia. Os números de linha valem para o arquivo atual; a correção feita não mudou a contagem de linhas.

## Portão de evidências

- `npm run conferir`: **passou** ("14 verbetes conferidos. Nenhum erro."), antes e depois da correção.
- `npm run build`: **passou** (28 páginas), antes e depois da correção.
- `node scripts/ligacoes.mjs`: rodou; sugestões tratadas no ponto 9.
- `git diff 30202a6 3acf4cd` (reescrita do redator): mudaram a l. 20 (frase sobre "as demais fontes" e frase nova sobre a página "Almir Sater" do Cravo), a l. 52 (frase nova sobre o primeiro disco de Sater) e a nota nova `[^cravosater]`. O resto do texto é igual ao revisado antes.
- `git diff HEAD` (ligador): duas mudanças, `[[geraldo-roca|Geraldo Roca]]` na l. 20 e `[[jose-octavio-guizzo|José Octávio Guizzo]]` na l. 66. Só links; nenhum fato mudou.
- Fontes reabertas nesta rodada com WebFetch: cravo e cravosater (trechos literais), acritica2026, ce2024, senado2017, ufms2020 e overmundo (abrem; título, autor e data conferem). **As notas do Campo Grande News deram HTTP 403 ao WebFetch nesta rodada**, e o archive.org não está acessível ao ambiente; para elas valem as transcrições da revisão anterior, reproduzidas no fim deste relatório.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, l. 54, "nunca a gravou"). As frases novas das l. 20 e 52 conferem com as páginas do Cravo reabertas nesta rodada. O resto do texto não mudou desde a revisão anterior, que o deu como conferido |
| 2 | Link abre | OK nesta rodada para cravo, cravosater, acritica2026, ce2024, senado2017, ufms2020 e overmundo (título, autor e data conferem). **NÃO CONFERIDO nesta rodada** para as cinco notas do Campo Grande News (403 ao WebFetch) e para faccioni2023, dorsa, slipcue e a Wikipédia (não retestadas); todas abriram na revisão anterior, do mesmo dia |
| 3 | Sem cópia | OK. As frases novas parafraseiam o Cravo; "c/ Geraldo Roca" está entre aspas, como citação do cadastro |
| 4 | Dados pessoais | OK. Amigo de Roca ligado ao Partidão sem nome; nada sobre saúde, família ou morte de Roca |
| 5 | Tom | OK. "Hino", "marco", "uma das músicas mais simbólicas" e "patrimônio afetivo" sempre atribuídos. "Apresentações recentes" no futuro do pretérito, com a ressalva de que a matéria não confirma o show |
| 6 | Divergências | **PROBLEMA** (P1: a fonte citada traz as duas versões sobre a gravação de Renato Teixeira, e o verbete dá só uma). O PROBLEMA anterior (disco de estreia de Sater) está resolvido. Autoria aparece com as três versões (Roca e Simões; Roca, Simões e Sater; Sater e Roca). As demais divergências seguem registradas |
| 7 | Ficha | OK. Autor (cgn2025a, acritica2026, ce2024, senado2017), Ano "1975" entre aspas, Formato. As coautorias alternativas do Cravo estão no texto (l. 20) |
| 8 | Força da fonte | OK. 15 notas, de dez veículos ou instituições independentes |
| 9 | Ligações | OK. Os identificadores existem na lista-mestra; os dois links novos do ligador (`geraldo-roca` na l. 20, `jose-octavio-guizzo` na l. 66) apontam para a entidade certa e não mudam o texto. `ligacoes.mjs` sugere "Onésimo Filho" (l. 46), que tem linha na lista-mestra (ver ATENÇÕES); as demais sugestões ("Pantanal" -> novela, "Prata da Casa" -> disco coletivo) são falsos positivos; "Diana Pequeno" já está ligada na l. 50 |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 185 caracteres |

## PROBLEMAs

**P1. L. 54, "[[renato-teixeira|Renato Teixeira]] cantou a música em shows em homenagem a Roca, mas nunca a gravou.[^cgn2025b]"**
O que a fonte diz (cgn2025b; transcrição literal registrada na revisão anterior de `renato-teixeira`, já que a página deu 403 nesta rodada): a repórter escreve que Teixeira, "apesar de cantar Trem do Pantanal em todo show em homenagem ao Roca, não chegou a gravar a música"; na mesma matéria, Teixeira diz "perdi de gravar Trem do Pantanal antes do Almir" e "Gravei com o Roca Romaria e gravamos juntos o Trem". A frase do verbete fica só com a versão da repórter e a apresenta como fato, com "nunca" no lugar de "não chegou a". Além disso, o outro verbete do lote, `renato-teixeira`, diz nas l. 43 e 45, com a mesma matéria e com cgn2015 ("gravaram juntos pela primeira vez" "Romaria" e "Trem do Pantanal"), que os dois a gravaram juntos. É o mesmo ponto que foi PROBLEMA (P4) na revisão de `renato-teixeira` e já foi resolvido lá.
O dossiê (`dados/dossies/trem-do-pantanal.md`, l. 81 e 183) repete "nunca a gravou" e também precisa de ajuste.
Sugestão ao redator, sem fato novo: "Segundo a reportagem, [[renato-teixeira|Renato Teixeira]], que canta a música em shows em homenagem a Roca, não chegou a gravá-la; na mesma matéria, Teixeira diz que a gravou com Roca.[^cgn2025b]"

## Situação dos apontamentos da revisão anterior

- **P1 (disco de estreia de Almir Sater): resolvido.** A l. 52 registra agora: "O Dicionário Cravo Albin, por sua vez, situa o primeiro disco de Sater em 1981, pela Continental, e lista *Doma* (RGE) em 1982; nenhuma das fontes lidas diz em qual disco a canção está.[^cravosater]". Confere com a página, reaberta nesta rodada: "Gravou o primeiro disco em 1981, pela Continental."; "1981 Continental LP Almir Sater"; "1982 RGE LP Doma". A nota nova `[^cravosater]` segue o formato.
- **ATENÇÃO sobre o terceiro crédito do Cravo: resolvida.** A l. 20 registra que a página de Sater lista a canção como "c/ Geraldo Roca", sem Simões. Confere: "Trem do Pantanal (c/ Geraldo Roca)".
- **ATENÇÃO "As outras fontes lidas": resolvida em parte** (ver ATENÇÕES).

## ATENÇÕES

- **L. 20, "As demais fontes do verbete que tratam da autoria citam só Roca e Simões.[^cravo]".** A redação melhorou, mas a nota `[^cravo]` não sustenta uma afirmação sobre as outras fontes, e agora a página "Almir Sater" do Cravo também é fonte do verbete e dá outro crédito. Lida na ordem, "demais" quer dizer "fora do Cravo", e assim está certa. Sugestão: "As fontes de fora do Dicionário que tratam da autoria citam só Roca e Simões", com as notas dessas fontes ou sem nota própria, a critério do redator.
- **L. 52, ordem das notas.** Antes da correção, a frase de cgn2025b (1982, disco de estreia) vinha sem nota e seguida da nota `[^cravosater]`, o que levaria o leitor a atribuir a data ao Cravo. Corrigido (ver abaixo).
- **L. 46, Onésimo Filho.** A lista-mestra tem `onesimo-filho` (encarregado da TV Morena que organizou o Festão, segundo *Os Pioneiros*). O verbete fala de Onésimo Filho no Fesul de 1980. Provavelmente a mesma pessoa, mas nenhuma fonte deste verbete diz; por isso não liguei. Fica para o ligador ou o Helton.
- **L. 20, link dentro de citação.** O ligador ligou "Geraldo Roca" dentro de "c/ Geraldo Roca", que é transcrição do cadastro do Cravo. Não muda fato; escolha de estilo.
- **Fonte única por trecho.** Várias passagens só têm o Campo Grande News: viagem de abril de 1975, os 15 minutos, Fesul de 1980, Diana Pequeno como primeira a gravar, Sater no "disco de estreia", Bando do Velho Jack, os 57 registros do Ecad, Hermanos Irmãos e o remix de 2024. Segunda fonte possível: dissertação de Faria (UFMS, 2024), tese de Faccioni (PPGLetras/UFMS), acervo Memória Fonográfica de MS.
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

- **L. 52:** acrescentada a chamada `[^cgn2025b]` (nota já existente) ao fim da frase "O mesmo jornal diz que [[almir-sater|Almir Sater]] a gravou em 1982, no disco de estreia dele, e que essa versão a tornou conhecida no país." Formato de nota: sem ela, a data de 1982 e o "disco de estreia" ficavam sob a nota seguinte, `[^cravosater]`, que diz o contrário. Nenhum texto mudou.

Nada mais foi alterado. As 15 notas definidas são usadas; o único valor numérico da ficha está entre aspas. `status` continua `rascunho`. Nenhum fato acrescentado, nenhuma frase removida por dado pessoal (não havia). Lista-mestra, relações, propostas e fila não foram tocadas. Sem commit.

## Fontes conferidas na revisão anterior (30 out. 2026)

Extrações feitas então com WebFetch; valem nesta rodada para as notas que não reabriram (ver Portão). A fala de Teixeira sobre a gravação ("gravamos juntos o Trem") está transcrita em `dados/revisao/renato-teixeira.md`, na conferência de cgn2025b.

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
- cravosater (Cravo Albin, página "Almir Sater"; hoje nota do verbete, reaberta nesta rodada com os mesmos trechos): primeiro disco em 1981, pela Continental; *Doma*, RGE, 1982; "Trem do Pantanal (c/ Geraldo Roca)" na lista de obras.
- faccioni2023 (resumo, 1 dez. 2023): análise do discurso, letra e entrevista de junho de 2019, formações discursivas bélicas e ideais de liberdade.
- dorsa (InterMeio, v. 15, n. 30, edição de 2009, publicada em 7 nov. 2016): canção como texto-base de análise intertextual e interdiscursiva.
- slipcue: *Sinal de Amor*, RCA Victor, 1981, sem faixas.
- Wikipédia (ficha): abre, trata da canção, tem referências.

## Pronto para pull request

**Não.** O PROBLEMA anterior (disco de estreia de Sater) foi resolvido, as ligações do ligador não mudaram fatos, e `npm run conferir` e `npm run build` passam. Falta o P1 desta rodada (l. 54, "nunca a gravou"), que contradiz a própria fonte citada e o verbete `renato-teixeira` do mesmo lote. Resolve-se com uma frase, sem pesquisa nova, e com o ajuste correspondente no dossiê. Ressalva: as notas do Campo Grande News não reabriram nesta rodada (403).
