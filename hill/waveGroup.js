import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 1;
    // 몇개의 포인트를 하나의 wave에 그릴건지
    this.totalPoints = 2;

    this.color = [
      "rgba(0,199,235,0.4)",
      "rgba(0,146,199,0.4)",
      "rgba(0,87,158,0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
