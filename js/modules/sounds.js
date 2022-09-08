import { Howl } from "howler";

export const sfx = {
  gatherTreasure: new Howl({
    src: ["audio/treasure1.mp3", "audio/old-video-game-win.wav"]
  }),
  //nie udaje mi się odtworzyć dodatkowego dzwięku przy wygranej
  win: new Howl({
    src: ["old-video-game-win.wav"]
  })
};
