import type { Color } from "./Color";
import { TetrominoTile } from "./TetrominoTile";

export class TetrisRenderer {
  private context: CanvasRenderingContext2D;
  private tileWidth: number;
  private tileHeight: number;
  public constructor() {
    const canvas = this.getCanvas();
    this.tileWidth = canvas.width / 10;
    this.tileHeight = canvas.height / 20;

    this.context = this.getContext(canvas);
  }
  
  private getCanvas(): HTMLCanvasElement {
    const canvas = document.getElementById("gameCanvas");
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Canvas element not found");
    }
    return canvas;
  }

  private getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to get 2D context");
    }
    return context;
  }

  private clear(): void {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    this.context.fillStyle = "black"; // Set the background color to black
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  private drawTile(tile: TetrominoTile): void {
    this.context.fillStyle = 'rgb(' + tile.getColor().getRed() + ',' + tile.getColor().getGreen() + ',' + tile.getColor().getBlue() + ')';
    this.context.fillRect(tile.getX() * this.tileWidth, tile.getY() * this.tileHeight, this.tileWidth, this.tileHeight);
  }

  public render(tiles: TetrominoTile[]): void {
    this.clear();
    for (const tile of tiles) {
      this.drawTile(tile);
    }
  }
}