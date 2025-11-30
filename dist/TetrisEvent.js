export class TetrisEvent extends Event {
    static GAME_STARTED = "gameStarted";
    static GAME_OVER = "gameOver";
    static LEVEL_UP = "levelUp";
    static SCORE_UPDATED = "scoreUpdated";
    constructor(type) {
        super(type);
    }
}
//# sourceMappingURL=TetrisEvent.js.map