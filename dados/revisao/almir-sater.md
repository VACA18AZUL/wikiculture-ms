# Revisão: almir-sater

Verbete: `verbetes/almir-sater.md` (versão reescrita, `atualizado: 2026-10-29`). Revisor editorial, 29 out. 2026. É a segunda revisão: a primeira, de 28 out. 2026, devolveu o verbete com quatro PROBLEMAs. Reabri as nove notas nesta sessão.

## Portão de evidências

- `npm run conferir`: NÃO CONFERIDO. O ambiente desta rodada negou o uso do terminal, então o comando não rodou.
- `npm run build`: NÃO CONFERIDO, pelo mesmo motivo.
- `node scripts/ligacoes.mjs`: NÃO CONFERIDO, pelo mesmo motivo. Conferi as ligações à mão contra `dados/lista-mestra.csv` (ver ponto 9).
- Antes do pull request, alguém com terminal precisa rodar os dois comandos.

## Situação dos PROBLEMAs da revisão anterior

| # | PROBLEMA anterior | Situação |
|---|---|---|
| 1 | l. 22, "abandonou o curso" | Resolvido. O texto agora diz "trancou a matrícula na Faculdade Cândido Mendes", como no Dicionário. Ver ATENÇÃO de cópia no limite. |
| 2 | l. 24, Educação Física deixada para se dedicar à música | Resolvido no sentido. O curso deixado agora é o Direito, e a Educação Física vai até a mudança para São Paulo, em 1978, como no Correio. A frase, porém, mantém duas sequências copiadas do jornal (PROBLEMAs 1 e 2 abaixo). |
| 3 | l. 44, "o parceiro mais frequente" | Resolvido. Agora diz "um de seus parceiros de composição mais constantes" (Dicionário: "um de seus mais constantes parceiros"). |
| 4 | l. 85, *Luzeiro* como "faixa do primeiro disco" | Resolvido. A l. 90 só diz que a composição foi escolhida como tema de abertura do Globo Rural. |

ATENÇÕES anteriores: "acompanhou" o grupo (l. 30), atendida. Fala sobre Campo Grande (l. 54) reformulada, sem cópia. Categorias do Sharp agora como no Dicionário (l. 64). Lista de discos marcada como "Seleção" e completada com o Dicionário (l. 70 a 86), com os discos conferidos. As aulas com Paulo Simões continuam fora, o que está correto: é fato novo e fica para o atualizador.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | OK. Conferi cada parágrafo contra a nota que cita. Há ressalvas menores nas ATENÇÕES (l. 30, l. 44, l. 76). |
| 2 | Link abre | OK. Os 9 links abrem na página certa. |
| 3 | Sem cópia | PROBLEMA. Dois trechos na l. 24, ver abaixo. |
| 4 | Dados pessoais | OK. O filho, citado em cgn2024, ficou fora. Nada removido. |
| 5 | Tom | OK. Avaliações aparecem atribuídas: a pesquisa da USP e a fala do próprio Sater. |
| 6 | Divergências | OK. Todas as divergências do dossiê aparecem com as duas versões: ida a São Paulo (1978 ou 1979), formação, Festival da Record, prêmios de 2016 e ano de *Ar*, grafias. |
| 7 | Ficha | OK. Nascimento vem do dmpb (l. 16). Atividade vem do ce2019 e do dmpb (l. 36 e 38). Instrumento vem do dmpb e do jusp2021 (l. 22 e 58). Reconhecimentos vêm do ce2019 e do dmpb (l. 62 e 64). Nenhum valor só numérico. |
| 8 | Fonte única | OK. **Não há ATENÇÃO de fonte única.** São 9 notas de 5 veículos independentes: Dicionário Cravo Albin, Correio do Estado, Campo Grande News, Jornal da USP e A Crítica de Campo Grande. |
| 9 | Ligações | OK. Conferi à mão, sem o script. Os 25 identificadores usados existem em `dados/lista-mestra.csv`. Nomes repetidos estão ligados na primeira menção. |
| 10 | Ficha e nome de arquivo | OK. `status: rascunho`, `atualizado: 2026-10-29`, identificador `almir-sater` no padrão, resumo com cerca de 150 caracteres. |

Critério de cópia usado: sequência de mais de oito palavras iguais à fonte, sem contar nomes próprios e títulos, que não têm paráfrase. Os trechos que só passam de oito palavras por causa de um nome estão nas ATENÇÕES.

## PROBLEMAs

