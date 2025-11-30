import { TetrominoTile } from "./TetrominoTile.js";
export class Tetromino {
    tiles;
    x;
    y;
    constructor(tiles, x = 0, y = 0) {
        if (tiles.length === 0) {
            throw new Error("Shape must be a non-empty array of TetrominoTile");
        }
        this.tiles = tiles;
        this.x = x;
        this.y = y;
    }
    releaseTiles() {
        return this.tiles.map(tile => new TetrominoTile(tile.getX() + this.x, tile.getY() + this.y, tile.getColor()));
    }
    stepLeft() {
        return new Tetromino(this.tiles.map(tile => tile.copy()), this.x - 1, this.y);
    }
    stepRight() {
        return new Tetromino(this.tiles.map(tile => tile.copy()), this.x + 1, this.y);
    }
    stepDown() {
        return new Tetromino(this.tiles.map(tile => tile.copy()), this.x, this.y + 1);
    }
    stepRotate() {
        const rotatedTiles = this.tiles.map(tile => tile.rotate());
        return new Tetromino(rotatedTiles, this.x, this.y);
    }
    checkCollision(atX, atY) {
        for (const tile of this.tiles) {
            const tileX = tile.getX() + this.x;
            const tileY = tile.getY() + this.y;
            if (tileX < 0 || tileX >= 10 || tileY < 0 || tileY >= 20) {
                return true;
            }
            if (tileX === atX && tileY === atY) {
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=Tetromino.js.map
