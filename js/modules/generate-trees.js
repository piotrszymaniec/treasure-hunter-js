function plantTrees(numberOfRows, treesInRow, parentNode) {
  for(let i=1;i<=numberOfRows;i++) {
    const treeRow = document.createElement('div');
    treeRow.classList.add('flex-column');
    parentNode.append(treeRow);
    treeRow.innerHTML = plantTreesInRow(treesInRow);
  }
}

function plantTreesInRow(treesInRow) {
  const trees = [];
  for(let i=1;i<=treesInRow;i++) {
    trees.push(`<div class="tree">🌲</div>`)
  }
  return trees.join("\n")
}

export {plantTrees};
