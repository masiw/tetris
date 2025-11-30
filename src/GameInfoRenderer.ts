import type { Tetris } from "./Tetris";

export class GameInfoRenderer {

  private game: Tetris;

  constructor(game: Tetris) {
    this.game = game;
  }

  private setText(id: string, text: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = text;
    }
  }

  public render(): void {
    this.setText('status', this.game.inProgress() ? 'Running' : 'Game Over!');
    this.setText('level', this.game.getLevel().toString(10));
    this.setText('score', this.game.getScore().toString(10));
  }
}