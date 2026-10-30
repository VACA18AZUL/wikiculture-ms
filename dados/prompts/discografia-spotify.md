# Prompt: discografias pelo Spotify (navegador do app Claude)

Cole tudo abaixo da linha numa conversa do app Claude Desktop com o navegador ligado e o Spotify aberto (de preferência com login feito).

---

Você vai usar o navegador embutido do app Claude, onde o Spotify já está aberto, para levantar a discografia (álbuns, EPs e singles) de artistas de Mato Grosso do Sul. No fim, entregue um único arquivo Markdown chamado `discografia-spotify.md`, que vou revisar e usar no projeto WikiCulture MS.

## Regras

1. **Só o que você viu na tela.** Anote apenas títulos, tipos e datas que você leu na página do Spotify nesta conversa. Não complete nada de memória nem com base em outro site. Se um campo não aparece, deixe em branco.
2. **Confirme a identidade antes de anotar.** Muitos nomes são comuns (Guile, Tradição, Therra, Zedu, Uirapuru, Os Bizarros, Link Off). Considere o perfil certo só se pelo menos um destes bater: um disco da lista "já conhecida" abaixo; gênero regional (chamamé, polca, guarânia, música sertaneja de raiz, MPB de MS, rap guarani-kaiowá) coerente com a descrição; parceiros citados. Diga qual critério usou. Na dúvida, marque **incerto** e não liste os discos como confirmados.
3. **Perfil próprio do artista.** Não use playlists, coletâneas de terceiros ou faixas em que o artista só aparece como participante. Se uma coletânea de terceiros tiver o artista com destaque, anote à parte em "Outras ocorrências".
4. **Data do Spotify não é ano original.** Registre a data exatamente como o Spotify mostra e chame de "data no Spotify". Se o disco já está na lista conhecida com outro ano, mostre as duas datas lado a lado. Não escolha entre elas.
5. **Links limpos.** Copie o endereço do álbum como `https://open.spotify.com/album/ID` e o do artista como `https://open.spotify.com/artist/ID`, sem `?si=` nem outros parâmetros.
6. **Nada de dados pessoais** (telefone, e-mail, endereço). Ignore a contagem de ouvintes mensais.
7. Não clique em seguir, curtir, salvar nem altere nada na conta.

## Como fazer, por artista

1. Busque o nome no Spotify. Se houver mais de um perfil com o nome, abra os candidatos e aplique a regra 2.
2. No perfil escolhido, abra "Discografia" > "Mostrar tudo" e percorra as abas Álbuns, Singles e EPs (e Compilações, se houver). Leia o texto da página em vez de depender de capturas de tela.
3. Abra cada álbum só se precisar confirmar o tipo, a data ou o selo (o ℗/© no rodapé do álbum costuma trazer ano e gravadora; anote como "rodapé ℗").
4. Se não achar o artista, anote "não encontrado" e as buscas que tentou.
5. A cada 10 artistas, mostre o arquivo parcial para eu acompanhar.

## Formato do arquivo `discografia-spotify.md`

```markdown
# Discografias no Spotify — levantamento de <data de hoje>

## <Nome do artista> (`identificador`)

- Perfil: https://open.spotify.com/artist/ID — situação: confirmado | incerto | não encontrado
- Critério de identidade: <qual disco, gênero ou parceiro bateu>
- Acesso: <data de hoje>

| Título | Tipo no Spotify | Data no Spotify | Rodapé ℗ | Link | Já conhecido? |
|---|---|---|---|---|---|
| Título exato | Álbum / Single / EP / Compilação | AAAA ou AAAA-MM-DD | ℗ AAAA Selo | https://open.spotify.com/album/ID | sim (ano na lista: AAAA) / não |

- Da lista conhecida, não achados no Spotify: <títulos>
- Divergências: <título — ano na lista X, data no Spotify Y>
- Outras ocorrências: <coletâneas de terceiros, participações>
- Observações: <qualquer dúvida>
```

Termine o arquivo com um resumo: quantos artistas confirmados, incertos e não encontrados; quantos títulos novos (não conhecidos); e a lista de divergências de ano.

## Artistas

A "discografia já conhecida" vem de dissertações e matérias de jornal e serve para conferir a identidade e cruzar os dados. Ela não precisa ser repetida no arquivo, só comparada.

