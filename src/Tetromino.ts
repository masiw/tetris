import { TetrominoTile } from "./TetrominoTile";

export class Tetromino {
  private tiles: TetrominoTile[];
  private x: number;
  private y: number;

  constructor(tiles: TetrominoTile[], x: number = 0, y: number = 0) {
    if (tiles.length === 0) {
        throw new Error("Shape must be a non-empty array of TetrominoTile");
    }
    this.tiles = tiles;
    this.x = x;
    this.y = y;
  }

  public releaseTiles(): TetrominoTile[] {
    return this.tiles.map(tile => new TetrominoTile(tile.getX() + this.x, tile.getY() + this.y, tile.getColor()));
  }

  public moveLeft(): Tetromino {
    return new Tetromino(this.tiles.map(tile => tile.copy()), this.x - 1, this.y);
  }
  public moveRight(): Tetromino {
    return new Tetromino(this.tiles.map(tile => tile.copy()), this.x + 1, this.y);
  }
  public moveDown(): Tetromino {
    return new Tetromino(this.tiles.map(tile => tile.copy()), this.x, this.y + 1);
  }
  public rotate(): Tetromino 
  {
    const rotatedTiles = this.tiles.map(tile => tile.rotate());
    return new Tetromino(rotatedTiles, this.x, this.y);
  }

  public checkCollision(atX: number, atY: number): boolean {
    for (const tile of this.tiles) {
      const tileX = tile.getX() + this.x;
      const tileY = tile.getY() + this.y;
      // Leave more space at the top to allow for immediate rotations.
      if (tileX < 0 || tileX >= 10 || tileY < -10 || tileY >= 20) {
        return true;
      }
      if (tileX === atX && tileY === atY) {
        return true;
      }
    }
    return false;
  }
}