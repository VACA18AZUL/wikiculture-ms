# Revisão: guadakan

Verbete: `verbetes/guadakan.md`. Revisor editorial, 30 out. 2026. Terceira revisão: o redator reescreveu o verbete (segunda reescrita, 18:51 UTC) e o ligador inseriu links internos depois. Este relatório substitui os anteriores. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. O Bash foi negado nesta sessão, então o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. Conferi as ligações à mão contra a lista-mestra (ponto 9).
- `git diff` do ligador: não pude rodar. Li o arquivo atual inteiro. Os textos dos 20 links repetem o nome que a fonte usa, e não achei fato que não estivesse na versão revisada antes.
- Antes do commit, alguém com Bash precisa rodar `npm run conferir` e `npm run build`.

**Fontes desta revisão:** nesta sessão abri correio2022, ab2023, acritica2026cop e acritica2026paulista. A **cgn2023 devolveu HTTP 403** para a ferramenta, e o archive.org está bloqueado. O que depende só dela vai como NÃO CONFERIDO nesta sessão. Comparei esses trechos com as citações literais registradas na revisão anterior. Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. Turnê de abril de 2023 narrada como fato; entrada gratuita estendida a Dourados | Resolvido no texto. A l. 26 diz "anunciou uma turnê" e dá entrada gratuita só para Campo Grande e Ponta Porã. A redação bate com as citações da cgn2023 registradas antes ("será apresentado", "A apresentação será às 18h", "A turnê termina em Dourados"). Não reabri a cgn2023 (403) |
| ATENÇÃO. Cargo de Márcia Rolon só na versão de 2026 | Resolvido. A l. 36 traz as duas versões: diretora-executiva (ab2023, correio2022) e diretora artística (acritica2026cop). Confirmei as duas nesta sessão |
| P1 a P5 da primeira revisão | Continuam resolvidos. Reconferi as l. 24, 28, 30 e 32 contra as fontes abertas |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, l. 22, "queimadas recentes"). Os trechos que dependem só da cgn2023 estão NÃO CONFERIDOS nesta sessão: l. 24 (última frase), l. 26, classificação de 14 anos na l. 28 e regência de José Maikon na l. 38. O resto está OK |
| 2 | Link abre | OK para quatro notas, com autor, data e título conferidos. A cgn2023 está NÃO CONFERIDA: a página devolveu 403 para a ferramenta. Parece bloqueio a robôs, não link quebrado, porque abriu na revisão anterior. Não há bloco `links` |
| 3 | Sem cópia | OK. A maior coincidência é "concebida a partir do mito indígena guató" (l. 22; ab2023: "A peça é concebida a partir do mito indígena Guató"), com sete palavras. Depois vem "mais de 17 milhões de animais vertebrados" (l. 22), também com sete. Os horários da l. 28 estão com redação própria |
| 4 | Dados pessoais | OK. Nada a remover |
| 5 | Tom | OK. A frase de Márcia Rolon sobre o espetáculo ter "rodado o Brasil" ficou fora |
| 6 | Divergências | OK. Aparecem a classificação (10 e 14 anos), o cargo de Márcia Rolon (executiva e artística), a "estreia" no Rio em 2023 junto com a primeira apresentação em Corumbá, a regência por fonte e ano e o tema da versão de 2026 sem o mito guató |
| 7 | Ficha | OK. Tipo: ab2023 e correio2022. Realização: ab2023. Concepção cênica e direção geral: correio2022 ("concepção cênica e direção-geral"). Coreografia: correio2022 e acritica2026cop. Primeira apresentação anunciada: correio2022. Patrocínio (2023): ab2023. O único valor com número está entre aspas |
| 8 | Força da fonte | OK. Quatro veículos de imprensa: *Correio do Estado*, *Agência Brasil*, *Campo Grande News* e *A Crítica de Campo Grande* (duas matérias) |
| 9 | Ligações | OK. Os 20 identificadores estão na lista-mestra, e `moinho-cultural` tem verbete. Ficam sem link nomes que não têm linha: Centro de Convenções do Pantanal, Uerj, MASP e Lei Rouanet. Ver ATENÇÕES sobre a linha duplicada do Femina Vox |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; o resumo tem cerca de 165 caracteres |

## PROBLEMAs

Ficam para o redator. Não é dado pessoal.

**P1. L. 22: "A reportagem associa o tema às queimadas recentes".** A ab2023 não usa "recente" nem "recentes" em nenhum ponto. A frase dela é de Márcia Rolon: "Esse espetáculo, em especial, surge a partir do momento em que vivemos as queimadas no Pantanal." O qualificativo "recentes" vai além da fonte. Correção: tirar "recentes" ou dizer "às queimadas no Pantanal". O resto da frase está sustentado: a reportagem liga o tema às queimadas, e a fala é da diretora.

## ATENÇÕES

- **cgn2023 inacessível nesta sessão (403).** Quatro trechos dependem só dela: a primeira apresentação no Moinho In Concert (l. 24, última frase), toda a l. 26 (turnê, datas, FESTOP, gratuidade), a classificação de 14 anos (l. 28) e a regência de José Maikon em abril de 2023 (l. 38). A redação bate com as citações literais da revisão anterior, mas alguém precisa reabrir a página no navegador antes do pull request.
- **Significado do nome.** A correio2022 diz, literalmente: "Guadakan, em idioma guató, significa Pantanal." O dossiê põe isso em "Não confirmado", mas a frase está na fonte. É pista para o redator. Não acrescentei.
- **Grafia do regente.** A correio2022 traz "José Maikon Amorim Alves" e, mais adiante, "José Maikson". O dossiê registra "Maikson" também na cgn2024sp. O verbete usa "Maikon", que é a grafia da cgn2023 e da primeira menção na correio2022. Vale anotar a variante em `observacoes` da lista-mestra.
- **Linha duplicada na lista-mestra.** `femina-vox` e `forum-internacional-femina-vox` descrevem o mesmo evento, com a mesma fonte (acritica2026paulista). O verbete usa a segunda. Estamos no fluxo paralelo, então não mexi na lista-mestra: o garimpeiro decide qual linha fica.
- **MASP, dia 18.** Só o subtítulo da acritica2026paulista diz que a companhia "participa do evento [...] no MASP". O corpo do texto diz apenas que o MASP sedia o evento. A frase da l. 32 está sustentada, mas por uma linha só.
- **Fontes ainda fora.** Continuam fora a cgn2023bonito e a cgn2024sp (Bonito, Libras, São Paulo 2024, Arce Correia, Suelen Garcez, Laryssa Durigon). Elas também confirmariam que a turnê de 2023 aconteceu além do anúncio.

## Corrigido direto

Nada. Não achei erro mecânico: todas as notas definidas são usadas, o formato das notas está igual em todas, o valor numérico da ficha está entre aspas, os identificadores estão corretos e a ficha não tem `[[...]]` (o template mostra a ficha como texto puro).

Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

correio2022, ab2023, acritica2026cop e acritica2026paulista, abertas em 30 out. 2026. A cgn2023 não abriu nesta sessão (HTTP 403).

**Pronto para pull request: não.** O P1 da revisão anterior foi resolvido no texto. Falta um PROBLEMA novo e pequeno (P1, l. 22, "recentes"), que se resolve tirando uma palavra. Antes do pull request também é preciso rodar `npm run conferir` e `npm run build`, que não rodaram nesta sessão, e reabrir a cgn2023.
