import { TetrominoTile } from "./TetrominoTile.js";
export class TetrisRenderer {
    context;
    tileWidth;
    tileHeight;
    constructor() {
        const canvas = this.getCanvas();
        this.tileWidth = canvas.width / 10;
        this.tileHeight = canvas.height / 20;
        this.context = this.getContext(canvas);
    }
    getCanvas() {
        const canvas = document.getElementById("gameCanvas");
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error("Canvas element not found");
        }
        return canvas;
    }
    getContext(canvas) {
        const context = canvas.getContext("2d");
        if (!context) {
            throw new Error("Failed to get 2D context");
        }
        return context;
    }
    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = "black"; // Set the background color to black
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
    drawTile(tile) {
        this.context.fillStyle = "rgb(" + tile.getColor().getRed() + "," + tile.getColor().getGreen() + "," + tile.getColor().getBlue() + ")";
        this.context.fillRect(tile.getX() * this.tileWidth, tile.getY() * this.tileHeight, this.tileWidth, this.tileHeight);
    }
    render(tiles) {
        this.clear();
        for (const tile of tiles) {
            this.drawTile(tile);
        }
    }
}
//# sourceMappingURL=TetrisRenderer.js.map
