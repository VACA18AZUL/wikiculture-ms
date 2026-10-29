# Revisão: marcio-de-camillo

Verbete: `verbetes/marcio-de-camillo.md`, versão reescrita pelo redator depois da devolução. Revisor editorial, 29 out. 2026. Este relatório substitui o anterior. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. O Bash foi negado nesta sessão e o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: não rodou. Conferi à mão os 24 identificadores contra `dados/lista-mestra.csv`: todos existem.
- Alguém precisa rodar `npm run conferir` e `npm run build` antes do pull request.

**Fontes desta revisão:** abri as 12 notas nesta sessão. Isso inclui as dez do *Campo Grande News*, que deram 403 na revisão anterior e que o redator não releu. Agora todas abriram. Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral. Por isso a busca de cópia foi feita nos trechos literais obtidos.

## PROBLEMAs da revisão anterior

| Antigo | Situação |
|---|---|
| P1, l. 30: temporada de 2026 narrada como fato | **Resolvido.** Agora diz "Uma matéria de 8 de setembro de 2026 anunciou...". |
| P1, l. 30: versão acústica de dez. 2022 | **Resolvido.** Agora diz "anunciou, para 19 de dezembro". |
| P1, l. 30: volta em set. 2024 | **Resolvido.** Agora diz "anunciou a volta... em 22 de setembro". |
| P1, l. 36: lançamento de 2022 pelo trio | **Resolvido.** Agora diz "noticiou o lançamento, previsto para 14 de fevereiro". A fonte confirma: "será lançada no dia 14 de fevereiro". |
| P1, l. 38: Música Poética 2025 | **Resolvido.** Agora diz "anunciou o espetáculo... programado para". |

