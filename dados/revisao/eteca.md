# Revisão: eteca

Verbete: `verbetes/eteca.md` (`atualizado: 2026-11-01`). Revisor editorial, 1 nov. 2026. Abri as cinco matérias com WebFetch. A ferramenta não devolve o texto integral, então conferi cada ponto com perguntas dirigidas e trechos curtos literais.

**Portão:** o revisor não pôde rodar `npm run conferir` e `npm run build`; o fechamento rodou os dois depois da revisão. `node scripts/ligacoes.mjs` rodou.

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** nas linhas 24 e 39. O resto confere com cgn2023a a d e cgn2025. |
| 2 | Link abre | OK, os cinco abriram. |
| 3 | Sem cópia | OK. A maior coincidência tem 4 palavras ("escritoras esquecidas ou anônimas"). |
| 4 | Dados pessoais | OK. Ficaram fora a idade e os nomes das crianças e o telefone. |
| 5 | Tom | OK. "Premiada" ficou fora. |
| 6 | Divergências | **PROBLEMA**: a divergência da linha 39 não existe. O título "Guri-Árvore" está bem registrado. |
| 7 | Ficha | OK. "2016" está entre aspas. |
| 8 | Força da fonte | OK, com ATENÇÃO: todas as notas são de um só veículo. |
| 9 | Ligações | OK, com ATENÇÕES. Não ligar Tânia Souza: há homônima sem confirmação. |
| 10 | Ficha e nome de arquivo | OK. Rascunho, id no padrão, resumo com cerca de 190 caracteres. |

## PROBLEMAs

1. **Linha 24**: "A curadoria foi de Ligia Prieto e Kelly Figueiredo (a [[palhaca-mixirica\|Palhaça Mixirica]])."
   - A fonte cgn2023a diz "Com curadoria de Ligia Prieto e Kelly Figueiredo" e fala da "palhaça Mixirica" em outro trecho, sem ligar as duas.
   - Para o redator: tirar o parêntese ou citar uma fonte que faça a ligação.
2. **Linha 39**: "A matéria de 14/10 não informa o local do encerramento".
   - A fonte cgn2023d traz "Hora: 9h, 10h (Grupo Casa); 18h (Teatro Glauce Rocha)" e "Teatro Glauce Rocha - UFMS". *Tatá e o Travesseiro* é às 18h, e as duas matérias concordam.
   - Para o redator: retirar a oração e pôr o local no item de domingo.

## ATENÇÕES

- **Ligia Prieto (linha 20).** O link usa `ligia-prieto` (área audiovisual, leitura de subagente). A lista-mestra também tem `ligia-tristao-prieto` (teatro, fundadora do Grupo Casa), e as duas linhas trazem o mesmo nome civil. Pelo contexto, a segunda é a mais adequada. A fusão fica para o garimpeiro ou o Helton.
- **Rafael Mareco (linha 33).** A linha da lista-mestra é de um grafiteiro, e a própria lista diz que a identidade com o oficineiro do Eteca não foi confirmada.
- **Linha 22, Catarse.** O nome aparece só no endereço do link, não no texto da matéria.
- **Linha 22, "parte dos custos gerais".** A fonte diz "custear parte da 5º edição".
- **Linha 26, "a escola do Grupo Casa".** A ferramenta não achou essa expressão em cgn2025, que fala em "Grupo Casa - Coletivo de Artistas". Conferir.
- **Linha 36, "KZUU".** A matéria cgn2023d escreve "Kzuu".
- **Edições sem fonte.** Nada cobre 2016 a 2022 nem 2024.

## Correções feitas

- Acrescentei o autor "TORRES, Thailla." na nota `[^cgn2023c]`.

**Pronto para pull request: não.**
