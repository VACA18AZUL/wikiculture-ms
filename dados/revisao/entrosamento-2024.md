# Revisão: entrosamento-2024

Revisor editorial, 31/10/2026. Arquivo: `verbetes/entrosamento-2024.md`.

## Portão de evidências

- `npm run conferir`: passou ("20 verbetes conferidos", "Nenhum erro"), antes e depois da correção feita direto.
- `npm run build`: passou (37 páginas), antes e depois da correção.
- `node scripts/ligacoes.mjs`: não rodou, porque o Bash foi negado para esse comando. As ligações foram conferidas à mão contra `dados/lista-mestra.csv`.
- `npm run links`: o link da nota sai como VERIFICAR, não como QUEBRADO. O Campo Grande News devolve HTTP 403 a acessos automáticos, e todas as matérias do site nos outros verbetes saem do mesmo jeito.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | A fonte sustenta a frase | NÃO CONFERIDO |
| 2 | O link abre | NÃO CONFERIDO |
| 3 | Sem cópia | NÃO CONFERIDO |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK (ver ATENÇÕES) |
| 6 | Divergências | OK |
| 7 | Ficha | OK |
| 8 | Força da fonte | OK (imprensa; fonte única) |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK |

### Por que os pontos 1 a 3 ficaram sem conferência

A única fonte é a matéria do Campo Grande News de 19/04/2024. Nesta sessão, a página devolveu HTTP 403 ao WebFetch, tanto com `www.` quanto sem, e também na versão `/amp/`. O archive.org não pode ser acessado pela ferramenta, e o `curl` foi negado. Por isso o revisor não leu o texto da matéria.

O que foi possível conferir:

- O verbete bate com o dossiê (`dados/dossies/entrosamento-2024.md`) em todos os pontos: data, local, curadoria, consultoria, colaboradores, objetivo atribuído à FCMS, "mais de 30" e 34 nomes, além dos oito nomes citados no corpo da matéria.
- A lista de 34 artistas do verbete é igual à do dossiê, na mesma ordem e com a mesma grafia.
- O dossiê avisa que a leitura do pesquisador foi por WebFetch, que devolve um resumo feito por modelo e não o HTML. O redator diz ter relido a página.
- O redator seguiu a dúvida do dossiê sobre "realização da FCMS". O verbete atribui à FCMS só o objetivo da mostra, como o dossiê pede.

Falta abrir a matéria num navegador e conferir três coisas: a lista e a grafia dos 34 nomes, a frase do objetivo (linha 22) e se há sequências copiadas.

## PROBLEMAs

Nenhum encontrado no que pôde ser conferido.

## ATENÇÕES

- **Fonte única, não lida pelo revisor.** O verbete inteiro depende de uma matéria que nenhum agente leu em HTML bruto. É a pendência que segura o lote. Ver acima.
- **Linha 20, "entre nomes consagrados e artistas novos".** "Consagrados" é um juízo da matéria, cujo subtítulo, segundo o dossiê, fala em "grandes nomes do Estado". No verbete, a frase não diz de quem é o juízo. Sugestão para o redator: atribuir, como já se faz na linha 28 ("A matéria cita..."). Não é elogio direto, por isso não foi marcado como PROBLEMA.
- **Linha 28, "nomes fundadores da arte contemporânea no estado".** A frase está atribuída à matéria e está correta assim.
- **Homônimos não ligados**, como o dossiê pede: `ghva` em vez de `ghva-mauricio`, `lais-doria-artes-plasticas` em vez de `lais-doria`, `lucia-martins` em vez de `lucia-coelho`, e `beto-lima`, que pode ser o da mostra póstuma de 2013. Qualquer fusão de registros depende de fonte.
- **Lista-mestra (linha 1369), `observacoes`.** O campo diz "com realização da FCMS". O redator não achou apoio para isso na matéria. Quem integrar a lista deve corrigir ou anotar. O revisor não edita a lista-mestra no fluxo paralelo.
- **Grafia.** "Patricia Rodrigues" aparece sem acento como curadora e com acento ("Patrícia") na lista de artistas, e "Lídia Bais" e "Humberto Espindola" aparecem sem acento. O verbete diz que segue a grafia da matéria, e o dossiê confirma. Conferir na página.
- **Wikipédia (pt):** não verificada. O dossiê diz que não há artigo conhecido.

## Correções feitas direto

- Nota `[^cgn2024]`: o formato ABNT "BONOTTO, Gustavo." passou a "Gustavo Bonotto,", o padrão das notas dos outros verbetes (por exemplo, "Thailla Torres, ..."). Não entrou fato novo.

## Pronto para pull request

Não. Não há PROBLEMA, mas os pontos 1 a 3 ficaram NÃO CONFERIDOS porque a única fonte não abriu nesta sessão. Alguém precisa abrir a matéria num navegador e conferir a lista de nomes, a frase do objetivo e se há cópia. Se tudo bater, o verbete fica pronto sem outra mudança, salvo a atribuição sugerida para a linha 20.
