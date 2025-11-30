import { Tetris } from "./Tetris";
import { TetrisRenderer } from "./TetrisRenderer";

export class TetrisController {
  private tetris: Tetris;
  private renderer: TetrisRenderer;
  private stepInteval: number;
  private timeoutId: number = 0;
  
  constructor(tetris:Tetris, renderer: TetrisRenderer, stepInteval: number = 1000) {
    this.tetris = tetris;
    this.renderer = renderer;
    this.stepInteval = stepInteval;
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  }
  public startNewGame(): void {
    if (this.timeoutId !== 0) {
      clearTimeout(this.timeoutId);
    }
    this.tetris.startGame();
    this.renderer.render(this.tetris.getTiles());
    this.timeoutId = setTimeout(() => this.gameLoop(), this.stepInteval);
  }
  private gameLoop(): void {
    this.tetris.step();
    this.renderer.render(this.tetris.getTiles());

    if (this.tetris.inProgress()) {
      // Continue the game loop if the game is still in progress
      this. timeoutId = setTimeout(() => this.gameLoop(), this.stepInteval);
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowLeft":
        this.tetris.moveLeft();
        break;
      case "ArrowRight":
        this.tetris.moveRight();
        break;
      case "ArrowDown":
        this.tetris.moveDown();
        break;
      case "ArrowUp":
        this.tetris.rotate();
        break;
      case " ":
        this.tetris.drop();
        break;
      case "n":
        this.startNewGame();
        break;
    }
    this.renderer.render(this.tetris.getTiles());
  }
}