ATENÇÕES antigas que foram resolvidas: a nota `[^cgn2012multi]` foi acrescentada à indicação ao prêmio; o link `sesc-teatro-prosa`, de identidade não confirmada, foi retirado; a palavra "coletivo" foi retirada.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, P2, P3). O resto está OK: conferi cada parágrafo contra a nota citada |
| 2 | Link abre | OK. As 12 notas levam à matéria citada, com autor e data conferidos. O verbete não tem bloco `links` |
| 3 | Sem cópia | OK nos trechos literais obtidos, com ATENÇÃO na l. 18 (sequência de 13 palavras feita de nomes de instrumentos). A l. 36 tem sete palavras iguais ("de Campo Grande para refazer a viagem"), abaixo do limite |
| 4 | Dados pessoais | OK. Não há endereço, contato, saúde nem vida familiar. O local do show de 2019 continua fora. "Martha Barros, filha do poeta" é crédito de autoria das imagens, como a fonte traz |
| 5 | Tom | OK. Não há primeira pessoa nem superlativo. "O sucesso de Crianceiras a ofuscou" vem atribuído à matéria de 2024 |
| 6 | Divergências | OK. Aparecem com as fontes: origem da ideia (duas décadas antes de 2012 e visita em 2007), residência (Campo Grande em 2012, São Paulo em 2024) e métricas de circulação. A ce2026quintana diz "criado em Campo Grande desde os 10 anos" e não afirma onde ele mora hoje, então não contradiz |
| 7 | Ficha | OK. "Atividade" tem apoio em cgn2024camillo ("Cantor, compositor, produtor cultural, multimídia e instrumentista"), e "Grupos" em cgn2022hermanos. Não há valor numérico |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** São dois veículos independentes, *Campo Grande News* (10 notas) e *Correio do Estado* (2). A trajetória (l. 18 a 20) depende de uma só matéria (ver ATENÇÕES) |
| 9 | Ligações | OK, conferido à mão: os 24 identificadores existem na lista-mestra. Há dúvida de homônimo em `rodrigo-teixeira` |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-29`; identificador no padrão; resumo com cerca de 205 caracteres |

## PROBLEMAs

Todos são de frase além da fonte (ponto 1). Cada um se resolve trocando uma expressão ou uma nota. Não corrigi, porque apoio de frase é tarefa do redator.

**P1. L. 18, "com mais de 25 anos de carreira".** A cgn2024camillo diz "25 anos de carreira", sem "mais de". Confirmei duas vezes nesta sessão. O "mais de" vem do dossiê. Correção: tirar "mais de".

**P2. L. 38, "com organização do [[moinho-cultural|Instituto Moinho Cultural Sul-Americano]]".** A cgn2025poetica diz: "O projeto é idealizado pelo Instituto Moinho Cultural Sul-Americano". A matéria não fala em organização. O dossiê registrou "organização", e o erro vem de lá. Correção: "idealizado pelo".

**P3. L. 26, "Crianceiras é um projeto infantil idealizado por ele".** A nota dessa frase é cgn2012multi. Ela traz os dez poemas musicados, mas não diz quem idealizou o projeto. Duas notas que já estão no verbete dizem isso: cgn2024crianceiras ("Idealizado pelo cantor e compositor sul-mato-grossense Márcio de Camillo") e cgn2019crianceiras ("conta o idealizador"). Correção: acrescentar `[^cgn2024crianceiras]` à frase.

## ATENÇÕES

- **Fonte única: não se aplica ao verbete**, mas se aplica a trechos. A trajetória (Unesco, Espanha e Portugal, viola de arame, Xarabanda, Associação de Músicos do Pantanal, residência em São Paulo) vem só da cgn2024camillo. Onde buscar a segunda fonte: o artigo da revista *Papéis* (UFMS) sobre Crianceiras, que o dossiê registra como ilegível pela ferramenta, e perfis oficiais do artista, que ainda não foram abertos.
- **L. 18, cópia em nomes de instrumentos.** O trecho "entre a viola caipira e a viola de arame da ilha da Madeira" repete 13 palavras da fonte ("estudo entre a viola caipira e a viola de arame, da Ilha da Madeira"). Quase todas são nomes de instrumento, e só "entre a ... e a" faz a ligação. Por isso não marquei como PROBLEMA. Ainda assim, o redator pode reformular, por exemplo "comparou a viola caipira com a viola de arame madeirense".
- **L. 18, Unesco e 2007.** A fonte diz que, "a partir da experiência de um trabalho desenvolvido para a Unesco, em 2007, mudou-se para Espanha" e depois para Portugal. O ano é o do trabalho, e a fonte fala em mudança, não em viagem. "Em 2007, um projeto ligado à Unesco o levou" é paráfrase aceitável, mas "mudou-se" seria mais fiel.
- **L. 32, "São números atribuídos à produção".** A cgn2018quintana põe os 310 mil na fala do próprio artista e liga o número a *Crianceiras Manoel de Barros*. Sugestão: "atribuídos ao próprio artista".
- **L. 32, ano da indicação.** A cgn2012multi registra a indicação como melhor álbum infantil, mas não dá o ano. O ano 2012 está na cgn2018novo. A frase "As matérias de 2012 e 2018 registram indicação... em 2012" pode ser ajustada.
- **L. 28 e l. 30, estreias em Campo Grande.** As estreias de 4 out. 2012 e 19 maio 2018 estão narradas como fato. As matérias são do mesmo dia ("estreia nesta quinta-feira (4)") e da véspera ("estreia neste sábado (19)"). É a forma branda do antigo P1. A temporada de São Paulo de 2018 está confirmada pela matéria de maio ("Depois de uma temporada de três meses em São Paulo").
- **Homônimo em `[[rodrigo-teixeira|Rodrigo Teixeira]]` (l. 36).** A linha da lista-mestra descreve um jornalista e músico, autor de *Os Pioneiros*, e está `em-lote`. Ela anota que pode ser o mesmo integrante do trio, "a confirmar". Continua em aberto.
- **Grafia "Mario" e "Mário" Quintana.** As fontes usam as duas. Não alterei.
- **Lista-mestra (para o garimpeiro).** `instituto-moinho-cultural-sul-americano` (l. 205) duplica `moinho-cultural`. O verbete usa `moinho-cultural`, e está certo.

## Corrigido direto

- As 12 notas de fonte ganharam "Acesso em 29 out. 2026.", como pede o formato de `modelos/verbete.md`. Todas foram abertas nesta sessão. Não muda nenhum fato.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Não criei arquivo de proposta e não mudei a situação na fila, porque o Bash foi negado e `node scripts/fila.mjs marcar` não rodou. Situação sugerida: `devolvido`.

## Fontes conferidas

Abri nesta sessão todas as notas: cgn2024camillo, cgn2024roca, ce2024roca, cgn2025poetica, cgn2022hermanos, cgn2012multi, cgn2018novo, cgn2018quintana, cgn2019crianceiras, cgn2022quintal, cgn2024crianceiras e ce2026quintana.

Dossiê `dados/dossies/marcio-de-camillo.md`: **não tem seção "Atualização de".**

**Pronto para pull request: não.** Há três PROBLEMAs de frase além da fonte (P1 na l. 18, P2 na l. 38, P3 na l. 26), cada um resolvido com a troca de uma expressão ou de uma nota. Depois disso, `npm run conferir` e `npm run build` precisam passar.
