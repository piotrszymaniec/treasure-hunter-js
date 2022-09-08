import {
  DIAMOND_POINTS_MULTIPLIER,
  COIN_BAG_POINTS_MULTIPLIER,
  COIN_GIFT_BOX_POINTS_MULTIPLIER
} from "./constants";

const gameDisplay = {
  refreshDisplay() {
    this.displayItem();
    this.displayPoints();
  },
  displayPoints() {
    const points = gameState.calculatePoints();
    document.querySelector("#points-gathered").textContent = `${points}`;
  },
  displayItem() {
    gameState.itemList.map(
      (i) => (getItemHtmlContainer(i).textContent = setItemDisplay(i))
    );
  },
  clear() {
    gameState.clear();
    this.displayItem();
    this.displayPoints();
  }
};

const gameState = {
  _points: 0,
  itemList: [
    { name: "diamond", multiplier: DIAMOND_POINTS_MULTIPLIER, gathered: 0 },
    { name: "coin-bag", multiplier: COIN_BAG_POINTS_MULTIPLIER, gathered: 0 },
    {
      name: "gift-box",
      multiplier: COIN_GIFT_BOX_POINTS_MULTIPLIER,
      gathered: 0
    }
  ],
  calculatePoints() {
    let sumPoints = 0;
    for (const item of this.itemList) {
      sumPoints += item.gathered * item.multiplier;
    }
    this._points = sumPoints;
    return this._points;
  },
  addGatheredItem(itemName) {
    for (let item of this.itemList) {
      if (itemName === item.name) {
        item.gathered += 1;
        this._points += item.gathered * item.multiplier;
      }
    }
    gameDisplay.refreshDisplay();
  },
  getNumberOfGatheredItems() {
    let itemsNumber = 0;
    for (const { gathered } of this.itemList) {
      itemsNumber += gathered;
    }
    return itemsNumber;
  },
  clear() {
    this._points = 0;
    for (const item of this.itemList) {
      item.gathered = 0;
    }
  }
};

function setItemDisplay({ name, gathered, multiplier }) {
  let itemName = (name[0].toUpperCase() + name.slice(1)).replace("-", " ");
  return `${itemName}: ${gathered} x ${multiplier}`;
}

function getItemHtmlContainer(item) {
  let selector = "";
  if (item.name === "gift-box") {
    selector = `#${item.name}es-display`;
  } else {
    selector = `#${item.name}s-display`;
  }
  return document.querySelector(selector);
}

function clearItemDisplay() {
  gameDisplay.clear();
}

export { gameState, clearItemDisplay };
