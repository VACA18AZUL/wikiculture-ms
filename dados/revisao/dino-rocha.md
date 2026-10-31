# Revisão: dino-rocha

Verbete: `verbetes/dino-rocha.md`, segunda revisão, depois da reescrita do redator (`atualizado: 2026-10-31`). Revisor editorial, 31 out. 2026. Substitui o relatório de 30/10. O verbete se apoia só no livro *Os Pioneiros* (Teixeira, 2009), lido pelas fichas `dados/fontes/os-pioneiros/fichas/dino-rocha.md` e por `discografia.csv` e `faixas.csv`. Nenhuma nota tem link. Números de linha valem para o arquivo depois das correções desta revisão.

## Portão de evidências

- `npm run conferir`: **passou** ("20 verbetes conferidos. Nenhum erro."), antes e depois das correções.
- `npm run build`: **passou** ("37 page(s) built", com `/verbetes/dino-rocha/index.html`), antes e depois das correções.
- `node scripts/ligacoes.mjs`: neste verbete aponta "Pantanal" na l. 29 (falso positivo: parte do título *Menino do Pantanal*) e segundas menções de nomes já ligados antes (Os Filhos de Goiás, Zé Corrêa, Gaivota Pantaneira, Guilherme Rondon). Nenhum identificador divergente.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, com ATENÇÕES. Cada frase confere com as fichas e a seção citada. Os três pontos devolvidos em 30/10 foram resolvidos: "foi a Campo Grande" (l. 27), 1960 como ano da mudança para Ponta Porã (l. 23) e nota própria para Los Tammy's (`pioneiros-tammys`, l. 43) |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link; todas citam o livro pela seção |
| 3 | Sem cópia | OK em relação às fichas (nenhuma sequência longa repetida). O texto do livro não está no repositório: comparação com o original NÃO CONFERIDA |
| 4 | Dados pessoais | OK. "Era o caçula" saiu na reescrita. Nada de família, saúde ou contato |
| 5 | Tom | OK. "Principal representante" e "mais gravado" (l. 37) atribuídos ao livro; "clássico regional" (l. 43) ao livro; "Príncipe do Chamamé" à contracapa |
| 6 | Divergências | OK. Local de origem em três versões (Juti, Ponta Porã segundo Dino, Santa Luzia na contracapa), estilo (Dino x Amambaí), origem do nome artístico (locutor x Dino Franco), discografia (18 LPs e 8 CDs no cabeçalho x 9 listados). A divergência do dossiê sobre a primeira ida à Califórnia não entra porque o verbete não fala dessa ida |
| 7 | Ficha | OK. Nome civil e nascimento: `pioneiros-disc`. Atividade, instrumento, gênero: `pioneiros-disc` e `pioneiros-turma`. Apelido: `pioneiros-disc`. Grupos: `pioneiros-dino` e `pioneiros-filhos`. Cidade Ponta Porã: depoimento (l. 23). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimentos e discografia reproduzida dos encartes. **Fonte única** |
| 9 | Ligações | OK depois de correção. O LP de 1985 estava ligado ao identificador do disco de 1982 (ver Corrigido direto). Todos os identificadores existem na lista-mestra ou em `verbetes/` |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 165 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única.** Todas as notas citam *Os Pioneiros*. Pela regra de 30/10/2026, basta. A dissertação de Gonçalves (UFMS, 2014) segue sem leitura (o dossiê não conseguiu extrair o texto).
- **l. 23, "diz ser de Ponta Porã".** A ficha registra a origem em Ponta Porã "segundo o próprio Dino" num bloco de dados sem seção indicada; a nota usada é `pioneiros-cultura` ("Cultura Fronteiriça"), que traz a mudança em 1960 e a descoberta da música. A precisão da seção para "diz ser de Ponta Porã" depende de conferência no livro (Helton tem a cópia).
- **l. 29, origem do nome.** O texto segue o livro: o locutor de Araçatuba o apresentou como Dino Rocha, e Dino comenta que o nome pode ter vindo de Dino Franco. As duas versões estão lá, sem escolha.
- **l. 31, "Hermínio Giménez".** A ficha grafa "Gimenez"; o verbete segue a grafia da lista-mestra ("Hermínio Giménez"). Sem efeito no conteúdo.
- **l. 19, tempo verbal.** "É acordeonista": o livro é de 2009 e as fontes lidas não dizem se ele está vivo.
- **Ficha "cidade: Ponta Porã".** Onde viveu e começou, segundo ele; o nascimento é em Juti. O texto mostra as versões.

## Corrigido direto

- **l. 23:** acrescentada a nota `[^pioneiros-dino]`, já definida, ao lado de `[^pioneiros-disc]` na frase da contracapa. Que a contracapa é de Zacarias Mourão vem da seção "Dino Rocha" (ficha), não da discografia.
- **l. 61:** o LP de 1985 estava sob o link `[[os-filhos-da-terra]]`, que na lista-mestra é o disco de 1982. Separado em `[[os-filhos-da-terra|*Os Filhos da Terra*]] (1982)` e `[[os-filhos-da-terra-gastando-com-elas|*Os Filhos da Terra – Gastando Com Elas*]] (1985)`, com o título que a seção "Discografia: Amambay & Amambaí" dá ao disco (`discografia.csv`). Nenhum fato novo.

`status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `discografia.csv`/`faixas.csv`, seções "Discografia: Dino Rocha", "Cultura Fronteiriça", "Dino Rocha", "Ado & Adail", "O batismo de Dino Rocha", "Os Filhos de Goiás", "Apresentação / O Livro", "Nos Embalos do Circo", "A Primeira Turma – Os Desbravadores dos 50", "O estilo", "Discografia: Adail & Tesouro", "Discografia: Los Tammy's / Victor Hugo", "Discografia: Amambay & Amambaí".

**Pronto para pull request: sim.** Sem PROBLEMA; fonte única sólida.
