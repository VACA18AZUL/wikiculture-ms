# Revisão: moinho-cultural

Verbete: `verbetes/moinho-cultural.md`. Revisor editorial, 29 out. 2026. Os números de linha abaixo valem para o arquivo atual.

## Portão de evidências

- `npm run conferir`: **passou** ("11 verbetes conferidos", "Nenhum erro"). Rodado antes e depois da revisão.
- `npm run build`: **passou** (24 páginas geradas). Rodado antes e depois da revisão.
- `node scripts/ligacoes.mjs`: rodou. Para este verbete apontou "Mônica Macedo" na l. 41 (é a segunda menção no mesmo parágrafo, e a primeira já está ligada) e "Pantanal" na l. 97 (é parte de "Centro de Convenções do Pantanal", não a novela). Os dois são falsos positivos. Todos os identificadores usados existem na lista-mestra.

**Limite desta revisão:** o *Campo Grande News* devolveu HTTP 403 à ferramenta de leitura nas três notas desse veículo (cgn2022paris, cgn2023carnaval, cgn2025united). O archive.org também não pôde ser consultado. Essas três notas ficam **NÃO CONFERIDAS** quanto a apoio, link e cópia. As outras onze foram abertas nesta sessão.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA (l. 45, l. 65, l. 97). Parágrafos apoiados só no Campo Grande News: NÃO CONFERIDO |
| 2 | Link abre | OK nas 11 notas abertas e nos 4 links da ficha. NÃO CONFERIDO: cgn2022paris, cgn2023carnaval, cgn2025united (403) |
| 3 | Sem cópia | PROBLEMA (l. 45, l. 51, l. 81). Notas do Campo Grande News: NÃO CONFERIDO |
| 4 | Dados pessoais | OK. A matéria acritica2026ong traz CNPJ, chave Pix e telefones do Instituto, e nada disso entrou |
| 5 | Tom | OK, com ATENÇÃO sobre o Moinho In Concert 2026 (l. 98) |
| 6 | Divergências | OK. Origem (2002, 2004, 2011), atendidos por ano, cargo de Márcia Rolon, quarto título do Melhores ONGs e "patrimônio cultural do Estado" aparecem com as fontes. ATENÇÃO sobre a ficha (ponto 7) |
| 7 | Ficha | OK. Todos os campos têm nota no texto; "2004" está entre aspas. ATENÇÃO: "Início das atividades" mostra só 2004 |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única**: o verbete se apoia em 14 notas de veículos independentes (Campo Grande News, Correio do Estado, Agência Brasil, A Crítica, O POVO, Folha MS, Educação Integral, BrazilFoundation, site oficial, Explorer.land, UNIR) |
| 9 | Ligações | OK (ver portão de evidências) |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`; `atualizado: 2026-10-29`; identificador `moinho-cultural` no padrão; resumo com cerca de 221 caracteres |

## PROBLEMAs

1. **L. 45, comodato.** Trecho: "O comodato foi renovado em 2014, com cedência até 2045". A coluna (opovo2025) fala da renovação do comodato em 2014 sem data final. O prazo de 2045 vem de outro ato, a cedência conduzida pelo diretor-executivo atual do grupo ("que conduziu a cedência, até 2045, do imóvel"). O verbete junta os dois atos numa só frase. Separar: renovação em 2014; cedência posterior até 2045, com o imóvel passando à Fundação Dias Macêdo.
2. **L. 45, cópia.** "funciona em um antigo moinho de trigo e fábrica de massas do Grupo" repete 13 palavras seguidas da coluna de Flávio Paiva. Reescrever.
3. **L. 51, cópia.** A lista "música, dança, educação ambiental e patrimonial, letramento digital, idiomas, apoio escolar e psicossocial, biblioteca, estúdio de produção audiovisual e salas de ensaio" repete 22 palavras da coluna, na mesma ordem. Não é lista de nomes próprios. Resumir ou agrupar (por exemplo, atividades artísticas, apoio escolar e psicossocial, e a estrutura física).
4. **L. 65, NUTEC "desde 2017".** A página da BrazilFoundation registra o Instituto como "Apoiado em 2017" e não liga esse ano de forma explícita ao NUTEC. "Desde 2017" sugere apoio contínuo, o que a página não diz. Sugestão: "A página da BrazilFoundation, que registra apoio ao Instituto em 2017, apresenta o projeto NUTEC...".
5. **L. 97, anúncios contados como fato consumado.**
   - "Teve quatro sessões em 14 e 15 de dezembro de 2022": a matéria (correio2022) é de 13 dez. 2022 e anuncia as sessões para "amanhã e quinta-feira (14 e 15)". Ela não confirma que aconteceram. Usar "estavam marcadas" ou buscar fonte posterior.
   - "estreou fora do estado em 22 de junho": a matéria (ab2023) é de 21 jun. 2023 e anuncia a estreia "nesta quinta-feira (22)". Mesma correção.
6. **L. 81, cópia.** "participou de um concerto gratuito no Aterro do Flamengo" repete nove palavras de correio2022 ("participou de um concerto gratuito, no Aterro do Flamengo"). Passa por uma palavra do limite. Basta reformular, por exemplo "fez um concerto aberto ao público no Aterro do Flamengo".

## ATENÇÕES

- **Fonte única: não há.** Alguns fatos se apoiam numa fonte só, e o texto já diz isso: sede e comodato (só a coluna de O POVO); Ponto de Cultura, Pontão e "Amigos do Moinho" (só o site oficial); separação do Instituto Homem Pantaneiro em 2011 (só Explorer.land, que o texto chama de fonte fraca); "patrimônio cultural do Estado" (só cgn2023carnaval). Para a segunda fonte, busque a dissertação de Ana Cecília Demarqui de Souza no Repositório UFMS ou no BDTD (não abriu na pesquisa) e o texto completo do artigo da UNIR. Para o reconhecimento estadual, procure a lei ou decreto no Diário Oficial de MS.
- **Paris, set. 2022 (l. 79).** A nota cgn2022paris é de 15 set. 2022 e o festival foi de 16 a 18 set. Se a matéria só anunciava as apresentações, "apresentou-se" tem o mesmo problema do item 5. Não pude abrir a página (403). Quem tiver acesso confere.
- **United Dance, set. 2025 (l. 89).** A nota é de 5 set. 2025. A mesma dúvida vale para "representaram" e "Participaram". Página não aberta (403).
- **L. 57, "sendo 360 em Corumbá e 40 em Puerto Quijarro".** A Folha MS diz que os 360 vêm de Corumbá, Ladário, Puerto Suárez e Puerto Quijarro e são atendidos na sede, em Corumbá. Lido às pressas, o verbete parece dizer que os 360 moram em Corumbá. Sugestão: "360 na sede, em Corumbá, e 40 no núcleo de Puerto Quijarro".
- **L. 93 e l. 107, quarto título estadual.** A Crítica escreve que o Instituto "voltou a vencer em 2024, quando o título foi o segundo seguido". Isso sugere um título em 2023, mas a matéria não diz o ano. O verbete está certo em não pôr 2023. Seria mais fiel registrar a expressão "segundo seguido".
- **L. 98, Moinho In Concert 2026.** "A de 2026 foi marcada para 12 e 13 de dezembro" é evento futuro (hoje é 29 out. 2026). A frase é neutra e não promove o evento, mas vai ficar velha. O atualizador confirma depois de dezembro.
- **Ficha, "Início das atividades: "2004"".** O texto registra a divergência (2002 segundo a BrazilFoundation; 2011 como organização independente, em fonte fraca). A ficha mostra só 2004. Isso é aceitável porque 2004 tem quatro fontes, mas o redator pode deixar a divergência visível também na ficha.
- **L. 83, nome do maestro.** O Correio do Estado usa "José Maikon Amorim Alves" nos créditos e "José Maikson" no corpo. O verbete registra as duas grafias. Na lista-mestra, a linha `jose-maikon-amorim-alves` está apoiada em matéria do Campo Grande News de 2023, que não foi aberta nesta revisão.
- **Homônimo:** nenhum indício. A duplicata `instituto-moinho-cultural-sul-americano` na lista-mestra, já anotada no dossiê, continua com o garimpeiro.

## Corrigido direto

Nada. Não achei erro mecânico neste verbete: identificadores, notas usadas e definidas, formato das notas e aspas da ficha estão certos. `status` continua `rascunho`. Nenhum fato foi acrescentado.

## Fontes conferidas

- Abertas nesta sessão: correio2022, ab2023, opovo2025, acritica2026aud, acritica2026ong, ei2014, folhams2019, unir2024 (só a página do resumo), bf, site, explorer. Links da ficha: site, Facebook (título "Moinho Cultural | Corumbá MS"), YouTube ("MOINHO CULTURAL - OFICIAL") e Wikipédia.
- Não abertas (HTTP 403): cgn2022paris, cgn2023carnaval, cgn2025united.

Dossiê `dados/dossies/moinho-cultural.md`: **não tem seção "Atualização de".**

**Pronto para pull request: não.** Há seis PROBLEMAs para o redator: três de cópia (l. 45, 51, 81), dois de frase além da fonte (l. 45, l. 65) e um de anúncio contado como fato (l. 97). Antes do PR, alguém com acesso ao Campo Grande News confere as três notas desse veículo.
