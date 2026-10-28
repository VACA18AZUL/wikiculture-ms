# Revisão: divisao-de-mato-grosso

Revisor editorial, 28/10/2026. Arquivo: `verbetes/divisao-de-mato-grosso.md`.

## Portão de evidências

- `npm run conferir`: NÃO CONFERIDO. O Bash foi negado nesta sessão.
- `npm run build`: NÃO CONFERIDO, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: não rodado. Ligações conferidas à mão.

Os dois comandos precisam rodar antes do pull request.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | A fonte sustenta a frase | PROBLEMA |
| 2 | O link abre | OK |
| 3 | Sem cópia | OK |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK |
| 6 | Divergências | OK (uma fonte só, sem dossiê) |
| 7 | Ficha | PROBLEMA |
| 8 | Fonte única | ATENÇÃO |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK |

## PROBLEMAs

1. **Linha 15 e `resumo`: o tema da série não tem apoio.** O verbete diz: "sobre a separação que deu origem ao estado de Mato Grosso do Sul". O `resumo` diz: "sobre a criação do estado de Mato Grosso do Sul". A matéria [^cgn2023] dá o nome da série e os títulos das telas, mas não diz qual é o tema. O tema pode ser deduzido de títulos como "O nascimento de MS" e "Pecus e Pecúnia discutem a Divisão", mas não está escrito na fonte.
2. **Ficha, `Onde ver: Acervo do MARCO, Campo Grande`.** A fonte diz que as obras são do "acervo do Museu de Arte Contemporânea". Ela não diz em que cidade fica o museu. O único endereço citado é o do MIS, em Campo Grande. Sem uma nota que diga a cidade, "Campo Grande" não tem apoio no verbete. Há duas saídas: citar a fonte do verbete `marco` ou tirar a cidade.

Esses pontos ficam para o redator. O revisor não alterou nada.

## Pontos conferidos sem problema

- "Oito pinturas da série pertencem ao acervo do MARCO e foram expostas em abril de 2023 no MIS". A fonte diz que são nove obras do acervo, oito de 1978 e da série. A mostra abriu em 19 de abril. Confere.
- Lista de oito títulos e a ressalva "sem indicar qual deles não pertence à série". Confere com a fonte, que lista oito títulos e não identifica a nona obra.
- Linha 19, "As telas usam a figura do boi e seu simbolismo, que ganharam importância [...]". A fonte diz que as obras "explicam como a figura do boi e seu simbolismo ganharam tamanho status de importância cultural". A paráfrase é aceitável. A maior sequência igual tem sete palavras ("a figura do boi e seu simbolismo"), abaixo do limite.
- Ficha: `Ano: "1978"` está entre aspas. `Autor` e `Técnica` têm apoio ("pintadas em 1978").

## ATENÇÕES

- **Fonte única.** O verbete tem uma só nota, Campo Grande News, 13 abr. 2023. Não existe `dados/dossies/divisao-de-mato-grosso.md`, então não houve tentativa registrada do atualizador. A segunda fonte mais indicada é o artigo da Revista Raído, UFGD, 2011, de Marcos Antônio Bessa-Oliveira e Edgar Cézar Nolasco, que analisa a série (https://ojs.ufgd.edu.br/Raido/article/download/1321/980/4720, registrado em `dados/relacoes.csv`, não aberto nesta revisão). Ele também pode sustentar o tema (PROBLEMA 1).
- Nenhum homônimo à vista.

## Correções feitas direto

Nenhuma.

## Pronto para pull request

Não. Antes, é preciso resolver os PROBLEMAs 1 e 2 e rodar `npm run conferir` e `npm run build`.

[^cgn2023]: Thailla Torres, "MIS realiza exposição gratuita com obras de Humberto Espíndola", *Campo Grande News*, 13 abr. 2023. Aberta pelo revisor em 28/10/2026.