### Almir Sater
- Identificador: `almir-sater`
- Quem é: Violeiro, cantor, compositor e ator de Campo Grande, apontado como quem popularizou a viola de dez cordas na música regional de Mato Grosso do Sul. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Estradeiro* (1981) — disco; Continental.
  - *Doma* (1982) — disco; RGE.
  - *Terra de Sonhos* (1994) — disco; edição em São Paulo, selo não informado.
  - *Pirilampo & Saracura* (sem ano na fonte) — disco homônimo da dupla de personagens de *O Rei do Gado*, com Sérgio Reis.

### Alzira Espíndola
- Identificador: `alzira-espindola`
- Quem é: Compositora e cantora de Campo Grande, integrante de Tetê e o Lírio Selvagem e autora de "Na Catarata", com Carlos Rennó.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Alzira Espíndola* (1987) — álbum; 3M.
  - *AMME* — álbum; Baratos Afins; a fonte não informa o ano.
  - *Anhaí* (1998) — álbum com Tetê Espíndola; Dabliú.

### Amambay e Amambaí
- Identificador: `amambay-e-amambai`
- Quem é: Dupla de música de fronteira ativa desde o fim dos anos 1950, que diz ter lançado o chamamé em Campo Grande e foi a primeira a gravar o gênero no Brasil.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Os Mensageiros do Oeste* (1969) — disco gravado em São Paulo com Zé Corrêa. A dissertação o aponta como grande influência para a popularização do chamamé no então Mato Grosso uno e para a passagem dos conjuntos de duplas a trios.
  - Disco de 1977 pela gravadora Continental — segundo Amambay, trouxe "Villa Guilhermina", que ele diz ser o primeiro chamamé em castelhano gravado no Brasil. O título do disco não consta na fonte.

### Anarandà
- Identificador: `anaranda`
- Quem é: Cantora de rap e influenciadora guarani-kaiowá, autora do livro bilíngue Mbojeguaha – Grafismo, lançado em Dourados em 2024. (Dourados)
- Discografia já no verbete: nenhuma

### Araguainha
- Identificador: `araguainha`
- Quem é: Nome artístico do acordeonista Waldemar Pereira do Carmo, nascido em 1951 em Figueirão, autor do LP de chamamé "Educandário do Chamamé" (1982), gravado em Campo Grande. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Educandário do Chamamé* (1982) — LP, Discos Xaraés (LPX 0003); 12 faixas, entre elas "Choro Correntino", "Estrada Pantaneira", "Pomba Choca", "O Cascalho", "Marca Passo" e "Canoeiro de São Lourenço".

### Atapoã Feliz
- Identificador: `atapoa-feliz`
- Quem é: Compositor, instrumentista e desembargador do Tribunal de Justiça de MS, nascido em 1944 em Guararapes (SP) e morto em 2021 em Campo Grande; gravou o CD Atapoã – Instrumental em 2013. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Atapoã – Instrumental* (2013) — CD independente com 14 composições autorais, como "Batuque", "Oásis", "Danzon", "Sax", "Boningasse", "Salzburg" e "Cerejeiras em flor". Gravado por um grupo de doze músicos, com arranjos e regência de Orion Cruz.

### Bêbados Habilidosos
- Identificador: `bebados-habilidosos`
- Quem é: Banda da cena independente de Campo Grande, citada entre os grupos do primeiro pacote do projeto Talentos de Nossa Terra (2011) e no evento Balada de amor para LidyLo (2026). (Campo Grande)
- Discografia já no verbete: nenhuma

### Brô MC's
- Identificador: `bro-mcs`
- Quem é: Grupo de rap de jovens kaiowá das aldeias Jaguapiru e Bororó, em Dourados, que canta em português e guarani e tem videoclipes e projetos audiovisuais ligados à CUFA e à TV Guateka. (Dourados)
- Discografia já no verbete: nenhuma

### Celito Espíndola
- Identificador: `celito-espindola`
- Quem é: Músico e compositor de Campo Grande, integrante de Tetê e o Lírio Selvagem e participante do Prata da Casa, de 1982.
- Discografia já no verbete: nenhuma

### Conjunto Ponta Porã
- Identificador: `conjunto-ponta-pora`
- Quem é: Conjunto de música paraguaia e de fronteira dirigido pelo maestro Hermínio Giménez, autor do LP Recordando Carlos Gardel (1969); a ligação com Mato Grosso do Sul vem da descrição de um acervo.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Recordando Carlos Gardel* (1969) — LP, 33 rpm, selo Phonodisc; segundo a descrição, o décimo primeiro álbum do conjunto, com arranjos e regência de Hermínio Giménez e versões instrumentais de "Sus Ojos Se Cerraron", "Golondrina", "Mi Buenos Ayres Querido", "Caminito" e "Volver".

