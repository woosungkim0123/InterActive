export class Hill {
  constructor(color, speed, total) {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }
  /*
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.point = [];
    // 2를 뺀 이유는 조금 더 넓게 간격을 잡기 위해서
    this.gap = Math.ceil(this.stageWidth / (this.total - 2));

    for (let i = 0; i < this.total; i++) {
      this.point[i] = {
        x: i * this.gap,
        // getY를 통해 랜덤으로
        y: this.getY(),
      };
    }
  }
  */
  // draw 언덕을 캔버스에 그림
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    let cur = this.points[0];
    let prev = cur;
    // 곡선좌표를 양의 좌표를 찾는데 써야해서 dots를 사용
    //let dots = [];

    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    for (let i = 1; i < this.points.length; i++) {
      cur = this.points[i];
      const cx = (prev.x + cur.x) / 2;
      const cy = (prev.y + cur.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
      /*
      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prev.x,
        y2: prev.y,
        x3: cx,
        y3: cy,
      });
      */
      prev = cur;
      prevCx = cx;
      prevCy = cy;
    }
    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(prev.x, prev.y);
    ctx.fill();

    return dots;
  }
  // 언덕의 y값을 랜덤으로 주기위해서
  /*
  getY() {
    const min = this.stageHeight / 8;
    const max = this.stageHeight - min;
    return min + Math.random() * max;
  }
  */
}
