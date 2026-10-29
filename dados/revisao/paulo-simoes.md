# Revisão: paulo-simoes

Verbete: `verbetes/paulo-simoes.md`, versão reescrita pelo redator depois da devolução de 28 out. 2026. Revisor editorial, 29 out. 2026. As cinco notas foram reabertas nesta sessão. Os números de linha abaixo valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **NÃO CONFERIDO**. O Bash não teve permissão nesta rodada, e o comando não rodou.
- `npm run build`: **NÃO CONFERIDO**, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: **NÃO CONFERIDO**, pelo mesmo motivo. A conferência das ligações foi feita à mão contra `dados/lista-mestra.csv` (ver ponto 9).

Antes do pull request, alguém precisa rodar os dois comandos. Pelo CLAUDE.md, os dois precisam passar.

## PROBLEMAs da revisão anterior: situação

| # | PROBLEMA de 28 out. 2026 | Situação agora |
|---|---|---|
| 1 | Promoção de evento futuro: lançamento digital em 31 out. 2026 (antiga l. 29) e pocket show no Estúdio Fabrika (antiga l. 39) | **Resolvido.** As duas frases saíram. Na l. 29 ficaram só a parceria com Jonavo e o tema bíblico. |
| 2 | "Marco da música regional" sem atribuição (l. 25) | **Resolvido.** Agora diz "Segundo *A Crítica de Campo Grande*, a canção se transformou em marco da música regional." |
| 3 | Anúncio contado como fato consumado (l. 21, 33, 35) | **Resolvido.** L. 21: "a imprensa noticiou seu retorno aos palcos". L. 33: "anunciou a turnê", "elenco previsto", "estava programada". L. 35: as cidades já percorridas ficam no passado; o show de Campo Grande "estava programado", com "participação anunciada". |

ATENÇÕES antigas que o redator acolheu: "gravadas" virou "interpretadas", o verbo da fonte (l. 17). A discografia foi reordenada e reescrita (l. 17) e não segue mais a ordem da fonte.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK (ressalvas menores em ATENÇÕES: l. 17, 29, 37) |
| 2 | Link abre | OK (5 de 5; cada link leva à matéria citada, com título, autor e data conferidos) |
| 3 | Sem cópia | OK (nenhuma sequência com mais de oito palavras iguais na prosa; ver ATENÇÃO sobre a l. 19) |
| 4 | Dados pessoais | OK (o endereço do Estúdio Fabrika, que está em acritica2026b, ficou fora; nenhuma das fontes traz dado pessoal usado no texto) |
| 5 | Tom | OK (sem primeira pessoa, sem superlativo; "marco" agora vem atribuído; ver ATENÇÃO sobre "canções de sucesso", l. 19) |
| 6 | Divergências | OK (o dossiê registra "Nenhuma encontrada", e as cinco fontes não se contradizem) |
| 7 | Ficha | OK (Atividade: "o cantor, compositor e instrumentista Paulo Simões", cgn2021, citada na l. 13. Naturalidade: nascido no Rio de Janeiro e criado em Campo Grande, acritica2026, citada na l. 13. Não há valor numérico.) |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única**: o verbete se apoia em dois veículos independentes, *A Crítica de Campo Grande* (2 matérias) e *Campo Grande News* (3 matérias). |
| 9 | Ligações | OK. Os 14 identificadores usados existem em `dados/lista-mestra.csv`: almir-sater, renato-teixeira, guilherme-rondon, celito-espindola, antonio-porto, geraldo-roca, trem-do-pantanal, sonhos-guaranis, d-de-destino, assim-os-dias-passarao, sonhos-de-caim, jonavo, maria-alice, teatro-aracy-balabanian. Os nomes sem link (Sandy e Junior, Maria Bethânia, Ivan Lins, Michel Teló, Ana Vieira, Érico Bispo, Sesc Teatro Prosa, Chalana de Prata, Violas Pantaneiras) não têm verbete nem linha na lista-mestra. O script não rodou. |
| 10 | Ficha e nome de arquivo | OK (`status: rascunho`; `atualizado: 2026-10-29`, data de hoje; identificador `paulo-simoes` no padrão; resumo com cerca de 160 caracteres; sem linha `cidade`, o que o modelo permite) |

## PROBLEMAs

Nenhum.

## ATENÇÕES