### Coral Santa Cecília
- Identificador: `coral-santa-cecilia`
- Quem é: Grupo de canto coral de Dourados, regido pelo maestro Adilvo Mazzini, que lançou em 2008 o CD ao vivo "Memória Musical 30 Anos". (Dourados)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Natal entre os Povos* (1999) — CD com canções natalinas de tradições de nove idiomas.
  - *Memória Musical 30 Anos* (2008) — CD de gravações ao vivo feitas ao longo dos anos, lançado no início das comemorações dos 30 anos do grupo, com projeto aprovado no FIP (Fundo de Investimento à Produção Artística e Cultural de Dourados). A playlist traz 18 faixas, entre elas "Romaria", "Tocando em Frente", "A Banda" e "Hino a Dourados".

### Délio e Delinha
- Identificador: `delio-e-delinha`
- Quem é: Dupla de cantores e compositores de rasqueado, apontada como a primeira de Campo Grande a gravar discos com repertório autoral, a partir de 1959. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Gosto Tanto de Você* — Gonçalves data de 1968 o disco que Zé Corrêa gravou com a dupla com esse título. O título da playlist do Acervo Digital Memória Fonográfica de MS indica LP de 1971, e a descrição o identifica como Long Play 33 RPM, CL-205, Califórnia. As duas fontes não permitem dizer se se trata do mesmo lançamento.

### Dino Rocha
- Identificador: `dino-rocha`
- Quem é: Acordeonista de Mato Grosso do Sul apontado em estudos como referência do chamamé, herdeiro da escola de Zé Corrêa, com discos desde ao menos o fim dos anos 1970.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *O Ídolo do Chamamé* (1979) — LP.

### Dito Freitas
- Identificador: `dito-freitas`
- Quem é: Violeiro, cantor e compositor de Dourados, nascido no interior de São Paulo e radicado em Mato Grosso do Sul desde os anos 1950; criou a Noite da Viola e lançou o CD Som Pantaneiro em 2009. (Dourados)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Som Pantaneiro – O Violeiro Douradense* (2009) — CD independente (selo Prómix), com 16 faixas em ritmos como queromana, guarânia, rasqueado e cururu; produção musical de Moises M. Silva e arranjos de viola do próprio Dito Freitas.

### Emmanuel Marinho
- Identificador: `emmanuel-marinho`
- Quem é: Poeta, ator e educador nascido em Dourados, autor de livros de poesia e de espetáculos solo, ocupante da cadeira 33 da Academia Sul-Mato-Grossense de Letras. (Dourados)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Teré* — disco que reúne participações de Itamar Assumpção, Paulo Lepetit, Toninho Ferragguti, Alzira Espíndola e Pedro Luís e a Parede, entre outros; recebeu o prêmio Marco Verde.

### Geraldo Espíndola
- Identificador: `geraldo-espindola`
- Quem é: Compositor e cantor de Campo Grande, apontado em pesquisas acadêmicas como um dos principais nomes da música regional urbana de Mato Grosso do Sul.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *30 Anos Nesse Mato* (2004) — álbum solo; FIC. O artigo de 2012 do mesmo autor dá o título como *Trinta anos nesse Mato* e o ano de 2002.
  - *Intimidade Acústica* (2005) — álbum solo.

### Geraldo Roca
- Identificador: `geraldo-roca`
- Quem é: Compositor e cantor nascido no Rio de Janeiro e radicado em Mato Grosso do Sul, coautor de "Trem do Pantanal" e autor de "Polca Outra Vez". Morreu em 2015. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Litoral Central* (1997) — disco; produção independente, São Paulo.
  - *GerAção* (2006) — disco; produção independente, Campo Grande.
  - *Veneno Light* (2006) — álbum; a matéria cita o lançamento em 2006 e grafa o título "Veneno LIght".

### ACABA
- Identificador: `grupo-acaba`
- Quem é: Grupo musical de Mato Grosso do Sul, ligado à Associação dos Compositores Amadores do Bairro Amambaí, vencedor do 1º FESSUL, em 1979, com a canção Kananciuê.
- Discografia já no verbete: nenhuma

