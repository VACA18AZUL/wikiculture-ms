# Revisão: festao

Verbete: `verbetes/festao.md` (`atualizado: 2026-11-01`). Segunda revisão, depois da reescrita pelo redator (a primeira devolveu a l. 20). Revisor editorial, 1 nov. 2026. Substitui o relatório anterior.

Fontes conferidas nesta sessão:
- **pioneiros**: Rodrigo Teixeira, *Os Pioneiros* (2009). Conferido pelas fichas `dados/fontes/os-pioneiros/fichas/festao.md`, `fessul.md`, `aurelio-miranda.md`, `onesimo-filho.md`, `interior-cancao.md`, `cruzeiro-tostao-e-centavo.md`, `cruzeiro-tostao-e-guarany.md` e `ado.md`.
- **caetano2012**: Gilmar Lima Caetano, dissertação de mestrado (UFGD, 2012). A URL do PDF abriu nesta sessão (o arquivo de 2 MB veio direto do ppghufgd.com), mas o leitor não decodifica o PDF comprimido. O texto foi lido pelo espelho r.jina.ai sobre a mesma URL, com trechos curtos literais e marcadores de página.

## Resultado de `npm run conferir` e `npm run build`

Os dois passam, antes e depois da correção ("Nenhum erro"; 51 páginas geradas).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. A l. 20 foi reescrita e agora confere com Caetano: "do interesse de Onésimo Filho, funcionário da emissora, em retomar os festivais" (seção 1.2), e a crítica de Almir Sater ao 2º FESSUL ("um cara orgulhoso, não queria reconhecer seu erro, um cara vaidoso", p. 53). Lidos literalmente em Caetano: FESTÃO "também organizado pela TV Morena", edições "entre os anos de 1979 e 1981"; aposta "na música sertaneja" e o FESSUL "restrito [...] ao público mais cult"; Morenão com "público estimado em 30 mil pessoas na final da 1ª edição", "vencida por Aurélio Miranda, apresentada por Lima Duarte", "a dupla Milionário & José Rico"; Aurélio "grande vencedor da segunda edição do FESTÃO, em 1980"; "3º FESTÃO (1981), vencido por Celito Espíndola e Paulo Simões", com a toada *Interior*, "acusada de não se caracterizar enquanto música sertaneja"; terceira edição "já enfraquecido [...] por conta dos problemas de organização do FESSUL"; música de Zacarias "de forma irregular", "num imbróglio poucas horas antes da final"; Simões, nota 53: "a maior empresa de mídia daqui fazia festivais, enchendo ginásios, gravava a final", "transmitia na íntegra, depois desgravava a fita para reutilizá-la". Nas fichas de Teixeira: Onésimo dá a Aurélio o 2º Festão (`aurelio-miranda.md`); Aurélio ou o trio ficam com o 1º e o 2º lugares de 1979 (`aurelio-miranda.md`, `cruzeiro-tostao-e-centavo.md`) |
| 2 | Link abre | OK. A URL do PDF de Caetano abriu e serve a dissertação certa |
| 3 | Sem cópia | OK. Nenhuma sequência de mais de oito palavras iguais aos trechos lidos de Caetano. O texto do livro de Teixeira não pode ser comparado, porque a ficha já é resumo |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK. "Grande vencedor" (l. 35) e "maior empresa de mídia local" (l. 30) estão atribuídos a Caetano e a Simões |
| 6 | Divergências | OK. Vencedores da 1ª e da 2ª edições nas versões de Teixeira, Onésimo, Tostão e Caetano; relação Fessul x Festão; as duas descrições da polêmica de Zacarias. Nada do dossiê ficou escondido |
| 7 | Ficha | OK. Data da 1ª edição, local e realização em pioneiros; três edições de 1979 a 1981 em pioneiros e caetano2012. Não há valor só numérico |
| 8 | Força da fonte | OK. Um livro (fichas em `dados/fontes/`) e uma dissertação acadêmica |
| 9 | Ligações | OK. `node scripts/ligacoes.mjs` não aponta nada neste verbete. Os 21 identificadores usados existem na lista-mestra e cada um aponta para o que o texto quer dizer (`interior-cancao` é a canção, `tostao` é a pessoa, `rodrigo-teixeira` é o autor do livro, `cruzeiro-tostao-e-centavo` e `cruzeiro-tostao-e-guarany` são as duas formações do trio). Jorge Zahran, Amorim Costa e José Lopes ficam sem link e não estão na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-11-01`, id no padrão, resumo com cerca de 170 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Leitura de Caetano.** Foi feita por espelho de texto (r.jina.ai), porque o PDF vem comprimido. Os trechos citados acima vieram entre aspas na extração, mas os números de página do texto extraído não batem com o sumário (o sumário dá a seção 1.2 na p. 39; a extração a põe depois do marcador "-48-"). A nota diz pp. 49-55, o que bate com os marcadores da extração. Convém conferir no PDF aberto.
- **l. 28, regra de uma música classificada por pessoa.** A ficha `festao.md` não diz de que edição é a regra, e a ficha `onesimo-filho.md` diz só que Onésimo a criou. A ligação da polêmica de *Minha Viola Caipira* com a 3ª edição tem apoio na ficha `interior-cancao.md`, que a põe como 2º lugar do festival em que *Interior* venceu. A regra fica no parágrafo da 3ª edição por proximidade. Conferir no livro.
- **l. 30, crítica de Paulo Simões.** Simões fala da "maior empresa de mídia daqui", sem nomear a TV Morena; o verbete mantém a formulação dele, como sugerido na primeira revisão.
- **Lista-mestra.** Continua a duplicidade entre `festival-festao` e `festao`, já apontada no dossiê. Fica para o garimpeiro.
- **Lista-mestra, observação da linha `festao`.** Ainda traz "devolucoes=1; l. 20: ...", da revisão anterior. O revisor não edita a lista-mestra no fluxo paralelo; fica para quem mudar a situação.

## Correções feitas

- Nota `caetano2012`: acrescentado "Acesso em 1 nov. 2026.", no formato de `modelos/verbete.md`. A URL foi aberta nesta sessão.

Nenhum fato foi acrescentado e o `status` continua `rascunho`.

**Pronto para pull request: sim.**
