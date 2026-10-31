# Revisão: aurelio-miranda

Verbete: `verbetes/aurelio-miranda.md`, segunda revisão, depois da reescrita do redator (devolução de 31/10/2026) e da passagem do ligador (alterações ainda não commitadas: links para `circo-teatro-tostao`, `guarany`, `festao`, `tostao`, e `chantecler` trocado por `gravadora-chantecler`). Revisor editorial, 31 out. 2026. Fonte única: o livro *Os Pioneiros* (Teixeira, 2009), lido pelas fichas `aurelio-miranda`, `festao`, `cruzeiro-tostao-e-centavo`, `cruzeiro-tostao-e-guarany`, `fogo-humano`, `cruzeiro-e-tostao`, `estrada-de-chao`, `circo-teatro-tostao` e `guarany`, e por `discografia.csv`.

## Portão de evidências

- `npm run conferir`: **passou** ("24 verbetes conferidos. Nenhum erro."), antes e depois da correção.
- `npm run build`: **passou** ("43 page(s) built"), antes e depois da correção.
- `node scripts/ligacoes.mjs`: sugere ligar "Tostão", "Festão" e "Estrada de Chão" em títulos de seção (l. 25 e 31) e em menções repetidas (l. 27, 35, 39) que já têm link antes no mesmo parágrafo. Nada a fazer.

## PROBLEMAs da revisão anterior

1. **l. 33, vencedor do 1º Festão: RESOLVIDO.** O texto agora separa os lugares (*Estrada de Chão* venceu, *Lavrador Rei Sem Coroa* ficou em segundo) e registra as duas versões: Onésimo Filho dá os dois lugares a Aurélio; Tostão diz que o grupo se apresentou como trio. Confere com as fichas `festao` e `cruzeiro-tostao-e-centavo`.
2. **l. 33, 2º Festão: RESOLVIDO.** Saiu a frase "nenhuma outra fonte lida confirma". Entrou a l. 35, com a versão de Tostão: o trio Cruzeiro, Tostão e Guarany (Aurélio, Tostão e Orlei) ganhou com *Fogo Humano*, e o prêmio foi um carro. Confere com as fichas `festao`, `cruzeiro-tostao-e-guarany` e `fogo-humano` (seções "Os Campeões do Festão" e "O Final Prematuro do Trio", ambas na nota). A leitura dupla da fala de Onésimo segue como ATENÇÃO, abaixo.

As ATENÇÕES anteriores também foram tratadas: o circo agora vem atribuído ("segundo Aurélio") com a versão de Tostão (l. 27), e "Califórnia" tem link para a gravadora.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. l. 15 a 23 conferem com a ficha `aurelio-miranda` (seção "Rumo ao Sul de MT" e discografia); l. 27 com `aurelio-miranda` e `cruzeiro-e-tostao`; l. 29 com `aurelio-miranda`; l. 33 e 35 com `festao`, `cruzeiro-tostao-e-centavo`, `cruzeiro-tostao-e-guarany` e `fogo-humano`; l. 39 a 45 com `aurelio-miranda`, `estrada-de-chao`, `guarany` e `discografia.csv` (*Raízes e Sentimentos*, 1988, independente, produção e direção de Guarany e Miranda) |
| 2 | Link abre | OK (não se aplica). A nota cita fonte impressa, sem link |
| 3 | Sem cópia | OK em relação às fichas, que já são paráfrase. Comparação com o texto do livro NÃO CONFERIDA: o texto não está no repositório |
| 4 | Dados pessoais | OK. Só data e local de nascimento, do cabeçalho da discografia do livro. A venda de livros e a hospedagem em hotel (ficha) ficaram fora |
| 5 | Tom | OK. "Clássico regional" atribuído ao livro. Sem elogio nem primeira pessoa |
| 6 | Divergências | OK. Prêmio do Bolinha (1972 x c. 1978), autoria de *Estrada de Chão*, circo da dupla e 1º Festão (Aurélio x trio) aparecem com as duas versões. Leitura da fala de Onésimo sobre o 2º Festão: ver ATENÇÕES |
| 7 | Ficha | OK. Nascimento, Atividade e Grupos com apoio no texto e na nota. Nascimento entre aspas (texto com vírgula); nenhum valor só numérico sem aspas |
| 8 | Força da fonte | OK. Livro de pesquisa com incentivo público. **Fonte única** |
| 9 | Ligações | OK. Todos os identificadores existem em `verbetes/` ou na lista-mestra (inclusive `circo-teatro-tostao`, `orlei`, `fogo-humano`, `cruzeiro-tostao-e-guarany`, `gravadora-chantecler`, `onesimo-filho`, `lavrador-rei-sem-coroa`). `guarany` (l. 27 e 45) é Evânio, da dupla Tostão e Guarany e coprodutor do LP de 1988 (ficha `guarany`); Orlei, o primeiro Guarany do trio, tem link próprio. Os links do ligador não mudam o sentido das frases |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 210 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **l. 33, fala de Onésimo Filho.** As fichas leem o mesmo trecho de dois jeitos: `festao` diz que Onésimo atribui "o 1º e o 2º lugares" a Aurélio (no 1º Festão); `aurelio-miranda` diz "Segundo Onésimo Filho, também ganhou o 2º Festão". O verbete seguiu a primeira leitura. As duas leituras são compatíveis com o texto (o trio que venceu o 2º Festão, segundo Tostão, tinha Aurélio), mas o dossiê registrou a segunda. Convém o Helton conferir no livro, seção "Os Campeões do Festão".
- **Seções que faltam na nota.** A versão de Tostão sobre *Estrada de Chão* (l. 39) está, pela ficha `estrada-de-chao`, na seção "Estrada de Chão", e o Circo Teatro Tostão (l. 27), na seção "Os Donos do Circo". Nenhuma das duas está listada em `[^pioneiros]`. As fichas `aurelio-miranda` e `cruzeiro-e-tostao` registram essas divergências sem seção, então não acrescentei por não ter certeza da seção de cada frase.
- **Fonte única.** O dossiê pede uma segunda fonte (imprensa ou Mapa Cultural). A matéria do *Correio do Estado* de 22/07/2011, usada em `tostao-e-guarany`, cita Aurélio como autor de "Estrada de chão". Fica para o atualizador.
- **`cidade: Cuiabá`.** Começou em Cuiabá, mas atuou em Campo Grande a partir de 1977, segundo o próprio verbete. A lista-mestra também diz Cuiabá. Decisão do Helton.
- **Ficha, Grupos.** Não lista o trio Cruzeiro, Tostão e Guarany, que o texto cita na l. 35. Não é erro.
- **Wikipédia.** Não conferida; a coluna `wikipedia_pt` segue vazia.

## Corrigido direto

- **l. 51, formato da nota `[^pioneiros]`.** Tirado o trecho "(lidas pela ficha `dados/fontes/os-pioneiros/fichas/aurelio-miranda.md`)", fora do formato de citação de `dados/fontes/os-pioneiros/LEIA-ME.md`, que mostrava caminho interno do repositório no site e já não era exato (o texto agora usa outras fichas do mesmo livro). Mesma correção feita antes em `gravadora-california` e `maciel-correa`. Referência ao livro e às seções igual.

Nenhum fato acrescentado. Nenhum dado pessoal achado; nenhuma frase removida. `status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas listadas no início e por `discografia.csv`.

**Pronto para pull request: sim.** Os dois PROBLEMAs da revisão anterior foram resolvidos, sem PROBLEMA novo. Fonte única (livro impresso, via fichas). A leitura da fala de Onésimo fica como ATENÇÃO para conferência no livro.
