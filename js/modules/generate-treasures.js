import { treasures } from "./game-items";

function addAllTreasures(trees, numberOfTreasures) {
  const allTrees = [...trees];
  const randomIndexes = getRandomNumbers(numberOfTreasures, allTrees.length);
  for (const index of randomIndexes) {
    const { className } = treasures.getRandomTreasure();
    allTrees[index].classList.add(className);
  }
}

function getRandomNumbers(n, max) {
  const arr = [];
  while (arr.length < n) {
    let r = Math.floor(Math.random() * max);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

export { addAllTreasures };
