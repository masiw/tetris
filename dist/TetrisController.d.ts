import { Tetris } from "./Tetris.js";
import { TetrisRenderer } from "./TetrisRenderer.js";
export declare class TetrisController {
    private tetris;
    private renderer;
    private stepInteval;
    constructor(tetris: Tetris, renderer: TetrisRenderer, stepInteval?: number);
    startNewGame(): void;
    private gameLoop;
    private handleKeyDown;
}
//# sourceMappingURL=TetrisController.d.ts.map
