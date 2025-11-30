import { TetrominoTile } from "./TetrominoTile.js";
export declare class Tetromino {
    private tiles;
    private x;
    private y;
    constructor(tiles: TetrominoTile[], x?: number, y?: number);
    releaseTiles(): TetrominoTile[];
    stepLeft(): Tetromino;
    stepRight(): Tetromino;
    stepDown(): Tetromino;
    stepRotate(): Tetromino;
    checkCollision(atX: number, atY: number): boolean;
}
//# sourceMappingURL=Tetromino.d.ts.map
