import { Color } from "./Color.js";
import { Tetromino } from "./Tetromino.js";
import { TetrominoTile } from "./TetrominoTile.js";
export class TetrominoFactory {
    static createITetromino() {
        const tiles = [
            { x: -1, y: 0, color: new Color("cyan") },
            { x: 0, y: 0, color: new Color("cyan") },
            { x: 1, y: 0, color: new Color("cyan") },
            { x: 2, y: 0, color: new Color("cyan") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createOTetromino() {
        const tiles = [
            { x: 0, y: 0, color: new Color("yellow") },
            { x: 1, y: 0, color: new Color("yellow") },
            { x: 0, y: 1, color: new Color("yellow") },
            { x: 1, y: 1, color: new Color("yellow") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createTTetromino() {
        const tiles = [
            { x: -1, y: 0, color: new Color("purple") },
            { x: 0, y: 0, color: new Color("purple") },
            { x: 1, y: 0, color: new Color("purple") },
            { x: 0, y: 1, color: new Color("purple") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createSTetromino() {
        const tiles = [
            { x: 0, y: 0, color: new Color("green") },
            { x: 1, y: 0, color: new Color("green") },
            { x: -1, y: 1, color: new Color("green") },
            { x: 0, y: 1, color: new Color("green") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createZTetromino() {
        const tiles = [
            { x: -1, y: 0, color: new Color("red") },
            { x: 0, y: 0, color: new Color("red") },
            { x: 0, y: 1, color: new Color("red") },
            { x: 1, y: 1, color: new Color("red") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createJTetromino() {
        const tiles = [
            { x: -1, y: 0, color: new Color("blue") },
            { x: -1, y: 1, color: new Color("blue") },
            { x: 0, y: 0, color: new Color("blue") },
            { x: 1, y: 0, color: new Color("blue") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createLTetromino() {
        const tiles = [
            { x: 1, y: 0, color: new Color("orange") },
            { x: -1, y: 0, color: new Color("orange") },
            { x: 0, y: 0, color: new Color("orange") },
            { x: 1, y: 1, color: new Color("orange") },
        ].map(t => new TetrominoTile(5, 0, t.color));
        return new Tetromino(tiles);
    }
    static createRandomTetromino() {
        const tetrominoCreators = [
            TetrominoFactory.createITetromino,
            TetrominoFactory.createOTetromino,
            TetrominoFactory.createTTetromino,
            TetrominoFactory.createSTetromino,
            TetrominoFactory.createZTetromino,
            TetrominoFactory.createJTetromino,
            TetrominoFactory.createLTetromino,
        ];
        const randomIndex = Math.floor(Math.random() * tetrominoCreators.length);
        const creator = tetrominoCreators[randomIndex];
        if (!creator) {
            throw new Error("Tetromino creator is undefined");
        }
        return creator();
    }
}
//# sourceMappingURL=TetrominoFactory.js.map
