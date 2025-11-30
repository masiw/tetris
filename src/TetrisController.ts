import { Tetris } from "./Tetris";
import { TetrisRenderer } from "./TetrisRenderer";

export class TetrisController {
  private tetris: Tetris;
  private renderer: TetrisRenderer;
  private stepInteval: number;
  
  constructor(tetris:Tetris, renderer: TetrisRenderer, stepInteval: number = 1000) {
    this.tetris = tetris;
    this.renderer = renderer;
    this.stepInteval = stepInteval;
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  }
  public startNewGame(): void {
    this.tetris.startGame();
    this.renderer.render(this.tetris.getTiles());
    setTimeout(() => this.gameLoop(), this.stepInteval);
  }
  private gameLoop(): void {
    this.tetris.step();
    this.renderer.render(this.tetris.getTiles());

    if (this.tetris.inProgress()) {
      // Continue the game loop if the game is still in progress
      setTimeout(() => this.gameLoop(), this.stepInteval);
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
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
      case "ArrowUp":
        this.tetris.stepRotate();
        break;
      case "n":
        this.startNewGame();
        break;
    }
    this.renderer.render(this.tetris.getTiles());
  }
}