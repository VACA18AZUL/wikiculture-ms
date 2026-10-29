# Revisão: almir-sater

Verbete: `verbetes/almir-sater.md` (`atualizado: 2026-10-29`). Revisor editorial, 29 out. 2026. É a terceira revisão. A segunda, do mesmo dia, devolveu o verbete com dois PROBLEMAs de cópia na l. 24. Depois dela, o redator reescreveu o trecho. Hoje o ligador acrescentou links para `pantanal-novela`. Reabri as nove notas nesta sessão.

Método: a ferramenta de leitura devolve trechos literais curtos (até cerca de 120 caracteres) e resumo do resto. A comparação de cópia foi feita trecho a trecho, pedindo à ferramenta a frase exata de cada passagem do verbete.

## Portão de evidências

- `npm run conferir`: **passou**. Saída: "7 verbetes conferidos." e "Nenhum erro.". A lista de verbetes desejados inclui `pantanal-novela`, como esperado.
- `npm run build`: **passou**. 19 páginas geradas, entre elas `/verbetes/almir-sater/index.html`.
- `node scripts/ligacoes.mjs`: rodou. Aponta 7 menções sem link em `almir-sater.md`, todas conferidas (ver ponto 9). Diz também "Verbetes desejados fora da lista-mestra: tete-e-o-lirio-selvagem". Isso é falso positivo: a linha existe (l. 375 da lista-mestra). O script perde o identificador porque duas linhas de LP, `tete-e-o-lirio-selvagem-lp` (l. 82) e `lp-tete-e-o-lirio-selvagem` (l. 382), têm o mesmo nome depois de tirados os parênteses e sobrescrevem a associação nome → identificador.
- Mudança do ligador: `git diff` confirma que só entraram dois `[[pantanal-novela|*Pantanal*]]`, nas l. 40 e 48. O texto não mudou e não há fato novo.

## Situação dos PROBLEMAs da revisão anterior

| # | PROBLEMA anterior | Situação |
|---|---|---|
| 1 | l. 24, "e deixou a faculdade para se dedicar à música" (cópia do Correio) | **Resolvido.** Agora: "ele fez Direito e largou o curso para seguir na música". Correio: "participou do Festival da Record e deixou a faculdade para se dedicar à música". Não sobra sequência comum de mais de duas palavras. O sentido se mantém: o curso largado é o Direito. |
| 2 | l. 24, "cursou pouco mais de um ano de Educação Física na" (cópia do Correio) | **Resolvido.** Agora: "passou pouco mais de um ano no curso de Educação Física da [[ufms\|...]], até se mudar para São Paulo, em 1978". Correio: "cursou pouco mais de um ano de Educação Física na UFMS", e na frase seguinte: "até mudar-se novamente, agora para São Paulo, em 1978". A maior sequência comum é "pouco mais de um ano", com cinco palavras. O sentido se mantém. |

ATENÇÕES da revisão anterior:

- l. 22, cópia no limite ("trancou a matrícula na Faculdade Cândido Mendes e voltou"): **resolvida.** Agora: "interrompeu o curso, com matrícula trancada na Faculdade Cândido Mendes, e retornou a Mato Grosso". Dicionário: "Trancou a matrícula na Faculdade Cândido Mendes e voltou para Mato Grosso.". A maior sequência comum é "na Faculdade Cândido Mendes", só o nome.
- l. 30, verbo do show: **atendida.** O texto agora usa "integrou o show", como o Correio. A troca, porém, deixou a frase inteira igual à fonte (ver ATENÇÕES abaixo).
- l. 36, l. 44/92 ("Rocca"), l. 76 (*Violeiros do Brasil*) e l. 86 (*+Ar*): o texto não mudou nesses pontos e as observações continuam valendo (ver ATENÇÕES).

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Conferi cada parágrafo contra a nota que cita. A l. 24 reescrita segue o Correio: Direito largado pela música, depois pouco mais de um ano de Educação Física na UFMS, até a ida a São Paulo, em 1978. Há ressalvas menores nas ATENÇÕES (l. 40, l. 44, l. 76). |
| 2 | Link abre | OK. Os 9 links das notas e os 2 de "Para saber mais" abrem na página certa, com título, autor e data iguais aos das notas. |
| 3 | Sem cópia | OK. Os dois trechos da l. 24 foram reescritos. Sobram trechos longos iguais à fonte só onde há nome ou título (l. 30 e l. 36), abaixo do limite pelo critério usado; ver ATENÇÕES. |
| 4 | Dados pessoais | OK. O filho, citado em cgn2024 ("atuará ao lado de seu filho"), continua fora. Nada removido. |
| 5 | Tom | OK. As avaliações aparecem atribuídas: a pesquisa da USP e a fala do próprio Sater sobre o público de Campo Grande. Não há superlativo sem atribuição nem primeira pessoa. |
| 6 | Divergências | OK. Todas as divergências do dossiê aparecem com as duas versões: ida a São Paulo (1978 ou 1979), formação, Festival da Record, prêmios de 2016 e ano de *Ar*, grafias. A dúvida sobre *Cunhataiporã* ficou fora do verbete, como o dossiê pede. |
| 7 | Ficha | OK. Nascimento: dmpb (l. 16). Atividade: ce2019 e dmpb (l. 36 e 38). Instrumento: dmpb e jusp2021 (l. 22 e 58). Reconhecimentos: ce2019 e dmpb (l. 62 e 64). Nenhum valor só numérico. |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** São 9 notas de 5 veículos independentes: Dicionário Cravo Albin, Correio do Estado, Campo Grande News, Jornal da USP e A Crítica de Campo Grande. |
| 9 | Ligações | OK. Os 25 identificadores usados existem em `dados/lista-mestra.csv`, inclusive `tete-e-o-lirio-selvagem` (l. 375), apesar do aviso do script. O script aponta 7 menções sem link, e nenhuma pede correção. Na l. 32 ("Comitiva Esperança"), na l. 36 (*Pantanal*, *Rei do Gado*) e na l. 46 ("Paulo Simões"), são repetições de nomes já ligados antes. Na l. 46 e na l. 79, "Pantanal" é parte de "Trem do Pantanal" e do título do disco *Almir Sater no Pantanal*, não a novela: falsos positivos. Na l. 46, "Trem do Pantanal" aparece duas vezes, e o link está na segunda menção; é aceitável. |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29` (hoje), identificador `almir-sater` no padrão, resumo com cerca de 150 caracteres. |

Critério de cópia (o mesmo das revisões anteriores): sequência de mais de oito palavras iguais à fonte, sem contar nomes próprios e títulos, que não têm paráfrase.

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única: não há.** O verbete se apoia em 5 veículos independentes (ver ponto 8).
- **Linha 30, cópia no limite (nova, criada pelo acerto da revisão anterior).** Verbete: "Acompanhou o grupo [[tete-e-o-lirio-selvagem|Tetê e o Lírio Selvagem]] e integrou o show "Vozes e Violas"". Correio: "Acompanhou o grupo Tetê e O Lírio Selvagem e integrou o show “Vozes e Violas”". São 15 palavras iguais em sequência, mas 8 delas são o nome do grupo e o título do show. Fora deles, ficam 7 ("Acompanhou o grupo ... e integrou o show"), abaixo do limite pelo critério acima. Mesmo assim, a frase repete a estrutura da fonte palavra por palavra. Recomendo que o redator mude a ordem antes do pull request, por exemplo começando pelo show, sem acrescentar nada. Se não mudar, o Helton decide. Não corrigi: cópia não é correção mecânica.
- **Linha 36, cópia no limite (como antes).** "Bicho do Mato e protagonizou A História de Ana Raio e Zé Trovão". Correio: "“Bicho do Mato” e protagonizou “A História de Ana Raio e Zé Trovão”". O trecho é quase todo de títulos.
- **Linha 40**: "atuava no remake da novela *Pantanal*". A matéria põe a participação no remake entre os projetos em que ele está "imerso" em fevereiro de 2024. A frase segue a fonte, que não data o remake. É aceitável.
- **Linhas 44 e 92**: "Geraldo Roca (grafado 'Rocca')". A forma principal do Dicionário é "Geraldo Rocca (grafado também como Geraldo Roca)". Seria mais exato dizer que o Dicionário grafa "Rocca" e registra também "Roca".
- **Linha 76**: "*Violeiros do Brasil* (1988 e 2004)". Na discografia do Dicionário, a linha de 2004 traz "Violeiros do Brasil II" (Revivendo). O verbete pode registrar também esse título.
- **Linha 86**: "*+Ar* (2018)". Na discografia do Dicionário, a linha de 2018 diz "Ar"; no texto, o disco se chama "+Ar". O verbete segue o texto. Não precisa mudar nada.
- **Lista-mestra, fora do verbete**: `tete-e-o-lirio-selvagem-lp` (l. 82) e `lp-tete-e-o-lirio-selvagem` (l. 382) parecem ser o mesmo LP em duas linhas. É isso que confunde `scripts/ligacoes.mjs`. Fica para o garimpeiro; não mexi.
- **Homônimo**: nenhum.

## Corrigido direto

- Nada. Não achei erro mecânico: as 9 notas definidas estão em uso e no formato, os identificadores dos links existem na lista-mestra, a ficha não tem valor só numérico e não há erro de digitação.
- Não achei dado pessoal; nada foi removido.
- Não propus nomes nem relações em `dados/propostas/`. Não mudei a situação na fila: o pedido não incluía essa etapa. Situação sugerida: `pronto-para-lote`, por `node scripts/fila.mjs marcar almir-sater pronto-para-lote`.

## Fontes conferidas

ce2019 (Correio do Estado, 23 jul. 2019); dmpb (Dicionário Cravo Albin); cgn2022 (Campo Grande News, 13 nov. 2022); cgn2022b (Campo Grande News, 23 out. 2022); cgn2024 (Campo Grande News, 8 fev. 2024); cgn2024b (Campo Grande News, 16 nov. 2024); jusp2021 (Jornal da USP, 30 abr. 2021); acr2026 (A Crítica de Campo Grande, 10 abr. 2026); ce2024 (Correio do Estado, 23 set. 2024). Reabri todas nesta sessão.

**Pronto para pull request: sim.** Não há PROBLEMA, e `npm run conferir` e `npm run build` passam. Recomendo reescrever a l. 30 (ATENÇÃO de cópia no limite) antes de abrir o pull request; é só reescrita, sem pesquisa nova.
