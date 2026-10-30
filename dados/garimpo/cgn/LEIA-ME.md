# Garimpo no Campo Grande News

Rodadas de busca de nomes novos no Campo Grande News, sobretudo no caderno Lado B. Cada rodada é uma sessão nova; o que liga uma à outra são os arquivos desta pasta. O garimpeiro da nuvem faz uma rodada aqui a cada dois ciclos (ver `dados/fluxo/rodada-garimpeiro.md`).

## Arquivos

- `registro.md`: uma linha por rodada e grupo de áreas. Define o rodízio.
- `pendentes.csv` (`area,nome,pista,origem`): nomes vistos em matéria lida e ainda não registrados, e reforços de fonte para nomes que já existem. A próxima rodada começa por eles.
- `lidas.txt`: uma URL por linha de cada matéria já aberta. Não reabra.

## Rodízio

Grupos, nesta ordem: `artes` (artes plásticas e visuais), `musica`, `cenicas` (teatro, dança, circo), `lit-av` (literatura e audiovisual). O grupo da rodada é o seguinte ao da última linha de `registro.md`; depois de `lit-av`, volta a `artes`. Linhas da rodada 1 contam como `lit-av` no fim.

## Uma rodada

1. Leia `pendentes.csv` e trate primeiro as linhas das áreas do grupo: busque o nome no site, abra a matéria e registre se cumprir as regras. Pendente confirmado sai do arquivo. Pendente que já existe na lista-mestra vira só relação nova ou nota em `observacoes`.
2. Depois, buscas novas (WebSearch com `site:campograndenews.com.br` e termos da área, variando cidades do interior, linguagens e anos). Pule toda URL que estiver em `lidas.txt`.
3. Abra e leia cada matéria antes de registrar qualquer coisa. Acrescente a URL a `lidas.txt`.
4. Registre direto em `dados/lista-mestra.csv` e `dados/relacoes.csv`, com `fonte_de_origem` `Campo Grande News (<ano>)` e a URL da matéria em `url_fonte`. Antes, procure o nome na lista (grep por partes do nome, sem acento).
5. Limite: 30 nomes novos. O que ficar de fora vai para `pendentes.csv`, com a URL na pista.
6. Acrescente a linha da rodada em `registro.md`.

## Quem entra

Pessoa, grupo, obra, espaço ou evento com atuação cultural ligada a MS segundo a matéria: nasceu, vive, atua, fundou, expôs, se apresenta com regularidade ou foi premiado no estado. Artista de fora com uma só obra ou show no estado não entra. Conteúdo patrocinado (URL com `/conteudo-patrocinado/` ou aviso na página) entra só com prioridade baixa e a nota "fonte: conteúdo patrocinado".

## Prioridade

- **alta:** matéria dedicada ao nome (perfil, obituário, lançamento, mostra individual, prêmio) ou duas matérias diferentes.
- **media:** papel claro numa matéria.
- **baixa:** citado em lista, ou só em conteúdo patrocinado.

Fora sempre: CPF, endereço, telefone, e-mail, saúde, vida familiar, nomes de acusados em crimes. Morte só entra se a matéria aberta disser.
