# Revisão: humberto-espindola

Revisor editorial, 28/10/2026. Arquivo: `verbetes/humberto-espindola.md`.

## Portão de evidências

- `npm run conferir`: NÃO CONFERIDO. O Bash foi negado nesta sessão e não deu para rodar o comando.
- `npm run build`: NÃO CONFERIDO, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: não rodado. As ligações foram conferidas à mão, contra `verbetes/` e `dados/lista-mestra.csv`.

Os dois comandos precisam rodar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | A fonte sustenta a frase | PROBLEMA |
| 2 | O link abre | OK |
| 3 | Sem cópia | PROBLEMA |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK |
| 6 | Divergências | OK (uma fonte só, sem dossiê) |
| 7 | Ficha | OK |
| 8 | Fonte única | ATENÇÃO |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK |

## PROBLEMAs

1. **Linha 17: a frase vai além da fonte.** O verbete diz: "sobre a separação que deu origem ao estado de Mato Grosso do Sul". A matéria [^cgn2023] só dá o nome da série, "Divisão de Mato Grosso", e os títulos das telas. Ela não diz qual é o tema. O assunto pode ser deduzido dos títulos ("O nascimento de MS", "Pecus e Pecúnia discutem a Divisão"), mas a fonte não afirma isso.
2. **Linha 13 e `resumo`: "sul-mato-grossense".** A matéria chama Humberto Espíndola de "o artista" e não diz de onde ele é. "Sul-mato-grossense" aparece no texto só para falar da identidade e da cultura das obras. "Pintor" se apoia em "Oito delas, pintadas em 1978". A origem do artista não tem apoio.
3. **Linha 17: cópia.** O verbete diz: "como a figura do boi e seu simbolismo ganharam importância cultural". A fonte diz: "São obras que explicam como a figura do boi e seu simbolismo ganharam tamanho status de importância cultural [...]". As nove palavras de "como a figura do boi e seu simbolismo ganharam" são iguais e seguidas, acima do limite de oito. A frase precisa ser reescrita com palavras próprias.

Esses pontos ficam para o redator ou para o atualizador. O revisor não alterou essas frases.

## ATENÇÕES

- **Fonte única.** O verbete tem uma só nota, Campo Grande News, 13 abr. 2023. Não existe `dados/dossies/humberto-espindola.md`, então o atualizador não registrou tentativa ("Atualização de ..."). Na lista-mestra e em `dados/relacoes.csv` já aparecem candidatas para segunda fonte, que não foram abertas nesta revisão:
  - Correio do Estado, 23 jul. 2019 (doutor honoris causa da UFMS);
  - Revista Raído, UFGD, 2011 (artigo de Bessa-Oliveira e Nolasco sobre a série "Divisão de Mato Grosso"). Pode sustentar o tema da série (PROBLEMA 1).
  - Campo Grande News, "Como anda o artista dos bois 40 anos após a bovinocultura";
  - Wikipedia, só como pista.
- A cidade do artista continua sem fonte. A ficha não tem o campo `cidade`, o que está correto.
- Nenhum homônimo à vista.

## Correções feitas direto

Nenhuma.

## Pronto para pull request

Não. Antes, é preciso resolver os PROBLEMAs 1 a 3 e rodar `npm run conferir` e `npm run build`.

[^cgn2023]: Thailla Torres, "MIS realiza exposição gratuita com obras de Humberto Espíndola", *Campo Grande News*, 13 abr. 2023. Aberta pelo revisor em 28/10/2026.
