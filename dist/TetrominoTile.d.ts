import type { Color } from "./Color.js";
export declare class TetrominoTile {
    private x;
    private y;
    private color;
    constructor(x: number, y: number, color: Color);
    getX(): number;
    getY(): number;
    getColor(): Color;
    rotate(): TetrominoTile;
    copy(): TetrominoTile;
}
//# sourceMappingURL=TetrominoTile.d.ts.map
