# Revisão: paulo-simoes

Verbete: `verbetes/paulo-simoes.md`. Revisor editorial, 28 out. 2026. Todas as cinco notas foram reabertas nesta sessão.

## Portão de evidências

- `npm run conferir`: passou ("7 verbetes conferidos", "Nenhum erro").
- `npm run build`: passou (19 páginas geradas, inclusive `/verbetes/paulo-simoes/`).
- `node scripts/ligacoes.mjs`: aponta só "Maria Alice" na linha 35. É o título da turnê ("Maria Alice canta Paulo Simões"), na mesma frase em que o nome já está ligado. Não é falha.

## Os dez pontos

| # | Ponto | Resultado |
|---|---|---|
| 1 | Fonte sustenta a frase | PROBLEMA (eventos anunciados contados como já ocorridos) |
| 2 | Link abre | OK (5 de 5) |
| 3 | Sem cópia | OK (ver ATENÇÃO sobre a l. 17) |
| 4 | Dados pessoais | OK (o endereço do estúdio, que está na fonte, ficou fora) |
| 5 | Tom | PROBLEMA (promoção de evento futuro; avaliação sem atribuição) |
| 6 | Divergências | OK (o dossiê não registra nenhuma; as fontes não se contradizem) |
| 7 | Ficha | OK (Atividade: cgn2021; Naturalidade: acritica2026) |
| 8 | Fonte única | OK (A Crítica de Campo Grande e Campo Grande News, veículos independentes) |
| 9 | Ligações | OK |
| 10 | Ficha e nome de arquivo | OK (`status: rascunho`, `atualizado: 2026-10-28`, identificador no padrão, resumo com cerca de 165 caracteres; sem linha `cidade`, o que o modelo permite) |

## PROBLEMAs

1. **Tom: promoção de evento futuro.** Hoje é 28 out. 2026.
   - **Linha 29**: "A faixa chega às plataformas digitais em 31 de outubro de 2026.[^acritica2026b]"
   - **Linha 39**: o parágrafo inteiro "Em 31 de outubro de 2026, a audição de "Sonhos de Caim" está prevista em um pocket show no Estúdio Fabrika, em Campo Grande, dentro do projeto Casa Folk.[^acritica2026b]"
   A fonte (A Crítica, 15 out. 2026) é uma chamada para o lançamento. O verbete repete o anúncio de um evento que ainda não aconteceu. Sugestão: manter só a existência da canção (primeira parceria com Jonavo, tema de Caim e Abel) e registrar lançamento e show quando houver fonte posterior.

2. **Tom: avaliação sem atribuição.** **Linha 25**: "A canção tornou-se um marco da música regional.[^acritica2026]"
   É juízo da A Crítica ("se transformou em um marco da música regional") dito com a voz do verbete. Sugestão: atribuir ("Segundo A Crítica de Campo Grande, ...") ou retirar.

3. **Fonte sustenta a frase: anúncio contado como fato consumado.**
   - **Linha 33**: "A turnê ... passou por Corumbá (19 de novembro de 2021), Dourados (26 de novembro) e Ponta Porã (27 de novembro). Os shows contaram com ..." A matéria (Campo Grande News, 10 nov. 2021) anuncia a turnê antes dos shows: diz que a turnê "conta" com Maria Alice e que os bate-papos serão "no dia de cada show". Não confirma que os shows ocorreram.
   - **Linha 21**: "Em novembro de 2021, voltou aos palcos" tem a mesma origem (a matéria diz "volta aos palcos" neste mês).
   - **Linha 35**: "chegou a Campo Grande em 22 de novembro, no Teatro Aracy Balabanian. Paulo Simões participou de algumas músicas." A matéria (16 nov. 2024) anuncia o show para o dia 22 e diz que Simões "estará com a cantora". A parte "passou por Corumbá, Bonito, Dourados e Ivinhema" está certa, porque essas datas já tinham passado.
   Sugestão: "estava programada para", "a matéria anunciava".

## ATENÇÕES

- **Linha 17**: "Composições suas foram gravadas por ..." — a fonte diz "teve composições interpretadas por nomes como". "Interpretadas" é mais amplo que "gravadas". Vale usar o verbo da fonte.
- **Linha 17**: "um compacto, um LP, cinco CDs solo, uma coletânea e participações em discos coletivos" segue a ordem e quase as mesmas palavras da fonte ("inclui um compacto, um LP, cinco CDs individuais, uma coletânea..."). Não passa de oito palavras seguidas iguais, por causa da troca de "individuais" por "solo", mas está perto. Vale reformular.
- **Linha 37**: o show "foi marcado para 16 de abril de 2026" (data já passada) e "antecipa um álbum ao vivo previsto para 2026". A redação está correta, porque fica no plano do anúncio, mas o verbete ainda não confirma que o show aconteceu nem que o álbum saiu. O atualizador pode buscar uma fonte posterior.
- **Linha 17**: o nome do projeto na fonte é "Chalana de Prata", "reconhecido pelo trabalho com". O verbete diz "o associa aos projetos ... sem detalhar o vínculo", o que é fiel à fonte.
- **Segunda fonte para a biografia**: a tese de Flávio Zancheta Faccioni (PPGLetras/UFMS, 2024), citada no dossiê, continua sem abrir. É o caminho para nascimento, formação e discografia com títulos.
- **Homônimo**: nenhum.

## Corrigido direto

- Nota `acritica2026`: o título estava "Paulo Simões — show Trem do Pantanal | 50 Anos no Sesc Teatro Prosa". Ficou com o título publicado: "Paulo Simões faz show no Sesc Teatro Prosa pelos 50 anos de 'Trem do Pantanal'".
- Nota `acritica2026b`: o título estava "Paulo Simões e Jonavo lançam 'Sonhos de Caim'". Ficou com o título publicado: "Paulo Simões e Jonavo lançam primeira parceria, 'Sonhos de Caim', em pocket show no dia 31".

## Fontes conferidas

acritica2026 (Iury de Oliveira, A Crítica de Campo Grande, 10 abr. 2026); cgn2021 (Thailla Torres, Campo Grande News, 10 nov. 2021); cgn2022 (Thailla Torres, Campo Grande News, 13 nov. 2022); cgn2024 (Idaicy Solano, Campo Grande News, 16 nov. 2024); acritica2026b (Ricardo Eugenio, A Crítica de Campo Grande, 15 out. 2026).

Dossiê `dados/dossies/paulo-simoes.md`: não tem seção "Atualização de".

**Pronto para pull request: não.** Volta ao redator por tom (promoção do lançamento de 31 out. 2026 e "marco" sem atribuição) e pelo tempo verbal dos eventos anunciados. São correções de redação, sem pesquisa nova.
