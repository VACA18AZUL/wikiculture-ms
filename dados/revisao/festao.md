# Revisão: festao

Verbete: `verbetes/festao.md` (`atualizado: 2026-11-01`). Primeira revisão. Revisor editorial, 1 nov. 2026.

Fontes conferidas nesta sessão:
- **pioneiros**: Rodrigo Teixeira, *Os Pioneiros* (2009). Conferido pelas fichas `dados/fontes/os-pioneiros/fichas/festao.md` e `fessul.md`.
- **caetano2012**: Gilmar Lima Caetano, dissertação de mestrado (UFGD, 2012). A conexão direta com ppghufgd.com foi recusada nesta sessão (ECONNREFUSED). O PDF da mesma URL foi lido pelo espelho r.jina.ai, via WebFetch: trechos curtos literais e o resto em paráfrase. Também procurei "Onésimo", "FESTÃO" e "autorit" em todo o texto (quatro blocos).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** na l. 20 (ver abaixo). O resto confere com as fichas e com Caetano. Trechos lidos literalmente: a introdução do FESTÃO "cujas edições foram entre os anos de 1979 e 1981"; a proposta de "popularidade maior apostando na música sertaneja", em contraste com o FESSUL e o "público mais cult"; "30 mil pessoas na final da 1ª edição"; Aurélio "grande vencedor da segunda edição do FESTÃO, em 1980"; o 3º FESTÃO (1981) "já enfraquecido [...] até por conta dos problemas de organização do FESSUL"; a música de Zacarias incluída "de forma irregular, num imbróglio poucas horas antes da final"; *Interior* "acusada de não se caracterizar enquanto música sertaneja"; e a crítica de Simões, p. 55, nota 53 |
| 2 | Link abre | OK, com ressalva: a URL do PDF de Caetano serve a dissertação certa (lida pelo espelho), mas a conexão direta foi recusada nesta sessão. Convém rodar `npm run links` antes do PR |
| 3 | Sem cópia | OK nos trechos de Caetano comparados. Não dá para comparar o texto do livro de Teixeira, porque a ficha já é resumo |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK. "Modo autoritário", na l. 20, é juízo sem apoio na fonte (entra no PROBLEMA do ponto 1) |
| 6 | Divergências | OK. Os vencedores da 1ª e da 2ª edições aparecem nas versões de Teixeira, Onésimo, Tostão e Caetano. A relação Fessul x Festão e a polêmica de Zacarias também aparecem nas duas fontes. Nada do dossiê ficou escondido |
| 7 | Ficha | OK. A data da 1ª edição, o local e a realização estão em pioneiros. As três edições de 1979 a 1981 estão em caetano2012 e pioneiros. Não há valor só numérico |
| 8 | Força da fonte | OK. Um livro (ficha em `dados/fontes/`) e uma dissertação acadêmica |
| 9 | Ligações | OK depois da correção. `node scripts/ligacoes.mjs` também aponta FESSUL (l. 22 e 28), Zacarias Mourão (l. 28) e Aurélio Miranda (l. 34 e 35), mas são repetições de nomes já ligados no mesmo parágrafo ou item. Jorge Zahran, Amorim Costa, José Lopes e Gilmar Lima Caetano não estão na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-11-01`, id no padrão, resumo com cerca de 170 caracteres |

## PROBLEMAs

1. **l. 20**: "Dissertação de Gilmar Lima Caetano atribui a ele a organização dos festivais da [[tv-morena|TV Morena]] e registra críticas ao modo autoritário de conduzi-los.[^caetano2012]"
   - O que a fonte diz: Caetano liga Onésimo Filho ao **FESSUL**, e não ao Festão nem aos festivais da emissora em geral. A TV Morena decidiu organizar o FESSUL por causa "do interesse de Onésimo Filho, funcionário da emissora, em retomar os festivais" (p. 49). No 2º FESSUL (1980), Onésimo diz "eu mesmo escolho os jurados" (p. 52). A única crítica a ele é de Almir Sater, sobre o 2º FESSUL: "um cara vaidoso", que "não queria reconhecer seu erro" (p. 53). O FESTÃO aparece só como "também organizado pela TV Morena". As palavras "autoritário" e "autoritarismo" não aparecem na dissertação.
   - Origem: o erro já vem do dossiê ("com críticas por autoritarismo").
   - Para o redator: retirar a frase, ou reescrevê-la dentro do que a fonte diz. Por exemplo: Caetano liga Onésimo, funcionário da emissora, à retomada dos festivais com o FESSUL, e registra a crítica de Almir Sater ao comportamento dele no 2º FESSUL. Se a frase ficar, deve deixar claro que trata do FESSUL.

## ATENÇÕES

- **l. 30, crítica de Paulo Simões.** Caetano (p. 55, nota 53, citando Sá Rosa e Duncan, 2009) reproduz a fala: "a maior empresa de mídia daqui fazia festivais, enchendo ginásios, gravava a final...". Simões não nomeia a TV Morena. O verbete diz "festivais da emissora", e a identificação vem do contexto da seção. Sugestão: "Paulo Simões criticou o modelo de festivais da maior empresa de mídia local". A 1ª edição do Festão, aliás, foi num estádio, e não em ginásio.
- **l. 28, regra de uma música classificada por pessoa.** A ficha `festao` lista a regra e a polêmica de *Minha Viola Caipira* como fato à parte, sem dizer de que edição são. O verbete as põe no parágrafo da 3ª edição. A ligação com a 3ª vem do dossiê e é coerente com Caetano (polêmica de Zacarias no 3º), mas a ficha não a afirma. Conferir no livro.
- **Leitura de Caetano.** Foi feita por espelho de texto, com trechos curtos literais e o resto em paráfrase. As páginas citadas na nota (pp. 49-55) batem com os marcadores da extração. A conferência no PDF aberto continua recomendável.
- **Ado (l. 38).** A ficha diz "primeira fase" e o verbete, "primeira eliminatória". Os dois termos são equivalentes, e o dossiê usa "eliminatória".
- **Lista-mestra.** Há duplicidade entre `festival-festao` e `festao`, já apontada no dossiê. Fica para o garimpeiro.

## Correções feitas

- l. 34: "segundo Rodrigo Teixeira" passou a `segundo [[rodrigo-teixeira|Rodrigo Teixeira]]`. A linha `rodrigo-teixeira` da lista-mestra é a do autor de *Os Pioneiros*.

Nenhum fato foi acrescentado e o `status` continua `rascunho`. `npm run conferir` e `npm run build` passam antes e depois da correção.

**Pronto para pull request: não** (PROBLEMA da l. 20).
