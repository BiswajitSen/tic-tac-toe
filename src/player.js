class Player {
  #name;
  #symbol;
  #moves;

  constructor(name, symbol) {
    this.#name = name;
    this.#symbol = symbol;
    this.#moves = new Set();
  }

  get name() {
    return this.#name;
  }

  get symbol() {
    return this.#symbol;
  }

  recordMove(move) {
    this.#moves.add(move);
  }

  movesMade() {
    return [...this.#moves].map((move) => [move, this.#symbol]);
  }

  totalMoves() {
    return this.#moves.size;
  }
}

exports.Player = Player;