- **Fonte única: não se aplica.** São dois veículos independentes. Ainda assim, a naturalidade (l. 13 e ficha) vem só de acritica2026. A segunda fonte para a biografia continua sendo a tese de Flávio Zancheta Faccioni (PPGLetras/UFMS, 2024), que o dossiê registra como não aberta (ECONNREFUSED). Ela serve para nascimento, formação e discografia com títulos.
- **L. 19, "Tem parceria recorrente com Almir Sater, em várias canções de sucesso."** A fonte (cgn2024) diz "coleciona em sua carreira parceria com Almir Sater em várias canções de sucesso". O verbete repete exatamente oito palavras seguidas ("com Almir Sater em várias canções de sucesso"). Isso fica no limite da regra (mais de oito é PROBLEMA), mas não passa dele. "De sucesso" é também uma avaliação da fonte dita com a voz do verbete. Sugestão para o redator: atribuir ("Segundo o *Campo Grande News*, ...") ou tirar "de sucesso", como foi feito com "marco" na l. 25. O verbete `almir-sater.md` já atribui essa mesma informação ao *Campo Grande News*.
- **L. 17, lista de intérpretes.** A fonte diz "nomes como Almir Sater, Renato Teixeira, ...", uma lista não exaustiva. O verbete tira o "nomes como". A frase não afirma que a lista é completa, mas "entre outros" seria mais fiel. A sequência de nomes é igual à da fonte. Por ser lista de nomes próprios, não foi tratada como cópia.
- **L. 17, "aos projetos Chalana de Prata e Violas Pantaneiras".** A fonte diz "reconhecido pelo trabalho com o Chalana de Prata e pelo projeto Violas Pantaneiras". Só Violas Pantaneiras é chamado de projeto, e a fonte não diz o que é o Chalana de Prata. Sugestão: "o associa ao Chalana de Prata e ao projeto Violas Pantaneiras".
- **L. 29, "Sonhos de Caim" (2026).** acritica2026b não informa o ano de composição, só o lançamento nas plataformas em 31 out. 2026, daqui a dois dias. O ano 2026 é plausível como ano de divulgação, mas antecipa um lançamento que ainda não aconteceu. Quando houver fonte posterior, o atualizador confirma.
- **L. 37, "Abre uma retrospectiva da carreira e antecipa um álbum ao vivo previsto para 2026."** O verbo no presente, logo depois de "estava marcado", soa como fato consumado. A fonte, anterior ao show, diz que o evento "marca o início de uma retrospectiva". Sugestão: "Segundo a matéria, o show abriria uma retrospectiva...". O verbete ainda não confirma que o show aconteceu nem que o álbum saiu.
- **Homônimo**: nenhum indício.

## Corrigido direto

- Linha em branco inserida entre o último parágrafo (l. 37) e o bloco de notas. O formato agora segue `modelos/verbete.md` e os outros verbetes. Não muda o texto.

Nada mais foi alterado. `status` continua `rascunho`. Nenhum fato foi acrescentado. Nenhum arquivo de proposta foi criado.

## Fontes conferidas

- acritica2026: Iury de Oliveira, *A Crítica de Campo Grande*, 10 abr. 2026. Sustenta naturalidade, "tradição e modernidade", intérpretes, discografia em números, Chalana de Prata e Violas Pantaneiras, 1975 e Santa Cruz de la Sierra, "marco", show de 16 abr., retrospectiva e álbum. "Instrumentista" não aparece nela.
- cgn2021: Thailla Torres, *Campo Grande News*, 10 nov. 2021. Sustenta "cantor, compositor e instrumentista", a retomada dos palcos, Sonhos Guaranis ("consolidou a amizade e parceria"), o blues "D de destino" (Simões, Sater, Teixeira), datas e cidades da turnê, Maria Alice, Ana Vieira e Érico Bispo (cururu e siriri), banda e "Diálogos Musicais".
- cgn2022: Thailla Torres, *Campo Grande News*, 13 nov. 2022. Sustenta a autoria de "Assim os Dias Passarão", o show de 12 nov. 2022 e a referência à partida de Geraldo Roca.
- cgn2024: Idaicy Solano, *Campo Grande News*, 16 nov. 2024. Sustenta a parceria com Sater, Guilherme Rondon, Celito Espíndola e Antônio Porto, o tributo, as cidades já percorridas, o show de 22 nov. no Teatro Aracy Balabanian e a participação anunciada.
- acritica2026b: Ricardo Eugenio, *A Crítica de Campo Grande*, 15 out. 2026. Sustenta a primeira parceria com Jonavo e a passagem bíblica de Caim e Abel.

Dossiê `dados/dossies/paulo-simoes.md`: **não tem seção "Atualização de".**

**Pronto para pull request: sim**, com uma condição: `npm run conferir` e `npm run build` precisam rodar e passar antes do PR, porque não rodaram nesta sessão. Os três PROBLEMAs da revisão anterior foram resolvidos. As ATENÇÕES acima são ajustes de redação que não bloqueiam o PR. O redator ou o atualizador pode aplicá-los.
