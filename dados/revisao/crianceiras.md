# Revisão: crianceiras

Verbete: `verbetes/crianceiras.md`, terceira revisão, depois de nova reescrita do redator (`atualizado: 2026-10-31`). Revisor editorial, 1º nov. 2026. Substitui o relatório anterior, que tinha um PROBLEMA (cópia de 10 palavras na l. 25). As quatro notas foram reabertas nesta sessão com WebFetch, que devolve resumo e citações curtas, não o texto bruto. Os trechos usados na conferência foram pedidos como citação literal. Dossiê conferido: `dados/dossies/crianceiras.md`.

## Portão de evidências

- `npm run conferir`: **passou.** "28 verbetes conferidos. [...] Nenhum erro." Sem aviso para `crianceiras`.
- `npm run build`: **passou.** 48 páginas geradas, "Complete!".
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO.** O Bash recusou o comando nesta sessão. As ligações foram conferidas pela lista de verbetes desejados que o `conferir` imprime.

## PROBLEMA da revisão anterior

1. **l. 25, cópia: resolvido.** A frase agora diz: "O *Correio do Estado* registra, em 2026, que docentes adotaram o projeto em sala de aula já nas primeiras apresentações." Nenhuma sequência passa de oito palavras iguais ao trecho da fonte ("Desde suas primeiras apresentações, o projeto passou a ser utilizado por professores como ferramenta..."). A reescrita, porém, acrescentou "em sala de aula", que a fonte não diz (ver PROBLEMAs).

O resto do texto não mudou desde a revisão anterior. Os três PROBLEMAs da primeira revisão (professores atribuídos a Camillo, fala x narração, "texto de divulgação do Sesc") continuam resolvidos.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA. Na l. 25, "em sala de aula" não está na fonte (ver abaixo). O resto confere com a fonte citada: oito anos em cartaz, vizinho e amigo, Gloob desde 2012, aplicativo gratuito, indicação de 2012 a melhor álbum infantil, ferramenta pedagógica e ficha de 2020 (Catraca); CD de 2011, espetáculo concebido a partir do CD, "Prêmio da Música Brasileira", datas de novembro de 2016 e iluminuras que contracenam (ABC do ABC); origem no CD, TV, aplicativo, material didático, sessões para escolas, teatro de papel, enredo, temporada sem ano, ficha e repertório (guia SP para Crianças); temporada de 2026, 55 min, classificação livre, ficha, repertório, gêneros, 120 anos e "transgeracional" (*Correio do Estado*) |
| 2 | Link abre | OK. As quatro notas abriram e levam à página certa |
| 3 | Sem cópia | OK. A cópia da l. 25 saiu. Os trechos comparados ficam abaixo de nove palavras iguais |
| 4 | Dados pessoais | OK. A filha de Camillo (motivação do CD na Catraca) e o parentesco de Martha Barros ("filha do poeta", na Catraca) ficaram fora |
| 5 | Tom | OK. "Transgeracional" vem atribuído. O elogio da Catraca ("um dos maiores poetas brasileiros") não foi reproduzido |
| 6 | Divergências | OK. A grafia do prêmio (ABC do ABC "da", Catraca "de") e o ano da indicação, só na Catraca, estão no texto. As divergências do dossiê sobre a origem da ideia e a indicação de 2016 dependem de matérias do *Campo Grande News* que não abriram e ficaram fora com o texto correspondente. Nada foi escondido |
| 7 | Ficha | OK. Idealização: `catraca2020`. Direção: `abc2016sesc`, `catraca2020`, `spc2018pompeia`. Formato: as quatro. Ano 2011: `abc2016sesc`. Nenhum valor só numérico |
| 8 | Força da fonte | OK. Catraca Livre (assinada, datada), ABC do ABC (datada) e *Correio do Estado* (assinada, datada) são sólidas. O guia São Paulo para Crianças é fraco (sem autor, só data de cadastro), mas não sustenta o verbete sozinho |
| 9 | Ligações | OK. Os identificadores do texto existem como verbete (`marcio-de-camillo`) ou aparecem na lista de verbetes desejados do `conferir`, o que confirma que estão na lista-mestra. Gloob, Teatro-D, Luana Oliveira e Leandro Tenório não têm linha e estão sem link, corretamente. `ligacoes.mjs` não rodou |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 170 caracteres. As quatro notas definidas são usadas |

## PROBLEMAs

1. **l. 25, "em sala de aula" sem apoio.** O verbete diz: "O *Correio do Estado* registra, em 2026, que docentes adotaram o projeto em sala de aula já nas primeiras apresentações.[^ce2026quintana]". A matéria diz que, desde as primeiras apresentações, o projeto passou a ser usado por professores "como ferramenta" para apresentar a poesia a crianças e adolescentes (seção "A importância da educação"). Em outro parágrafo, diz que o projeto conquistou "espaço também nas escolas". As expressões "sala de aula", "aula" e "alunos" não aparecem na matéria. Uso por professores pode incluir levar turmas ao teatro (o guia SP para Crianças fala em sessões exclusivas para escolas), então "em sala de aula" vai além da fonte. Correção sugerida ao redator: tirar "em sala de aula" ou dizer, com palavras próprias, que professores passaram a usar o projeto para apresentar poesia a crianças e adolescentes. É ajuste de poucas palavras.

## ATENÇÕES

- **Local da temporada de 2020 (l. 31).** O corpo da Catraca Livre dá Teatro-D, com endereço no Itaim Bibi. O rodapé traz contato do Teatro Cacilda Becker (Funarte), com DDD 21. O verbete segue o corpo, que é claro. Não foi tratado como divergência.
- **Discografia, título do segundo CD (l. 46).** O guia nomeia os CDs como "Crianceiras Manoel de Barros" e "Crianceiras Mário Quintana". O primeiro aparece como *Crianceiras* no ABC do ABC, que é a nota do item. Sem erro, mas as fontes grafam o primeiro título de dois jeitos.
- **Fonte fraca.** O guia São Paulo para Crianças sustenta sozinho a seção sobre o Sesc Pompeia e a ficha técnica de lá. O texto avisa que a página não tem autor nem ano.
- **Eventos anunciados.** A temporada de 2026 vem de matéria anterior às sessões. O texto avisa (l. 39).
- **Matérias do *Campo Grande News*.** Deram 403 na redação e ficaram fora. Por isso o verbete não traz o ano de estreia dos espetáculos nem a indicação de 2016. Reabrir numa próxima rodada pode completar o texto.

## Corrigido direto

Nada. Não havia erro mecânico.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada. A situação na fila não mudou: o pedido não incluiu marcar a fila, e o Bash recusou os scripts `node` nesta sessão.

## Fontes conferidas

Catraca Livre (Gabriela Rassy, 20 fev. 2020, atualizada em 28 jul. 2020); ABC do ABC (Redação, 8 nov. 2016); guia São Paulo para Crianças (cadastro de 20 mar. 2018, sem autor, fonte fraca); *Correio do Estado* (Mariana Piell, 8 set. 2026). Não é fonte única.

**Pronto para pull request: não.** A cópia da l. 25 foi resolvida, e `npm run conferir` e `npm run build` passaram. Falta tirar ou reescrever "em sala de aula" na l. 25, que a fonte não sustenta. Feito esse ajuste, não há outro impedimento.
