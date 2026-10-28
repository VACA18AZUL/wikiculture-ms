# Revisão: fundacao-de-cultura-de-ms

Revisor editorial, 28 out. 2026. Verbete: `verbetes/fundacao-de-cultura-de-ms.md` (atualizado 2026-10-28). Dossiê: `dados/dossies/fundacao-de-cultura-de-ms.md`, sem seção "Atualização de".

## Portão de evidências

- `npm run conferir`: passou ("7 verbetes conferidos. Nenhum erro.").
- `npm run build`: passou (19 páginas geradas, inclusive `/verbetes/fundacao-de-cultura-de-ms/`).
- `node scripts/ligacoes.mjs`: nenhuma menção sem link neste verbete.

## Tabela dos dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA. "órgão público estadual" (linha 15 e resumo) não está na fonte citada no parágrafo. O resto confere (ver abaixo) |
| 2 | Link abre | OK. As três notas e o link de "Para saber mais" abrem a página certa |
| 3 | Sem cópia | OK. As maiores coincidências têm oito palavras e são nomes próprios ("terceiro andar do Memorial da Cultura e Cidadania"; "à Gerência de Patrimônio Histórico e Cultural da") |
| 4 | Dados pessoais | OK. Só nomes de dirigentes no cargo público |
| 5 | Tom | OK. A promessa do Campão Cultural está atribuída ao governador, e o FIC está datado (2024) |
| 6 | Divergências | OK. As fontes não discordam, e o dossiê não registra divergência |
| 7 | Ficha | OK. Criação "1983" entre aspas [santos-fernandes]; Órgão vinculado [ce2011, situação de 2011]; Dirigente em 2024 [cgn2024] |
| 8 | Fonte única | OK. Três fontes independentes (UEMS, Correio do Estado, Campo Grande News). A data de criação tem uma só fonte; ver ATENÇÕES |
| 9 | Ligações | OK. `conselho-estadual-de-cultura-de-ms`, `mis-ms` e `memorial-da-cultura` estão na lista-mestra (linhas 114, 7 e 29) |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-28`, identificador no padrão, resumo com cerca de 150 caracteres |

## PROBLEMAs

1. **Frase além da fonte citada** (linha 15 e campo `resumo`, linha 6).
   - Trecho: "A **Fundação de Cultura de Mato Grosso do Sul** (FCMS) é um órgão público estadual criado em 1983 [...]" com a nota [^santos-fernandes]. O resumo repete "Órgão público estadual".
   - O que a fonte diz: Santos e Fernandes dizem que a Fundação foi criada em 1983 "para fins de determinar ações direta e indireta ligados ao setor cultural". Não a chamam de órgão público nem de órgão estadual. Essa classificação é inferência.
   - Sugestão ao redator: a matéria do Correio do Estado de 2011, já citada no verbete como [^ce2011], diz que o Governo de MS age "por meio da FCMS". Citar também essa nota no primeiro parágrafo resolve, ou então trocar a expressão por algo que a fonte sustente.

## Conferência por parágrafo

- Linha 15: 1983, finalidade e estado criado em 1979 conferem com santos-fernandes. "Órgão público estadual": ver PROBLEMA 1.
- Linha 19: confere. A fonte diz que, do início do estado (1979) até a década de 1990, não houve investimento no setor por meio de leis específicas, e que o Conselho Estadual de Cultura foi criado em 1990. Os dois órgãos aparecem só ligados por "e", e o verbete registra isso corretamente.
- Linha 21: confere com ce2011. O MIS ("a instituição") era vinculado à Gerência de Patrimônio Histórico e Cultural da FCMS e ficava no terceiro andar do Memorial da Cultura e Cidadania, "na Capital".
- Linhas 25, 27 e 29: conferem com cgn2024. Mais de R$ 176 milhões para eventos culturais em 2024; Eduardo Mendes, diretor-presidente; "todos os demais festivais anuais foram mantidos"; o governador prometeu a volta do Campão Cultural, que não ocorreu "no ano passado"; o FIC ocorre no primeiro quadrimestre, com R$ 14 milhões para 2024.

## ATENÇÕES

- A data de criação (1983) vem só de santos-fernandes, texto sem data visível. Segunda fonte sugerida: a lei estadual de criação da Fundação, no Diário Oficial de MS ou na base de legislação da Assembleia Legislativa (o número da lei também falta no dossiê).
- O campo "Órgão vinculado: Museu da Imagem e do Som" se apoia numa fonte de 2011. O campo não traz data; convém datá-lo ou confirmar com fonte recente.
- `cidade: Campo Grande`: o dossiê anota que a sede da Fundação não foi confirmada. A fonte só põe o MIS "na Capital".
- O parágrafo do FIC (linha 29) não diz quem administra o fundo. Está correto, porque a fonte também não diz.

## Correções feitas direto

- Notas [^santos-fernandes], [^ce2011] e [^cgn2024]: acrescentei "Acesso em 28 out. 2026." para seguir o formato de `modelos/verbete.md`. As três fontes foram abertas nesta revisão.

## Fontes usadas

- [^santos-fernandes] Vanderlei José dos Santos e Enilda Fernandes, "Arte e Cultura em Mato Grosso do Sul: um percurso histórico", Anais ENIC, UEMS, sem data.
- [^ce2011] Redação, "Museu da Imagem e Som reinaugura hoje", Correio do Estado, 3 maio 2011.
- [^cgn2024] Gabriela Couto e Thailla Torres, "MS Cultural promete abrir as portas do teatro e mantém festivais anuais", Campo Grande News, 5 fev. 2024.

## Incerto (para a descrição do lote)

- A data de criação (1983) tem fonte única. Faltam a lei de criação, a sede atual e o primeiro presidente.
- Não se sabe se o vínculo do MIS com a Fundação continua (dado de 2011).
- Não está confirmado que a Fundação administre o Memorial da Cultura nem o FIC.

Pronto para pull request: não (PROBLEMA 1; a correção é simples)
