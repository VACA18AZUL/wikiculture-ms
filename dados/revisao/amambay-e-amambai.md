# Revisão: amambay-e-amambai

Verbete: `verbetes/amambay-e-amambai.md`, primeira revisão, depois da passagem do ligador. Revisor editorial, 30 out. 2026. As quatro matérias da web foram abertas nesta sessão com WebFetch, que devolve extração feita por modelo e não o texto bruto; nos pontos decisivos pedi o trecho literal. O livro *Os Pioneiros* foi lido pelas fichas em `dados/fontes/os-pioneiros/fichas/` (amambay-e-amambai, amambay-cantor, amambai-cantor, emidio-umar, amambay-amambai-e-elinho, amambay-amambai-e-ze-correa, a-mato-grossense, dino-rocha) e por `discografia.csv`. Os números de linha valem para o arquivo depois da correção feita nesta revisão (nenhuma linha foi acrescentada nem tirada).

## Portão de evidências

- `npm run conferir`: **passou.** "17 verbetes conferidos. [...] Nenhum erro." Rodado antes e depois da correção.
- `npm run build`: **passou.** "33 page(s) built", com `/verbetes/amambay-e-amambai/index.html` gerado. Rodado antes e depois da correção.
- `node scripts/ligacoes.mjs`: neste verbete, a maioria dos apontamentos é segunda menção de nome já ligado. Dois são falsos positivos: "Bela Vista" (l. 21), cuja linha `bela-vista` na lista-mestra é uma **música** (chamamé correntino), não a cidade; e "Rei do Gado" (l. 84), que aqui é faixa de Amambaí e não a novela `rei-do-gado-novela`. Nenhum dos dois deve virar link. O script diz que `ado` e `gravadora-discos-e-fitas-xaraes` estão fora da lista-mestra, mas as duas linhas existem (l. 907 e l. 1003 de `dados/lista-mestra.csv`); o aviso vem de nomes repetidos no mapa do script (ver ATENÇÕES).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK, com ATENÇÕES. Cada parágrafo confere com as fichas e as matérias citadas. Na l. 45, o trio com Elinho em 1961 está na seção "Amambay & Amambaí" e não em "O vôo de Zé Corrêa"; acrescentei `[^pioA]` (ver Corrigido direto). Duas formulações merecem ajuste do redator (l. 45 e l. 47, ver ATENÇÕES) |
| 2 | Link abre | OK. 4 de 4 notas com link abrem e levam à matéria citada; título, autor e data conferidos (cgn2016: 28/08/2016, 09:13; cgn2022a: 04/05/2022, 09:25; cgn2022b: 04/05/2022, 12:24; ce2022: 04/05/2022, 11h29) |
| 3 | Sem cópia | OK. Nenhuma sequência com mais de oito palavras iguais nos trechos literais obtidos. A mais próxima é "primeiro chamamé em castelhano" (l. 59), quatro palavras iguais a ce2022. As fichas do livro já são paráfrase; a comparação com o texto do livro não é possível no repositório |
| 4 | Dados pessoais | OK. Nenhuma frase removida. Saúde (doença da esposa de Amambaí em cgn2016, suspeita de causa da morte em cgn2022a), cônjuges, nome do filho e motivo da separação ficaram fora. Fica a menção ao filho, sem nome, como autor de duas falas (l. 59 e l. 65), no padrão já aceito em `delinha` |
| 5 | Tom | OK. "Pioneira" (l. 15), "ícone" e "primeiro chamamé em castelhano" (l. 59) vêm atribuídos à imprensa; "lançou o estilo chamamé" vem atribuído ao próprio Amambay |
| 6 | Divergências | OK. Aparecem com as duas versões: formação da dupla (depois de 1956 x década de 1960), quem formou Campanha e Corumbá, início do trio com Zé Corrêa (1964 x 1965 x 1969), idades (76 anos para os dois; 80 x 82 na morte), data da morte (3 x 4 de maio), número de discos (12 listados, cabeçalho com 16, cerca de 18, mais de 15), 60 x 50 anos, grafias, Mbakarai, "primeiro Long-Playing". Todas as divergências do dossiê estão no texto |
| 7 | Ficha | OK. Fundação: pioB e ce2022, com as duas versões. Integrantes: pioD, pioB, cgn2016. Gênero: pioA (bolero, guarânia, tango correntino) e cgn2016 (chamamé, polca paraguaia, guarânia). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa (Teixeira, 2009) mais quatro matérias de dois veículos (Campo Grande News e Correio do Estado). Não é fonte única |
| 9 | Ligações | OK. Todos os identificadores em `[[...]]` existem na lista-mestra. Zé Corrêa, Zacarias Mourão, Dino Rocha, Elinho do Bandoneon, Mário Vieira e as gravadoras estão ligados. Ver ATENÇÕES sobre duplicatas na lista-mestra e homônimos |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-30`, identificador no padrão, resumo com cerca de 185 caracteres. Notas no formato do modelo, com seção do livro e "Acesso em" nas da web |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **l. 45, atribuição de 1961 e quem tocava na rádio.** Trecho: "Segundo Amambay, em 1961 a dupla formou um trio com [[elinho-do-bandoneon|Elinho do Bandoneon]], que tocava na [[radio-educacao-rural|Rádio Educação Rural]]; a formação parou em 1964". A ficha `amambay-amambai-e-elinho` dá a formação em 1961 e a Rádio Educação Rural como fato da seção "Amambay & Amambaí" e diz que **o trio** tocava na rádio; só a parada em 1964 vem "segundo Amambay" ("O vôo de Zé Corrêa"). Do jeito que está, "que tocava" pode ser lido como se fosse Elinho. Sugestão ao redator: "Em 1961 a dupla formou com Elinho do Bandoneon um trio que tocava na Rádio Educação Rural. Segundo Amambay, a formação parou em 1964 [...]".
- **l. 47, o que levou ao LP da dupla.** Trecho: "A dupla regravou a canção no disco do trio, [[os-mensageiros-de-mato-grosso|*Os Mensageiros de Mato Grosso*]], que levou depois a um LP da dupla." As fichas (`a-mato-grossense`, `amambay-e-amambai`) dizem que foi o **sucesso da canção** no disco de Zé Corrêa que levou ao LP da dupla ("estourou em Campo Grande, o que levou ao LP da dupla"; "depois um LP da dupla, após o sucesso da canção"), não o disco do trio. Sugestão: "O sucesso da canção levou depois a um LP da dupla."
- **l. 37, "Exposição Agropecuária de Campo Grande".** A ficha da dupla diz só "Exposição Agropecuária" (seção "Cabana Gaúcha"); a seção trata de Campo Grande (churrascaria e exposição da cidade, nas fichas `cabana-gaucha` e `jandira-e-benites`). Leitura razoável.
- **Duplicatas na lista-mestra.** `emidio-umar` e `amambay-cantor` são a mesma pessoa, segundo o dossiê (o verbete liga Umar só a `amambay-cantor`, certo). `gravadora-xaraes` (l. 1019) e `gravadora-discos-e-fitas-xaraes` (l. 1003) também são a mesma gravadora; o verbete usa a segunda. Cabe ao garimpeiro unificar. Essas duplicatas de nome fazem `ligacoes.mjs` dar o aviso falso de "fora da lista-mestra".
- **Homônimos que não devem ser ligados:** "Bela Vista" (l. 21, cidade; a linha da lista é uma música) e "Rei do Gado" (l. 84, faixa; a linha é a novela).
- **ce2022 é inconsistente por dentro:** dá nascimento em 1940 e a dupla Campanha e Corumbá "aos 10 anos, em 1947". O verbete já mostra a divergência (l. 27). A matéria também parece trocar os nomes dos dois numa frase sobre família; nada disso entrou.
- **ce2022 e a morte de Amambaí em 2018.** A extração desta sessão traz a frase de que Amambaí morreu em 2018, com a dupla já separada; o dossiê diz que a matéria reaberta pelo redator não a trazia. O verbete cita só cgn2022a nesse ponto (l. 63), o que basta.
- **l. 59, fala do filho.** cgn2022b: "ele foi um grande precursor do chamamé"; a frase anterior fala em "chamamé sul-mato-grossense". "Um dos precursores do chamamé sul-mato-grossense" é paráfrase fiel e mais contida.
- **Link de ce2022 em `http://`.** Abre normalmente; pode passar a `https://` numa próxima edição.
- **Dissertação de Gonçalves (UFMS, 2014):** continua sem leitura (PDF ilegível, segundo o dossiê). É a segunda fonte acadêmica que falta.
- **Leitura por extração.** As páginas da web foram lidas por WebFetch; os trechos literais decisivos foram pedidos um a um.

