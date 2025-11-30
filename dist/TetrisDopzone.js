import { TetrominoTile } from "./TetrominoTile.js";
export class TetrisDropZone {
    tiles;
    constructor(tiles) {
        this.tiles = this.clearFullLines(tiles);
    }
    clearFullLines(tiles) {
        let filteredTiles = [...tiles];
        for (let y = 0; y < 20; y++) {
            const lineTiles = tiles.filter(tile => tile.getY() === y);
            if (lineTiles.length === 10) {
                // Remove line
                filteredTiles = filteredTiles.filter(tile => tile.getY() !== y);
                // Move down above lines
                for (const tile of tiles) {
                    if (tile.getY() < y) {
                        const index = tiles.indexOf(tile);
                        filteredTiles[index] = new TetrominoTile(tile.getX(), tile.getY() + 1, tile.getColor());
                    }
                }
            }
        }
        return filteredTiles;
    }
    getTiles() {
        return this.tiles;
    }
}
//# sourceMappingURL=TetrisDopzone.js.map
