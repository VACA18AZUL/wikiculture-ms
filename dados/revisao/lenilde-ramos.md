# Revisão: lenilde-ramos

Verbete: `verbetes/lenilde-ramos.md`. Revisor editorial, 30 out. 2026. Segunda revisão: o redator reescreveu o verbete (18:51 UTC) e o ligador inseriu links internos depois. Este relatório substitui o anterior. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. O Bash foi negado nesta sessão, então o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo. Achei à mão um defeito de exibição que o `conferir` não pega: links `[[...]]` na ficha. Já está corrigido (ver "Corrigido direto").
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. Conferi as ligações à mão contra a lista-mestra (ponto 9).
- `git diff` do ligador: não pude rodar. Li o arquivo atual inteiro. Os textos dos links do corpo repetem o nome que a fonte usa, e não achei fato novo.
- Antes do commit, alguém com Bash precisa rodar `npm run conferir` e `npm run build`.

**Fontes desta revisão:** abri nesta sessão as cinco notas (ce2023, pva2023, oeo2024, acr2026, ce2026). Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. Cerimônia do prêmio narrada como fato | Resolvido. A l. 38 diz "Foi anunciada entre os premiados", "a cerimônia estava marcada" e "as fontes lidas não confirmam a entrega". O resumo e a ficha dizem "anunciada entre as premiadas". Confirmei o futuro nas duas fontes: pva2023 ("acontecerá no dia 15 de dezembro") e ce2023 ("estará no Instituto Brincante") |
| ATENÇÃO. L. 16, primeira frase sem `[^ce2023]` | Resolvido. A frase tem `[^pva2023] [^ce2023]` |
| ATENÇÃO. L. 20, redação confusa das idades | Resolvido. O texto agora diz que a mesma matéria traz as duas idades |
| ATENÇÃO. José Octávio Guizzo sem linha de pessoa | Resolvido. Ele foi ligado a `jose-octavio-guizzo`, que agora tem linha na lista-mestra (fonte: *Os Pioneiros*). Ver ATENÇÕES sobre homônimo |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, l. 26, "acampamento do MST"). O resto está OK: conferi cada parágrafo contra as notas citadas |
| 2 | Link abre | OK. As cinco notas abrem a matéria certa, com autor e data conferidos. Não há bloco `links` |
| 3 | Sem cópia | OK. Não achei sequência de mais de oito palavras iguais. A maior coincidência é "professora, secretária e animadora cultural" (l. 32), com cinco palavras |
| 4 | Dados pessoais | OK. A ce2023 traz o pai e a mãe (instrumentos que tocavam), a origem do nome e a família: nada disso está no verbete. A amizade com Helena Meirelles e a escola em que estudou entram como trajetória |
| 5 | Tom | OK. Sem adjetivo de elogio. "Imortal", "de mão cheia" e "rock de butina" ficaram fora |
| 6 | Divergências | OK. Aparecem as duas idades de início na música (l. 20) e os dois nomes do local da cerimônia, Teatro Brincante e Instituto Brincante (l. 38). Sobre viver de música, ver ATENÇÕES |
| 7 | Ficha | OK depois da correção mecânica. Nascimento: pva2023 ("nasceu em Campo Grande, em 1952"). Atividade: ce2023 e oeo2024. Instituição: oeo2024 e ce2026. Prêmio: pva2023 e ce2023. Os valores com número estão entre aspas |
| 8 | Força da fonte | OK. Quatro veículos: *Correio do Estado* (duas matérias), *O Estado Online*, *A Crítica de Campo Grande* e o release do prêmio na *Revista Prosa Verso e Arte*. Há fatos com uma nota só (ver ATENÇÕES) |
| 9 | Ligações | OK. Os 19 identificadores estão na lista-mestra. "Glorinha Sá Rosa" ficou sem link de propósito. Ficam sem link nomes que não têm linha: Colégio Auxiliadora, Elifas Andreato, Teatro/Instituto Brincante, Marília Leite, Lennon Godoy e Roberto Pellizzer |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; o resumo tem cerca de 228 caracteres, abaixo do limite de 240 |

## PROBLEMAs

Fica para o redator. Não é dado pessoal.

**P1. L. 26: "em acampamento do MST".** A ce2023 não usa a sigla MST. O texto diz que ela tocou "embaixo de lona em acampamento de sem-terra". "Sem-terra" não identifica o movimento, e atribuir o acampamento ao MST vai além da fonte. Correção: "em acampamento de sem-terra". O dossiê já trazia "MST", e a revisão anterior não pegou.

## ATENÇÕES

- **L. 22, viver de música.** A ce2023 traz as duas falas: "nunca tive coragem de viver só de música" e que viveu só de música por cerca de dez anos, alternando com animação de festas e eventos. O verbete junta as duas em "vivido só de música por cerca de dez anos, sempre com outros empregos em paralelo", e a frase fica ambígua. Não chega a esconder divergência, mas o redator pode trazer as duas falas separadas.
- **L. 24, amizades.** A ce2023 chama Tetê Espíndola de "grande amiga", e não só Helena Meirelles. O verbete diz amiga só de Helena. Não está errado, porque fica aquém da fonte, mas a seleção é assimétrica.
- **L. 22, homônimo.** A linha `jose-octavio-guizzo` vem de *Os Pioneiros* ("autor de livro sobre a música urbana de MS"). A ce2023 dá só o nome. O nome é raro, e a ligação é plausível, mas nenhuma fonte do verbete confirma que é a mesma pessoa. "Glorinha Sá Rosa" continua sem link, como pede o dossiê.
- **Fatos com uma nota só.** Só a ce2023 sustenta o festival aos 16 anos, as influências, a apresentação na ONU em 2014 e o ano de *Onça Pintada* (2009). Só a oeo2024 sustenta a eleição em 2019 e *Vozes da Literatura* (2014).
- **pva2023 é release** da organização do prêmio. Ela não sustenta o verbete sozinha, e nenhum ponto depende só dela, a não ser o poema "Pertences de Uso Pessoal". Ali a fonte diz literalmente "nesse ritmo [polca-rock], musicou Pertences de Uso Pessoal", e a l. 43 está correta.
- **L. 47, equipe do álbum.** Marília Leite, Lennon Godoy e Roberto Pellizzer aparecem só na acr2026. A ce2026, citada junto, não os nomeia.
- **Wikipédia:** a lista-mestra continua "a conferir".

## Corrigido direto

- **Ficha, l. 10 e 11: tirei a sintaxe `[[...]]` dos valores.** O template `src/pages/verbetes/[id].astro` mostra os valores da ficha como texto puro (`<td>{valor}</td>`), e o plugin de wikilinks só age no corpo. Por isso os colchetes e o identificador apareceriam literalmente na página. Nenhum outro verbete usa link na ficha. Ficou assim: `Instituição: Academia Sul-Mato-Grossense de Letras` e `Prêmio: "Anunciada entre as premiadas do Prêmio Grão de Música, 2023"`. Os dois nomes continuam ligados no corpo (l. 30 e l. 38).

Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

ce2023, pva2023, oeo2024, acr2026 e ce2026, todas abertas em 30 out. 2026.

**Pronto para pull request: não.** O P1 da revisão anterior foi resolvido. Falta um PROBLEMA novo e pequeno (P1, l. 26, "MST"), que se resolve trocando uma palavra. Antes do pull request também é preciso rodar `npm run conferir` e `npm run build`, que não rodaram nesta sessão.
