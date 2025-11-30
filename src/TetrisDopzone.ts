import type { Tetromino } from "./Tetromino";
import { TetrominoTile } from "./TetrominoTile";

export class TetrisDropZone {
  private tiles: TetrominoTile[];

  constructor(tiles: TetrominoTile[]) {
    this.tiles = this.clearFullLines(tiles);
  }

  private clearFullLines(tiles: TetrominoTile[]): TetrominoTile[] {
    let filteredTiles = [...tiles];
    for (let y = 0; y < 20; y++) { 
      const lineTiles = tiles.filter(tile => tile.getY() === y);
      if (lineTiles.length === 10) {
        // Remove line
        filteredTiles = filteredTiles.filter(tile => tile.getY() !== y);
        // Move down above lines
        for (const tile of filteredTiles) {
          if (tile.getY() < y) {
            const index = filteredTiles.indexOf(tile);
            filteredTiles[index] = new TetrominoTile(tile.getX(), tile.getY() + 1, tile.getColor());
          }
        }
      }
    }
    return filteredTiles;
  }

  public getTiles(): TetrominoTile[] {
    return this.tiles;
  }
}