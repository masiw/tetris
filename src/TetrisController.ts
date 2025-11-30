import type { GameInfoRenderer } from "./GameInfoRenderer";
import type { Tetris } from "./Tetris";
import type { TetrisRenderer } from "./TetrisRenderer";

export class TetrisController {
  private tetris: Tetris;
  private tetrisRenderer: TetrisRenderer;
  private gameInfoRenderer: GameInfoRenderer;
  private stepInteval: number;
  private timeoutId: number = 0;
  
  constructor(
      tetris:Tetris,
      tetrisRenderer: TetrisRenderer,
      gameInfoRenderer:GameInfoRenderer,
      stepInteval: number = 1000
    ) {
    this.tetris = tetris;
    this.tetrisRenderer = tetrisRenderer;
    this.gameInfoRenderer = gameInfoRenderer;
    this.stepInteval = stepInteval;
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));
  }
  public startNewGame(): void {
    if (this.timeoutId !== 0) {
      clearTimeout(this.timeoutId);
    }
    this.tetris.startGame();
    this.tetrisRenderer.render();
    this.timeoutId = setTimeout(() => this.gameLoop(), this.stepInteval);
  }
  private gameLoop(): void {
    this.tetris.step();

    this.gameInfoRenderer.render();

    if (this.tetris.inProgress()) {
      this.tetrisRenderer.render();
      // Continue the game loop if the game is still in progress
      this. timeoutId = setTimeout(() => this.gameLoop(), this.stepInteval / this.tetris.getLevel());
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
    this.tetrisRenderer.render();
  }
}