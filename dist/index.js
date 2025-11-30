import { Tetris } from "./Tetris.js";
import { TetrisRenderer } from "./TetrisRenderer.js";
import { TetrisController } from "./TetrisController.js";
function main() {
    const tetris = new Tetris();
    const renderer = new TetrisRenderer();
    const controller = new TetrisController(tetris, renderer, 500);
    controller.startNewGame();
}
main();
//# sourceMappingURL=index.js.map
