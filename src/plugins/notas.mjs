// Separa com vírgula notas de rodapé coladas ([^a][^b]), que de outro modo aparecem como "12" e não "1,2".
export default function notas() {
  return (arvore) => percorrer(arvore);
}

function percorrer(no) {
  if (!no.children) return;
  const novos = [];
  for (const filho of no.children) {
    const anterior = novos[novos.length - 1];
    if (filho.type === 'footnoteReference' && anterior?.type === 'footnoteReference') {
      novos.push({ type: 'html', value: '<sup>,</sup>' });
    }
    novos.push(filho);
    percorrer(filho);
  }
  no.children = novos;
}
