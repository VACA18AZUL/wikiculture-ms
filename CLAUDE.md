# Instruções para agentes

Este repositório é o WikiCulture MS, uma enciclopédia de agentes culturais e produções de Mato Grosso do Sul. Leia `PLANO.md` antes de qualquer tarefa: ele diz em que fase o projeto está e o que vem a seguir.

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
- Atualize `dados/lista-mestra.csv` quando criar um verbete ou descobrir um nome novo.
- Conferência com a Wikipédia: antes de fechar um verbete, veja se há artigo em pt.wikipedia.org e anote o link na coluna `wikipedia_pt` da lista-mestra. A Wikipédia é lista de conferência, não fonte: um fato dela só entra no verbete com fonte aberta e lida nesta sessão. Artigo sem referências não serve de nota.
- Resumo de busca ou de página não é leitura. Antes de escrever data, número ou título, confira no texto da fonte.
- Divergência com a Wikipédia segue a regra de divergência de fontes: as duas versões, citadas, sem escolher. Registre a diferença em `observacoes` da lista-mestra.
- Dados pessoais que a Wikipédia traz (estado de saúde, vida familiar, mudança de dados pessoais) ficam fora, como em qualquer fonte.
- Antes de qualquer commit, rode `npm run conferir` e `npm run build`. Os dois precisam passar.
- Verbetes vão em lotes de até 10 por pull request, em branch própria. Não envie verbetes direto para `main`.
- Na descrição do pull request, liste cada verbete com as fontes usadas e aponte o que ficou incerto.
- Ao concluir uma fase ou um lote, atualize a situação em `PLANO.md`.

## Economia de créditos

- Uma área cultural por sessão.
- Pesquise primeiro nas fontes listadas em `PLANO.md`; busca aberta na web é o último recurso.
- Na Fase 1, registre nomes na lista-mestra sem redigir verbetes.
