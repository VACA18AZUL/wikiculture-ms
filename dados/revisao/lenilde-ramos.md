# Revisão: lenilde-ramos

Verbete: `verbetes/lenilde-ramos.md`. Revisor editorial, 30 out. 2026. Terceira revisão. Desde o relatório anterior (commit 7d19055), o redator mudou três frases no commit bfbb1f1. Conferi com `git diff 7d19055 HEAD`, e o resto do arquivo está igual, inclusive a ficha sem `[[...]]`, como ficou na correção anterior. As frases mudadas estão nas l. 22 (viver de música), 24 (Tetê Espíndola também chamada de amiga) e 26 ("MST" trocado por "sem-terra"). Este relatório substitui os anteriores. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("17 verbetes conferidos. [...] Nenhum erro.").
- `npm run build`: **passou** (33 páginas).
- `node scripts/ligacoes.mjs`: rodou. As sugestões são "Hospital São Julião" no título de seção (l. 28) e no título do livro (l. 47), que já está ligado nas l. 32 e 47; "Julião" -> `juliao` (falso positivo); "Onça Pintada" (l. 42, já ligado como "álbum"); e o título de *História sem Nome* (l. 44, já ligado como "livro"). Nada a fazer.

**Fontes abertas nesta sessão:** ce2023, que sustenta as três frases mudadas. As outras quatro notas (pva2023, oeo2024, acr2026 e ce2026) abriram na rodada anterior, no mesmo dia, e os trechos que citam não mudaram.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. L. 26, "acampamento do MST" | **Resolvido.** O verbete diz agora "em acampamento de sem-terra". A ce2023, reaberta, diz "embaixo de lona em acampamento de sem-terra", e a sigla MST não aparece |
| ATENÇÃO. L. 22, viver de música | **Resolvido.** O verbete diz agora: "Disse que nunca teve coragem de viver só de música e também que viveu só dela por cerca de dez anos, alternando com a animação de festas e eventos". A ce2023 confere: "nunca tive coragem de viver só de música. Sempre tive um emprego para garantir espaço pra música", "mesmo quando resolvi viver só de música, e isso durou uns 10 anos" e "trabalho braçal", "que é tocar em festas, eventos, na noite" |
| ATENÇÃO. L. 24, amizades | **Resolvido.** O verbete diz agora que ela "chamou as duas de amigas". A ce2023 confere: "Tetê Espíndola, grande amiga" e "Helena Meirelles (1924-2005), de quem fui grande amiga" |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. As três frases mudadas conferem com a ce2023. O resto não mudou desde a revisão anterior, que o conferiu parágrafo por parágrafo |
| 2 | Link abre | OK. ce2023 abriu nesta sessão (Marcos Pierry, 22 nov. 2023). As outras quatro abriram na rodada anterior, no mesmo dia. Não há bloco `links` |
| 3 | Sem cópia | OK. A maior coincidência nas frases novas é "coragem de viver só de música", com seis palavras |
| 4 | Dados pessoais | OK. O pai aparece só como quem deu a sanfona (l. 20), no contexto da formação musical. Família, saúde e origem do nome ficaram fora. Não há nada a remover |
| 5 | Tom | OK. "Imortal" ficou fora do texto e só aparece no título da matéria, dentro da nota |
| 6 | Divergências | OK. Aparecem as duas idades de início na música (l. 20), as duas falas sobre viver de música (l. 22) e os dois nomes do local da cerimônia (l. 38) |
| 7 | Ficha | OK. Nascimento (pva2023), Atividade (ce2023, oeo2024), Instituição (oeo2024, ce2026), Prêmio (pva2023, ce2023). Os valores com número estão entre aspas |
| 8 | Força da fonte | OK. Quatro veículos: *Correio do Estado* (duas matérias), *O Estado Online*, *A Crítica de Campo Grande* e o release do prêmio na *Revista Prosa Verso e Arte* |
| 9 | Ligações | OK. Os identificadores estão na lista-mestra. Glorinha Sá Rosa continua sem link, de propósito, como pede o dossiê |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 228 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Dossiê desatualizado.** `dados/dossies/lenilde-ramos.md`, l. 47, ainda diz "em acampamento do MST", embora a l. 135 registre a troca. Não mexi, porque o arquivo é do pesquisador e do redator. Vale corrigir para que uma reescrita futura não traga a sigla de volta.
- **L. 22, homônimo.** A linha `jose-octavio-guizzo` vem de *Os Pioneiros*. A ce2023 dá só o nome. A ligação é plausível, mas nenhuma fonte do verbete confirma que é a mesma pessoa.
- **Fatos com uma nota só.** Só a ce2023 sustenta o festival aos 16 anos, as influências, a apresentação na ONU em 2014 e o ano de *Onça Pintada* (2009). Só a oeo2024 sustenta a eleição em 2019 e *Vozes da Literatura* (2014).
- **pva2023 é release** da organização do prêmio. Só o poema "Pertences de Uso Pessoal" (l. 43) depende dela sozinha.
- **L. 47, equipe do álbum.** Marília Leite, Lennon Godoy e Roberto Pellizzer aparecem só na acr2026.
- **Wikipédia:** a lista-mestra continua "a conferir".

## Corrigido direto

Nada nesta rodada. Todas as notas definidas são usadas, o formato das notas é o mesmo em todas, os valores numéricos da ficha estão entre aspas e a ficha não tem `[[...]]`. Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

Nesta sessão: ce2023, aberta em 30 out. 2026. Na rodada anterior, do mesmo dia: pva2023, oeo2024, acr2026 e ce2026.

**Pronto para pull request: sim.** O P1 anterior ("MST") foi resolvido, as duas ATENÇÕES de redação também, e `npm run conferir` e `npm run build` passam.
