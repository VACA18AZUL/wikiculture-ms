# Mapa de agentes

Seis agentes de IA trabalham no WikiCulture MS, cada um com uma tarefa só. As definições ficam em `.claude/agents/`. Todos leem `CLAUDE.md` antes de começar e obedecem às mesmas regras sem exceção: sem fonte, sem frase; nada inventado; nada de dado pessoal; nada copiado; `status` sempre `rascunho`.

## Quem faz o quê

| Agente | Entrada | Saída | Mexe em |
|---|---|---|---|
| **garimpeiro-ms** | Uma área, um nome-semente ou uma fonte | Nomes novos e relações entre eles | `dados/lista-mestra.csv`, `dados/relacoes.csv` |
| **pesquisador-fontes** | Um identificador da lista-mestra | Dossiê com fatos e fontes | `dados/dossies/<id>.md`, lista-mestra, `relacoes.csv` |
| **redator-verbete** | Um dossiê pronto | Verbete novo em rascunho | `verbetes/<id>.md`, lista-mestra, dossiê |
| **ligador** | Um lote de verbetes | Links internos inseridos e identificadores consistentes | `verbetes/*.md` (só `[[...]]`), lista-mestra, `relacoes.csv` |
| **revisor-editorial** | Verbetes da branch | Relatório ponto a ponto; correções mecânicas | `verbetes/*.md` (só o mecânico) |
| **atualizador** | Um verbete existente | Parágrafos reforçados ou acrescentados com fonte nova | `verbetes/<id>.md`, dossiê, lista-mestra, `relacoes.csv` |

Nenhum agente muda `status` para `revisado`. Isso é do Helton.

## Fluxo de um verbete

```
garimpeiro-ms  ->  lista-mestra + relacoes.csv
                        |
                        v  (Helton escolhe o lote)
pesquisador-fontes  ->  dados/dossies/<id>.md
                        |
                        v
redator-verbete  ->  verbetes/<id>.md  (rascunho)
                        |
                        v  (ao fim do lote)
ligador  ->  links [[...]] entre os verbetes do lote e os antigos
                        |
                        v
revisor-editorial  ->  relatório: pronto para pull request ou volta ao redator
                        |
                        v
pull request (até 10 verbetes)  ->  revisão humana  ->  status: revisado
```

O **atualizador** entra fora desse fluxo: em verbetes já publicados, quando surge fato novo ou quando o verbete tem fonte única.

## Passagem entre agentes

Cada agente roda em contexto próprio e não vê o que o anterior leu. O que liga um ao outro são arquivos:

- `dados/lista-mestra.csv`: quem existe e em que situação (`a-pesquisar`, `rascunho`, `revisado`).
- `dados/relacoes.csv`: quem se liga a quem, com fonte. Alimentado pelo garimpeiro, pelo pesquisador e pelo ligador; consumido pelo redator e pelo ligador.
- `dados/dossies/<id>.md`: fatos com fonte, por nome. Modelo em `modelos/dossie.md`. Escrito pelo pesquisador, completado pelo redator e pelo atualizador, lido pelo revisor.
- `scripts/ligacoes.mjs`: aponta menções sem link. Usado pelo ligador e pelo revisor.

## Como acionar

No Claude Code, peça pelo nome:

```
Use o agente garimpeiro-ms na área de música, a partir da Memória Fonográfica de MS. Limite: 40 nomes.
Use o pesquisador-fontes para lidia-bais.
Use o redator-verbete para lidia-bais.
Use o ligador nos verbetes da branch atual.
Use o revisor-editorial nos verbetes da branch atual.
Use o atualizador em marco: a fonte principal é de 2013.
```

Vários pesquisadores podem rodar em paralelo, um por nome. Redatores também. O ligador e o revisor rodam uma vez por lote, depois dos redatores, porque dependem de ver o lote inteiro.

## Por fase do PLANO.md

| Fase | Agentes em uso |
|---|---|
| 1. Lista-mestra | garimpeiro-ms, uma área por sessão. Helton revisa a lista ao fim de cada área. |
| 2. Piloto (35 verbetes) | pesquisador-fontes, redator-verbete, ligador, revisor-editorial. Padrão: duas fontes independentes por verbete. |
| 3. Expansão | Os mesmos, em lotes de 10. atualizador para verbetes de fonte única. |
| 4 e 5 | atualizador, sob demanda. |

## O agente de pesquisa extensa

O garimpeiro-ms é o único agente feito para descobrir, não para aprofundar. Trabalha por bola de neve: cada nome pesquisado rende os nomes ligados a ele, e os mais conectados sobem na fila. O resultado não é só uma lista, é uma rede: cada relação registrada em `relacoes.csv` vira, mais tarde, um link `[[...]]` entre verbetes e uma frase com fonte. Os cinco nomes mais conectados de cada rodada são os melhores candidatos a verbete, porque já nascem ligados ao que existe.

## Economia de créditos

- Uma área por sessão do garimpeiro.
- Pesquisador antes do redator, sempre. Redigir sem dossiê gasta pesquisa duas vezes.
- Ligador e revisor por lote, não por verbete.
- Revisor com `WebFetch`, sem `WebSearch`: ele confere fontes já citadas, não busca novas.