### Grupo Especial Chamamezeiro
- Identificador: `grupo-especial-chamamezeiro`
- Quem é: Grupo de chamamé, polca e rasqueado liderado pelo acordeonista Mariano, que gravou em Campo Grande o CD "Festa na Fazenda" (2009).
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Festa na Fazenda* (2009) — CD independente, gravado no S.I. Studio; 14 faixas, entre elas "O Vento Murmura o Nome Dela", "Festa na Fazenda", "O Cobertor", "Aniversário Feliz", "O Grilo Cantor" e "Estou Apaixonado".

### Guilé
- Identificador: `guile`
- Quem é: Cantor e compositor mineiro radicado em Campo Grande, autor do álbum Até que a Chuva Apague o Medo (2020). (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Até que a Chuva Apague o Medo* (2020) — álbum; produção de Júlio Queiroz.

### Guilherme Rondon
- Identificador: `guilherme-rondon`
- Quem é: Compositor, cantor e violonista, com formação em jazz e bossa nova, ligado à geração do Prata da Casa; lançou o álbum Cadê? Cadê… em 2026. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Piratininga* (1994) — álbum; Velas.
  - *Cadê? Cadê…* (2026) — álbum com parcerias de Leila Pinheiro, Gabriel Sater e Jaques Morelenbaum. A reportagem de 2 de abril de 2026 diz que o disco já estava nas plataformas e anuncia o show de lançamento para 10 de abril, no Sesc Teatro Prosa, em Campo Grande.

### Guimarães Rocha
- Identificador: `guimaraes-rocha`
- Quem é: Poeta, professor e compositor nascido no Ceará (Antonio Alves Guimarães), membro da cadeira 4 da Academia Sul-Mato-Grossense de Letras e autor de 21 livros, segundo A Crítica. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Encanto* (sem ano na fonte) — CD que une literatura e música.
  - *Nosso Amor* (2021) — EP em parceria com o Trio Malaquias, com seis poemas do autor em forró e baião.

### Helena Meirelles
- Identificador: `helena-meirelles`
- Quem é: Violeira nascida na região de Bataguassu em 1924 e morta em Campo Grande em 2005, conhecida pelo repertório de chamamé, rasqueado e polca e pela repercussão na revista Guitar Player em 1993.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Helena Meirelles* (1994) — álbum.
  - *Flor da Guavira* (1996) — álbum.
  - *Raiz Pantaneira* (1997) — álbum.
  - *De Volta ao Pantanal* (2003) — álbum.
  - *Flor da Guavira* (2009) — relançamento em CD, com 15 faixas, pelo selo Eldorado (ELD 005).

### Instituto Moinho Cultural Sul-Americano
- Identificador: `instituto-moinho-cultural-sul-americano`
- Quem é: Organização da sociedade civil de Corumbá que oferece formação em dança, música e tecnologia a jovens da fronteira com a Bolívia e mantém a Cia de Dança do Pantanal. (Corumbá)
- Discografia já no verbete: nenhuma

### Jandira e Benites
- Identificador: `jandira-e-benites`
- Quem é: Dupla de música tradicional paraguaia formada em Campo Grande em 1963, apontada como pioneira da música ao vivo em restaurantes da cidade. (Campo Grande)
- Discografia já no verbete: nenhuma

### Jerry Espíndola
- Identificador: `jerry-espindola`
- Quem é: Cantor e compositor, caçula dos irmãos Espíndola, ligado ao movimento da polca-rock com o disco Polca-Rock. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Pop Pantanal* — álbum solo. A dissertação de Caetano indica 2000 (Pantanal Discos); o relato de Rodrigo Teixeira que ela cita fala em lançamento em 2001.
  - *Polca-Rock* — álbum. Caetano indica 2002 (Elo Music); Gonçalves indica 2003, atribuído a Jerry Espíndola & Croa.

### Juci Ibanez
- Identificador: `juci-ibanez`
- Quem é: Cantora de samba de Mato Grosso do Sul, contemplada pelo projeto Talentos de Nossa Terra, da Fundação de Cultura do estado.
- Discografia já no verbete: nenhuma

### Lenilde Ramos
- Identificador: `lenilde-ramos`
- Quem é: Cantora, compositora e sanfoneira da geração dos festivais de música de Campo Grande, citada em estudos sobre a música regional urbana de Mato Grosso do Sul.
- Discografia já no verbete: nenhuma

### Link Off
- Identificador: `link-off`
- Quem é: Projeto musical solo de Campo Grande, de música industrial e electro-industrial, idealizado por Marino Filho; lançou Reconstrução Vol. 01, seu décimo terceiro álbum, em 2016. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Reconstrução Vol. 01* (2016) — álbum lançado em plataformas de streaming, descrito como o décimo terceiro do artista.

### Márcio de Camillo
- Identificador: `marcio-de-camillo`
- Quem é: Cantor, compositor e instrumentista sul-mato-grossense, autor do show em homenagem a Geraldo Roca (2024) e parceiro de Geraldo Espíndola no espetáculo Música Poética (2025).
- Discografia já no verbete: nenhuma

### Mariano (acordeonista)
- Identificador: `mariano-chame`
- Quem é: Acordeonista de chamamé, polca e rasqueado ligado a Aquidauana, autor do LP "Flor de Jardim" (1976) e líder do Grupo Especial Chamamezeiro. As fontes não trazem o sobrenome. (Aquidauana)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Flor de Jardim* (1976) — LP, selo California (CL 4245); 12 faixas de autoria de Mariano, como "Saltinho", "Uma Madrugada", "Alvorada", "Meu Pensamento" e "Flor de Jasmim".
  - *Tristes Lembranças* (1972) — LP do trio Alvino, Alvanei e Mariano, citado na descrição do CD do Chamamezeiro; não há registro de faixas nas fontes lidas.

### Ney Matogrosso
- Identificador: `ney-matogrosso`
- Quem é: Cantor brasileiro que, segundo a imprensa, recebeu da UFMS o título de Doutor Honoris Causa em Campo Grande, em março de 2026.
- Discografia já no verbete: nenhuma

### O Canto da Terra
- Identificador: `o-canto-da-terra`
- Quem é: Conjunto "baileiro" de Mato Grosso do Sul, surgido nos anos 1990 na onda do grupo Uirapuru, que misturava vanerão, polca paraguaia e chamamé.
- Discografia já no verbete: nenhuma

### Omil e Ozéias
- Identificador: `omil-e-ozeias`
- Quem é: Dupla de música regional que dividiu com Paizinho e Florito o LP split de 1974 lançado pelo selo CGS, em Campo Grande; a fonte grafa o nome como Omil e Ozeas.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Paizinho & Florito e Omil & Ozeas* (1974) — LP split, 33 rpm, selo Discos CGS. O lado de Omil e Ozeas traz "Brasil no Coração", "Triste Solitário" e "Amor Fingido".

### Orquestra de Câmara do Pantanal
- Identificador: `orquestra-de-camara-do-pantanal`
- Quem é: Orquestra formada por participantes do Instituto Moinho Cultural Sul-Americano, que acompanhou Geraldo Espíndola e Márcio De Camillo no espetáculo Música Poética em 2025.
- Discografia já no verbete: nenhuma

### Orquestra de Violões de Campo Grande
- Identificador: `orquestra-de-violoes-de-campo-grande`
- Quem é: Conjunto de violões fundado em 1997 em Campo Grande, regido por Anderson Francellino, que lançou em 2006 o CD "10 Anos" com repertório erudito e regional. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *10 Anos* (2006) — CD independente, Studio Muziarte; 10 faixas, com obras de Vivaldi (movimentos de *A Primavera*), J. S. Bach (*Concerto de Brandemburgo nº 6*), Agustín Barrios ("Lendas da Espanha", "Dança Paraguaia"), Pixinguinha ("Lamentos"), "Trem do Pantanal" de Paulo Simões e Geraldo Roca, e "Mercedita" de Ramón Sixto Ríos.

### Orquestra Guaicurús
- Identificador: `orquestra-guaicurus`
- Quem é: Orquestra ligada ao Maestro Assis (Francisco Antônio dos Santos), autora do CD "Tributo à Boa Música" (2003), gravado em Campo Grande. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Orquestra Guaicurús: Tributo à Boa Música* (2003) — CD com 27 faixas na playlist do acervo. Mistura standards da música brasileira, como "Garota de Ipanema", "Desafinado" e "Samba do Avião", o tango "La Cumparsita" e composições assinadas por F. A. dos Santos, como "Campo Grande - MS em Festa" e "Pantanal Santuário Ecológico".

### Os Azes do Chamamé
- Identificador: `os-azes-do-chamame`
- Quem é: Conjunto de chamamé que lançou em 1975, em Três Lagoas, o LP "Volume 01", gravado no Estúdio Publisol e editado pelo selo Discos Xaraés. (Três Lagoas)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Volume 01* (1975) — LP, Discos Xaraés (LPX 0019); 12 faixas, entre chamamés e polcas, com "Mi Rancho Feliz", "Campos Las Puertas", "Pé de Bode" e "Camperino", além dos títulos citados acima.

### Os Bizarros (Fetos Paraquedistas da Alfa Centauro)
- Identificador: `os-bizarros`
- Quem é: Conjunto de Paulo Simões e Geraldo Espíndola que se apresentou no 2º Festival de Música Popular de Campo Grande, em 1968, com visual e repertório tropicalistas. Não gravou disco. (Campo Grande)
- Discografia já no verbete: nenhuma

### Paizinho e Florito
- Identificador: `paizinho-e-florito`
- Quem é: Dupla de música de raiz que dividiu com Omil e Ozeas o LP split de 1974 lançado pelo selo CGS, em Campo Grande.
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Paizinho & Florito e Omil & Ozeas* (1974) — LP split, 33 rpm, selo Discos CGS. O lado de Paizinho e Florito traz "Querida Maria", "Amor, Saudade e Ilusão" e "Cidades de Mato Grosso".

### Paulo Simões
- Identificador: `paulo-simoes`
- Quem é: Compositor e músico, coautor de "Trem do Pantanal" e "Sonhos Guaranis", com carreira iniciada nos festivais de música de Campo Grande.
- Discografia já no verbete: nenhuma

### Poranguetê
- Identificador: `poranguete`
- Quem é: Grupo de Campo Grande de meados dos anos 1980, da sanfoneira Lenilde Ramos, que fazia o que chamava de "rock de botina".
- Discografia já no verbete: nenhuma

### Projeto Kzulo
- Identificador: `projeto-kzulo`
- Quem é: Banda de Campo Grande formada por músicos brasileiros e colombianos, que mistura cúmbia pantaneira, afrobeat, samba, maracatu, salsa e baião; realizou a websérie documental Memória e Identidade em 2023. (Campo Grande)
- Discografia já no verbete: nenhuma

### Rodrigo Teixeira
- Identificador: `rodrigo-teixeira`
- Quem é: Jornalista e músico de Campo Grande, autor do livro Os Pioneiros sobre a origem da música sertaneja em Mato Grosso do Sul e do álbum Polck, de 2003.
- Discografia já no verbete: nenhuma

### Rodrigues e Rodriguinho
- Identificador: `rodrigues-e-rodriguinho`
- Quem é: Dupla de música sertaneja e regional de Campo Grande, formada por Milton Rodrigues e Jaime Rodrigues, que lançou em 1976 o LP "Três Pedidos de Amor", seu quinto trabalho. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Três Pedidos de Amor* (1976) — LP, União Discos do Brasil (LP 205); 14 faixas, entre polcas, chamamés, canção rancheira e valseado, como "Três Pedidos de Amor", "Só Quero Amor", "Pedras do Campo", "Meu Sabiá" e "Vou Pra Goiás".

### Rubenio Marcelo
- Identificador: `rubenio-marcelo`
- Quem é: Poeta, compositor, advogado e engenheiro agrônomo nascido em Aracati (CE) e radicado em Campo Grande, ocupante da cadeira 35 da Academia Sul-Mato-Grossense de Letras. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *A música de Rubenio Marcelo* — CD.
  - *A arte maior de Rubenio Marcelo & Jorge Sales* — CD.
  - *Parcerias: na poética musical de Rubenio Marcelo* (2018) — CD lançado em 20 fev. 2018 no Sesc Morada dos Baís, em Campo Grande.

### Silvio e Sidney
- Identificador: `silvio-e-sidney`
- Quem é: Dupla sertaneja que começou a carreira profissional em Dourados e gravou o LP "Em Algum Lugar do Passado" (1991) pelo selo Cancan Discos. (Dourados)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Em Algum Lugar do Passado* (1991) — LP, selo Cancan Discos; 10 faixas, entre elas "Em Algum Lugar do Passado", "Eu e Você", "O Caminhão e a Viola" e "Lambando Gostoso". Os gêneros indicados nas faixas vão do balanço ao chamamé, do country à canção rancheira.
  - Trabalho de 1985 como Silvio, Sidney e Serginho, sob o nome Os Mensageiros de Mato Grosso; título e faixas não constam nas fontes lidas.

### Slam Campão
- Identificador: `slam-campao`
- Quem é: Grupo de poesia falada e batalhas de rima criado em 2017 em Campo Grande, que realiza encontros em espaços públicos da periferia. (Campo Grande)
- Discografia já no verbete: nenhuma

### Slam Plural
- Identificador: `slam-plural`
- Quem é: Coletivo de slam de Campo Grande voltado a mulheres e pessoas LGBTQIA+, que estreou em 2022 no Festival Campão Cultural e se apresentou na Flib de 2023. (Campo Grande)
- Discografia já no verbete: nenhuma

### Tetê Espíndola
- Identificador: `tete-espindola`
- Quem é: Cantora e compositora de Campo Grande, integrante do grupo Tetê e o Lírio Selvagem e vencedora do Festival dos Festivais da Rede Globo, em 1985, com "Escrito nas Estrelas". (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Tetê e o Lírio Selvagem* (1978 ou 1979, conforme a fonte) — álbum do grupo; Polygram.
  - *Piraretã* (1980) — primeiro disco solo; Polygram.
  - *Pássaros na Garganta* (1982) — álbum; Som da Gente.
  - *Escrito nas Estrelas* (1985) — compacto simples; Polygram.
  - *Gaiola* (1986) — álbum; Polygram.
  - *Canção do Amor* (1995) — álbum; JHO Music.
  - *Anhaí* (1998), com Alzira Espíndola — álbum; Dabliú.

### Therra
- Identificador: `therra`
- Quem é: Grupo campo-grandense dos anos 1970 e 1980 que se aproximou da música andina e participou do festival e do LP Prata da Casa. (Campo Grande)
- Discografia já no verbete: nenhuma

### Tradição
- Identificador: `tradicao`
- Quem é: Grupo baileiro de Campo Grande que lançou em 2001 um disco ao vivo apontado como o primeiro de uma banda de baile no país; teve Michel Teló como cantor. (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - Disco ao vivo (2001) — segundo Gonçalves, o primeiro disco ao vivo gravado por uma banda de baile do país. Depois dele, o conjunto passou a ter dois acordeonistas. O título do disco não consta na fonte.

### Uirapuru
- Identificador: `uirapuru`
- Quem é: Grupo baileiro de Mato Grosso do Sul surgido em 1988, apontado em pesquisa como o primeiro do estado.
- Discografia já no verbete: nenhuma

### Vozmecê
- Identificador: `vozmece`
- Quem é: Duo formado por Namaria Schneider e Pedro Fattori, de Campo Grande, que mistura polca paraguaia, psicodelia, baião, rock e axé; lançou os álbuns Desbunde (2020) e TropicaPolca (2024). (Campo Grande)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *Desbunde* (2020) — álbum.
  - *TropicaPolca* (2024) — álbum, descrito como emblemático pela matéria.

### Zacarias Mourão
- Identificador: `zacarias-mourao`
- Quem é: Poeta e compositor natural de Coxim, autor de "A Mato-grossense", chamamé citado como um dos clássicos da música sul-mato-grossense. (Coxim)
- Discografia já no verbete: nenhuma

### Zé Corrêa
- Identificador: `ze-correa`
- Quem é: Acordeonista nascido em fazenda de Nioaque, conhecido como "Rei do Chamamé", referência do chamamé em Campo Grande nos anos 1960 e 1970. (Nioaque)
- Discografia já no verbete (fontes acadêmicas/jornalísticas):
  - *O Acordeonista Orgulho de Mato Grosso* (1968) — primeiro disco solo.
  - *O Ídolo de Mato Grosso* (1969) — segundo disco solo.
  - *O Rei do Chamamé* (1969) — terceiro disco solo, lançado pela gravadora Califórnia; deu a ele o apelido.
  - *Gosto Tanto de Você* (1968) — disco gravado com Délio e Delinha.
  - *Os Mensageiros do Oeste* (1969) — gravado em São Paulo com a dupla Amambay e Amambaí; inclui "A Mato-grossense", de Zacarias Mourão.
  - *O Inimitável* (1970) — quarto LP, com participação de Jandira e Benites.

### Zédu
- Identificador: `zedu`
- Quem é: Cantor e compositor que apresentou em Campo Grande, em dezembro de 2013, um show sobre os compositores de Mato Grosso do Sul. (Campo Grande)
- Discografia já no verbete: nenhuma

