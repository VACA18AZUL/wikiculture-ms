#!/usr/bin/env bash
# Faz commit do que mudou e envia para a branch de produção, com rebase e novas
# tentativas quando outra rodada enviou antes. Nunca perde trabalho: se o rebase
# não resolve sozinho, o commit vai para uma branch de conflito.
# Uso: scripts/enviar.sh "<mensagem do commit>"
set -euo pipefail

mensagem="${1:?mensagem}"
branch="${BRANCH_PRODUCAO:-producao}"

git config user.name "${GIT_NOME:-agentes-wikiculture}"
git config user.email "${GIT_EMAIL:-agentes-wikiculture@users.noreply.github.com}"

git add -A
if git diff --cached --quiet; then
  echo "nada a enviar"
  exit 0
fi
git commit -q -m "$mensagem"

for tentativa in 1 2 3 4 5 6; do
  git fetch -q origin "$branch" || true
  if git rebase -q "origin/$branch" 2>/dev/null; then
    if git push -q origin "HEAD:$branch"; then
      echo "enviado para $branch (tentativa $tentativa)"
      exit 0
    fi
  else
    git rebase --abort 2>/dev/null || true
    conflito="$branch-conflito-$(date -u +%Y%m%d-%H%M%S)-$RANDOM"
    git push -q origin "HEAD:$conflito"
    echo "conflito ao rebasear; commit enviado para $conflito. Mesclar à mão."
    exit 0
  fi
  sleep $((tentativa * 5))
done
echo "não conseguiu enviar depois de 6 tentativas"
exit 1
