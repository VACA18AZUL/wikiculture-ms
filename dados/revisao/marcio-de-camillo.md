# Revisão: marcio-de-camillo

Verbete: `verbetes/marcio-de-camillo.md`, versão do redator com os links internos do ligador. Revisor editorial, 29 out. 2026. Os números de linha valem para o arquivo atual.

**Limite desta revisão.** O verbete tem 12 notas. Só as duas do *Correio do Estado* (ce2024roca, ce2026quintana) abriram nesta sessão. As dez do *Campo Grande News* devolveram HTTP 403 ao WebFetch. Tentei também sem `www` e pelo domínio móvel, que não existe. O archive.org está bloqueado para a ferramenta e o curl não foi autorizado. O dossiê registra que o redator também recebeu 403 e escreveu "a partir do dossiê, sem releitura". O pesquisador leu essas matérias por resumo de WebFetch. Portanto, **nenhuma frase apoiada só no Campo Grande News foi conferida contra a fonte nesta etapa.**

## Portão de evidências

- `npm run conferir`: **passou** ("11 verbetes conferidos", "Nenhum erro"). Rodado antes e depois das correções.
- `npm run build`: **passou** (24 páginas). Rodado antes e depois das correções.
- `node scripts/ligacoes.mjs`: rodou. Sugeriu três itens, todos falsos positivos: l. 24 é o título de seção "## Crianceiras"; l. 30 é a segunda menção ao Teatro Glauce Rocha no mesmo parágrafo; "Glauce Rocha" → `glauce-rocha` (a atriz) aparece dentro do nome do teatro.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1). O resto ficou **NÃO CONFERIDO** nas frases apoiadas só no Campo Grande News (l. 14, 18, 20, 22, 26, 28, 30 em parte, 32, 36, 38 em parte, 42–44). OK nas frases apoiadas no Correio do Estado (l. 38, primeira parte; l. 45). |
| 2 | Link abre | **NÃO CONFERIDO** para as 10 notas do Campo Grande News (403 à ferramenta; provável bloqueio de robô, não link quebrado). OK para ce2024roca e ce2026quintana: os dois levam à matéria citada, com título, autor e data conferidos. |
| 3 | Sem cópia | OK nas frases do Correio do Estado. **NÃO CONFERIDO** no resto, porque o texto das fontes não foi obtido. |
| 4 | Dados pessoais | OK. Nada de endereço, contato, saúde ou família no verbete. O dossiê cita a filha (origem de Crianceiras) e um parentesco ligado ao nome do Centro de Convenções, e os dois ficaram fora. O Correio diz que Roca "morava em frente à minha casa", e o verbete diz só "vizinho". |
| 5 | Tom | OK. Sem primeira pessoa e sem superlativo. "O sucesso de Crianceiras a ofuscou" vem atribuído à matéria de 2024. Os números de público vêm atribuídos. |
| 6 | Divergências | OK. As do dossiê aparecem: origem da ideia de Crianceiras ("duas décadas antes" e 2007, l. 26), residência (Campo Grande em 2012, São Paulo em 2024, l. 22), métricas de circulação (l. 32) e indicação de 2016 só na matéria de março de 2018 (l. 32). A matéria de 2026 diz que ele foi "criado em Campo Grande desde os 10 anos" e "retorna à cidade". Isso não contradiz o verbete (ver ATENÇÕES). |
| 7 | Ficha | **NÃO CONFERIDO**. "Atividade" (cantor, compositor, instrumentista e produtor cultural) e "Grupos: Hermanos Irmãos" vêm de cgn2024camillo e cgn2022hermanos, que não abriram. ce2024roca confirma só violão e viola caipira. Não há valor numérico. |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** São dois veículos independentes, *Campo Grande News* (10 matérias) e *Correio do Estado* (2). Mas a trajetória (l. 14, 18, 20 e parte da 22) depende de uma única matéria, cgn2024camillo (ver ATENÇÕES). |
| 9 | Ligações | OK depois da correção. Os 25 identificadores existem em `dados/lista-mestra.csv`. Têm verbete: paulo-simoes, trem-do-pantanal, moinho-cultural. Os nomes sem link (Martha Barros, Mario Quintana, Gloob, Unesco, Alex Cavalheri) não têm linha na lista-mestra. Há dúvida de homônimo em `rodrigo-teixeira` (ATENÇÕES). |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29` (hoje), identificador `marcio-de-camillo` no padrão, resumo com cerca de 197 caracteres. |

## PROBLEMAs

**P1. Anúncio contado como fato consumado** (ponto 1; o mesmo tipo de PROBLEMA devolvido em `paulo-simoes`). Pela própria data das notas, as matérias são anteriores aos eventos que o verbete narra no passado:

| Linha | Trecho do verbete | Fonte e data |
|---|---|---|
| 30 | "Em setembro de 2026 houve nova temporada no mesmo teatro, pelos 120 anos de Quintana." | ce2026quintana, 8 set. 2026, **aberta nesta sessão**: o espetáculo "será apresentado no sábado e no domingo". Não confirma que aconteceu e não traz a data exata no texto. |
| 30 | "Em 19 de dezembro de 2022, uma versão acústica foi apresentada na casa de [[manoel-de-barros\|Manoel de Barros]]..." | cgn2022quintal, 16 dez. 2022, título "Casa de Manoel de Barros **terá** espetáculo...". |
| 30 | "Em 22 de setembro de 2024, o espetáculo sobre Barros voltou ao Teatro Glauce Rocha..." | cgn2024crianceiras, 20 set. 2024, título "...volta a Campo Grande". |
| 36 | "Em 2022, o trio lançou nova versão da canção..." | cgn2022hermanos, 9 fev. 2022. Segundo o dossiê, o lançamento estava "previsto para 14/02/2022". |
| 38 | "Em 2025, apresentou-se com [[geraldo-espindola\|Geraldo Espíndola]]... em Dourados (7 de maio), Campo Grande (9 de maio) e Corumbá (13 de maio)" | cgn2025poetica, 6 maio 2025, anterior às três datas. |

Sugestão para o redator: "estava programado", "a matéria anunciou", ou uma fonte posterior que confirme a realização. A lista "Espetáculos" (l. 42–45) já usa formulação neutra ("estreia em...") e não precisa mudar.

## ATENÇÕES

- **Campo Grande News inacessível (403).** Antes do pull request, alguém precisa abrir num navegador as dez notas do Campo Grande News e conferir as frases das l. 14, 18, 20, 22, 26, 28, 30, 32, 36, 38 e 42–44, a ficha e a cópia de texto. O redator também não conseguiu reler essas fontes.
- **Fonte única: não se aplica ao verbete**, mas se aplica a trechos. A trajetória (Unesco em 2007, Espanha e Portugal, viola de arame da Madeira, Xarabanda, Associação de Músicos do Pantanal, residência em São Paulo, "mais de 25 anos de carreira") vem só de cgn2024camillo. Onde buscar a segunda fonte: o artigo da revista *Papéis* (UFMS) sobre Crianceiras, que o dossiê registra como aberto mas ilegível. ce2026quintana já traz "criado em Campo Grande desde os 10 anos", que poderia entrar na l. 22.
- **Dossiê `dados/dossies/marcio-de-camillo.md`: não tem seção "Atualização de".**
- **Homônimo em `[[rodrigo-teixeira|Rodrigo Teixeira]]` (l. 36).** A linha da lista-mestra descreve um jornalista e músico, autor de *Os Pioneiros*, e anota: "pode ser o mesmo Rodrigo Teixeira do trio Hermanos Irmãos, a confirmar". Se não for a mesma pessoa, o link aponta para o verbete errado.
- **Duplicidade na lista-mestra.** `moinho-cultural` e `instituto-moinho-cultural-sul-americano` são a mesma instituição. O ligador usou `moinho-cultural`, que tem verbete, e está certo. A linha duplicada fica para o garimpeiro.
- **l. 28, "no Teatro Prosa do Sesc Horto, em Campo Grande ([[sesc-teatro-prosa|Sesc Teatro Prosa]])".** O parêntese foi posto pelo ligador. A linha `sesc-teatro-prosa` da lista-mestra não diz que o teatro fica no Sesc Horto. Se for o mesmo espaço, fica melhor assim: "no [[sesc-teatro-prosa|Teatro Prosa do Sesc Horto]], em Campo Grande". Não alterei, porque a identidade dos dois não está confirmada em fonte.
- **l. 28 e l. 30, estreias de 2012 e de 2018 em Campo Grande.** As notas são do mesmo dia (cgn2012multi, 4 out. 2012) e da véspera (cgn2018quintana, 18 maio 2018). É a forma branda de P1, aceitável se a matéria diz "estreia hoje". Conferir ao reabrir.
- **l. 32, nota da matéria de 2012.** A frase diz "As matérias de 2012 e 2018 registram indicação...", mas o parágrafo só cita `[^cgn2018novo]`. Pelo dossiê, cgn2012multi também traz a indicação. Como não pude abri-la, não acrescentei a nota. O redator acrescenta `[^cgn2012multi]` depois de conferir.
- **l. 38, "CD coletivo [[geracoes-ms|Gerações MS]]".** ce2024roca fala em "CD *Gerações MS*". "Coletivo" vem do dossiê e não apareceu na extração do Correio.
- **Grafia "Mario" e "Mário" Quintana.** O resumo e a l. 30 (2026) usam "Mario", e o resto usa "Mário". As fontes usam as duas. Não alterei.

## Corrigido direto

- l. 42: `*[[crianceiras|Crianceiras]] [[manoel-de-barros|Manoel de Barros]]*` virou `*[[crianceiras|Crianceiras Manoel de Barros]]*`. O ligador tinha partido o título do espetáculo em dois links, e o segundo levava "Manoel de Barros", parte do título, ao verbete do poeta. O poeta continua ligado nas l. 26 e 30. Não muda nenhum fato.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na lista-mestra não foi mudada.

## Fontes conferidas

- ce2024roca: Da Redação, *Correio do Estado*, 23 set. 2024. **Aberta.** Sustenta a admiração por Roca, "vizinhos e amigos", a faixa "Lá Vem Você de Novo" no CD *Gerações MS*, a estreia de *Do Litoral Central do Brasil* em 24 set. 2024 às 20h no Teatro Glauce Rocha, dentro do Festival Mais Cultura, violão e viola caipira, direção de Luiz André Cherubini (fundador do Grupo Sobrevento) e *Veneno Light* (2006) como base da arte visual.
- ce2026quintana: Mariana Piell, *Correio do Estado*, 8 set. 2026. **Aberta.** Sustenta a temporada anunciada de *Crianceiras Mario Quintana* no Teatro Glauce Rocha (UFMS), pelos 120 anos do poeta. Diz que ele foi "criado em Campo Grande desde os 10 anos" e que "retorna à cidade".
- **Não abertas (403):** cgn2024camillo, cgn2024roca, cgn2025poetica, cgn2022hermanos, cgn2012multi, cgn2018novo, cgn2018quintana, cgn2019crianceiras, cgn2022quintal, cgn2024crianceiras. O conteúdo delas só foi comparado com o que o dossiê registra. No que dá para comparar, o verbete não vai além do dossiê.

**Pronto para pull request: não.** Há um PROBLEMA (P1, com cinco trechos) e dez das doze notas continuam sem conferência contra a fonte nesta etapa, tanto pelo redator quanto pelo revisor. Depois de reescrever P1, alguém precisa reabrir as matérias do Campo Grande News num navegador.
