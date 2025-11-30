
import { Tetris } from "./Tetris";
import { TetrisRenderer } from "./TetrisRenderer";
import { GameInfoRenderer } from "./GameInfoRenderer";
import { TetrisController } from "./TetrisController";

function main(): void {
    
    const tetris = new Tetris();
    const tetrisRenderer = new TetrisRenderer(tetris);
    const gameInfoRenderer = new GameInfoRenderer(tetris);
    const controller = new TetrisController(tetris, tetrisRenderer, gameInfoRenderer, 1000);
    
    controller.startNewGame();
}

main();