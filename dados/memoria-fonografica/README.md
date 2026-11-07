# Acervo Digital Memória Fonográfica de MS (Base de Dados Integrada)

Base de dados estruturada a partir do canal oficial [Acervo Digital Memória Fonográfica de MS](https://www.youtube.com/@memoriafonograficadeMS), idealizado e mantido pelo pesquisador e arqueólogo musical Idemar Sprandel.

Esta fonte documental está expressamente homologada no `CLAUDE.md` e no `PLANO.md` do **WikiCulture MS** como fonte autorizada para subsidiar a área de **Música** (verbetes de pessoas, grupos, discografias e relações).

---

## Estrutura dos Arquivos

1. **`acervo_completo_ms.csv` / `acervo_completo_ms.xlsx` (Aba 1):**
   * **14.405 faixas** musicais catalogadas individualmente.
   * **Colunas:** `Intérprete`, `Disco`, `Formato`, `Ano`, `Faixa`, `Música`, `Autor(es)`, `Gênero`, `Gravadora`, `Catálogo`, `Fonte (Acervo)`, `Link`, `Observações`.
   * **Codificação:** UTF-8 com BOM, delimitador ponto e vírgula (`;`).

2. **`acervo_discos_ms.csv` / `acervo_completo_ms.xlsx` (Aba 2):**
   * **1.101 discos/álbuns** cadastrados com metadados e textos de contextualização.
   * **Colunas:** `Artista`, `Disco`, `Formato`, `Ano`, `Gravadora`, `Catálogo`, `Fonte (Acervo)`, `Total Faixas`, `Link da Playlist`, `Ficha Técnica e Histórico`.

---

## Panorama Estatístico do Acervo

* **Total de Faixas:** 14.405
* **Total de Discos/Álbuns:** 1.101
* **Artistas e Intérpretes Únicos:** 2.154
* **Gêneros Musicais Predominantes:**
  * Chamamé (2.687)
  * Polca Paraguaia e Polca Canção (1.335)
  * MPB Pantaneira / Som do Mato (1.198)
  * Canção Regional (537)
  * Rock Sul-Mato-Grossense (517)
  * Instrumental de Viola e Acordeom (434)
  * Guarânia (364)
  * Rasqueado (361)
  * Sertaneja de Raiz (317)
  * Vanera / Vanerão (307)
* **Formatos Físicos Catalogados:**
  * CD (Compact Disc): 7.606 faixas
  * LP (Vinil 33 RPM): 4.479 faixas
  * Compactos (Simples/Duplos) e EPs: 172 faixas
  * Fitas K7 e Gravações de Estúdio: 180+ faixas
* **Principais Selos e Gravadoras Mapeados:**
  * *Regionais/Históricos:* Sapukay Discos, California/Califórnia, Studio Vozes, Pantanal Discos, Melodias Discos, Studio Musi Art, Prómix, GR Studio.
  * *Nacionais:* Continental, Chantecler, Fermata, RGE/Premier, Velas, Som Livre.
* **Colecionadores e Fontes Cedentes:**
  * Idemar Sprandel (3.382 faixas)
  * Carlos Luz (2.913 faixas)
  * José Pedro Roversi (Canal Raíz Sertaneja Oficial)
  * Silvano Fonseca
  * Valdinei dos Santos
  * Acervos particulares dos próprios artistas (Maciel Corrêa, Alex Corrêa, Ari Correia/Arizito, Amantino Machado da Cruz, entre outros).

---

## Aplicação no WikiCulture MS

### 1. Seção "Discografia" dos Verbetes de Música
Conforme as regras do `CLAUDE.md`:
* Cada título de disco ou faixa deve ser referenciado com a nota de fonte `[^id]` apontando para a playlist ou vídeo do canal.
* Os links diretos do acervo (`https://www.youtube.com/playlist?list=...` e `https://www.youtube.com/watch?v=...`) são permitidos como link de escuta de exceção segundo a regra `CANAIS_ACERVO`.

### 2. Expansão da Lista Mestra (`dados/lista-mestra.csv`)
Os 1.101 discos e 2.154 artistas fornecem a base empírica para registrar agentes culturais e produções musicais de MS que ainda não possuem verbete, enriquecendo a fila de garimpo da área de Música.

### 3. Fichas Técnicas e Relações (`dados/relacoes.csv`)
As descrições recuperadas trazem conexões de compositores, parcerias musicais (ex: Almir Sater, Paulo Simões, Geraldo Roca, Délio e Delinha, Amambai e Amambaí, Zacarias Mourão, Dino Rocha), estúdios e músicos acompanhantes.
