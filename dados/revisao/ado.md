# Revisão: ado

Verbete: `verbetes/ado.md` (`atualizado: 2026-11-01`). Revisor editorial, 1º nov. 2026. Primeira revisão. O verbete se apoia só no livro *Os Pioneiros* (Rodrigo Teixeira, 2009), lido pelas fichas de `dados/fontes/os-pioneiros/fichas/` (ado, ado-e-adail, ado-e-praense, adail, cadeado-de-ouro, maciel-correa, herminio-gimenez, festao, cabana-gaucha, amambay-e-amambai, zacarias-mourao, irmaos-ouro-e-prata, gravadora-cerro-cora, irmas-galvao) e por `discografia.csv` e `faixas.csv`. Nenhuma nota tem link. Dossiê conferido: `dados/dossies/ado.md`.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO.** O Bash foi negado nesta sessão, e o comando não pôde rodar.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO.** As ligações foram conferidas à mão, por busca na lista-mestra.

Os dois comandos precisam rodar e passar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA. Na l. 24, "duas músicas" e "anos 1980" não estão em nenhuma ficha (ver abaixo). O resto confere com as fichas das seções citadas. Duas notas citavam a seção errada; corrigido (ver Corrigido direto) |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link |
| 3 | Sem cópia | OK em relação às fichas. Comparação com o texto do livro NÃO CONFERIDA (o texto não está no repositório) |
| 4 | Dados pessoais | OK. O nome civil e a data de nascimento do bloco 3 da ficha ficaram fora. "Elício Maciel" (l. 28) é parte do nome civil de Maciel Corrêa e aparece como trajetória (origem do nome artístico). Nome civil não está na lista de dados proibidos |
| 5 | Tom | OK. Números de vendas e fatos do depoimento vêm atribuídos ("Ado diz", "segundo depoimento dele") |
| 6 | Divergências | OK. Vendas (85 mil / 35 mil), autoria dos discos de 1975 e 1976 (Ado e Adail / Ado e Praense), direção de *Cadeado de Ouro* (Ado / Marcílio Castioni), data da gravação (fim de 1980 / disco de 1981) e a cronologia sem data de Londrina estão no texto. Batem com o dossiê |
| 7 | Ficha | OK. Atividade: `ficha`, `crime`, `amambay`, `disc`. Grupos: `ficha`, `dupla`, `disc`. Cidade Três Lagoas: `ficha` (blocos 2 e 3). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimentos e discografia dos encartes. **Fonte única**, e boa parte dos fatos é depoimento do próprio Ado |
| 9 | Ligações | OK depois da correção. Os 29 identificadores do texto estão na lista-mestra. "Supermercado dos Discos" e "Xaraés" tinham linha na lista-mestra e estavam sem link; corrigido |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-11-01`, identificador no padrão, resumo com cerca de 210 caracteres |

## PROBLEMAs

1. **l. 24, frase sem apoio na ficha.** O verbete diz: "Teve duas músicas em parceria com Zacarias nos anos 1980.[^personagem]". A seção "O personagem" aparece em uma ficha só, `amambay-e-amambai.md`: "Uma das músicas de Zacarias e Ado abriu o disco do trio com Dino e Amambay, segundo Ado." A ficha `zacarias-mourao.md` diz só que Zacarias "tinha parcerias com [...] Ado" (seção "Pé de Cedro"). O número "duas" e a década "anos 1980" estão só nas `observacoes` da lista-mestra (l. 908), não em ficha. Pela regra de `dados/fontes/os-pioneiros/LEIA-ME.md`, fato que não está na ficha não pode ser atribuído ao livro. O redator escolhe: reescrever a frase com o que a ficha diz (uma parceria com Zacarias abriu o disco do trio com Dino Rocha e Amambay, segundo Ado; ver a faixa "Sonho Predileto" em `faixas.csv`) ou pedir ao Helton que confira no livro e acrescente o dado à ficha.

## ATENÇÕES

- **Identidade única (l. 34).** A ficha `ado.md` tem três blocos com o nome "Ado". O verbete os junta por indícios e diz isso no texto. Aceito, mas o livro não afirma em frase que são a mesma pessoa. O Helton decide.
- **Linguagem de processo no texto (l. 34 e 48).** "os três blocos da ficha", "Este verbete os reúne" e "se ligam à ficha" falam do arquivo interno de fichas, que o leitor não conhece. Sugestão ao redator: dizer "o livro" ou "as seções do livro" e tirar a autorreferência.
- **l. 14, nota `[^ficha]`.** "Cantor, violonista e compositor" não está na ficha `ado.md`. O apoio está em outras fichas: violão e canto em `ado-e-adail.md` ("tocava violão duetado antes de começar a cantar", seção "Amambay & Amambaí"); composição em `faixas.csv`. Os fatos têm apoio, mas a nota da frase não aponta para eles.
- **Resumo, "gravou discos em Assunção".** A ficha diz que a dupla gravou em Assunção, na Cerro Corá. Os dois LPs da Cerro Corá (1975 e 1976) tornam o plural plausível, mas nenhuma ficha diz que o segundo também foi gravado em Assunção.
- **Discos de 1979 a 1985.** Os créditos trazem só "Ado". O verbete reconhece isso na l. 48. O de 1982 e o de 1985 (Os Filhos da Terra) se ligam a este Ado só pelo nome, e a ligação das faixas a esses discos foi feita pela ordem dos blocos no texto (OCR, segundo `discografia.csv`).
- **Xaraés com dois ids na lista-mestra** (`gravadora-xaraes` e `gravadora-discos-e-fitas-xaraes`). O link novo usa o segundo, como `maciel-correa`, `dino-rocha` e `amambay-e-amambai`. Fica para o garimpeiro unificar.
- **Grafia.** A lista-mestra registra "Supermercados dos Discos". O verbete e a ficha `ado.md` dizem "Supermercado dos Discos". O texto não foi mudado.

## Corrigido direto

- **l. 18, nota.** "Os dois fizeram shows e dramas em circos" estava só com `[^dupla]` (seção "Ado & Adail"). A ficha `ado-e-adail.md` põe os circos na seção "Nos Embalos do Circo". Criada a nota `[^circo]` com essa seção, no formato das outras.
- **l. 28, nota.** "Maciel situa a gravação no fim de 1980" estava só com `[^discmaciel]` (discografia). A data vem da seção "O hit 'Cadeado'" (fichas `maciel-correa.md` e `cadeado-de-ouro.md`). Acrescentada a nota `[^cadeado]`, que já existia.
- **l. 28, link.** "Supermercado dos Discos" virou `[[supermercado-dos-discos|Supermercado dos Discos]]` (linha 932 da lista-mestra; mesma loja, mesma seção).
- **l. 45, link.** "Xaraés" virou `[[gravadora-discos-e-fitas-xaraes|Xaraés]]`.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada. A situação na fila não mudou, porque `fila.mjs` depende do Bash, que foi negado.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `discografia.csv`/`faixas.csv`, nas seções "Ado & Adail", "Nos Embalos do Circo", "Amambay & Amambaí", "O crime", "Cultura Fronteiriça", "Cabana Gaúcha", "Os Campeões do Festão", "O personagem", "O hit 'Cadeado'", "A Primeira Turma – Os Desbravadores dos 50", "Discografia: Ado & Praense", "Discografia: Amambay & Amambaí" e "Discografia: Maciel Corrêa". Os sete LPs (anos, gravadoras, créditos) conferem com `discografia.csv`. As composições citadas conferem com `faixas.csv`.

**Pronto para pull request: não.** Um PROBLEMA (l. 24) volta ao redator. Antes do pull request, também é preciso rodar `npm run conferir` e `npm run build`.
