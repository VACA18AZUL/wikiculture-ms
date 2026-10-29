# Instruções para agentes

Este repositório é o WikiCulture MS, uma enciclopédia de agentes culturais e produções de Mato Grosso do Sul. Leia `PLANO.md` antes de qualquer tarefa: ele diz em que fase o projeto está e o que vem a seguir. `AGENTES.md` diz qual agente faz cada tarefa (pesquisa, redação, links, revisão, atualização) e como eles passam trabalho um ao outro.

## Idioma e tom

Tudo em português do Brasil. Verbetes em tom enciclopédico: frases curtas, sem adjetivos de elogio, sem promoção.

## Regras que não têm exceção

- **Sem fonte, sem frase.** Todo parágrafo de verbete termina com nota `[^id]` apontando para uma fonte que você abriu e leu nesta sessão. Não escreva de memória. Se a fonte não diz, o verbete não diz; deixe o campo da ficha vazio.
- **Nunca invente** datas, prêmios, títulos de obras, nomes de integrantes ou links. Link que você não abriu não entra.
- **Dados pessoais ficam fora:** CPF, CNPJ, RG, endereço residencial, telefone, e-mail, estado de saúde, vida familiar. Listas de editais trazem CPF: use só o nome artístico e o nome do projeto.
- **Não copie texto** das fontes. Resuma com palavras próprias.
- **Não adicione imagens** sem licença aberta comprovada ou autorização registrada.
- **`status` é sempre `rascunho`** em verbete criado ou alterado por agente. Só o Helton muda para `revisado`.
- Divergência entre fontes: registre as duas versões e cite as duas, sem escolher.

## Como trabalhar

- Verbete novo: copie `modelos/verbete.md`. O nome do arquivo é o identificador (minúsculas, números, hífens, sem acentos).
- Ligue verbetes com `[[identificador|texto]]`. Citar um verbete que ainda não existe é desejável: ele entra na página de verbetes desejados.
- Atualize `dados/lista-mestra.csv` quando criar um verbete ou descobrir um nome novo. Relação entre dois nomes, com fonte, vai em `dados/relacoes.csv`.
- Conferência com a Wikipédia: antes de fechar um verbete, veja se há artigo em pt.wikipedia.org e anote o link na coluna `wikipedia_pt` da lista-mestra. A Wikipédia é lista de conferência, não fonte: um fato dela só entra no verbete com fonte aberta e lida nesta sessão. Artigo sem referências não serve de nota.
- Resumo de busca ou de página não é leitura. Antes de escrever data, número ou título, confira no texto da fonte.
- Divergência com a Wikipédia segue a regra de divergência de fontes: as duas versões, citadas, sem escolher. Registre a diferença em `observacoes` da lista-mestra.
- Dados pessoais que a Wikipédia traz (estado de saúde, vida familiar, mudança de dados pessoais) ficam fora, como em qualquer fonte.
- **Discografia, Espetáculos, Filmografia e Videografia:** use as três primeiras em verbetes de música, de teatro e dança, e de cinema e vídeo, incluindo atores e técnicos. Use Videografia em qualquer artista ou grupo, para videoclipes, registros de shows e espetáculos, documentários sobre o artista e outros audiovisuais. Siga o formato de `modelos/verbete.md`. Cada item tem a própria nota de fonte: o link de escuta ou vídeo não prova ano, função ou ficha técnica. Inclua só os títulos que a fonte cita. Link de escuta ou vídeo só do canal oficial do artista, grupo, gravadora, produtora ou festival: nada de reupload de terceiros. Se não houver vídeo, o item fica sem link.
- **Produções audiovisuais e equipes:** verbete de longa, curta, documentário ou videoclipe tem a seção "Ficha técnica", com uma função por linha, a pessoa ou o grupo ligado com `[[...]]` e nota de fonte. O link para assistir vai em `links`, com `tipo: video`. Cada pessoa ou grupo da ficha técnica que tiver verbete lista a produção em Filmografia ou Videografia, com `[[identificador-da-obra|Título]]`, a função e o mesmo link de vídeo. O `npm run conferir` avisa quando falta e sugere a linha pronta. Ao criar o verbete de alguém da equipe, inclua as produções já existentes.
- **Exceção de canais:** vídeos e áudios dos canais do YouTube [Acervo Digital Memória Fonográfica de MS](https://www.youtube.com/@memoriafonograficadems) e [Vaca Azul](https://www.youtube.com/@vaca18azul) entram normalmente, mesmo sem serem o canal do artista. A lista fica em `CANAIS_ACERVO`, em `src/lib/links.mjs`. Confira o canal de cada vídeo com `npm run links`. O ano, a função e a ficha técnica do item continuam precisando de nota de fonte. A descrição do vídeo nesses canais pode servir de fonte, citada como qualquer outra.
- **Ligações externas:** sites oficiais, portfólios e perfis (Instagram, YouTube, Spotify etc.) vão no campo `links` da ficha, com a data em que você abriu cada um, e não no texto. Só perfis públicos e profissionais mantidos pelo próprio artista, grupo ou instituição. Perfil pessoal, privado, de familiar ou de fã fica fora. Confirme no próprio perfil que é a pessoa certa, por exemplo pelo link para o site oficial ou pela menção da fonte. Na dúvida, não inclua e anote em `observacoes` da lista-mestra. O link da Wikipédia pode entrar em `links` como leitura complementar, mas continua sem servir de nota.
- Remova dos links parâmetros de rastreamento (`?si=`, `?igsh=`, `utm_`). Antes de abrir um lote, rode `npm run links` para achar links quebrados. Esse comando depende de rede e não roda no GitHub. Link quebrado é trocado pela cópia no archive.org ou removido.
- Antes de qualquer commit, rode `npm run conferir` e `npm run build`. Os dois precisam passar.
- Rodando em paralelo com outros agentes (existe `dados/propostas/`): siga `dados/fluxo/LEIA-ME.md`. Nomes e relações novos vão para `dados/propostas/`; situação muda só com `node scripts/fila.mjs marcar`.
- Verbetes vão em lotes de até 10 por pull request, em branch própria. Não envie verbetes direto para `main`.
- Na descrição do pull request, liste cada verbete com as fontes usadas e aponte o que ficou incerto.
- Ao concluir uma fase ou um lote, atualize a situação em `PLANO.md`.

## Economia de créditos

- Uma área cultural por sessão.
- Pesquise primeiro nas fontes listadas em `PLANO.md`; busca aberta na web é o último recurso.
- Na Fase 1, registre nomes na lista-mestra sem redigir verbetes.
