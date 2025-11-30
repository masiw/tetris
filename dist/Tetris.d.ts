import type { TetrominoTile } from "./TetrominoTile.js";
export declare class Tetris extends EventTarget {
    private dropZone;
    private activeTetromino;
    constructor();
    startGame(): void;
    resetGame(): void;
    getTiles(): TetrominoTile[];
    inProgress(): boolean;
    stepLeft(): void;
    stepRight(): void;
    stepDown(): void;
    stepRotate(): void;
    step(): void;
    private checkCollision;
}
//# sourceMappingURL=Tetris.d.ts.map
