import { TetrisDropZone } from "./TetrisDopzone";
import { TetrisEvent } from "./TetrisEvent";
import { Tetromino } from "./Tetromino";
import { TetrominoFactory } from "./TetrominoFactory";
import type { TetrominoTile } from "./TetrominoTile";

export class Tetris extends EventTarget {
  private level: number = 1;
  private score: number = 0;
  private dropZone: TetrisDropZone | null = null;
  private activeTetromino: Tetromino | null = null;

  constructor() {
    super();

  }

  public startGame(): void {
    this.level = 1;
    this.score = 0;
    this.resetGame();
  }

  resetGame(): void {
    this.dropZone = new TetrisDropZone([]);
    this.activeTetromino = TetrominoFactory.createRandomTetromino();
  }
  
  public getLevel(): number {
    return this.level;
  }

  public getScore(): number {
    return this.score;
  }

  public getTiles(): TetrominoTile[] {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      return this.dropZone.getTiles().concat(this.activeTetromino.releaseTiles());
    }
    return [];
  }

  public inProgress(): boolean {
    return this.activeTetromino !== null;
  }
  
  public moveLeft(): void {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      const nextTetromino = this.activeTetromino.moveLeft();
      if (this.checkCollision(nextTetromino) === false) {
        this.activeTetromino = nextTetromino;
      }
    }
  }
  public moveRight(): void {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      const nextTetromino = this.activeTetromino.moveRight();
      if (this.checkCollision(nextTetromino) === false) {
        this.activeTetromino = nextTetromino;
      }
    }
  }
  public moveDown(): void {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      const nextTetromino = this.activeTetromino.moveDown();
      if (this.checkCollision(nextTetromino) === false) {
        this.activeTetromino = nextTetromino;
      }
    }
  }
  
  public rotate(): void {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      const nextTetromino = this.activeTetromino.rotate();
      if (this.checkCollision(nextTetromino) === false) {
        this.activeTetromino = nextTetromino;
      }
    }
  }

  public drop():void {
    if (this.activeTetromino !== null && this.dropZone !== null) {
      const nextTetromino = this.activeTetromino.moveDown();
      if (this.checkCollision(nextTetromino) == false) {
        this.activeTetromino = nextTetromino;
        this.drop();
      }
    }
  }

  public step(): void {
    // Game step logic goes here
    if (this.activeTetromino !== null && this.dropZone !== null) {
      // Move active tetromino down
      const nextTetromino = this.activeTetromino.moveDown();
      if (this.checkCollision(nextTetromino)) {
        // Collision detected, lock tetromino in place
        const releasedTiles = this.activeTetromino.releaseTiles();
        const updatedTiles = this.dropZone.getTiles().concat(releasedTiles);
        this.dropZone = new TetrisDropZone(updatedTiles);
        this.updateScore(this.dropZone.getClearedLines());
        this.activeTetromino = TetrominoFactory.createRandomTetromino();
        if (this.checkCollision(this.activeTetromino)) {
          // Game over condition
          this.activeTetromino = null;
        }
        return;
      }
      this.activeTetromino = nextTetromino;
    }
  }

  private checkCollision(tetromino: Tetromino): boolean {
    if (this.dropZone === null) {
      return false;
    }
    for (const tile of this.dropZone.getTiles()) {
      if (tetromino.checkCollision(tile.getX(), tile.getY())) {
        return true;
      }
    }
    return tetromino.checkCollision(-1, -1); // Check boundaries
  }

  private updateScore(clearedLines: number) {
    this.score += clearedLines * clearedLines * 10 + 1;
    this.level = Math.ceil(this.score / 500);  // increase level at every score increase of 500
  }
}