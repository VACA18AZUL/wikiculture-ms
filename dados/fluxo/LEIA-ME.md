# Fluxo paralelo dos agentes

Os seis agentes rodam na nuvem, em paralelo, como jobs do GitHub Actions (`.github/workflows/agentes.yml`), pagos com a chave de API do projeto. Cada job abre o Claude Code sem interação, lê as instruções do seu papel nesta pasta, trabalha na branch `producao` e envia o resultado. Nenhum job vê o outro: o que os liga são os arquivos abaixo.

## Um ciclo

```
preparar ──> garimpeiro ────────────────────────────────┐
   │                                                     │
   ├──> pesquisador ×N (um por nome, em paralelo) ──┐    │
   │                                                 │    │
   └──> reforco ×N (atualizador, em paralelo) ───────┤    │
                                                     v    │
                                        refila ──> redator ×N (em paralelo)
                                                     │    │
                                                     v    v
                                                   fechamento (ligador -> revisor -> lote)
```

- **preparar** escolhe quem trabalha em quê, com `scripts/fila.mjs --json`.
- **garimpeiro** integra as propostas dos outros, expande uma área e registra nomes e relações.
- **pesquisador** monta o dossiê de um nome. **reforco** roda o atualizador em verbete de fonte única.
- **refila** recalcula a fila com os dossiês recém-feitos; **redator** escreve um verbete por dossiê.
- **fechamento** roda o ligador no que foi escrito, o revisor em até 10 verbetes, e empacota um lote quando há 10 prontos.

Ciclos são sequenciais (um de cada vez); dentro do ciclo, os jobs do mesmo papel rodam em paralelo.

## Situações de um nome

Coluna `situacao` de `dados/lista-mestra.csv`. Mude só com `node scripts/fila.mjs marcar <id> <situacao>`.

| Situação | Significa | Quem pega |
|---|---|---|
| `a-pesquisar` | nome registrado, sem dossiê | pesquisador |
| `sem-fonte` | pesquisador não achou fonte que sirva | ninguém; Helton decide |
| `dossie` | dossiê pronto em `dados/dossies/<id>.md` | redator |
| `rascunho` | verbete escrito | fechamento (ligador, revisor) |
| `devolvido` | revisor achou PROBLEMA; relatório em `dados/revisao/<id>.md` | redator |
| `parado` | devolvido três vezes seguidas; o redator não resolve sozinho | ninguém; Helton decide |
| `reforcar` | passou, mas com fonte única | reforco (atualizador) |
| `pronto-para-lote` | passou na revisão | fechamento (empacotar) |
| `em-lote` | está em uma branch `lote-NN` | Helton (pull request) |
| `revisado` | Helton aprovou e mesclou | ninguém |

## Retroalimentação

- **Nomes e relações novos** que qualquer agente encontra vão para `dados/propostas/` (um arquivo por rodada). O garimpeiro e o fechamento integram com `scripts/integrar-propostas.mjs`: nome novo entra como `a-pesquisar`; nome repetido sobe de prioridade. Assim, um nome citado em dois verbetes vira candidato forte sem ninguém decidir.
- **Grau de conexão** (`dados/relacoes.csv`) ordena a fila: entre nomes de mesma prioridade, o mais ligado é pesquisado antes. A rede cresce de dentro para fora.
- **Revisor devolve** (`devolvido` + `dados/revisao/<id>.md`): o redator lê o relatório antes de reescrever.
- **Fonte única** vira `reforcar`: o atualizador tenta uma segunda fonte. Se já tentou (o dossiê tem seção "Atualização de ..."), o revisor aceita como `pronto-para-lote` com a observação "fonte única".
- **Verbetes desejados** (links `[[...]]` para páginas que não existem) entram na lista-mestra como `a-pesquisar` com origem "citado em verbetes" e prioridade `alta`.

## Concorrência

- `dados/lista-mestra.csv`, `dados/relacoes.csv` e `dados/fluxo/registro.md` têm `merge=union` em `.gitattributes`: acréscimos de rodadas paralelas se somam sem conflito.
- Cada rodada edita **só a sua linha** da lista-mestra (via `fila.mjs marcar`) e **só seus arquivos** (`dados/dossies/<id>.md`, `verbetes/<id>.md`, `dados/revisao/<id>.md`, `dados/propostas/*-<id>.csv`).
- Só o garimpeiro e o fechamento acrescentam linhas à lista-mestra e a `relacoes.csv`; os outros usam `dados/propostas/`.
- `scripts/enviar.sh` faz rebase e tenta de novo; se não resolve, manda o commit para `producao-conflito-<data>` em vez de perder.

## Portões

- O Claude Code roda sem interação com uma lista fechada de ferramentas (`scripts/rodada.sh`): ler, escrever, buscar na web, os scripts do repositório e os comandos de conferência. `git push` só acontece em `scripts/enviar.sh` e `scripts/empacotar-lote.sh`, fora do alcance do modelo.
- `scripts/rodada.sh` roda `npm run conferir` depois de cada rodada; se falhar, os verbetes daquela rodada são revertidos e o resto entra.
- `status` de verbete é sempre `rascunho`. Só o Helton muda.
- Nenhum job envia para `main` nem abre pull request. Lotes ficam em branches `lote-NN` com a descrição pronta em `dados/lotes/lote-NN.md`.

## Ligar, desligar, ajustar

Variáveis do repositório (Settings > Secrets and variables > Actions > Variables):

| Variável | Padrão | Para quê |
|---|---|---|
| `AGENTES_LIGADOS` | (vazio = desligado) | `sim` liga o ciclo agendado |
| `AGENTES_ATE` | (vazio = sem prazo) | data-hora UTC, ex. `2026-10-29T19:30Z`; depois disso o ciclo não roda |
| `AGENTES_PESQUISADORES` | 4 | pesquisadores por ciclo |
| `AGENTES_REDATORES` | 4 | redatores por ciclo |
| `AGENTES_REFORCOS` | 2 | atualizadores por ciclo |
| `AGENTES_ORCAMENTO_GARIMPEIRO` | 8 | US$ por rodada |
| `AGENTES_ORCAMENTO_PESQUISADOR` | 3 | US$ por rodada |
| `AGENTES_ORCAMENTO_REDATOR` | 3 | US$ por rodada |
| `AGENTES_ORCAMENTO_FECHAMENTO` | 12 | US$ por rodada |

Segredo obrigatório: `ANTHROPIC_API_KEY`.

Para rodar um ciclo à mão: Actions > Agentes > Run workflow (funciona em qualquer branch que tenha o workflow). O agendamento só roda a partir da branch `main`.
