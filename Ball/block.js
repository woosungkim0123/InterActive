export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    // 공추적을 위해
    this.maxX = width + x;
    this.maxY = height + y;
  }
  draw(ctx) {
    const xGap = 80;
    const yGap = 60;

    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
