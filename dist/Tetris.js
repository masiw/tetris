import { TetrisDropZone } from "./TetrisDopzone.js";
import { TetrisEvent } from "./TetrisEvent.js";
import { Tetromino } from "./Tetromino.js";
import { TetrominoFactory } from "./TetrominoFactory.js";
export class Tetris extends EventTarget {
    // private level: number = 0;
    // private score: number = 0;
    dropZone = null;
    activeTetromino = null;
    constructor() {
        super();
    }
    startGame() {
        // this.level = 0;
        // this.score = 0;
        this.resetGame();
    }
    resetGame() {
        this.dropZone = new TetrisDropZone([]);
        this.activeTetromino = TetrominoFactory.createRandomTetromino();
    }
    // public getLevel(): number {
    //   return this.level;
    // }
    // public getScore(): number {
    //   return this.score;
    // }
    getTiles() {
        if (this.activeTetromino !== null && this.dropZone !== null) {
            return this.dropZone.getTiles().concat(this.activeTetromino.releaseTiles());
        }
        return [];
    }
    inProgress() {
        return this.activeTetromino !== null;
    }
    stepLeft() {
        if (this.activeTetromino !== null && this.dropZone !== null) {
            const nextTetromino = this.activeTetromino.stepLeft();
            if (this.checkCollision(nextTetromino) === false) {
                this.activeTetromino = nextTetromino;
            }
        }
    }
    stepRight() {
        if (this.activeTetromino !== null && this.dropZone !== null) {
            const nextTetromino = this.activeTetromino.stepRight();
            if (this.checkCollision(nextTetromino) === false) {
                this.activeTetromino = nextTetromino;
            }
        }
    }
    stepDown() {
        if (this.activeTetromino !== null && this.dropZone !== null) {
            const nextTetromino = this.activeTetromino.stepDown();
            if (this.checkCollision(nextTetromino) === false) {
                this.activeTetromino = nextTetromino;
            }
        }
    }
    stepRotate() {
        if (this.activeTetromino !== null && this.dropZone !== null) {
            const nextTetromino = this.activeTetromino.stepRotate();
            if (this.checkCollision(nextTetromino) === false) {
                this.activeTetromino = nextTetromino;
            }
        }
    }
    step() {
        // Game step logic goes here
        if (this.activeTetromino !== null && this.dropZone !== null) {
            // Move active tetromino down
            const nextTetromino = this.activeTetromino.stepDown();
            if (this.checkCollision(nextTetromino)) {
                // Collision detected, lock tetromino in place
                const releasedTiles = this.activeTetromino.releaseTiles();
                const updatedTiles = this.dropZone.getTiles().concat(releasedTiles);
                this.dropZone = new TetrisDropZone(updatedTiles);
                this.activeTetromino = TetrominoFactory.createRandomTetromino();
                if (this.checkCollision(this.activeTetromino)) {
                    // Game over condition
                    this.activeTetromino = null;
                    this.dispatchEvent(new TetrisEvent(TetrisEvent.GAME_OVER));
                }
                return;
            }
            this.activeTetromino = nextTetromino;
        }
    }
    checkCollision(tetromino) {
        if (this.dropZone === null) {
            return false;
        }
        for (const tile of this.dropZone.getTiles()) {
            if (tetromino.checkCollision(tile.getX(), tile.getY())) {
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=Tetris.js.map
