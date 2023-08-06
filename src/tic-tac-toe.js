class TicTacToe {
  #players;
  #isOver;
  #winner;

  constructor(players) {
    this.#players = players;
    this.#isOver = false;
    this.#winner = undefined;
  }

  get isOver() {
    return this.#isOver;
  }

  consolidateMove(move) {
    if (this.#players.isInvalidMove(move)) return;

    this.#players.recordMove(move);

    if (this.#players.hasWon()) {
      this.#isOver = true;
      this.#winner = this.#players.currentPlayer;
    }

    if (this.#players.totalMoves() === 9) {
      this.#isOver = true;
      return;
    }

    this.#players.changeTurn();
  }

  stats() {
    return {
      movesMade: this.#players.movesMade(),
      currentPlayer: this.#players.currentPlayer,
      isOver: this.#isOver,
      winner: this.#winner,
    };
  }
}

exports.TicTacToe = TicTacToe;
