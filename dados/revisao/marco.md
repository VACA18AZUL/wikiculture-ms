# Revisão: marco

Revisor editorial, 28 out. 2026. Verbete: `verbetes/marco.md` (atualizado 2026-10-08). Não há dossiê em `dados/dossies/marco.md` (verbete-modelo da Fase 0).

## Portão de evidências

- `npm run conferir`: passou ("7 verbetes conferidos. Nenhum erro.").
- `npm run build`: passou (19 páginas geradas, inclusive `/verbetes/marco/`).
- `node scripts/ligacoes.mjs`: nenhuma menção sem link em `marco.md`.

## Tabela dos dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | NÃO CONFERIDO (parcial). Parágrafo do acervo de Lídia Baís e Humberto Espíndola (linha 22): OK. Linhas 16, 20 e 26 dependem de [^guia] (HTTP 403 ao acesso automatizado) e de [^anpuh] (PDF baixado, mas texto ilegível na ferramenta) |
| 2 | Link abre | PROBLEMA. O link da dissertação em "Para saber mais" leva à página inicial da UCDB. [^cgn2025] e [^cgn2023]: OK. [^anpuh]: o PDF abre (384 KB). [^guia]: NÃO CONFERIDO (403) |
| 3 | Sem cópia | NÃO CONFERIDO (parcial). Trechos apoiados em cgn2025 e cgn2023: OK. Trechos do Guia e da ANPUH: não foi possível comparar |
| 4 | Dados pessoais | OK |
| 5 | Tom | OK |
| 6 | Divergências | NÃO CONFERIDO. Não há dossiê, e a ANPUH não pôde ser lida para comparar data de criação e acervo com o Guia |
| 7 | Ficha | NÃO CONFERIDO (parcial). Valor numérico "1991" está entre aspas: OK. Criação, Local e Acervo dependem de [^guia]; Gestão depende de [^anpuh]. Nenhuma das duas pôde ser lida |
| 8 | Fonte única | OK. Quatro fontes independentes (Guia da Semana, ANPUH, duas matérias do Campo Grande News). Ver ATENÇÕES |
| 9 | Ligações | OK. `fundacao-de-cultura-de-ms`, `lidia-bais`, `humberto-espindola` e `divisao-de-mato-grosso` existem como verbetes |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-08`, identificador `marco` no padrão, resumo com cerca de 150 caracteres |

## PROBLEMAs

1. **Link da seção "Para saber mais" leva a outra página** (linha 30).
   - Trecho: `[*O Museu de Arte Contemporânea de Campo Grande – MS: história e memória*](https://site.ucdb.br/public/md-dissertacoes/1029125-dissertacao-mariana-rodrigues-de-oliveira.pdf)`.
   - O que o link entrega: a página inicial do site da Universidade Católica Dom Bosco. A dissertação não aparece, e não deu para confirmar título, autora nem assunto.
   - O que fazer (redator ou atualizador): achar o endereço atual da dissertação (repositório da UCDB ou BDTD) e confirmar os dados. Se não achar, tirar o item. Não foi corrigido aqui porque não há endereço substituto aberto e conferido.

## NÃO CONFERIDO (pede nova tentativa, não é PROBLEMA)

- **[^guia]** (Guia da Semana) devolve HTTP 403 ao acesso automatizado. Sustenta a criação em 1991, a origem do acervo (Pinacoteca Estadual, prêmios aquisitivos, doações), as cerca de 900 obras, a localização e a descrição do espaço em 2013 (linhas 16, 20 e 26 e campos Criação, Local e Acervo). Precisa ser aberta num navegador para conferir o apoio e a cópia.
- **[^anpuh]**: o PDF baixa, mas o texto não pôde ser extraído. Sustenta "É administrado pela Fundação de Cultura de Mato Grosso do Sul, órgão do governo do estado" (linha 16) e o campo Gestão.

## ATENÇÕES

- Os dados de espaço e acervo vêm de uma página de 2013, e a lista-mestra já anota "dados de 2013; atualizar com fonte recente". Fontes de reforço possíveis: a matéria do Correio do Estado de 2016 sobre a última mostra do ano no MARCO (já citada em `dados/lista-mestra.csv`, linhas 10, 12, 13 e 115) e a dissertação da UCDB, se for achada.
- Na nota [^anpuh] faltam autor e ano. A lista-mestra (linha 8) atribui o texto a Emerson Dionisio Gomes de Oliveira, Anais ANPUH 2015. Confirmar no PDF antes de completar a nota.
- "É administrado pela Fundação" está no presente, mas a fonte deve ser de 2015 (segundo a lista-mestra). Convém datar a frase quando a fonte for conferida.

## Correções feitas direto

- Nenhuma.

## Fontes usadas

- [^guia] Guia da Semana, página do MARCO (atualizada em 17 jul. 2013): não conferida (403).
- [^anpuh] "Patrimônio que incomoda: museus e coleções de arte", Anais ANPUH: não conferida (PDF ilegível).
- [^cgn2025] Thailla Torres, Campo Grande News, 7 maio 2025: conferida. A matéria diz que a mostra reúne obras do acervo do Marco.
- [^cgn2023] Thailla Torres, Campo Grande News, 13 abr. 2023: conferida. Nove obras de Humberto Espíndola do acervo do Museu de Arte Contemporânea; oito delas, de 1978, são da série "Divisão de Mato Grosso".

## Incerto (para a descrição do lote)

- A criação em 1991, as 900 obras, a origem do acervo e a gestão pela Fundação não foram conferidas nesta revisão.
- A dissertação da UCDB em "Para saber mais" está com o link quebrado.

Pronto para pull request: não
