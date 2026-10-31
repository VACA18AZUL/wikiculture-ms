# Revisão: maciel-correa

Verbete: `verbetes/maciel-correa.md`, primeira revisão (`atualizado: 2026-10-31`). Revisor editorial, 31 out. 2026. O verbete se apoia só no livro *Os Pioneiros* (Teixeira, 2009), lido pelas fichas `dados/fontes/os-pioneiros/fichas/` (maciel-correa, ado, cadeado-de-ouro, irmaos-de-mato-grosso, flor-da-saudade, retorno-circulo-militar, delio-e-delinha, delinha, ze-correa) e por `discografia.csv` e `faixas.csv`. Nenhuma nota tem link.

## Portão de evidências

- `npm run conferir`: **passou** ("20 verbetes conferidos. Nenhum erro."), antes e depois das correções.
- `npm run build`: **passou** ("37 page(s) built", com `/verbetes/maciel-correa/index.html`), antes e depois das correções.
- `node scripts/ligacoes.mjs`: neste verbete aponta "Délio"/"Delinha" na l. 32 (é o título da seção, não se liga) e "Os Tigres" na l. 58 (já ligado na mesma linha). Nenhum identificador divergente.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA.** l. 36: funde dois shows diferentes (ver PROBLEMA 1). l. 6, 9 e 16: "cantor" sem apoio nas fichas (PROBLEMA 2). O resto confere com as fichas e as seções citadas |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link |
| 3 | Sem cópia | OK em relação às fichas. Comparação com o texto do livro NÃO CONFERIDA (o texto não está no repositório) |
| 4 | Dados pessoais | OK. Aeronáutica e curso militar entram como trajetória (motivo de afastamento da música, lugar onde conheceu Zacarias). Nada de família, saúde ou contato |
| 5 | Tom | OK. Afirmações do depoimento vêm atribuídas a ele ("segundo ele", "Maciel diz") |
| 6 | Divergências | OK, com ATENÇÃO. Grafia do nome (Elicio/Elício, Elizeu nas faixas), datas (1972/1977, morte de Zé Corrêa), convite e gravação do disco solo, ano do show de retorno (1992/1993) e 11 x 9 LPs estão no texto. A direção de *Cadeado de Ouro* (Ado no depoimento, Marcílio Castioni no encarte) aparece nas duas versões, mas sem aviso de que divergem (ver ATENÇÕES). A data 1992/1993 está presa ao show errado (PROBLEMA 1) |
| 7 | Ficha | **PROBLEMA** em "Atividade: Acordeonista e cantor" ("cantor" sem nota que o apoie; PROBLEMA 2). Nascimento: `disc`. Instrumento: `maciel`/`primeira`. Grupos: `maciel`. Cidade Campo Grande: `maciel` (voltou a tocar em 1972 em Campo Grande). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimento e discografia dos encartes. **Fonte única** (o dossiê descartou a matéria do Campo Grande News de 2024, que só cita o nome) |
| 9 | Ligações | OK. Todos os identificadores existem na lista-mestra ou em `verbetes/`. Ver ATENÇÃO sobre `alex-queiroz` |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 185 caracteres |

## PROBLEMAs

1. **l. 36, dois shows fundidos em um.** Trecho: "Maciel diz também que articulou a volta da dupla nos anos 1990 e promoveu um show no União dos Sargentos, no Círculo Militar. Ele data o show em 1992; [[delinha|Delinha]] o data em 1993.[^retorno]".
   O que a fonte diz: a ficha `maciel-correa.md` (seção "Retorno da dupla") diz que ele articulou a volta e "promoveu show no União dos Sargentos", e registra como divergência o ano do show de retorno **no Círculo Militar** (1992 para ele, 1993 para Delinha). A ficha `retorno-circulo-militar.md` (mesma seção) separa os dois: segundo Maciel, o grupo O Canto da Terra promoveu o retorno em 1992, no Círculo Militar; **depois** ele levou a dupla ao União dos Sargentos. A ficha `delinha.md` (seção "A volta para Campo Grande") dá 23 de outubro de 1993, no Círculo Militar. O verbete põe o União dos Sargentos "no Círculo Militar" e aplica a divergência 1992/1993 ao show que Maciel promoveu. Para o redator: separar os dois eventos conforme as fichas, atribuídos a Maciel.
