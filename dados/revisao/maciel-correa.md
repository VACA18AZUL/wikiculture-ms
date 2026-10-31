# Revisão: maciel-correa

Verbete: `verbetes/maciel-correa.md`, segunda revisão, depois da reescrita do redator (`atualizado: 2026-10-31`). Revisor editorial, 31 out. 2026. Substitui o relatório anterior (devolvido por dois PROBLEMAs). O verbete se apoia só no livro *Os Pioneiros* (Teixeira, 2009), lido pelas fichas `dados/fontes/os-pioneiros/fichas/` (maciel-correa, ado, cadeado-de-ouro, irmaos-de-mato-grosso, flor-da-saudade, retorno-circulo-militar, o-canto-da-terra, delio-e-delinha, delinha, ze-correa, juliao, mario-vieira, marcilio-castioni, alex-queiroz, dino-franco) e por `discografia.csv` e `faixas.csv`. Nenhuma nota tem link. Os links internos acabaram de ser inseridos pelo ligador e foram conferidos um a um.

## Portão de evidências

- `npm run conferir`: **passou** ("23 verbetes conferidos. Nenhum erro."), antes e depois das correções.
- `npm run build`: **passou** ("42 page(s) built", com `/verbetes/maciel-correa/index.html`), antes e depois das correções.
- `node scripts/ligacoes.mjs`: aponta "Délio"/"Delinha" na l. 32 (título de seção, não se liga) e "Os Tigres" na l. 60 (já ligado na mesma linha). Diz que `ado` e `gravadora-discos-e-fitas-xaraes` estão fora da lista-mestra, mas os dois estão lá (l. 907 e 1003): o script ignora nomes com menos de 4 letras ("Ado") e, para nomes repetidos, guarda só o último id (ver ATENÇÕES).

## PROBLEMAs da revisão anterior

1. **Dois shows fundidos (antiga l. 36): resolvido.** O texto agora separa o retorno promovido por O Canto da Terra em 1992, no Círculo Militar, e a ida posterior ao União dos Sargentos, os dois atribuídos a Maciel, como na ficha `retorno-circulo-militar.md`. A data de Delinha (23/10/1993) ficou presa ao show do Círculo Militar, como nas fichas `delinha.md` e `delio-e-delinha.md`.
2. **"Cantor" sem fonte (antigas l. 6, 9 e 16): resolvido.** Resumo, ficha e primeira frase dizem só "acordeonista".

