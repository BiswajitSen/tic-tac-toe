class Players {
  #players;
  #currentPlayerId;
  #currentPlayer;

  constructor(player1, player2) {
    this.#players = [player1, player2];
    this.#currentPlayerId = 0;
    this.#currentPlayer = player1;
  }

  get currentPlayerId() {
    return this.#currentPlayerId;
  }

  get currentPlayer() {
    return this.#currentPlayer.name;
  }

  changeTurn() {
    this.#currentPlayerId = (this.#currentPlayerId + 1) % this.#players.length;
    this.#currentPlayer = this.#players[this.#currentPlayerId];
  }

  movesMade() {
    return Object.fromEntries(this.#players.flatMap((player) => player.movesMade()));
  }

  isInvalidMove(move) {
    return move in this.movesMade();
  }

  recordMove(move) {
    this.#currentPlayer.recordMove(move);
  }

  totalMoves() {
    return this.#players.reduce(
      (totalMoves, player) => totalMoves + player.totalMoves(),
      0
    );
  }

  hasWon() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const playerMoves = Object.fromEntries(this.#currentPlayer.movesMade());

    return winningCombinations.some((combination) =>
      combination.every((move) => move in playerMoves)
    );
  }
}

exports.Players = Players;