1. **Linha 24, cópia**: "Segundo o jornal, ele cursou Direito **e deixou a faculdade para se dedicar à música**.[^ce2019]"
   Correio do Estado: "...participou do Festival da Record **e deixou a faculdade para se dedicar à música**." São nove palavras iguais em sequência. O sentido está certo; falta reescrever com palavras próprias. O trecho já estava na versão anterior e passou na primeira revisão.

2. **Linha 24, cópia**: "Depois **cursou pouco mais de um ano de Educação Física na** [[ufms|Universidade Federal de Mato Grosso do Sul (UFMS)]], até se mudar para São Paulo, em 1978.[^ce2019]"
   Correio do Estado: "Foi aprovado e **cursou pouco mais de um ano de Educação Física na** UFMS, até mudar-se novamente, agora para São Paulo, em 1978." São dez palavras iguais em sequência. O sentido está certo; falta reescrever. Também vem da versão anterior.

Não corrigi nenhum dos dois: cópia fica com o redator.

## ATENÇÕES

- **Fonte única: não há.** O verbete se apoia em 5 veículos independentes (ver ponto 8).
- **Dossiê `dados/dossies/almir-sater.md`: não tem seção "Atualização de".** Tem "Uso no verbete", com a subseção "Reescrita após devolução (29 out. 2026)".
- **Cópia no limite, por causa de nome próprio ou título.** Ao reescrever a l. 24, vale variar também estes trechos:
  - l. 22: "trancou a matrícula na Faculdade Cândido Mendes e voltou". Dicionário: "Trancou a matrícula na Faculdade Cândido Mendes e voltou para Mato Grosso". São nove palavras, três delas do nome da faculdade.
  - l. 30: "Acompanhou o grupo Tetê e o Lírio Selvagem e". Correio: "Acompanhou o grupo Tetê e O Lírio Selvagem e integrou o show". São nove palavras, cinco delas do nome do grupo.
  - l. 36: "Bicho do Mato e protagonizou A História de Ana Raio e Zé Trovão". Correio: "“Bicho do Mato” e protagonizou “A História de Ana Raio e Zé Trovão”". O trecho é quase todo de títulos.
- **Linha 30**: "Acompanhou o grupo [...] e o show 'Vozes e Violas'". O Correio diz que ele acompanhou o grupo e **integrou** o show. Com um verbo só, o texto dá a entender que ele "acompanhou" o show. A diferença é pequena; vale usar "integrou" para o show.
- **Linha 76**: "*Violeiros do Brasil* (1988 e 2004)". O Dicionário se contradiz. No texto, diz que "Violeiros do Brasil" foi relançado em 2004. Na discografia, a linha de 2004 traz "Violeiros do Brasil II" (Revivendo). O verbete segue o texto; pode registrar também a grafia da discografia.
- **Linhas 44 e 92**: "Geraldo Roca (grafado 'Rocca')". O Dicionário usa "Rocca" na maior parte das parcerias, mas "Roca" em ao menos uma. "Grafado também 'Rocca'" seria mais exato.
- **Linha 86**: "*+Ar* (2018)". Na discografia do Dicionário, a linha de 2018 diz "Ar"; no texto, o disco se chama "+Ar". O verbete segue o texto. Não precisa mudar nada.
- **Linha 54**: "Espaço Bosque Expo". A matéria diz "espaço Bosque Expo" no subtítulo e "Bosque Expo" no corpo. É aceitável.
- **Homônimo**: nenhum.

## Corrigido direto

- Nada. Não achei erro mecânico: as 9 notas definidas estão em uso e no formato, os identificadores dos links existem na lista-mestra, a ficha não tem valor só numérico e não há erro de digitação.
- Não achei dado pessoal; nada foi removido.
- Não propus nomes nem relações em `dados/propostas/`. Não mudei a situação na fila, porque não havia terminal para rodar `node scripts/fila.mjs`.

## Fontes conferidas

ce2019 (Correio do Estado, 23 jul. 2019); dmpb (Dicionário Cravo Albin); cgn2022 (Campo Grande News, 13 nov. 2022); cgn2022b (Campo Grande News, 23 out. 2022); cgn2024 (Campo Grande News, 8 fev. 2024); cgn2024b (Campo Grande News, 16 nov. 2024); jusp2021 (Jornal da USP, 30 abr. 2021); acr2026 (A Crítica de Campo Grande, 10 abr. 2026); ce2024 (Correio do Estado, 23 set. 2024). Reabri todas nesta sessão.

**Pronto para pull request: não.** Há dois PROBLEMAs de cópia na l. 24, que pedem só reescrita, sem pesquisa nova. Além disso, `npm run conferir` e `npm run build` não rodaram nesta rodada.
