# Revisão: almir-sater

Verbete: `verbetes/almir-sater.md`. Revisor editorial, 28 out. 2026. Todas as nove notas foram reabertas nesta sessão.

## Portão de evidências

- `npm run conferir`: passou ("7 verbetes conferidos", "Nenhum erro").
- `npm run build`: passou (19 páginas geradas, inclusive `/verbetes/almir-sater/`).
- `node scripts/ligacoes.mjs`: as menções apontadas (Comitiva Esperança l. 32, Pantanal l. 36/40/46/48, Paulo Simões e Trem do Pantanal l. 46, UFMS l. 83) são repetições de nomes já ligados na primeira menção. O aviso "tete-e-o-lirio-selvagem fora da lista-mestra" é falso positivo: a linha existe (l. 56 da lista-mestra), mas a linha `lp-tete-e-o-lirio-selvagem`, com o mesmo nome antes do parêntese, sobrescreve o mapa do script.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA (4 frases, ver abaixo) |
| 2 | Link abre | OK (9 de 9 abrem na página certa) |
| 3 | Sem cópia | OK (ver ATENÇÃO sobre a l. 54) |
| 4 | Dados pessoais | OK (o filho citado em cgn2024 ficou fora) |
| 5 | Tom | OK |
| 6 | Divergências | OK (as do dossiê aparecem com as duas versões) |
| 7 | Ficha | OK (todos os campos têm nota no texto; nenhum valor só numérico) |
| 8 | Fonte única | OK (Dicionário Cravo Albin, Correio do Estado, Campo Grande News, Jornal da USP, A Crítica) |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK (`status: rascunho`, `atualizado: 2026-10-28`, identificador no padrão, resumo com cerca de 150 caracteres) |

## PROBLEMAs

1. **Linha 22**: "Aos 20 anos foi ao Rio de Janeiro para cursar Direito, **abandonou o curso** e voltou a Mato Grosso.[^dmpb]"
   O Dicionário diz que ele **trancou a matrícula** na Faculdade Cândido Mendes e voltou para Mato Grosso. Trancar não é abandonar. Sugestão: "trancou a matrícula".

2. **Linha 24**: "Depois do curso de Direito, ele cursou pouco mais de um ano de Educação Física na UFMS **e deixou a faculdade para se dedicar à música**.[^ce2019]"
   No Correio do Estado, quem ele deixa para se dedicar à música é a faculdade de **Direito** (na sequência: cursou Direito, formou Lupe e Lampião, participou do Festival da Record, deixou a faculdade). Educação Física vem depois: voltou a Campo Grande em 1976 e cursou pouco mais de um ano na UFMS **até se mudar para São Paulo, em 1978**. A frase atribui à Educação Física o que o jornal diz do Direito.

3. **Linha 44**: "O Dicionário aponta Renato Teixeira como **o parceiro de composição mais frequente**."
   O Dicionário diz "um de seus mais constantes parceiros". A frase transforma "um dos" em "o". Sugestão: "um dos parceiros mais constantes".

4. **Linha 85**: "*Luzeiro* (grafado "Luzero" no Dicionário), **faixa do primeiro disco**, virou tema de abertura do Globo Rural.[^dmpb]"
   O Dicionário diz só que a composição "Luzero" foi escolhida como tema de abertura do Globo Rural. Não diz de que disco é a faixa: a entrada de 1981 da discografia não traz faixas. "Faixa do primeiro disco" vai além da fonte. O dossiê já trazia esse erro (linha 62).

## ATENÇÕES

- **Linha 30**: "Integrou o grupo Tetê e o Lírio Selvagem" tem a nota ce2019, mas o Correio diz que ele "acompanhou" o grupo. "Integrou" é a palavra do Dicionário (que diz "Lírio Selvagem", de Tetê Espíndola, em 1979). Pode-se trocar por "acompanhou" ou mover o "integrou" para a frase do Dicionário.
- **Linha 54**: "Campo Grande é um dos lugares mais difíceis para tocar" repete oito palavras seguidas da fala de Sater na matéria ("Campo Grande é um dos lugares mais difíceis de tocar"). Está no limite (o problema começa acima de oito) e é discurso indireto atribuído. Vale reformular.
- **Linhas 70 a 83 (Obras)**: o título "Discos com ano, segundo o Dicionário Cravo Albin" dá a entender que a lista está completa, mas é uma seleção. O Dicionário também lista *Almir Sater instrumental* (1985), *Almir Sater no Pantanal* (1990, LP; 1996, CD), *Almir Sater ao vivo* (1992), *Terra de sonhos* (1994) e *Violeiros do Brasil* (1988 e 2004). Por isso, "O Correio do Estado cita ainda, sem ano, *Terra de Sonhos*" e "O Jornal da USP data em 1985 o álbum *Instrumental*" sugerem que só essas fontes citam os discos, quando o Dicionário também os traz com ano. Sugestão ao redator: escrever "seleção" no título ou completar a lista com o que o Dicionário traz.
- **Linha 64**: o Dicionário chama o prêmio de "Sharp de melhor música" ("Tocando em frente") e "melhor disco instrumental" (*Instrumental II*); o verbete diz "melhor canção" e "melhor álbum instrumental". A diferença é pequena, mas vale usar o nome da categoria como a fonte o traz.
- **Pista não usada**: o Correio do Estado (ce2019) diz de fato que Sater pediu aulas a Paulo Simões, que encerrou as aulas depois de três encontros e o convidou para tocar com ele. O dossiê marcou isso como "não confirmado"; nesta revisão a página foi reaberta e o trecho existe. O revisor não acrescenta fato: fica como sugestão para o redator ou o atualizador.
- **Homônimo**: nenhum.

## Corrigido direto

- Nada. Não havia erro mecânico (as notas estão todas em uso e no formato, os identificadores dos links existem como verbete ou na lista-mestra, e a ficha não tem valor só numérico).

## Fontes conferidas

ce2019 (Correio do Estado, 23 jul. 2019); dmpb (Dicionário Cravo Albin); cgn2022 (Campo Grande News, 13 nov. 2022); cgn2022b (Campo Grande News, 23 out. 2022); cgn2024 (Campo Grande News, 8 fev. 2024); cgn2024b (Campo Grande News, 16 nov. 2024); jusp2021 (Jornal da USP, 30 abr. 2021); acr2026 (A Crítica de Campo Grande, 10 abr. 2026); ce2024 (Correio do Estado, 23 set. 2024).

Dossiê `dados/dossies/almir-sater.md`: não tem seção "Atualização de".

**Pronto para pull request: não.** Volta ao redator por causa dos quatro PROBLEMAs do ponto 1. São correções de redação, sem pesquisa nova.
