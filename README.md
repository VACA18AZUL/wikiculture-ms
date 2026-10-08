# WikiCulture MS

Enciclopédia aberta de agentes culturais e produções artísticas de Mato Grosso do Sul: teatro, dança, circo, literatura, artes plásticas, audiovisual e música.

Site: ainda sem endereço público (ver "Decisões em aberto" em `PLANO.md`).

## Onde está cada coisa

| Pasta ou arquivo | O que é |
|---|---|
| `verbetes/` | Um arquivo por verbete. É aqui que o conteúdo vive. |
| `modelos/verbete.md` | Modelo comentado para criar um verbete novo. |
| `dados/lista-mestra.csv` | Nomes e obras a pesquisar, com fonte e prioridade. |
| `PLANO.md` | Fases do projeto, fontes de pesquisa e regras editoriais. |
| `CLAUDE.md` | Instruções para agentes de IA que trabalham no repositório. |
| `src/`, `public/estilo.css` | Código e visual do site. |
| `scripts/conferir.mjs` | Verificação automática das regras editoriais. |

## Criar um verbete

1. Copie `modelos/verbete.md` para `verbetes/<identificador>.md`.
2. Preencha a ficha e escreva o texto, com uma nota de fonte por parágrafo.
3. Rode `npm run conferir` e `npm run build`.

## Rodar no computador

```
npm install
npm run dev        # abre o site em http://localhost:4321/wikiculture-ms/
npm run conferir   # verifica as regras editoriais
npm run build      # gera o site em dist/
```

Requer Node 22 ou mais recente. Cada envio para a branch `main` confere as regras e gera o site no GitHub; a publicação automática liga quando a hospedagem for definida.
