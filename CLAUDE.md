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
- Rodando em paralelo com outros agentes (existe `dados/propostas/`): siga `dados/fluxo/LEIA-ME.md`. Nomes e relações novos vão para `dados/propostas/`; situação muda só com `node scripts/fila.mjs marcar`.
- Verbetes vão em lotes de até 10 por pull request, em branch própria. Não envie verbetes direto para `main`.
- Na descrição do pull request, liste cada verbete com as fontes usadas e aponte o que ficou incerto.
- Ao concluir uma fase ou um lote, atualize a situação em `PLANO.md`.

## Equipes técnicas

- **Função técnica é agente cultural.** Iluminador, coreógrafo, diretor de arte, cenógrafo, figurinista, diretor de fotografia, montador/editor, sonoplasta, produtor executivo e funções equivalentes entram na lista-mestra e podem ganhar verbete próprio nas mesmas condições de diretores, autores e intérpretes — mesma regra de fonte aberta, mesmo padrão de duas fontes na Fase 2 quando aplicável. Não deixe de registrar alguém só porque a função dele numa obra é de bastidor.
- Quando a fonte creditar uma equipe técnica (ficha técnica de espetáculo, making of, release), registre cada nome com a função exata que a fonte dá; não generalize "equipe técnica" para um nome só, nem invente função não citada.
- No campo `ficha` do verbete da obra/espetáculo, uma função técnica vira uma chave própria (ex. `Iluminação:`, `Coreografia:`, `Direção de arte:`, `Cenografia:`), ligando para o verbete da pessoa quando ele existir.

## Literatura: links para a obra

- Em verbete de obra de literatura (`tipo: obra`, área `literatura`), sempre que a pesquisa encontrar, acrescente um link para o texto: PDF de acesso aberto (site da editora, repositório institucional, biblioteca digital, Google Livros com prévia ou texto completo).
- Vale a regra geral: link que você não abriu e conferiu não entra. Nunca adivinhe a URL de uma página de produto ou de um PDF.
- **Link de compra na Amazon, por ora, não entra.** `amazon.com.br` está bloqueado para as ferramentas de navegação deste agente (falha de DNS) e, por linha de comando, o próprio site devolve erro 503 de proteção antibô; contornar isso trocando o identificador do navegador foi barrado pelo classificador de segurança do ambiente, e não deve ser tentado de novo. Decisão do usuário em 27/10/2026: enquanto o acesso à Amazon não for resolvido, nenhum link de loja entra — nem Amazon nem alternativa. Se, numa sessão futura, o acesso for restabelecido (ambiente diferente, ou agente com navegador funcional) ou o usuário enviar o link já pronto, essa regra pode ser retomada.
- Se não houver PDF aberto, não invente alternativa: o verbete fica sem esse link.
- **Modo de aplicação: oportunista, não em varredura.** Testado em 27/10/2026 em dois verbetes de obra de literatura (livros comerciais, não teses): nenhum PDF de texto integral livre foi encontrado nos dois — só páginas de editora vendendo o livro e artigos acadêmicos que falam sobre ele. Padrão esperado: a maioria dos autores catalogados ainda está em copyright, então uma busca dedicada, título a título, tem retorno muito baixo para o custo. Em vez de uma varredura própria pelos verbetes de literatura, acrescente esse link quando: (a) você já estiver reabrindo o verbete por outro motivo (nova fonte, complemento, correção) e a fonte usada nessa sessão já for, ela mesma, um PDF do texto (ex. a obra é ou contém uma tese, dissertação ou antologia de acesso aberto); ou (b) uma busca já em andamento, por outro motivo, trouxer o link de forma incidental. Confirmado pelo usuário em 27/10/2026.

## Economia de créditos

- Uma área cultural por sessão.
- Pesquise primeiro nas fontes listadas em `PLANO.md`; busca aberta na web é o último recurso.
- Na Fase 1, registre nomes na lista-mestra sem redigir verbetes.
