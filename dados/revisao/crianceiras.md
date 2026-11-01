# Revisão: crianceiras

Verbete: `verbetes/crianceiras.md`, segunda revisão, depois da reescrita do redator (`atualizado: 2026-10-31`). Revisor editorial, 1º nov. 2026. Substitui o relatório anterior, de 31 out. 2026, que tinha três PROBLEMAs. As quatro notas foram reabertas nesta sessão com WebFetch, que devolve resumo e citações curtas, não o texto bruto. Os trechos usados na conferência de cópia foram pedidos como citação literal. Dossiê conferido: `dados/dossies/crianceiras.md`.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O Bash foi negado nesta sessão, e o comando não pôde rodar.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO.** As ligações foram conferidas à mão, por busca na lista-mestra.

Os dois comandos precisam rodar e passar antes do pull request.

## PROBLEMAs da revisão anterior

1. **l. 25, professores atribuídos a Camillo: resolvido.** O texto agora diz "Segundo o *Correio do Estado*, em 2026, desde as primeiras apresentações o projeto passou a ser utilizado por professores", sem atribuir a frase a Camillo. A correção, porém, criou um problema de cópia (ver PROBLEMAs).
2. **l. 41, fala x narração: resolvido.** Só "transgeracional" vem atribuído a Camillo. A volta de quem viu o espetáculo na infância, agora com os filhos, aparece como "narração própria" da matéria. Confere com a fonte.
3. **l. 23 e 29, "texto de divulgação do Sesc": resolvido.** As linhas dizem "matéria do portal ABC do ABC" e "Segundo a matéria". A nota diz que o texto é assinado "Redação", como na página.

As ATENÇÕES antigas também foram atendidas: a l. 53 diz "voz, violão e viola caipira", como na fonte, e não mais "criação e música". A l. 39 tira os dias ("num sábado e num domingo") do corpo da matéria, que diz "No sábado e domingo", e não do link de ingresso.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada frase confere com a fonte citada: oito anos em cartaz, vizinho e amigo, Gloob desde 2012, aplicativo gratuito e indicação de 2012 a melhor álbum infantil (Catraca); CD de 2011, espetáculo concebido a partir do CD, datas de novembro de 2016 e iluminuras que contracenam (ABC do ABC); origem no CD, TV, aplicativo, teatro de papel, enredo, temporada sem ano, ficha e repertório (guia SP para Crianças); temporada de 2026, 55 min, classificação livre, ficha, repertório, gêneros e UFMS (*Correio do Estado*) |
| 2 | Link abre | OK. As quatro notas abriram e levam à página certa |
| 3 | Sem cópia | PROBLEMA. Há 10 palavras seguidas iguais à fonte na l. 25 (ver abaixo). Os outros trechos comparados ficam abaixo de nove palavras |
| 4 | Dados pessoais | OK. A filha de Camillo (motivação do CD na Catraca) e o parentesco de Martha Barros ("filha do poeta", na Catraca) ficaram fora |
| 5 | Tom | OK. "Transgeracional" vem atribuído. O elogio da Catraca ("um dos maiores poetas brasileiros") não foi reproduzido |
| 6 | Divergências | OK. A grafia do prêmio (ABC do ABC "da", Catraca "de") e o ano da indicação, só na Catraca, estão no texto. As divergências do dossiê sobre a origem da ideia e a indicação de 2016 dependem de matérias do *Campo Grande News* que não abriram e ficaram fora com o texto correspondente. Nada foi escondido |
| 7 | Ficha | OK. Idealização: `catraca2020`. Direção: `abc2016sesc`, `catraca2020`, `spc2018pompeia`. Formato: as quatro. Ano 2011: `abc2016sesc`. Nenhum valor só numérico |
| 8 | Força da fonte | OK. Catraca Livre (assinada, datada), ABC do ABC (datada) e *Correio do Estado* (assinada, datada) são sólidas. O guia São Paulo para Crianças é fraco (sem autor, só data de cadastro), mas não sustenta o verbete sozinho |
| 9 | Ligações | OK. Os 23 identificadores do texto estão na lista-mestra. Gloob, Teatro-D, Luana Oliveira e Leandro Tenório não têm linha e estão sem link, corretamente |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 170 caracteres |

## PROBLEMAs

1. **l. 25, cópia.** O verbete diz: "desde as primeiras apresentações o projeto passou a ser utilizado por professores." O *Correio do Estado* diz, literalmente: "Desde suas primeiras apresentações, o projeto passou a ser utilizado por professores". Há 10 palavras seguidas iguais: "primeiras apresentações, o projeto passou a ser utilizado por professores". O limite é oito. O redator deve reescrever com palavras próprias, mantendo o que a matéria diz e a atribuição à narração do jornal, sem atribuir a Camillo.

## ATENÇÕES

- **Local da temporada de 2020 (l. 31).** O corpo da Catraca Livre dá Teatro-D, com endereço no Itaim Bibi. O rodapé traz contato do Teatro Cacilda Becker (Funarte), com DDD 21. O verbete segue o corpo, que é claro. Não foi tratado como divergência.
- **Discografia, título do segundo CD (l. 46).** O guia nomeia os CDs como "Crianceiras Manoel de Barros" e "Crianceiras Mário Quintana". O primeiro aparece como *Crianceiras* no ABC do ABC, que é a nota do item. Sem erro, mas as fontes grafam o primeiro título de dois jeitos.
- **Fonte fraca.** O guia São Paulo para Crianças sustenta sozinho a seção sobre o Sesc Pompeia e a ficha técnica de lá. O texto avisa que a página não tem autor nem ano.
- **Eventos anunciados.** A temporada de 2026 vem de matéria anterior às sessões. O texto avisa (l. 39).
- **Matérias do *Campo Grande News*.** Deram 403 na redação e ficaram fora. Por isso o verbete não traz o ano de estreia dos espetáculos nem a indicação de 2016. Reabrir numa próxima rodada pode completar o texto.

## Corrigido direto

Nada. Não havia erro mecânico.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada. A situação na fila não mudou, porque `fila.mjs` depende do Bash, que foi negado.

## Fontes conferidas

Catraca Livre (Gabriela Rassy, 20 fev. 2020, atualizada em 28 jul. 2020); ABC do ABC (Redação, 8 nov. 2016); guia São Paulo para Crianças (cadastro de 20 mar. 2018, sem autor, fonte fraca); *Correio do Estado* (Mariana Piell, 8 set. 2026). Não é fonte única.

**Pronto para pull request: não.** Os três PROBLEMAs antigos foram resolvidos, mas a cópia de 10 palavras na l. 25 volta ao redator. Antes do pull request, também é preciso rodar `npm run conferir` e `npm run build`.
