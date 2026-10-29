# Plano do WikiCulture MS

Portal de perfis de agentes culturais e produções de Mato Grosso do Sul, nas áreas de teatro, dança, circo, literatura, artes plásticas, audiovisual e música.

**Estado atual:** Fase 0 concluída em 08/10/2026. Fase 1 triada nas sete áreas entre 27 e 28/10/2026 (351 linhas na lista-mestra), aguardando sua revisão: cortar, acrescentar e reordenar. Fase 2 (piloto de 35 rascunhos, 5 por área) redigida em 29/10/2026 e enviada em quatro PRs empilhados (lotes 1 a 4), aguardando revisão: verbetes ficam em `rascunho` até você revisar. Próxima: Fase 3 (expansão por área, até 10 verbetes por PR), que depende das decisões em aberto abaixo. Em 29/10/2026 a triagem foi unida à lista da branch `producao`, onde os agentes rodam em paralelo na nuvem (`AGENTES.md`, `dados/fluxo/`): pesquisadores e redatores trabalham sobre a lista unida e o garimpeiro só completa; verbetes passam pelo revisor e saem em lotes de 10 para pull request.

## Decisão central

O conteúdo fica separado do design. Cada verbete é um arquivo de texto em `verbetes/`; o site é gerado a partir deles. A identidade visual definitiva (Fase 4) troca `public/estilo.css` e `src/layouts/Base.astro` sem tocar nos verbetes.

## Arquitetura

- Site estático gerado com Astro, publicado no GitHub Pages (hospedagem sem custo).
- Um arquivo Markdown por verbete, com ficha estruturada no topo. Modelo em `modelos/verbete.md`.
- Cinco tipos de verbete: pessoa, grupo ou coletivo, obra ou produção, espaço ou instituição, evento ou festival.
- Navegação tipo Wikipedia: links internos `[[...]]`, "páginas que apontam para cá", páginas por área e por cidade, busca, caixa lateral e lista de verbetes desejados.
- Seções de obra por área: Discografia (música), Espetáculos (teatro, dança e circo), Filmografia (audiovisual, atores e técnicos) e Videografia (videoclipes, registros de shows e espetáculos, documentários; qualquer área). Cada item tem fonte própria e, quando existir, link para escuta ou vídeo no canal oficial ou nos canais de acervo aceitos (Memória Fonográfica de MS e Vaca Azul).
- Produções audiovisuais têm Ficha técnica com a equipe ligada por `[[...]]`. O link da produção se repete na Filmografia ou Videografia de cada integrante com verbete, e o `conferir` avisa o que falta.
- Campo `links` na ficha para site oficial, portfólio e perfis (Instagram, YouTube, Spotify, Vimeo etc.). Aparece como "Ligações externas" no fim da página.
- `npm run conferir` verifica as regras editoriais e roda antes de cada publicação. `npm run links` testa links quebrados; depende de rede e roda só no computador, antes de cada lote.

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
| 1. Lista-mestra | `dados/lista-mestra.csv` com nomes e obras por área, fonte de origem e prioridade | Cerca de 300 nomes triados | Triagem feita nas 7 áreas; aguarda revisão |
| 2. Piloto | 35 verbetes completos (5 por área), revisados | Padrão de qualidade validado | A fazer |
| 3. Expansão | Lotes por área, um pull request por lote | Cobertura da lista-mestra | A fazer |
| 4. Design | Identidade visual aplicada sobre o conteúdo pronto | Lançamento público | A fazer |
| 5. Abertura | Formulário para artistas corrigirem, complementarem ou pedirem remoção | Manutenção contínua | A fazer |

A lista-mestra vem antes da redação porque pesquisa é a parte que mais consome créditos: triar primeiro evita gastar em verbetes que não entram.

### Fase 1 em passos

1. Uma área por sessão, na ordem: artes plásticas, música, teatro, dança, literatura, audiovisual, circo.
2. Para cada área, varrer as fontes abaixo e registrar na lista-mestra: nome, tipo, cidade, fonte de origem com link, prioridade, e link do artigo na Wikipédia (pt), se houver. Relações entre nomes (integrou, fundou, expôs em...) vão em `dados/relacoes.csv`, com fonte; são elas que viram links entre verbetes.
3. Prioridade alta: quem aparece em duas ou mais fontes independentes, ou em fonte acadêmica.
4. Não redigir verbetes nesta fase.
   - Várias fontes para um nome: separe por `;` em `fonte_de_origem` e em `url_fonte`.
   - Prioridade **alta**: fonte acadêmica que trata do nome com substância, ou duas ou mais fontes distintas com ao menos uma em profundidade (obituário, perfil, mostra individual, premiação). **Média**: uma fonte, ou citação em lista. **Baixa**: ligação com MS pouco clara ou item periférico.
   - Nome citado sem ligação com MS confirmada pela fonte não entra; fica em `observacoes` do item relacionado.
   - Ao registrar, anote em `observacoes` a divergência entre fontes e se a leitura foi feita por subagente.
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
| Enciclopédia Itaú Cultural | Verbetes nacionais já consolidados | https://enciclopedia.itaucultural.org.br |
| Wikipédia (pt) | Conferência cruzada e lista de links para verificar; não é citável no verbete | https://pt.wikipedia.org |

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