## Corrigido direto

- **l. 45:** acrescentada a nota `[^pioA]` ao lado de `[^pioVoo]`. O trio com Elinho em 1961 e a Rádio Educação Rural vêm da seção "Amambay & Amambaí" (ficha `amambay-amambai-e-elinho`), que já estava definida como `pioA`; a nota só aponta a seção certa, sem fato novo.

Nenhuma frase foi removida. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado e a situação na fila não foi mudada.

## Fontes conferidas

- pioneiros (pioA, pioB, pioD, pioInicio, pioCirco, pioCabana, pioVoo, pioMato, pioApres, pioLegado, pioDino, pioFilhos): Rodrigo Teixeira, *Os Pioneiros*, 2009, pelas fichas e por `discografia.csv`. Sustentam grafias, nomes civis, nascimentos (22/3/1940 e 22/11/1937, Bela Vista), Campanha e Corumbá, Garimpo e Garimpeiro, Alvarenga e Umar e o LP da Philips, formação depois de 1956 e nome sugerido por Zacarias, programa na Rádio Educação Rural (1961 aos anos 1970), dramas de circo, Exposição Agropecuária, rádios de São Paulo, viagem de 1964 segundo Elinho, trios, *A Mato-grossense*, figurino gaúcho, influência nos trios, Dino Rocha (dez. 1972 a cerca de 1976), estilo, Vila Guilhermina (1977, Continental), os 12 discos e os créditos de autoria.
- cgn2016: Thailla Torres, *Campo Grande News*, 28/08/2016. Sustenta "pioneiros da música sertaneja" no estado, 76 anos para os dois, Alvarenga e Umar aos 15 anos, recusa de São Paulo, Bolívia, Paraguai e Argentina, repertório, harpa e acordeom, convite de Zé Corrêa em 1969, disco com Dino Rocha, disco de 1977 com "Vila Guilhermina", *Pantanal* (1990, três capítulos, casamento de Juma), separação há cerca de cinco anos, restaurante, cerca de 50 anos de dupla e cerca de 18 discos, título com "60 anos".
- cgn2022a: Thailla Torres, *Campo Grande News*, 04/05/2022. Sustenta "Ermídio Umas", morte no fim da noite de terça, 3 de maio, Amambaí morto em 2018, cerca de 50 anos e 18 discos, repertório, países, harpa e acordeom, som dançante.
- cgn2022b: Jéssica Fernandes, *Campo Grande News*, 04/05/2022. Sustenta 80 anos, "fim da noite de terça-feira (3)", "grande precursor do chamamé", volta a cantar em aniversários depois da pandemia.
- ce2022: Glaucea Vaccari, *Correio do Estado*, 04/05/2022. Sustenta 82 anos, nascimento em 1940, morte na "quarta-feira (4)", Campanha e Corumbá em 1947, formação nos anos 1960 depois de festa de casamento, projeção pelo disco de Zé Corrêa e convite para o trio, "primeiro chamamé em castelhano gravado no Brasil", "mais de 15 discos", "ícone".

**Pronto para pull request: sim.** Não há PROBLEMA; `npm run conferir` e `npm run build` passaram. Ficam duas sugestões de redação para o redator (l. 45 e l. 47) e as duplicatas da lista-mestra para o garimpeiro; nenhuma impede o lote.
