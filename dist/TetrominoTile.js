export class TetrominoTile {
    x;
    y;
    color;
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getColor() {
        return this.color;
    }
    rotate() {
        return new TetrominoTile(-this.y, this.x, this.color);
    }
    copy() {
        return new TetrominoTile(this.x, this.y, this.color);
    }
}
//# sourceMappingURL=TetrominoTile.js.map