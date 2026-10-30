# Revisão: guadakan

Verbete: `verbetes/guadakan.md`. Revisor editorial, 30 out. 2026. Segunda revisão: o verbete foi reescrito pelo redator depois da primeira (commit `7fb0e12`). Este relatório substitui o anterior. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("14 verbetes conferidos", "Nenhum erro").
- `npm run build`: **passou** (28 páginas geradas).
- `node scripts/ligacoes.mjs`: rodou. As sugestões para este verbete são falsos positivos ("Pantanal" -> `pantanal-novela`, l. 22, 24, 32) ou uma segunda menção de "Moinho In Concert", já ligada na l. 24. Nada a corrigir.
- Os 20 identificadores em `[[...]]` estão na lista-mestra.

**Fontes desta revisão:** abri nesta sessão as cinco notas (correio2022, ab2023, cgn2023, acritica2026cop, acritica2026paulista). Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral.

**Ligador:** o arquivo não tem alteração fora de commit. Conferi os textos dos 20 links contra as fontes: cada um repete o nome que a fonte usa, e nenhum fato mudou.

## Apontamentos da revisão anterior

| Apontamento | Situação |
|---|---|
| P1. Sessões de dez. 2022 narradas como fato | Resolvido. L. 24 diz "anunciou" e "haveria". Ficha: "Primeira apresentação anunciada". Espetáculos: "sessões anunciadas". A cgn2023 entrou para dizer que a obra foi apresentada pela primeira vez no Moinho In Concert ("Guadakan foi apresentado pela primeira vez no Moinho In Concert, em Corumbá") |
| P2. COP15 narrada como fato | Resolvido. L. 30: "anunciou", "seria encenada", "estava marcada" |
| P3. Paulista e MASP narrados como fato | Resolvido. L. 32: "anunciou, para o dia 17" e "para o dia 18". O Femina Vox continua no passado, como na fonte |
| P4. Classificação indicativa escondida | Resolvido. L. 28 traz dez anos (ab2023) e 14 anos (cgn2023), cada um com sua nota |
| P5. Cargo de Márcia Rolon além da fonte | Resolvido. L. 36: "diretora artística do Instituto", com `[^acritica2026cop]`, que diz "diretora artística do Instituto Moinho Cultural Sul-Americano" |
| ATENÇÃO "ao vivo" sem nota | Resolvido. L. 18 cita também a correio2022 ("música de orquestra executada ao vivo") |
| ATENÇÃO regência de José Maikon | Resolvido. L. 38 dá a regência de abril de 2023 com `[^cgn2023]` e mantém a ambiguidade da correio2022 |

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, nova). O resto está OK: conferi cada parágrafo contra as notas citadas |
| 2 | Link abre | OK. As cinco notas abrem a matéria certa, com autor e data conferidos. Não há bloco `links` |
| 3 | Sem cópia | OK. Maior sequência igual: "mais de 17 milhões de animais vertebrados" (l. 22), sete palavras. A l. 28 (horários) e a l. 30 (versão reduzida) estão com redação própria |
| 4 | Dados pessoais | OK. Nada a remover |
| 5 | Tom | OK. A frase de Márcia Rolon sobre o espetáculo ter "rodado o Brasil" ficou fora |
| 6 | Divergências | OK. Aparecem: classificação (10 e 14 anos), "estreia" no Rio em 2023 e primeira apresentação em Corumbá, regência por fonte e por ano, tema da versão de 2026 sem o mito guató (a acritica2026cop não cita "guató", "mito" nem "lenda"). O cargo de Márcia Rolon no Instituto vai para ATENÇÕES |
| 7 | Ficha | OK. Tipo: ab2023 e correio2022. Realização: ab2023. Concepção cênica e direção geral: correio2022 e cgn2023. Coreografia: correio2022, cgn2023, acritica2026cop. Primeira apresentação anunciada: correio2022 e cgn2023. Patrocínio (2023): ab2023. O único valor com número está entre aspas |
| 8 | Fontes independentes | OK. Quatro veículos: *Correio do Estado*, *Agência Brasil*, *Campo Grande News* e *A Crítica de Campo Grande* (duas matérias) |
| 9 | Ligações | OK. Os 20 identificadores estão na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; o resumo tem cerca de 175 caracteres |

## PROBLEMAs

Fica para o redator. Não é dado pessoal.

**P1. L. 26: a turnê de abril de 2023 aparece como fato, mas a fonte é um anúncio, e a entrada gratuita foi estendida a Dourados.** O verbete diz: "o espetáculo seguiu em turnê, com entrada gratuita: Campo Grande [...] em 12 de abril; Ponta Porã, em 14 de abril; e Dourados, na programação do FESTOP, em 15 de abril". A cgn2023 é de 11/04/2023, véspera da primeira data, e fala no futuro: "será apresentado" (dia 12), "A apresentação será às 18h" (dia 14), "A turnê termina em Dourados (15)". A gratuidade aparece só para Campo Grande ("Com classificação indicativa de 14 anos, a entrada é gratuita") e Ponta Porã. O trecho de Dourados não fala em entrada. A ab2023 (junho) confirma 12 cidades, mas não nomeia essas três nem as datas. Correção: "o *Campo Grande News* anunciou a turnê [...]", com a entrada gratuita só para Campo Grande e Ponta Porã. É o mesmo tipo de ajuste já feito nas l. 24, 30 e 32.

## ATENÇÕES

- **Cargo de Márcia Rolon.** A ab2023 e a correio2022 a chamam de diretora-executiva do Instituto. As duas matérias de 2026 a chamam de diretora artística. O verbete registra só a versão de 2026, com ano e fonte (l. 36), o que não contradiz a outra. Se o redator quiser, pode trazer as duas.
- **L. 32, "parceria com a Fundação de Turismo de MS".** A fonte diz "Em parceria com a Fundtur MS". A parceria é do Instituto. A frase do verbete está correta, mas é bom manter o sujeito claro.
- **Significado do nome.** A correio2022 diz: "Guadakan, em idioma guató, significa Pantanal." O dossiê põe isso em "Não confirmado". É pista para o redator. Não acrescentei.
- **Fontes ainda não reabertas.** A cgn2023bonito e a cgn2024sp (Bonito, Libras, São Paulo 2024, Arce Correia, Suelen Garcez, Laryssa Durigon) seguem fora. Também ajudariam a confirmar que a turnê de 2023 aconteceu.

## Corrigido direto

Nada. Não achei erro mecânico: todas as notas definidas são usadas, o formato das notas está igual em todas, o valor numérico da ficha está entre aspas e os identificadores estão corretos.

Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila nem na lista-mestra.

## Fontes conferidas

correio2022, ab2023, cgn2023, acritica2026cop e acritica2026paulista, todas abertas em 30 out. 2026.

**Pronto para pull request: não.** Os cinco PROBLEMAs da revisão anterior foram resolvidos. Falta um (P1, l. 26): turnê anunciada narrada como fato e entrada gratuita estendida a Dourados. Ele se resolve trocando uma expressão.
