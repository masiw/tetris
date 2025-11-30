
import { Tetris } from "./Tetris";
import { TetrisRenderer } from "./TetrisRenderer";
import { TetrisController } from "./TetrisController";

function main(): void {
    
    const tetris = new Tetris();
    const renderer = new TetrisRenderer();
    const controller = new TetrisController(tetris, renderer, 500);
    
    controller.startNewGame();
}

main();