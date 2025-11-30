import type { Color } from "./Color";

export class TetrominoTile {
  private x: number;
  private y: number;
  private color: Color;

  constructor(x: number, y: number, color: Color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  public getX(): number {
    return this.x;
  }
  public getY(): number {
    return this.y;
  }
  public getColor(): Color {
    return this.color;
  }

  public rotate(): TetrominoTile {
    return new TetrominoTile(-this.y, this.x, this.color);
  }

  public copy(): TetrominoTile {
    return new TetrominoTile(this.x, this.y, this.color);
  }
}