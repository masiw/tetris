import { Tetris } from "./Tetris.js";
import { TetrisRenderer } from "./TetrisRenderer.js";
export class TetrisController {
    tetris;
    renderer;
    stepInteval;
    constructor(tetris, renderer, stepInteval = 1000) {
        this.tetris = tetris;
        this.renderer = renderer;
        this.stepInteval = stepInteval;
        document.addEventListener("keydown", (event) => this.handleKeyDown(event));
    }
    startNewGame() {
        this.tetris.startGame();
        this.renderer.render(this.tetris.getTiles());
        setTimeout(() => this.gameLoop(), this.stepInteval);
    }
    gameLoop() {
        this.tetris.step();
        this.renderer.render(this.tetris.getTiles());
        if (this.tetris.inProgress()) {
            // Continue the game loop if the game is still in progress
            setTimeout(() => this.gameLoop(), this.stepInteval);
        }
    }
    handleKeyDown(event) {
        switch (event.key) {
            case "ArrowLeft":
                this.tetris.stepLeft();
                break;
            case "ArrowRight":
                this.tetris.stepRight();
                break;
            case "ArrowDown":
                this.tetris.stepDown();
                break;
            case "n":
                this.startNewGame();
                break;
        }
        this.renderer.render(this.tetris.getTiles());
    }
}
//# sourceMappingURL=TetrisController.js.map