2. **l. 6, 9 e 16, "cantor".** Resumo ("Acordeonista e cantor sertanejo"), ficha ("Atividade: Acordeonista e cantor") e primeira frase ("é acordeonista e cantor sertanejo"). Nenhuma ficha do livro diz que ele canta: elas o dão como acordeonista (de *Flor da Saudade*, de *O Sol e a Lua*) e como intérprete do disco *Cadeado de Ouro* (ficha `cadeado-de-ouro.md`), sem dizer se canta. Que tenha feito dupla com Rubens e com João do Rancho e Zé Ranchinho é indício, não afirmação. O "cantor" vem da observação da lista-mestra, que não é fonte. Para o redator: tirar "e cantor" ou achar a passagem no livro (Helton tem a cópia) e citar a seção.

## ATENÇÕES

- **Fonte única.** Todas as notas citam *Os Pioneiros*. Pela regra de 30/10/2026, basta.
- **l. 28 e 47, direção de *Cadeado de Ouro*.** O depoimento (seção "O hit 'Cadeado'"; fichas `maciel-correa` e `ado`) diz que Ado dirigiu a gravação; a discografia dá "produção e direção: Marcílio Castioni". As duas versões estão no verbete, cada uma com a nota certa, mas o leitor não é avisado de que divergem. Sugestão ao redator: registrar na seção "Divergências nas datas" (que pode virar "Divergências").
- **l. 30, João do Rancho e Zé Ranchinho.** A ficha diz que Zé Corrêa "foi acordeonista de sua dupla", o que é ambíguo. A lista-mestra (`joao-do-rancho-e-ze-ranchinho`) e `relacoes.csv` registram a dupla como de Maciel, e a ficha `ze-correa.md` liga a dupla a Maciel. Aceito como apoiado; vale conferir no livro. A frase tem redação redundante ("Segundo ele, admirava [...] e diz que").
- **l. 48, "Alex e Queiroz" ligado a `alex-queiroz`.** O livro grafa "Alex e Queiroz" neste disco e "Alex R. Queiroz" em *Baile Correntino*; `discografia.csv` e a lista-mestra dizem "possivelmente a mesma pessoa". O link afirma a identidade. Dúvida de homônimo: o redator decide se mantém o link.
- **l. 24, ordem.** O encontro de 1964 vem depois do afastamento de 1967 e da volta de 1972. Sem erro de fato.
- **l. 36, O Canto da Terra.** Segundo as fichas `retorno-circulo-militar` e `delio-e-delinha`, Maciel atribui o retorno de 1992 ao grupo O Canto da Terra, e não a si. Ao reescrever, o redator pode registrar isso com a nota `retorno`.
- **Situação atual.** As fontes lidas não dizem se ele está vivo; o presente segue o livro (2009).

## Corrigido direto

- **l. 64, formato da nota `[^maciel]`.** Tirada a frase "Lida pela ficha em `dados/fontes/os-pioneiros/fichas/maciel-correa.md`.", fora do formato de citação de `dados/fontes/os-pioneiros/LEIA-ME.md` e que mostrava caminho interno do repositório no site. A referência ao livro e à seção ficou igual.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `discografia.csv`/`faixas.csv`, seções "Discografia: Maciel Corrêa", "Maciel Corrêa", "A primeira gravação", "O hit 'Cadeado'", "Bandeira de MS", "O legado", "Retorno da dupla", "A volta para Campo Grande" (conferência da data de Delinha) e "Discografia: Amambay & Amambaí" (Os Tigres). "Saudade do Rio Grande" em *Diamante Negro* conferida em `faixas.csv` (lado A, faixa 5, "Dino Rocha – arr. Maciel Corrêa").

**Pronto para pull request: não.** Dois PROBLEMAs para o redator: os shows fundidos na l. 36 e "cantor" sem fonte nas l. 6, 9 e 16.
