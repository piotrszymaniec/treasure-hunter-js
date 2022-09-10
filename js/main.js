import { sfx } from "./modules/sounds";
import { treasures, images } from "./modules/game-items";
import { gameState, clearItemDisplay } from "./modules/game-state";
import { addAllTreasures } from "./modules/generate-treasures";
import { plantTrees } from "./modules/generate-trees";
import {
  NUMBER_OF_TREE_ROWS,
  NUMBER_OF_TREES_IN_ROW,
  TREASURES_IN_GAME,
  TREASURE_GATHERING_EVENT_LISTENER_TYPE,
  PLAYER_WINNING_MESSAGE,
  PLAYER_ENCOURAGING_MESSAGE
} from "./modules/constants";

startGame();

function startGame() {
  clearGameBoard();
  const forest = document.querySelector(".entry");
  plantTrees(NUMBER_OF_TREE_ROWS, NUMBER_OF_TREES_IN_ROW, forest);
  hideTresuresInForest();
}

function clearGameBoard() {
  document.querySelector(".message-for-player").textContent = "";
  document.querySelector(".message-for-player").classList.remove("win");
  document.querySelector(".entry").innerHTML = "";
  clearItemDisplay();
}

function hideTresuresInForest() {
  const treeHtmlNodes = document.querySelectorAll(".tree");
  addAllTreasures(treeHtmlNodes, TREASURES_IN_GAME);
  addListeners(treeHtmlNodes);
}

function addListeners(nodes) {
  nodes.forEach((node) => {
    node.addEventListener(
      TREASURE_GATHERING_EVENT_LISTENER_TYPE,
      searchForTreasures
    );
  });
}

function searchForTreasures({ target }) {
  if (target.textContent === images.leafs) {
    return;
  }
  target.textContent = images.leafs;
  for (const { className, img } of treasures.list) {
    getTreasure(target, className, img);
    checkIfYouHaveWon();
  }
}

function checkIfYouHaveWon() {
  const playerMessage = document.querySelector(".message-for-player");
  if (TREASURES_IN_GAME - gameState.getNumberOfGatheredItems() > 0) {
    playerMessage.textContent = PLAYER_ENCOURAGING_MESSAGE;
  } else {
    playerMessage.textContent = PLAYER_WINNING_MESSAGE;
    playerMessage.classList.add("win");
    setTimeout(() => startGame(), 3000);
  }
}

function getTreasure(target, treasureClassName, img) {
  if (target.classList.contains(treasureClassName)) {
    target.textContent = img;
    if (treasureClassName === "diamond") {
      target.classList.add("diamond-glow");
    } else {
      target.classList.add("glow");
    }
    gameState.addGatheredItem(treasureClassName);
    sfx.gatherTreasure.play();
    target.removeEventListener(
      TREASURE_GATHERING_EVENT_LISTENER_TYPE,
      searchForTreasures
    );
  }
}
