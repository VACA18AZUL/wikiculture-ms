# Revisão: lidia-bais

Revisor editorial, 28/10/2026. Arquivo: `verbetes/lidia-bais.md`.

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
| 4 | Dados pessoais | OK (ver observação) |
| 5 | Tom | PROBLEMA |
| 6 | Divergências | OK (uma fonte só, sem dossiê; ver ATENÇÕES) |
| 7 | Ficha | PROBLEMA |
| 8 | Fonte única | ATENÇÃO |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK |

## PROBLEMAs

1. **Linhas 5, 6, 8 e 16: nascimento em Campo Grande sem fonte.** Esses trechos dizem que ela nasceu em Campo Grande: `cidade: Campo Grande`, o `resumo` ("nascida em Campo Grande"), a ficha (`Nascimento: 1900, Campo Grande`) e a abertura ("(Campo Grande, 1900 – 1985)"). A matéria [^cgn2025] não diz onde ela nasceu. Diz só que nasceu em 1900, "quando Campo Grande ainda era um vilarejo", e que "voltou a Campo Grande" depois de viajar. O local de nascimento é dedução. O campo `cidade` pode ficar, porque a fonte liga a artista a Campo Grande. Nascimento, abertura e resumo precisam de outra fonte ou devem ficar só com o ano.
2. **Linha 22: tema da obra.** O verbete diz: "Sua obra trata de religião, astrologia e questões existenciais." A fonte diz: "Além da pintura, Lídia buscava sentido na religião, nos astros e nas questões existenciais." Isso é uma busca pessoal, não o tema da obra. Sobre os temas, a fonte diz: "Criou obras que misturam o sagrado, o feminino e suas raízes culturais."
3. **Linhas 6 e 16: "pintora" e "sul-mato-grossense".** A fonte não usa essas palavras. Diz que ela "estudou pintura no Rio de Janeiro" e mostra suas "obras". "Pintora" é uma dedução fraca e aceitável. "Sul-mato-grossense" como origem da artista não tem apoio. Ver o PROBLEMA 1.
4. **Linha 6, tom do `resumo`.** O texto diz: "apontada como uma das artistas mais importantes de Mato Grosso do Sul". É um superlativo sem dizer quem afirma isso, e o resumo aparece sozinho em listas e na busca. No corpo (linha 16) a frase atribui o juízo à "imprensa local", mas se apoia em uma única matéria ("considerada uma das artistas mais importantes de Mato Grosso do Sul"). O ideal é atribuir com precisão (por exemplo, ao Campo Grande News) ou tirar o juízo do resumo.

Esses pontos ficam para o redator. O revisor não alterou essas frases.

## Observação sobre dados pessoais (ponto 4)

O verbete diz que o acervo foi doado "por sua sobrinha, Nelly Martins". A fonte publica esse fato como história do acervo, e por isso ele foi mantido. A regra do PLANO.md permite dados de família quando a fonte os publica como parte da trajetória. O Helton decide se o nome da sobrinha fica. A fonte também traz a causa e as circunstâncias da morte ("com esclerose, sozinha"). O verbete deixou isso de fora, o que está correto.

## ATENÇÕES

- **Fonte única.** O verbete tem uma só nota, Campo Grande News, 7 maio 2025. Não existe `dados/dossies/lidia-bais.md`, então não houve tentativa registrada do atualizador. O artigo em "Para saber mais" serve como segunda fonte acadêmica: Emerson Dionisio Gomes de Oliveira, "Obra, memória e instituição: o papel de Lídia Baís na arte sul-mato-grossense", *Revista Memória em Rede* (UFPel), v. 4, n. 7. O revisor conferiu a página do artigo e o resumo. O PDF abre, mas não foi lido por inteiro. Outra pista é a mostra "In Memorian" de 2013, no Campo Grande News, registrada em `dados/relacoes.csv`.
- **Possível divergência futura.** Em `dados/relacoes.csv`, uma linha tirada da Wikipedia diz que ela fundou o "museu-bais" em 1950, "nunca aberto ao público". O verbete, com base no Campo Grande News, diz que o museu "não aconteceu enquanto viveu". Se o atualizador trouxer uma fonte que confirme a fundação em 1950, as duas versões precisam aparecer.

## Correções feitas direto

- Nota `[^cgn2025]`: "7 mai. 2025" passou a "7 maio 2025", que é o padrão dos outros verbetes.
- "Para saber mais": o título do link estava errado ("Arte sul-mato-grossense: o legado de Lídia Baís e o acervo do MARCO"). Foi trocado pelo título real do artigo, "Obra, memória e instituição: o papel de Lídia Baís na arte sul-mato-grossense", conferido na página do periódico. Não entrou fato novo.

## Pronto para pull request

Não. Antes, é preciso resolver os PROBLEMAs 1 a 4 e rodar `npm run conferir` e `npm run build`.

[^cgn2025]: Thailla Torres, "Exposição homenageia artista Lídia Baís no MIS a partir de 12 de maio", *Campo Grande News*, 7 maio 2025. Aberta pelo revisor em 28/10/2026.
