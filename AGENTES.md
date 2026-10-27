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

## Operação na nuvem, em paralelo, com créditos de API

Os agentes rodam como jobs do GitHub Actions (`.github/workflows/agentes.yml`), pagos pela chave `ANTHROPIC_API_KEY` do repositório, sem depender de ninguém com o Claude aberto. O desenho completo, as situações da fila e as regras de concorrência estão em `dados/fluxo/LEIA-ME.md`; o prompt de cada papel está em `dados/fluxo/rodada-<papel>.md` e pode ser editado sem mexer no workflow.

Em cada ciclo (a cada 3 horas, por padrão):

1. `preparar` monta a fila com `scripts/fila.mjs`.
2. Em paralelo: **garimpeiro** (1), **pesquisadores** (até 4, um por nome), **reforços** (até 2, atualizador em verbete de fonte única).
3. `refila` recalcula e os **redatores** (até 4) escrevem um verbete por dossiê novo.
4. **fechamento** roda ligador, revisor (até 10 verbetes) e empacota a branch `lote-NN` quando há 10 prontos.

Retroalimentação: nomes e relações que qualquer agente encontra entram em `dados/propostas/` e viram candidatos na rodada seguinte, com prioridade maior se apareceram mais de uma vez; o grau de conexão em `relacoes.csv` ordena a fila; o revisor devolve ao redator com relatório; fonte única vai ao atualizador.

### Para ligar (uma vez, pelo Helton)

1. Mesclar esta branch em `main` (o agendamento só roda a partir de `main`).
2. Settings > Secrets and variables > Actions: segredo `ANTHROPIC_API_KEY`.
3. Variáveis: `AGENTES_LIGADOS = sim` e `AGENTES_ATE = <data-hora UTC do fim>`, por exemplo `2026-10-29T19:30Z` para 48 horas.
4. Settings > Branches: proteger `main` contra push direto. Os jobs só escrevem em `producao`, `lote-NN` e `producao-conflito-*`.
5. Testar antes: Actions > Agentes > Run workflow, com `papeis = garimpeiro`.

Para desligar: `AGENTES_LIGADOS` vazio, ou qualquer valor diferente de `sim`.

### Custo

| Item | Estimativa |
|---|---|
| Rodada de pesquisador, redator ou reforço (Sonnet) | US$ 1 a 3; teto 3 |
| Rodada de garimpeiro (Sonnet) | US$ 3 a 8; teto 8 |
| Rodada de fechamento (Opus) | US$ 4 a 12; teto 12 |
| Um ciclo com 4 pesquisadores, 4 redatores, 2 reforços | US$ 15 a 45; teto 50 |
| 48 horas, 16 ciclos | US$ 250 a 700; teto 800 |
| Minutos do GitHub Actions por ciclo | 150 a 250 |

Repositório privado tem 2.000 minutos grátis por mês; 48 horas de ciclos passam disso (3.000 a 4.000 minutos). O excedente custa US$ 0,008 por minuto, cerca de US$ 10 a 20. Repositório público não paga minutos, mas o `PLANO.md` decidiu manter privado até a Fase 4.

Os tetos estão nas variáveis `AGENTES_ORCAMENTO_*`; o tamanho do ciclo, em `AGENTES_PESQUISADORES`, `AGENTES_REDATORES` e `AGENTES_REFORCOS`. Para gastar menos, reduza o ciclo antes de reduzir os tetos: rodada cortada pelo teto é rodada perdida.

### Ressalva sobre o plano

O `PLANO.md` previa a Fase 1 inteira (lista-mestra) antes de qualquer verbete, com revisão humana da lista entre as áreas. O fluxo paralelo pula essa espera: escreve verbetes enquanto a lista cresce. O que protege a qualidade é o portão: nada vai para `main` sem passar pelo revisor e pelo pull request. A revisão humana da lista pode ser feita a qualquer momento, marcando nomes como `sem-fonte` ou apagando linhas; o ciclo seguinte respeita.

## Modelo e esforço de cada agente

Cada agente tem modelo e esforço fixados no frontmatter de `.claude/agents/<nome>.md`. O critério: modelo mais barato que dá conta da tarefa, esforço alto só onde errar custa caro (fato inventado, frase sem fonte).

| Agente | Modelo | Esforço | Por quê | Custo relativo por rodada |
|---|---|---|---|---|
| garimpeiro-ms | Sonnet | médio | Volume: dezenas de páginas abertas por sessão. O custo está nas páginas lidas, não no raciocínio. Decisões são de triagem (tem vínculo com MS? é homônimo?), e a lista passa por revisão humana ao fim de cada área. | alto, pelo volume de leitura |
| pesquisador-fontes | Sonnet | alto | Extrair fatos com atribuição e perceber divergências exige leitura atenta. Um nome por rodada, então o custo por rodada é baixo e vários rodam em paralelo. | baixo por nome |
| redator-verbete | Sonnet | alto | Escreve só o que o dossiê sustenta; o dossiê já restringe a tarefa. Esforço alto para não extrapolar a fonte e manter o tom. | baixo por verbete |
| ligador | Haiku | médio | Mecânico e apoiado por `scripts/ligacoes.mjs`. Só envolve texto em `[[...]]`; não decide fatos. Uma rodada por lote. | mínimo |
| revisor-editorial | Opus | alto | É o portão. Pegar frase que vai além da fonte, cópia disfarçada e tom promocional exige o modelo mais forte. Uma rodada por lote de 10, então o custo se dilui. | médio por lote |
| atualizador | Sonnet | alto | Pesquisa e edição cuidadosa de texto existente. Sob demanda, um verbete por rodada. | baixo por verbete |

Ordem de custo por rodada, do mais barato ao mais caro: ligador, redator, pesquisador, atualizador, revisor, garimpeiro.

### Velocidade

- Pesquisador e redator rodam em paralelo, um por nome. Um lote de 10 verbetes leva o tempo de 1, não de 10.
- Ligador e revisor rodam uma vez por lote, depois de todos os redatores.
- Garimpeiro é sequencial por natureza (bola de neve) e não paraleliza bem na mesma área. Para acelerar, rode áreas diferentes em sessões diferentes, nunca a mesma área em duas sessões ao mesmo tempo, para não duplicar nomes.

### Quando subir ou descer

- Revisor devolve mais de 2 PROBLEMAs por verbete, por dois lotes seguidos: suba o redator para Opus. Se o problema for fato que não está na fonte, suba o pesquisador, não o redator.
- Ligador erra homônimo ou linka nome errado: suba para Sonnet, esforço médio.
- Garimpeiro traz muitos nomes sem vínculo com MS: não suba o modelo, aperte o pedido (fonte-semente mais específica, limite menor).
- Revisor passando lotes limpos por 3 lotes seguidos: experimente Sonnet, esforço alto, e compare com uma amostra revisada pelo Helton.
- Para trocar, edite `model:` e `effort:` no frontmatter do agente. Valores de esforço: `low`, `medium`, `high`, `xhigh`, `max`.

## Economia de créditos

- Uma área por sessão do garimpeiro.
- Pesquisador antes do redator, sempre. Redigir sem dossiê gasta pesquisa duas vezes.
- Ligador e revisor por lote, não por verbete.
- Revisor com `WebFetch`, sem `WebSearch`: ele confere fontes já citadas, não busca novas.
- O garimpeiro é o agente mais caro por rodada. Dê semente e limite de nomes no pedido; sem limite, ele segue a bola de neve até a área acabar.
