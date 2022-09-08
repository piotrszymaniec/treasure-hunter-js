import pickRandomNumber from "./utils";

export const images = {
  leafs: "🍃",
  trees: [
    "🌲",
    "🌳" //not implemented yet
  ]
};

export const treasures = {
  list: [
    {
      className: "coin-bag",
      img: "💰",
      msg: "Whoa! you are rich, but you can always be richer :>"
    },
    { className: "gift-box", img: "🎁", msg: "Happy Birtday!" },
    { className: "diamond", img: "💎", msg: "Oooh... Shiny!" }
  ],
  getRandomTreasure() {
    return this.list[pickRandomNumber(0, this.list.length)];
  }
};

