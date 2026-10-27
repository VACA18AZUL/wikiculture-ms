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
- Antes de qualquer commit, rode `npm run conferir` e `npm run build`. Os dois precisam passar.
- Verbetes vão em lotes de até 10 por pull request, em branch própria. Não envie verbetes direto para `main`.
- Na descrição do pull request, liste cada verbete com as fontes usadas e aponte o que ficou incerto.
- Ao concluir uma fase ou um lote, atualize a situação em `PLANO.md`.

## Economia de créditos

- Uma área cultural por sessão.
- Pesquise primeiro nas fontes listadas em `PLANO.md`; busca aberta na web é o último recurso.
- Na Fase 1, registre nomes na lista-mestra sem redigir verbetes.
