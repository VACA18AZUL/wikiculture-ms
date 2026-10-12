# Plano do WikiCulture MS

Portal de perfis de agentes culturais e produções de Mato Grosso do Sul, nas áreas de teatro, dança, circo, literatura, artes plásticas, audiovisual, música, ilustração, quadrinhos e fotografia.

**Estado atual:** Fase 0 concluída em 08/10/2026. Fase 1 (lista-mestra) com as sete áreas levantadas em 08/10/2026 e aguardando revisão de Helton: artes plásticas, música, teatro, dança, literatura, audiovisual e circo (`dados/fontes-*.md` lista as fontes lidas de cada uma). Depois, uma leitura de matérias do Lado B (Campo Grande News) acrescentou nomes em todas as áreas (`dados/fontes-lado-b.md`). Em 08/10/2026 Helton fundiu duplicatas, dispensou Vitor Brauer e pediu mais três áreas (ilustração, quadrinhos, fotografia) e, em música, bandas e integrantes (decisões em `dados/fontes-lado-b.md`); as três áreas novas e as bandas foram levantadas no mesmo dia com apoio do Perplexity e conferência página a página (`dados/fontes-novas-areas.md`). Sobre a lista: 723 nomes; as áreas com mais cobertura são música, literatura e artes plásticas; circo e dança são as mais fracas. Fase 2 iniciada em 08/10/2026 com o lote 1 de 10 verbetes-piloto o lote 2 de 9 (literatura, artes plásticas, teatro, audiovisual e circo) o lote 3 de 9 e o lote 4, feito por seis agentes em paralelo (59 verbetes: música, dança, literatura, artes plásticas, audiovisual e teatro, em seis PRs de até 10). Em 08/10/2026 há 91 verbetes em rascunho, todos com duas ou mais fontes abertas. Depois vieram o lote 5 (27 verbetes: quadrinhos e fotografia, música, artes plásticas e literatura; PRs #19 a #21), o lote 6 (27: música, artes plásticas, literatura, teatro e circo; PRs #22 a #24) e o lote 7 (25: música, artes plásticas e literatura; PRs #25 a #27). Em 09/10/2026 há 170 verbetes em rascunho, todos com duas ou mais fontes abertas, em PRs empilhados de #8 a #27, ainda sem merge; a lista-mestra marca 170 nomes como `rascunho` e 553 como `a-pesquisar` (51 de prioridade alta). Na sessão de 09/10/2026 o lote 8 (nomes de prioridade alta) não foi redigido: a rede do ambiente bloqueou o acesso a todos os sites de fonte, e sem fonte aberta não há verbete. Em 10/10/2026, com a rede liberada, os 170 verbetes foram complementados com material do Overmundo, da Wikipédia em português e de outras fontes abertas, em três rodadas de 60, 60 e 50 verbetes (PRs #29 a #45, empilhados sobre o #28; Overmundo e Wikipédia entram sempre com atribuição, por serem conteúdo colaborativo). A lista-mestra ganhou 145 nomes descobertos nessa leitura (situação `a-pesquisar`, em sua maioria prioridade baixa). Em 10/10/2026 também foram ligados os verbetes entre si (PRs #47 e #48: cerca de 700 links novos no texto e nas fichas, que agora aceitam `[[links]]`) e feita uma busca de canais oficiais, notícias novas e vínculos (PRs #49 a #56). Só entraram nos verbetes canais abertos e conferidos, apontados por fonte aberta (site oficial, YouTube, Instagram); o Facebook não abre sem login, então fica só em `dados/redes-sociais-candidatas.csv`, para conferência humana, junto com os perfis que não abriram ou não tinham fonte. Em 10/10/2026 o lote 8 ampliou a enciclopédia de 170 para 216 verbetes em rascunho (PRs #58 a #63): bandas e cenas de Campo Grande, artes plásticas, obras e movimentos da música, pessoas e espaços da música e 10 dos 12 nomes antes recusados por falta de segunda fonte; Brancão, Aral Cardoso e Oscar Rocha continuam sem fonte aberta (a obra de origem, "A Música de Mato Grosso do Sul: histórias de vida", não está online). O Teatrine TV e o Blog do Alex Fraga passaram a ser fontes de pesquisa (o blog tem um índice de posts pelo sitemap). Ainda em 10/10/2026, o lote 9 (prioridade média, música e audiovisual, PRs #65 a #70) acrescentou 47 verbetes e levou a enciclopédia a 263 verbetes em rascunho: rock e metal, música contemporânea e de projeção nacional, tradição de fronteira e música erudita, realização audiovisual indígena, cinema contemporâneo e cinema histórico. Ficam sem verbete, por falta de segunda fonte aberta, os nomes anotados na coluna `observacoes` da lista-mestra (por exemplo Intervenção, Toca Fitas e Gobstopper; Michel Saddi e Seriema Filmes; Irmãos Ouro e Prata e Xisto Ramirez Mezza); a dissertação sobre a história social do rock ficou redigida e retida fora dos PRs. A lista-mestra tem 1.058 nomes. Seguem os 370 de prioridade média das outras áreas e o restante de música e audiovisual, e depois os de baixa. Próximo passo: Helton revisa os PRs #8 a #45 e decide os pontos abertos listados nas descrições (Roma Román e Rubén Darío Román Añez, Zé Corrêa, Aplausos Cia Teatral, Anderson Barboza e Grippho, Miska e Miska Thomé, Wagner Willian, Manual de Barros e Retrato do Artista Quando Coisa, Carlos Colman e Lelo); depois segue o lote 8 com os nomes de prioridade alta e, em seguida, os de prioridade média, área por área.

Em 11/10/2026, enriquecimento de verbetes com fontes acadêmicas e audiovisuais, ainda em música (PRs #72 a #74, empilhados sobre o #71): o verbete de [[maria-da-gloria-sa-rosa|Maria da Glória Sá Rosa]] ganhou o artigo de Chaves e Santos (2024) sobre o Acervo Maria da Glória Sá Rosa e a antologia de Moreira e Chaves (2023) na Revista da ASL, com as divergências de data registradas sem escolha entre elas; o de [[jose-octavio-guizzo|José Octávio Guizzo]] ganhou dados do artigo de Marin e Pereira (2014, UFGD) sobre a Seriema Filmes, a TV Educativa, o Trem da Cultura, a revista *MS Cultura* e outras obras. O usuário decidiu liberar como fonte os canais oficiais de produtoras e de grupos culturais, quando confirmados como oficiais (antes só eram aceitos canais de pessoas e páginas institucionais); o Facebook continua fora, por não abrir sem login. Para transcrições de vídeo, o navegador integrado (Claude_Browser) não estava disponível nesta sessão; um agente externo (Antigravity/Gemini, fora deste ambiente) gerou transcrições via legenda pública do YouTube, sem baixar vídeo ou áudio e sem login, e enviou os arquivos para esta sessão ler. Duas transcrições (documentários *CenAlternativa: MS Geração 20* e sobre o *Geração 10*) trouxeram 15 nomes novos para a lista-mestra (`a-pesquisar`) e uma fala de [[geraldo-espindola|Geraldo Espíndola]] sobre música regional, com a identificação do entrevistado confirmada pelo usuário (a legenda automática não traz nome na tela). Por decisão do usuário, o relato sobre o fechamento do espaço Laricas Cultural por ação policial, citado numa dessas transcrições, não entrou em nenhum verbete. Depois, com acesso à API do vidIQ (fora do bloqueio que o YouTube impunha ao acesso direto nesta sessão), foi possível ler descrição, tags e metadados de vídeos do YouTube sem precisar do navegador integrado ou de um agente externo. Isso abriu o acervo digital Memória Fonográfica de MS, canal com 15.595 vídeos (uma amostra de uploads recentes e dos mais vistos foi processada, não o catálogo inteiro): 4 verbetes novos (Araguainha, Celso Cardoso Corrêa, Adolfinho Coimbra, Vocal Vida), enriquecimento do Grupo Acaba e do Emmanuel Marinho (cujas faixas do CD *Teré* foram mescladas ao verbete já existente do poeta, depois de uma sobrescrita acidental corrigida a tempo), e a solução de duas pendências antigas do projeto: [[brancao|Brancão]], recusado duas vezes por falta de fonte aberta, finalmente tem verbete (dois discos catalogados no acervo), e o verbete de [[ze-correa|Zé Corrêa]] ganhou um LP solo de 1968 compatível em data com o sanfoneiro morto em 1974 (não confirmado como a mesma pessoa). A websérie *Campo Grande na Tela* (2018) e uma amostra do programa *Fazendo Arte* (TV ALEMS) também foram lidas pela mesma via, acrescentando nomes novos e cruzamentos. Duas identidades em dúvida foram confirmadas pelo usuário: Dionédson Cândido (websérie) é [[dionedison-terena|Dionédison Terena]], e Namaria (documentário) é Ana Maria Schneider dos Santos (FUC UFMS). Seguem em aberto, sem confirmação: João Benitez (quadrinhos) pode ser o mesmo João Benites (música) e o Zé Corrêa de 1968 pode ser ou não o de 1974. A lista-mestra tem 1.089 nomes. Os PRs #72 a #74 seguem abertos, empilhados, aguardando revisão de Helton.

## Decisão central

O conteúdo fica separado do design. Cada verbete é um arquivo de texto em `verbetes/`; o site é gerado a partir deles. A identidade visual definitiva (Fase 4) troca `public/estilo.css` e `src/layouts/Base.astro` sem tocar nos verbetes.

## Arquitetura

- Site estático gerado com Astro, publicado no GitHub Pages (hospedagem sem custo).
- Um arquivo Markdown por verbete, com ficha estruturada no topo. Modelo em `modelos/verbete.md`.
- Cinco tipos de verbete: pessoa, grupo ou coletivo, obra ou produção, espaço ou instituição, evento ou festival.
- Navegação tipo Wikipedia: links internos `[[...]]`, "páginas que apontam para cá", páginas por área e por cidade, busca, caixa lateral e lista de verbetes desejados.
- `npm run conferir` verifica as regras editoriais e roda antes de cada publicação.

## Regras editoriais

1. **Sem fonte, sem frase.** Todo parágrafo termina com nota de fonte.
2. **Só trajetória e obra.** Nada de CPF, CNPJ, endereço, telefone, e-mail ou dados de família além do que a fonte publicou como parte da trajetória.
3. **Texto próprio.** Resumir e citar; nunca copiar trechos das fontes.
4. **Imagens** só com licença aberta ou autorização de quem fez.
5. **Rascunho e revisado.** Verbete escrito por agente de IA nasce `rascunho`. Só revisão humana muda para `revisado`.
6. **Pessoas vivas:** todo verbete tem link de correção e remoção.

## Fases

| Fase | Entrega | Marco | Situação |
|---|---|---|---|
| 0. Fundação | Estrutura, modelo de ficha, verbetes-modelo, publicação automática | Navegação funcionando | Concluída |
| 1. Lista-mestra | `dados/lista-mestra.csv` com nomes e obras por área, fonte de origem e prioridade | Cerca de 300 nomes triados | Levantamento das sete áreas feito em 08/10/2026 (449 linhas) e passagem pelo Lado B (723 linhas, incluindo fotografia, ilustração, quadrinhos e bandas); aguarda revisão de Helton |
| 2. Piloto | 35 verbetes completos (5 por área), revisados | Padrão de qualidade validado | Lote 1 (10 verbetes, música, quadrinhos, fotografia e dança) redigido em 08/10/2026; lote 2 (9 verbetes, literatura, artes plásticas, teatro, audiovisual e circo) redigido no mesmo dia; aguardam revisão; lote 3 (9 verbetes, circo, teatro, audiovisual e artes plásticas) redigido no mesmo dia; lote 4 (59 verbetes em seis PRs, #13 a #18) em 08/10/2026; lote 5 (27 verbetes, PRs #19 a #21), lote 6 (27, PRs #22 a #24) e lote 7 (25, PRs #25 a #27), todos em rascunho e aguardando revisão; lote 8 parado em 09/10/2026 por bloqueio de rede (nenhum verbete criado); complementos dos 170 verbetes em 10/10/2026 (PRs #29 a #45); frente de música/audiovisual via YouTube (canal Memória Fonográfica de MS e websérie Campo Grande na Tela) em 10-11/10/2026, PR #74 (stack sobre #71-73): novos verbetes sobre acervo fonográfico, Paralelos Trágicos, Joel Pizzini, Crianceiras, Hermanos Irmãos, Ana Paula Ostapenko, BROEMCIS, Cine Novo Oeste, Cine Cultura, Cine Acapulco, cinemas de rua de Campo Grande e Bonito CineSur (lista de vencedores da 4ª edição, pesquisada por fonte aberta nesta sessão); em 12/10/2026, busca de novas fontes acadêmicas para música (ver tabela de fontes abaixo) resultou em complementos a Tetê e o Lírio Selvagem, Geraldo Roca, Prata da Casa e Beth e Betinha, além de 11 nomes novos e do evento Fessul na lista-mestra |
| 3. Expansão | Lotes por área, um pull request por lote | Cobertura da lista-mestra | A fazer |
| 4. Design | Identidade visual aplicada sobre o conteúdo pronto | Lançamento público | A fazer |
| 5. Abertura | Formulário para artistas corrigirem, complementarem ou pedirem remoção | Manutenção contínua | A fazer |

A lista-mestra vem antes da redação porque pesquisa é a parte que mais consome créditos: triar primeiro evita gastar em verbetes que não entram.

### Fase 1 em passos

1. Uma área por sessão, na ordem: artes plásticas, música, teatro, dança, literatura, audiovisual, circo.
2. Para cada área, varrer as fontes abaixo e registrar na lista-mestra: nome, tipo, cidade, fonte de origem com link, prioridade.
3. Prioridade alta: quem aparece em duas ou mais fontes independentes, ou em fonte acadêmica.
4. Não redigir verbetes nesta fase.
5. Ao fim de cada área, você revisa a lista: corta, acrescenta e reordena.

### Tamanho de lote na Fase 3

10 verbetes por pull request. É o que cabe em uma revisão de uma sentada.

## Fontes para a pesquisa

| Fonte | Serve para | Link |
|---|---|---|
| Repositório UFMS | Teses e dissertações | https://repositorio.ufms.br |
| Repositório UFGD | Literatura e artes do estado | https://repositorio.ufgd.edu.br |
| BDTD/IBICT | Busca unificada de teses | https://bdtd.ibict.br |
| UCDB | Dissertações sobre dança e sobre o MARCO | https://site.ucdb.br |
| Acervo Maria da Glória Sá Rosa (UEMS) | Acervo da escritora sobre cultura sul-mato-grossense | https://anaisonline.uems.br/index.php/mppe/article/download/9744/8967/22221 |
| MIS-MS | Discos, VHS, fotografias e filmes; consulta presencial | Memorial da Cultura, Campo Grande |
| MARCO | Cerca de 900 obras; percurso da arte no estado | Parque das Nações Indígenas |
| Acervo da Dança Sul-Mato-Grossense | Documentos da ASMPD, programas de festivais, VHS digitalizado | https://correiodoestado.com.br/correio-b/acervo-digital-de-mato-grosso-do-sul-preserva-legado-de-sarah-abussafi/467620/ |
| Memória Fonográfica de MS | LPs e CDs de todas as vertentes musicais do estado | https://correiodoestado.com.br/correio-b/museu-da-imagem-e-som-reinaugura-hoje/109346/ |
| Mapas da Cultura (MinC) | Cadastro público de agentes, filtrável por UF | https://mapas.cultura.gov.br |
| Lado B (Campo Grande News) | Cobertura cultural contínua; datas e estreias | https://www.campograndenews.com.br/lado-b |
| Correio B (Correio do Estado) | Cobertura cultural contínua | https://correiodoestado.com.br/correio-b |
| Campo Grande News, seção Lado B | Lida em 08/10/2026 (cerca de 40 matérias); índice em `dados/fontes-lado-b.md` | https://www.campograndenews.com.br/lado-b/ |
| Overmundo (matérias de Rodrigo Teixeira sobre música de MS) | Fonte indicada por Helton; o site não abriu em 08/10/2026 (robots.txt) | https://www.overmundo.com.br |
| Enciclopédia Itaú Cultural | Verbetes nacionais já consolidados | https://enciclopedia.itaucultural.org.br |
| Gilmar Lima Caetano, *A música regional urbana e identidades culturais de MS* (dissertação, UFGD, 2012) | Achada em 12/10/2026; muito rica sobre os festivais de 1967 a 1990, o disco *Tetê e o Lírio Selvagem* (1979) e o *Prata da Casa* (1982), com atribuição exata de autoria e intérprete por faixa | https://www.ppghufgd.com/wp-content/uploads/2017/06/GILMAR-LIMA-CAETANO.pdf |
| Ian Rari Nogueira Faria, *Contribuições da música regional... sendas em canções de Geraldo Roca* (dissertação, UFMS Aquidauana, 2024) | Achada em 12/10/2026; biografia de juventude de Geraldo Roca, histórico do 1º Festival de Música Popular de Campo Grande (1967) e do 1º Fessul (1979) | https://posgraduacao.ufms.br/portal/trabalho-arquivos/download/13682 |
| Cândido Alberto da Fonseca, Paulo Simões e Maria da Glória Sá Rosa, *Festivais de Música em Mato Grosso do Sul* (livro, UFMS, 1981; 2ª ed. 2012) | Fonte primária citada por várias teses já usadas; buscamos de novo em 12/10/2026 (segunda tentativa) e continuamos sem achar PDF livre, só referências de segunda mão, inclusive um artigo de 2013 do próprio Gilmar Caetano que parece reaproveitar o conteúdo da tese de 2012 dele. Vale checar Editora UFMS ou acervo físico numa sessão futura | — |
| Suzana Mendes Dias e Ana Paula Araujo, "A cultura como instrumento de política pública..." (*Revista GeoPantanal*, UFMS, n. 37, 2024) | Aberta em 12/10/2026 (o link do repositorio.ufms.br falha; o do periodicos.ufms.br funciona). Sobre o Festival América do Sul (Corumbá/Ladário–Bolívia, 2004-2022); traz sobretudo nomes de gestores culturais de MS (Pedro Ortale, Belchior Cabral, Neusa Narico Arashiro) e de artistas nacionais/internacionais que se apresentaram no festival, não necessariamente agentes de MS | https://periodicos.ufms.br/index.php/revgeo/article/view/21646/15992 |
| Medalha "Tom do Pantanal - Arara Azul" (Assembleia Legislativa de MS, criada em 2010) | Lista de músicos homenageados ano a ano; só achamos a leva de 2010 (Grupo Acaba, Alma Serrana, Délio e Delinha, Ivo de Souza). Buscamos de novo em 12/10/2026 por outras edições (2015, 2018, 2020, 2022) e não achamos nada; o site da Assembleia (al.ms.gov.br) não aparece indexado para esse termo nas buscas tentadas — a medalha pode ter sido dada só uma vez, ou exige busca direta no site da Assembleia numa sessão futura | https://www.campograndenews.com.br/entretenimento/assembleia-homenageia-musicos-e-som-de-raiz-em-premio-11-23-2010 |

### A confirmar na Fase 1

- Endereço do site do Acervo da Dança Sul-Mato-Grossense.
- Se existe um Mapa Cultural estadual próprio de MS.
- Listas de contemplados de FIC, FMIC, Lei Paulo Gustavo e PNAB (melhor fonte para artistas em atividade). Atenção: essas listas trazem CPF; usar só nome artístico e projeto.

## Riscos

- **Dados pessoais** em resultados de editais: nunca copiar.
- **Erro factual** de agentes de IA (datas, prêmios): regra da fonte, conferência automática e revisão humana por lote.
- **Imagens:** começar sem fotos; entram só com licença ou autorização.
- **Fontes únicas:** vários verbetes-modelo se apoiam em uma única matéria. Na Fase 2, o padrão é ao menos duas fontes independentes por verbete.

## Decisões em aberto

- **Hospedagem (decidido em 08/10/2026):** o repositório fica privado até o lançamento da Fase 4. Até lá o site não tem endereço público; a cada envio o GitHub confere as regras e gera o site, e a publicação segue desligada (variável `PUBLICAR_PAGES`). Para ver o site: `npm run dev` no computador ou capturas de tela enviadas pelo agente. No lançamento, escolher entre tornar o repositório público com GitHub Pages ou publicar por outro serviço.
- Domínio próprio ou endereço do GitHub Pages.
- Canal de correção para quem não usa GitHub (formulário ou e-mail), previsto para a Fase 5.
- Critério de inclusão: quem entra e quem fica fora (tempo de atuação, premiações, registro em fonte pública).
