# Revisão: guadakan

Verbete: `verbetes/guadakan.md`. Revisor editorial, 30 out. 2026. Primeira revisão deste verbete. Os números de linha valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. A permissão do Bash negou o comando nesta sessão.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: rodou. Todos os identificadores do verbete estão na lista-mestra. As menções sem link que ele aponta são falsos positivos ("Pantanal" -> `pantanal-novela`) ou casos que corrigi (l. 26 e l. 28, ver "Corrigido direto").
- Alguém precisa rodar `npm run conferir` e `npm run build` antes do pull request. `scripts/rodada.sh` roda o primeiro ao fim da rodada.

**Fontes desta revisão:** abri nesta sessão as quatro notas (correio2022, ab2023, acritica2026cop, acritica2026paulista). Também abri a cgn2023 (Campo Grande News, 11/04/2023), que está no dossiê mas não no verbete: dessa vez ela abriu (o redator teve 403). Limite: a ferramenta de leitura devolve citações curtas e paráfrase, não o texto integral.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | **PROBLEMA** (P1, P2, P3, P5). O resto está OK: conferi cada parágrafo contra a nota citada |
| 2 | Link abre | OK. As quatro notas abrem a matéria certa, com autor e data conferidos. Não há bloco `links` |
| 3 | Sem cópia | OK. A maior sequência igual tem sete palavras ("mais de 17 milhões de animais vertebrados", l. 22), abaixo do limite |
| 4 | Dados pessoais | OK. Nada a remover |
| 5 | Tom | OK. A frase de Márcia Rolon "espetáculo de peso, que já rodou o Brasil" ficou fora |
| 6 | Divergências | **PROBLEMA** (P4, classificação indicativa). As outras divergências do dossiê aparecem: "estreia" em Corumbá (2022) e no Rio (2023), função de Márcia Rolon e tema da versão de 2026 sem o mito guató |
| 7 | Ficha | OK, salvo "Estreia registrada", que depende de matéria de anúncio (ver P1). Tipo: ab2023 e correio2022 ("dança contemporânea"). Realização: ab2023. Concepção cênica e direção geral: correio2022 ("concepção cênica e da direção-geral de Márcia Rolon"). Coreografia: correio2022. Patrocínio: ab2023. O único valor com número está entre aspas |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** Três veículos independentes: *Correio do Estado*, *Agência Brasil* e *A Crítica de Campo Grande* (duas matérias) |
| 9 | Ligações | OK depois da correção. Os 18 identificadores estão na lista-mestra |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-30`; identificador no padrão; resumo com cerca de 170 caracteres |

## PROBLEMAs

Todos ficam para o redator. Nenhum é dado pessoal.

**P1. L. 24 (e ficha l. 12, Espetáculos l. 42): as sessões de dezembro de 2022 aparecem como fato, mas a fonte é um anúncio.** O verbete diz "o Instituto encerrou o ano...", "Foram quatro apresentações", "reuniu mais de 400 participantes e envolveu mais de 60 pessoas". A correio2022 é de 13/12/2022, véspera das sessões, e fala no futuro: "contará com quatro apresentações", "vai reunir mais de 400 participantes", "amanhã e quinta-feira (14 e 15)". Correção: dizer que a matéria anunciou as sessões. Outra saída: citar a cgn2023, que abriu nesta revisão e confirma que "Guadakan foi apresentado pela primeira vez no Moinho In Concert, em Corumbá". Ela não confirma a data, o número de sessões nem o de participantes. O mesmo vale para "Estreia registrada" na ficha e para o item de Espetáculos.

**P2. L. 28: a apresentação na COP15 aparece como fato, mas a fonte é um anúncio.** O verbete diz "integrou a programação..." e "A apresentação foi em 27 de março". A acritica2026cop é de 26/03/2026 e diz "será encenada uma versão reduzida" "nesta sexta-feira, 27 de março". Nenhuma outra nota do verbete confirma que a sessão aconteceu: a acritica2026paulista cita só o Femina Vox em março. Correção: "A Crítica anunciou...", "programada para".

**P3. L. 30: a performance da Paulista e o evento do MASP aparecem como fato, mas a fonte é um anúncio.** O verbete diz "ocorreu na Avenida Paulista" e "No dia 18, houve participação em evento no MASP". A acritica2026paulista é de 16/05/2026, véspera, e fala em presente de anúncio: "quem caminhar pela Avenida Paulista pode se deparar", "acontece no domingo", "Na segunda-feira (18), o MASP sedia o evento". O trecho sobre o Femina Vox está no passado na fonte ("Em março, apresentou...") e está OK. Correção: "a matéria anunciou...".

**P4. L. 26: divergência de classificação indicativa escondida.** O verbete traz só "classificação de dez anos" (ab2023: "A classificação é dez anos."). O dossiê registra a divergência com a cgn2023, que diz "classificação indicativa de 14 anos" (abril de 2023, Campo Grande). Abri a cgn2023 nesta sessão e ela confirma os 14 anos. Correção: trazer as duas versões, cada uma com sua nota, ou tirar a classificação.

**P5. L. 34: "A Crítica a chama de diretora artística da companhia e do Instituto".** A nota do item é acritica2026paulista, que diz só "Márcia Rolon, diretora artística do Moinho Cultural". A matéria não diz que ela dirige a Cia. de Dança do Pantanal. A acritica2026cop diz "diretora artística do Instituto Moinho Cultural Sul-Americano" e "direção artística de Márcia Rolon" (do espetáculo). Correção: "diretora artística do Instituto", ou "responsável pela direção artística do espetáculo" com `[^acritica2026cop]`.

## ATENÇÕES

- **Fonte única: não há.** O verbete se apoia em três veículos independentes.
- **L. 36, Martinelli e José Maikon.** A frase da correio2022 é ambígua: "na adaptação musical e nos arranjos, o maestro Eduardo Martinelli, na regência e o maestro José Maikon Amorim Alves". A leitura do verbete (Martinelli nos arranjos, José Maikon "sem indicar a função dele") é defensável. A cgn2023 dá a regência a José Maikon e os arranjos a Martinelli. Se o redator citar a cgn2023, pode registrar a regência dele com nota. A matéria também grafa "Maikson" em outro trecho.
- **L. 18 e resumo, "orquestra ao vivo".** A nota da l. 18 é ab2023, que não diz "ao vivo". Quem diz é a correio2022 ("música de orquestra executada ao vivo"). Sugestão: acrescentar `[^correio2022]` à frase de abertura.
- **Dossiê, "Não confirmado".** O dossiê diz que nenhuma fonte lida define "Guadakan". A correio2022 define: "Guadakan, em idioma guató, significa Pantanal." Fica como pista para o redator. Não acrescentei.
- **Fontes que voltaram a abrir.** A cgn2023 abriu nesta revisão. A cgn2023bonito e a cgn2024sp não foram testadas. O que o redator deixou de fora por causa do 403 (Ponta Porã, Dourados, Bonito, Libras, São Paulo 2024, Arce Correia) pode entrar se ele reabrir essas matérias.
- **"Para saber mais"** repete a matéria da nota correio2022. Não é erro, mas é redundante.

## Corrigido direto

- L. 26: o nome do teatro aparecia duas vezes ("no Teatro Odylo Costa, filho, da Uerj: [[teatro-odylo-costa-filho|Teatro Odylo Costa, filho]], com..."). Agora: "no [[teatro-odylo-costa-filho|Teatro Odylo Costa, filho]], da Uerj, com...".
- L. 28: o link da COP15 estava num parêntese repetido ("... Espécies Migratórias, em Campo Grande ([[cop15-especies-migratorias|COP15]])"). Agora o link fica no próprio nome: "[[cop15-especies-migratorias|COP15 da Convenção sobre Espécies Migratórias]], em Campo Grande".

Nenhum fato foi acrescentado. `status` continua `rascunho`. Não mudei a situação na fila. Situação sugerida: `devolvido`.

## Fontes conferidas

correio2022, ab2023, acritica2026cop e acritica2026paulista (as quatro notas), mais a cgn2023 (dossiê), todas abertas em 30 out. 2026.

Dossiê `dados/dossies/guadakan.md`: **não tem seção "Atualização de".**

**Pronto para pull request: não.** Há cinco PROBLEMAs: P1 a P3 são eventos anunciados narrados como fato, P4 é divergência escondida e P5 é cargo além da fonte. Todos se resolvem trocando uma expressão ou uma nota. Depois disso, `npm run conferir` e `npm run build` precisam passar.
