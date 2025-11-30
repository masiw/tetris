export class TetrisEvent extends Event {
  static readonly GAME_STARTED = "gameStarted";
  static readonly GAME_OVER = "gameOver";
  static readonly LEVEL_UP = "levelUp";
  static readonly SCORE_UPDATED = "scoreUpdated";

  constructor(type: string) {
    super(type);
  }
}