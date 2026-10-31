# Revisão: beth-e-betinha

Revisor editorial, 31/10/2026. Arquivo: `verbetes/beth-e-betinha.md`.

## Portão de evidências

- `npm run conferir`: passou ("20 verbetes conferidos", "Nenhum erro").
- `npm run build`: passou (37 páginas).
- `node scripts/ligacoes.mjs`: não rodou, porque o Bash foi negado para esse comando. As ligações foram conferidas à mão contra `dados/lista-mestra.csv`.
- `npm run links`: não se aplica. O verbete não tem link externo.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | A fonte sustenta a frase | OK |
| 2 | O link abre | OK (fonte impressa, sem link) |
| 3 | Sem cópia | OK (comparado com as fichas; o texto do livro não está no repositório) |
| 4 | Dados pessoais | OK (ver observação) |
| 5 | Tom | OK |
| 6 | Divergências | OK |
| 7 | Ficha | OK |
| 8 | Força da fonte | OK (livro; fonte única) |
| 9 | Ligações | OK (ver ATENÇÕES) |
| 10 | Ficha e nome de arquivo | OK |

### Como foi a conferência do ponto 1

A única fonte é *Os Pioneiros* (Rodrigo Teixeira, FIC/MS, 2009), lida pelas fichas de `dados/fontes/os-pioneiros/fichas/`. O revisor conferiu cada frase nas fichas `beth-e-betinha`, `beth`, `betinha`, `irmas-castro`, `circo-nho-pai-e-nho-fio`, `nho-pai`, `circo-do-nho-pai`, `rodrigues-e-rodriguinho`, `los-tammys`, `curioso-e-barqueirinho`, `mulher-vampira`, `rainha-e-rei-do-radio`, `c-10-branca`, `zacarias-mourao` e `projeto-seriema`, e também em `discografia.csv` e `faixas.csv`. Todas as frases têm apoio. Os casos que merecem nota:

- Linha 40, "Em 1982, participaram do projeto Seriema": quem diz que a dupla estava no projeto é Chero (ficha `projeto-seriema`, seção "Bandeira de MS"). O verbete afirma o fato sem atribuir, e isso é aceitável.
- Linha 40, C-10 Branca: o "segundo Itamy" vem das fichas `c-10-branca` e `zacarias-mourao`, não da ficha `itamy`.
- Linha 49: "Codil" abrevia "Codil Comercial de Discos Ltda", e o crédito de Roberto Stanganelli vem da ficha `rodrigues-e-rodriguinho`.

## PROBLEMAs

Nenhum.

## Observação sobre dados pessoais (ponto 4)

- O verbete diz que a família se mudou de Entre Rios para Ponta Porã em 1942 e que o pai, maestro, ensinou música às filhas. A fonte publica os dois fatos como parte da formação da dupla. O PLANO.md permite isso. O Helton decide se ficam.
- O verbete deixou de fora, corretamente, o bairro onde moram (Taquarussu), as datas de nascimento das fichas (6/7/1936 e 1/1/1941), o parceiro de Betinha em Nhô Chico e Nhá Xica, que era um cunhado segundo a lista-mestra, e as mortes violentas de Curioso e Barqueirinho.
- O nome civil de Betinha (Eleonor Aparecida Ferreira dos Santos) e o de Beth (Josabeth) aparecem no livro como identificação das artistas. Não entram nas categorias proibidas.

## ATENÇÕES

- **Fonte única.** Tudo vem de um só livro, com base em depoimento das próprias irmãs. Uma segunda fonte, de imprensa ou da Memória Fonográfica de MS, reforçaria as datas. Wikipédia (pt) e imprensa não foram consultadas. O dossiê registra isso e a coluna `wikipedia_pt` está vazia.
- **Linha 30, "Há divergência quanto à data".** A ficha `circo-nho-pai-e-nho-fio` registra as datas diferentes (Betinha, 1958-59; Delinha, por volta de 1963-64) e acrescenta "possivelmente de episódios diferentes". Delinha fala do show de Délio & Delinha no circo, não da chegada da dupla. As duas versões estão no texto e citadas, como a regra pede. O redator pode dizer que talvez sejam episódios distintos, como faz a ficha.
- **Dois identificadores para o mesmo circo.** A linha 30 liga `circo-do-nho-pai` ("circo dele") e, logo depois, `circo-nho-pai-e-nho-fio`. Na lista-mestra, os dois são o circo montado onde hoje fica o Mercadão Municipal. Podem ser um registro duplicado. Não foi corrigido porque nenhum dos dois links está errado. Fica para o garimpeiro.
- **Rádio de Aquidauana.** A linha 32 liga `radio-aquidauana`. Na lista-mestra também existe `radio-difusora-de-aquidauana`. A fonte não dá o nome da rádio, e por isso não se pode fundir os dois registros sem outra fonte.
- **Linha 49, "Ai São João".** A ficha registra a autoria como "Bete e Betinha", e o verbete diz isso. Está certo. O verbete não liga a faixa, que não está na lista-mestra.
- **Linha 44, "o primeiro disco foi um 78 rpm, de 1959".** A ficha `rodrigues-e-rodriguinho` diz que o LP de 1964 foi "o primeiro da dupla, segundo Beth". Lido como primeiro LP, isso não contradiz o 78 rpm. Se a página do livro disser "primeiro disco", há divergência a registrar. Conferir no livro, se houver acesso.

## Correções feitas direto

Nenhuma. Não foi achado erro de digitação, identificador inválido, nota órfã nem problema de formato. A nota `[^pioneiros]` segue o padrão de `zacarias-mourao.md`.

## Pronto para pull request

Sim.