As ATENÇÕES antigas também foram atendidas: a direção de *Cadeado de Ouro* (Ado x Marcílio Castioni) está na seção "Divergências" (l. 42); O Canto da Terra aparece como quem promoveu o retorno, segundo Maciel.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Cada frase confere com as fichas das seções citadas. A data de Delinha (l. 36) citava a seção errada; corrigido (ver Corrigido direto) |
| 2 | Link abre | OK (não se aplica). Nenhuma nota tem link |
| 3 | Sem cópia | OK em relação às fichas. Comparação com o texto do livro NÃO CONFERIDA (o texto não está no repositório) |
| 4 | Dados pessoais | OK. Aeronáutica e curso militar entram como trajetória (motivo do afastamento da música; lugar onde conheceu Zacarias Mourão). Nada de família, saúde ou contato |
| 5 | Tom | OK. Afirmações do depoimento vêm atribuídas ("segundo ele", "Maciel diz") |
| 6 | Divergências | OK. Grafia do nome (Elicio/Elício; "Elizeu Maciel" nas faixas, conferido em `faixas.csv`), volta a Campo Grande (1972/1977), morte de Zé Corrêa, convite e gravação do disco solo, direção de *Cadeado de Ouro*, ano do retorno (1992/1993) e 11 x 9 LPs estão no texto, com as duas versões |
| 7 | Ficha | OK. Nascimento: `disc`. Atividade e Instrumento: `maciel`/`primeira`. Grupos: `maciel`. Cidade Campo Grande: `maciel` (voltou a tocar em 1972 em Campo Grande). Nenhum valor só numérico |
| 8 | Força da fonte | OK. Livro de pesquisa com depoimento e discografia dos encartes. **Fonte única** |
| 9 | Ligações | OK. Todos os identificadores estão em `verbetes/` ou na lista-mestra. Os links do ligador (`ado`, `o-canto-da-terra`, `cadeado-de-ouro`, `marcilio-castioni`) não mudaram o sentido de nenhuma frase. Acrescentado o link para `retorno-circulo-militar`, que tem linha na lista-mestra (ver Corrigido direto) |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-31`, identificador no padrão, resumo com cerca de 175 caracteres |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única.** Todas as notas citam *Os Pioneiros*. Pela regra de 30/10/2026, basta.
- **l. 50, "Alex e Queiroz" ligado a `alex-queiroz`.** O livro grafa "Alex e Queiroz" em *Diamante Negro* e "Alex R. Queiroz" em *Baile Correntino* e nos discos de Amambaí pela Xaraés; `discografia.csv` e a lista-mestra dizem "possivelmente a mesma pessoa". O link afirma a identidade. Continua da revisão anterior; o redator ou o Helton decide.
- **l. 50, gravadora Xaraés com dois ids na lista-mestra.** `gravadora-xaraes` (l. 1019) e `gravadora-discos-e-fitas-xaraes` (l. 1003) têm o mesmo nome, "Discos e Fitas Xaraés". O verbete usa o segundo. Fica para o garimpeiro unificar; se ele mantiver `gravadora-xaraes`, o link precisa mudar.
- **l. 20, 28 e 42, Ado.** A ficha `ado.md` junta numa só pessoa o Ado que dirigiu *Cadeado de Ouro* (fotógrafo em Londrina em 1974) e o Ado de Ado & Adail e Ado & Praense (Três Lagoas). A lista-mestra faz o mesmo. Aceito, mas é identificação da ficha, não frase explícita do livro conferida aqui.
- **l. 36, O Canto da Terra.** A linha da lista-mestra junta uma banda baileira dos anos 1990 (fonte UFMS, 2014) com o grupo citado por Maciel. Identidade plausível, não conferida.
- **l. 30, João do Rancho e Zé Ranchinho.** A ficha diz que Zé Corrêa "foi acordeonista de sua dupla", o que é ambíguo; a lista-mestra e a ficha `ze-correa.md` ligam a dupla a Maciel. Aceito como apoiado; vale conferir no livro. A redação continua redundante ("Segundo ele, admirava [...] e diz que").
- **l. 36, Maciel e O Canto da Terra.** Maciel diz que articulou a volta e também que O Canto da Terra a promoveu. O verbete reproduz as duas falas dele, como na ficha. Sem erro.
- **Situação atual.** As fontes lidas não dizem se ele está vivo; o presente ("é acordeonista") segue o livro (2009).

## Corrigido direto

- **l. 36, nota da data de Delinha.** A frase "[[delinha|Delinha]] data o show de retorno no Círculo Militar em 23 de outubro de 1993" citava `[^retorno]` (seção "Retorno da dupla"), mas as fichas `delinha.md`, `delio-e-delinha.md` e `retorno-circulo-militar.md` dão essa data na seção "A volta para Campo Grande". Criada a nota `[^volta]` com essa seção, no formato das outras. Nenhum fato mudou.
- **l. 36, link.** "o retorno" virou `[[retorno-circulo-militar|o retorno]]`: o evento tem linha na lista-mestra ("Show de retorno de Délio e Delinha no Círculo Militar").
- **Nota `[^flor]`.** Tirado o parêntese "(a produção e a direção constam na discografia de Irmãos de Mato Grosso)": as fichas `irmaos-de-mato-grosso`, `mario-vieira` e `juliao` põem esses créditos na seção "Discografia: Maciel Corrêa", que a nota já cita. O livro não tem seção de discografia de Irmãos de Mato Grosso.

Nenhum fato acrescentado. Nenhum dado pessoal achado. `status` continua `rascunho`. Nenhuma proposta criada; situação na fila não mudada.

## Fontes conferidas

*Os Pioneiros* (Rodrigo Teixeira, 2009), pelas fichas e por `discografia.csv`/`faixas.csv`, seções "Discografia: Maciel Corrêa", "Maciel Corrêa", "A primeira gravação", "O hit 'Cadeado'", "Bandeira de MS", "O legado", "Retorno da dupla", "A volta para Campo Grande" e "Discografia: Amambay & Amambaí" (Os Tigres, *Beco dos Apaixonados*, 1985, Arco Íris Discos). Os nove LPs, com anos, gravadoras e créditos, conferem com `discografia.csv`. "Saudade do Rio Grande" em *Diamante Negro* conferida em `faixas.csv` (lado A, faixa 5, "Dino Rocha – arr. Maciel Corrêa").

**Pronto para pull request: sim.** Os dois PROBLEMAs da revisão anterior foram resolvidos. Ficam as ATENÇÕES de homônimo (`alex-queiroz`, `ado`) e o id duplicado da Xaraés na lista-mestra.
