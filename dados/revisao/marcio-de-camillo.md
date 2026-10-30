# Revisão: marcio-de-camillo

Verbete: `verbetes/marcio-de-camillo.md`, segunda reescrita do redator depois da devolução de 29 out. 2026. Revisor editorial, 30 out. 2026. Este relatório substitui o anterior. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. A permissão do Bash negou o comando nesta sessão.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: rodou. Todos os identificadores estão na lista-mestra. As menções sem link que ele aponta (l. 24 e l. 34) são títulos de seção. A da l. 30 é uma repetição de "Teatro Glauce Rocha" num parágrafo em que o nome já tem link.
- Alguém precisa rodar `npm run conferir` e `npm run build` antes do pull request. `scripts/rodada.sh` roda o primeiro ao fim da rodada.

**Fontes desta revisão:** abri nesta sessão as 12 notas. Todas abriram, inclusive as dez do *Campo Grande News*. Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral.

## PROBLEMAs da revisão anterior

| Antigo | Situação |
|---|---|
| P1, l. 18: "mais de 25 anos de carreira" | **Resolvido.** Agora diz "com 25 anos de carreira". A fonte diz "Ao longo de seus 25 anos de carreira". |
| P2, l. 38: "organização" do Moinho Cultural | **Resolvido.** Agora diz "projeto idealizado pelo". A fonte diz "O projeto é idealizado pelo Instituto Moinho Cultural Sul-Americano". |
| P3, l. 26: idealização sem nota | **Resolvido em parte pelo redator e completado nesta revisão.** O redator pôs `[^cgn2024crianceiras]`, que diz que ele é o idealizador, mas tirou `[^cgn2012multi]`, a única nota que traz os dez poemas. A cgn2024crianceiras não dá esse número. O registro do redator no dossiê diz "nota cgn2024crianceiras acrescentada", então a troca foi engano. Pus a nota de volta (ver "Corrigido direto"). |

ATENÇÕES antigas: o trecho da viola de arame foi reformulado ("estudou a viola caipira em comparação com a viola de arame madeirense"), e não há mais sequência longa. Os 310 mil foram atribuídos ao próprio artista. O ano da indicação ao prêmio foi atribuído à matéria de 2018. As demais seguem abaixo.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, depois da correção da nota na l. 26. Conferi cada parágrafo contra a nota citada |
| 2 | Link abre | OK. As 12 notas abrem a matéria citada, com autor e data conferidos. Não há bloco `links` |
| 3 | Sem cópia | OK. As maiores sequências iguais têm sete palavras: "fundou a Associação de Músicos do Pantanal" (l. 20) e "de Campo Grande para refazer a viagem" (l. 36). As duas ficam abaixo do limite |
| 4 | Dados pessoais | OK. A cidade de residência (Campo Grande em 2012, São Paulo em 2024) vem das matérias, sem endereço. "Martha Barros, filha do poeta" é crédito das imagens. O professor citado na ce2026quintana e o local do show de 2019 ficaram fora |
| 5 | Tom | OK. Não há primeira pessoa nem superlativo |
| 6 | Divergências | OK. Aparecem com as fontes: origem da ideia (duas décadas antes de 2012 e visita em 2007), residência e métricas de circulação. A ce2026quintana diz "Criado em Campo Grande desde os 10 anos" e não diz onde ele mora hoje, então não contradiz |
| 7 | Ficha | OK. "Atividade" tem apoio na cgn2024camillo ("Cantor, compositor, produtor cultural, multimídia e instrumentista") e "Grupos" na cgn2022hermanos. Não há valor numérico |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única no verbete.** Há dois veículos independentes: *Campo Grande News* (10 notas) e *Correio do Estado* (2). A trajetória das l. 18 a 22 depende de uma só matéria (ver ATENÇÕES) |
| 9 | Ligações | OK. Os 24 identificadores estão na lista-mestra. Há dúvida de homônimo em `rodrigo-teixeira` |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 205 caracteres |

## PROBLEMAs

Nenhum em aberto.

## ATENÇÕES

- **Fonte única: não se aplica ao verbete**, mas se aplica a um trecho. A trajetória (Unesco, Espanha e Portugal, viola de arame, Xarabanda, Associação de Músicos do Pantanal, residência em São Paulo) vem só da cgn2024camillo. A segunda fonte pode estar no artigo da revista *Papéis* (UFMS) sobre Crianceiras, que o dossiê registra como ilegível pela ferramenta, ou em perfis oficiais do artista, que ainda não foram abertos.
- **L. 18, Unesco e 2007.** A fonte diz que, "a partir da experiência de um trabalho desenvolvido para a Unesco, em 2007, mudou-se para Espanha" e depois para Portugal. O verbete diz "um projeto ligado à Unesco o levou à Espanha e a Portugal". É paráfrase aceitável, mas "mudou-se" seria mais fiel.
- **L. 30, "para o sábado e o domingo seguintes".** A ce2026quintana (8 set. 2026) diz só "No sábado e domingo". O link de ingresso na matéria tem a data 20-09-2026, o que não bate com o fim de semana logo depois de 8 de setembro (12 e 13). Sugestão: tirar "seguintes".
- **L. 28 e l. 30, estreias em Campo Grande.** A de 4 out. 2012 e a de 19 maio 2018 estão narradas como fato, e as matérias são do mesmo dia e da véspera. Notas que já estão no verbete confirmam o ano: a cgn2018novo diz "em cartaz desde 2012", e a cgn2018quintana confirma a temporada de três meses em São Paulo. Por isso fica como ATENÇÃO, não como PROBLEMA. O dia e o local continuam só no anúncio.
- **L. 42, "idealização" no item de 2012.** A nota do item, cgn2012multi, não usa a palavra. Ela diz que a ideia surgiu de uma visita dele ao poeta e que ele pediu autorização ao poeta. Isso sustenta o item. Se o redator quiser, pode acrescentar `[^cgn2024crianceiras]`.
- **Homônimo em `[[rodrigo-teixeira|Rodrigo Teixeira]]` (l. 36).** A linha da lista-mestra descreve um jornalista e músico, autor de *Os Pioneiros*, e anota "a confirmar" se é o mesmo integrante do trio. Continua em aberto.
- **Grafia "Mario" e "Mário" Quintana.** As fontes usam as duas. Não alterei.

## Corrigido direto

- L. 26: `[^cgn2012multi]` voltou para a frase "Crianceiras é um projeto infantil idealizado por ele, em que musicou dez poemas de Manoel de Barros", ao lado de `[^cgn2024crianceiras]`. A cgn2012multi traz as "10 canções", que são os "poemas musicados". A cgn2024crianceiras traz o idealizador e não dá número. A nota já existia no verbete e estava nessa frase antes da reescrita. O registro do redator no dossiê diz "acrescentada", não "trocada". Nenhum fato novo.

Nada mais foi alterado. `status` continua `rascunho`. Não mudei a situação na fila. Situação sugerida: `pronto-para-lote`, sem observação de fonte única.

## Fontes conferidas

Abri em 30 out. 2026 todas as notas: cgn2024camillo, cgn2024roca, ce2024roca, cgn2025poetica, cgn2022hermanos, cgn2012multi, cgn2018novo, cgn2018quintana, cgn2019crianceiras, cgn2022quintal, cgn2024crianceiras e ce2026quintana.

Dossiê `dados/dossies/marcio-de-camillo.md`: **não tem seção "Atualização de".**

**Pronto para pull request: sim**, desde que `npm run conferir` e `npm run build` passem. Eles não rodaram nesta sessão.
