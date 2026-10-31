# Revisão: gravadora-california

Verbete: `verbetes/gravadora-california.md`, primeira revisão (`atualizado: 2026-10-31`). Revisor editorial, 31 out. 2026. O verbete se apoia só no livro *Os Pioneiros* (Teixeira, 2009), lido pela ficha `dados/fontes/os-pioneiros/fichas/gravadora-california.md`, conferida também com as fichas `delio-e-delinha`, `adail`, `amambay-cantor` e com `discografia.csv`. Nota única (`[^pioneiros]`), sem link. Os links internos acabaram de ser inseridos pelo ligador e foram conferidos um a um.

## Portão de evidências

- `npm run conferir`: **passou** ("23 verbetes conferidos. Nenhum erro."), antes e depois das correções.
- `npm run build`: **passou** ("42 page(s) built"), antes e depois das correções.
- `node scripts/ligacoes.mjs`: nenhuma menção sem link neste verbete.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA.** l. 20, segunda frase: "O livro [...] não traz o ano de fundação nem o de encerramento" vai além das fichas (PROBLEMA 2). O resto confere com a ficha e com `discografia.csv` (discos, anos, gravadora, produção e direção de Mário Vieira) |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link |
| 3 | Sem cópia | OK em relação às fichas (algumas frases seguem a ficha quase palavra por palavra, l. 20 e 24, mas a ficha já é paráfrase). Comparação com o texto do livro NÃO CONFERIDA (o texto não está no repositório) |
| 4 | Dados pessoais | OK. Nenhum |
| 5 | Tom | OK. "Uma das maiores gravadoras do país" vem atribuído a Márcio Barbosa; "onde a Califórnia mais havia penetrado", à contracapa de 1968 |
| 6 | Divergências | **PROBLEMA.** l. 32: a fala de Délio sobre o disco da Chantecler aparece sem a versão de Delinha, que a ficha da gravadora manda ver (PROBLEMA 1). As outras versões (contrato x disco pago; Benites x Delinha sobre quem pagava) estão no texto |
| 7 | Ficha | OK. Tipo, Local (São Paulo, seção "O Chamado de Zé Corrêa"), Gestão (Mário Vieira) e período (1959 ao fim dos anos 1970, seções "Apresentação / O Livro" e "Gravadora Califórnia") têm apoio no texto. Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa. **Fonte única** (o dossiê deixou de fora Recanto Caipira e Glossário, fracas) |
| 9 | Ligações | OK depois de correção: `amambay-e-amambai` trocado por `amambay-cantor` na l. 20 (ver Corrigido direto). Todos os identificadores estão em `verbetes/` ou na lista-mestra. Os links do ligador não mudaram o sentido de nenhuma frase |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 165 caracteres |

## PROBLEMAs

1. **l. 32, divergência escondida sobre a Chantecler.** Trecho: "Segundo [[delio|Délio]], a Califórnia reagiu mal ao disco que a dupla gravou pela [[chantecler|Chantecler]].[^pioneiros]"
   O que a fonte diz: a ficha `gravadora-california.md` (seção "Chantecler") traz a frase e avisa, nas divergências: "Ver divergência sobre a saída da dupla em Délio e Delinha". A ficha `delio-e-delinha.md` registra as duas versões da saída da Califórnia: Délio diz que a gravadora ficou descontente com o disco da Chantecler **e depois se acertou**; Delinha diz que a dupla Sulino e Marrueiro os fez sair e que Délio brigou com Mário Vieira. O verbete dá só metade da versão de Délio (sem o acerto) e nada da de Delinha, o que sugere ruptura por causa da Chantecler. Para o redator: registrar as duas versões, atribuídas, ou tirar a frase. A ficha não diz a seção da versão de Delinha; conferir antes de citar.
2. **l. 20, afirmação sobre o que o livro não traz.** Trecho: "O livro de [[rodrigo-teixeira|Rodrigo Teixeira]] não traz o ano de fundação nem o de encerramento da gravadora.[^pioneiros]"
   O que a fonte diz: as fichas são leituras de trechos ("no trecho lido"; uma delas registra "A cidade-sede não aparece no trecho", e outra traz São Paulo). Nenhuma ficha afirma que o livro inteiro não dá essas datas, e `dados/fontes/os-pioneiros/LEIA-ME.md` diz que fato fora da ficha não pode ser atribuído ao livro. O dossiê põe as datas em "Não confirmado", o que é diferente. Para o redator: tirar a frase (a ausência das datas já se vê na ficha, que não tem campo de fundação).

## ATENÇÕES

- **Fonte única, nota única.** Todo o verbete cita `[^pioneiros]`, que junta dez seções. Confere, mas o leitor não sabe qual seção sustenta cada frase. Sugestão ao redator: separar notas por seção, como em `maciel-correa`.
- **l. 26, Márcio Barbosa.** Citado sem dizer quem é, e sem linha na lista-mestra. A ficha também não diz. Fica para o garimpeiro decidir se é nome novo.
- **l. 26, "mais havia penetrado".** Verbo provavelmente vindo da contracapa (a ficha usa "penetrou"). Sem cópia longa, mas vale conferir no livro.
- **l. 24 e 39, Maciel Corrêa.** A ficha da gravadora diz que Maciel gravou pelo selo; a discografia credita *Flor da Saudade* a Irmãos de Mato Grosso. O verbete registra as duas formas ("grupo de Maciel Corrêa"). Sem erro.
- **Datas da empresa.** Fundação e encerramento seguem sem fonte (dossiê, "Não confirmado").

## Corrigido direto

- **l. 20, identificador de link.** `[[amambay-e-amambai|Amambay]]` virou `[[amambay-cantor|Amambay]]`: quem fala é Amambay (Ermídio Umar), que tem linha própria na lista-mestra, e não a dupla. Link do redator, anterior ao ligador.
- **l. 46, formato da nota `[^pioneiros]`.** Tirada a frase "Lido pela ficha em `dados/fontes/os-pioneiros/fichas/gravadora-california.md`.", fora do formato de citação de `dados/fontes/os-pioneiros/LEIA-ME.md` e que mostrava caminho interno do repositório no site (mesma correção feita antes em `maciel-correa`). A referência ao livro e às seções ficou igual.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas `gravadora-california`, `delio-e-delinha` (divergência da saída), `adail` (mesmo Adail de Adail e Tesouro), `amambay-cantor`, e por `discografia.csv` (todos os discos da seção Discografia: anos, gravadora Califórnia e produção de Mário Vieira conferem).

**Pronto para pull request: não.** Dois PROBLEMAs para o redator: a divergência sobre a Chantecler na l. 32 e a frase sobre o que o livro não traz na l. 20.
