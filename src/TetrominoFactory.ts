import { Color } from "./Color";
import { Tetromino } from "./Tetromino";
import { TetrominoTile } from "./TetrominoTile";

export class TetrominoFactory {
  private static createITetromino(): Tetromino {
    const color = Color.GREEN;
    const tiles = [
      { x: -1, y: 0, color: new Color(color) },
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 0, color: new Color(color) },
      { x: 2, y: 0, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createOTetromino(): Tetromino {
    const color = Color.CYAN;
    const tiles = [
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 0, color: new Color(color) },
      { x: 0, y: 1, color: new Color(color) },
      { x: 1, y: 1, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createTTetromino(): Tetromino {
    const color = Color.PURPLE;
    const tiles = [
      { x: -1, y: 0, color: new Color(color) },
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 0, color: new Color(color) },
      { x: 0, y: 1, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createSTetromino(): Tetromino {
    const color = Color.ORANGE;
    const tiles = [
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 0, color: new Color(color) },
      { x: -1, y: 1, color: new Color(color) },
      { x: 0, y: 1, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createZTetromino(): Tetromino {
    const color = Color.YELLOW;
    const tiles = [
      { x: -1, y: 0, color: new Color(color) },
      { x: 0, y: 0, color: new Color(color) },
      { x: 0, y: 1, color: new Color(color) },
      { x: 1, y: 1, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createJTetromino(): Tetromino {
    const color = Color.BLUE;
    const tiles = [
      { x: -1, y: 0, color: new Color(color) },
      { x: -1, y: 1, color: new Color(color) },
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 0, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }
  private static createLTetromino(): Tetromino {
    const color = Color.RED;
    const tiles = [
      { x: 1, y: 0, color: new Color(color) },
      { x: -1, y: 0, color: new Color(color) },
      { x: 0, y: 0, color: new Color(color) },
      { x: 1, y: 1, color: new Color(color) },
    ].map(t => new TetrominoTile(t.x, t.y, t.color));
    return new Tetromino(tiles, 5, 0);
  }

  public static createRandomTetromino(): Tetromino {
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