# Revisão: fundacao-de-cultura-de-ms

Revisor editorial, 29 out. 2026 (segunda revisão, depois da reescrita do redator no commit 767a0f7). Verbete: `verbetes/fundacao-de-cultura-de-ms.md` (atualizado 2026-10-28). Dossiê: `dados/dossies/fundacao-de-cultura-de-ms.md`, sem seção "Atualização de".

## Portão de evidências

- `npm run conferir`: passou ("7 verbetes conferidos. [...] Nenhum erro.").
- `npm run build`: passou (19 páginas geradas, inclusive `/verbetes/fundacao-de-cultura-de-ms/`).
- `node scripts/ligacoes.mjs`: nenhuma menção sem link neste verbete.

## PROBLEMA da revisão anterior

Resolvido. "Órgão público estadual" saiu da primeira frase (linha 15) e do `resumo` (linha 6). As duas passagens agora dizem só "Fundação criada em 1983", o que santos-fernandes sustenta. O redator também datou o campo da ficha ("Órgão vinculado: Museu da Imagem e do Som (em 2011)"), como pedia a ATENÇÃO anterior.

## Tabela dos dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Todos os parágrafos conferem com a nota citada (ver "Conferência por parágrafo") |
| 2 | Link abre | OK. As três notas e o link de "Para saber mais" abrem o texto certo. O link da UEMS baixa um arquivo .doc com o resumo; título e autores conferem |
| 3 | Sem cópia | PROBLEMA. Linha 21: há nove palavras seguidas iguais às do Correio do Estado (ver PROBLEMA 1) |
| 4 | Dados pessoais | OK. Só aparecem nomes de dirigentes no cargo público. O .doc da UEMS traz os e-mails dos autores, mas eles não entraram no verbete |
| 5 | Tom | OK. A promessa do Campão Cultural está atribuída ao governador, e os valores estão datados (2024). Não há elogio nem superlativo |
| 6 | Divergências | OK quanto às fontes do verbete e ao dossiê: as três fontes não discordam e o dossiê não registra divergência. Há uma possível divergência registrada na lista-mestra (ver ATENÇÕES) |
| 7 | Ficha | OK. Criação "1983", entre aspas [santos-fernandes]. Órgão vinculado "(em 2011)" [ce2011]. Dirigente em 2024 [cgn2024] |
| 8 | Fonte única | OK. O verbete tem três fontes independentes (UEMS, Correio do Estado, Campo Grande News), então **não há ATENÇÃO de fonte única do verbete**. Só a data de criação depende de uma fonte (ver ATENÇÕES) |
| 9 | Ligações | OK. `conselho-estadual-de-cultura-de-ms`, `mis-ms` e `memorial-da-cultura` estão na lista-mestra. FIC, MS Cultural e Campão Cultural não têm linha nem verbete, e não é obrigatório ligá-los |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-28`, identificador no padrão, resumo com cerca de 140 caracteres |

## PROBLEMAs

1. **Sequência copiada da fonte** (linha 21, nota [^ce2011]).
   - Trecho do verbete: "O museu funcionava **no terceiro andar do Memorial da Cultura e Cidadania**, em Campo Grande."
   - O que a fonte diz: "localizado **no terceiro andar do Memorial da Cultura e Cidadania**, na Capital". São nove palavras iguais em sequência, e a regra admite no máximo oito. Cinco delas são nome próprio, então a cópia é pequena, mas a regra é objetiva.
   - Sugestão ao redator: mudar a construção, por exemplo com "ocupava o terceiro andar do [[memorial-da-cultura|Memorial da Cultura e Cidadania]]". Isso deixa oito palavras iguais, todas de nome e localização. O fato não muda.
   - O revisor não corrigiu, porque cópia fica com o redator.

## Conferência por parágrafo

- Linha 15. Confere com santos-fernandes: a Fundação foi criada "em 1983 para fins de determinar ações direta e indireta ligados ao setor cultural", e o estado foi constituído em 1979.
- Linha 19. Confere com santos-fernandes: "Desde a fundação do Estado até a década de 90" foram criados a Fundação (1983) e o Conselho Estadual de Cultura (1990); "Nesse período não houve investimento [...] por meio de leis específicas". O texto liga os dois órgãos só por "e", e o verbete registra isso.
- Linha 21. Confere com ce2011: o MIS ("a instituição") estava "vinculada à Gerência de Patrimônio Histórico e Cultural da FCMS" e ficava no terceiro andar do Memorial, "na Capital". Cópia: ver PROBLEMA 1. A sequência "à Gerência de Patrimônio Histórico e Cultural da" tem oito palavras, quase todas de nome próprio, e fica no limite.
- Linha 25. Confere com cgn2024: "A FCMS [...] divulgou" o calendário pelo MS Cultural, com "mais de R$ 176 milhões" para eventos culturais em 2024. Eduardo Mendes é "diretor-presidente da Fundação de Cultura".
- Linha 27. Confere com cgn2024: "todos os demais festivais anuais foram mantidos", na narração do próprio jornal. O governador prometeu o retorno do Campão Cultural, e "O evento não ocorreu no ano passado" (a matéria é de fevereiro de 2024, então o ano passado é 2023).
- Linha 29. Confere com cgn2024: o FIC "ocorrerá sempre no primeiro quadrimestre de cada ano", e "Para 2024 o orçamento será de R$ 14 milhões". O verbete usa o presente ("abre") para o que a fonte anuncia no futuro, sem mudar o sentido.

## ATENÇÕES

- **Fonte única do verbete: não há.** O verbete tem três fontes independentes.
- **Data de criação com uma só fonte, e possível divergência.** A data de 1983 vem só de santos-fernandes, um resumo de iniciação científica sem data visível. A observação da Fase 1 na linha da lista-mestra (`fundacao-de-cultura-de-ms`) diz que Assis (UFGD, 2013) põe a criação do Centro Cultural MS e da Pinacoteca Estadual "com a Fundação de Cultura em 1979". A linha da Pinacoteca repete "1979, Assis". Isso pode ser divergência de data. Não consegui conferir: o PDF de Assis (https://www.ppghufgd.com/wp-content/uploads/2017/06/RENATA-RODRIGUES-DE-ASSIS.pdf) baixou, mas o texto não pôde ser extraído nesta sessão. O dossiê e o verbete não mencionam esse ponto. Sugestão ao atualizador: abrir Assis e, se o texto disser que a Fundação foi criada em 1979, registrar as duas versões no verbete e na ficha, cada uma com a própria nota, e tirar da nota [^santos-fernandes] a frase "Fonte única da data de criação". Para resolver a questão, procure a lei estadual de criação da Fundação no Diário Oficial de MS ou na base de legislação da Assembleia Legislativa.
- `cidade: Campo Grande`: o dossiê anota que a sede da Fundação não foi confirmada. ce2011 põe o MIS "na Capital", e o verbete transforma isso em "em Campo Grande", o que é fato de conhecimento geral sobre MS e não acrescenta nada. A sede da própria Fundação continua sem fonte.
- "Para saber mais" repete o link da nota [^cgn2024]. Não é erro, mas acrescenta pouco.
- O parágrafo do FIC (linha 29) não diz quem administra o fundo. Está certo assim, porque a fonte também não diz.

## Correções feitas direto

- Nenhuma. As notas estão no formato do modelo, todas são usadas, o valor numérico da ficha está entre aspas e não há erro de digitação nem identificador de link errado.

## Fontes usadas (abertas nesta revisão)

- [^santos-fernandes] Vanderlei José dos Santos e Enilda Fernandes, "Arte e Cultura em Mato Grosso do Sul: um percurso histórico", Anais ENIC, UEMS, sem data. https://anaisonline.uems.br/index.php/enic/article/view/4504/4524
- [^ce2011] Redação, "Museu da Imagem e Som reinaugura hoje", Correio do Estado (Correio B), 3 maio 2011. https://correiodoestado.com.br/correio-b/museu-da-imagem-e-som-reinaugura-hoje/109346/
- [^cgn2024] Gabriela Couto e Thailla Torres, "MS Cultural promete abrir as portas do teatro e mantém festivais anuais", Campo Grande News, 5 fev. 2024. https://www.campograndenews.com.br/lado-b/artes-23-08-2011-08/ms-cultural-promete-abrir-as-portas-do-teatro-e-mantem-festivais-anuais
- Tentei abrir Assis (UFGD, 2013), que não é fonte do verbete, só para conferir a ATENÇÃO de divergência. O texto não pôde ser lido.

## Incerto (para a descrição do lote)

- A data de criação (1983) tem uma só fonte, e Assis (UFGD, 2013), segundo a lista-mestra, pode dar 1979. Faltam a lei de criação, a sede atual e o primeiro presidente.
- Não se sabe se o vínculo do MIS com a Fundação continua (o dado é de 2011).
- Não está confirmado que a Fundação administre o Memorial da Cultura nem o FIC.

Pronto para pull request: não (PROBLEMA 1, cópia de nove palavras na linha 21; a correção é simples. Antes do lote, convém conferir a possível divergência de data com Assis)
