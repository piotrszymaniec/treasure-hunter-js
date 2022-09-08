import { Howl } from "howler";

export const sfx = {
  gatherTreasure: new Howl({
    src: ["audio/treasure1.mp3", "audio/old-video-game-win.wav"]
  }),
  win: new Howl({
    src: ["old-video-game-win.wav"]
  })
};
