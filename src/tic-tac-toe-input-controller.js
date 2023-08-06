class TicTacToeInputController {
  #inputSet = [0, 2, 6, 3, 1, 5, 4, 8];
  #inputs = [
    [0, 2, 6, 3, 1, 5, 4, 8],
    [0, 2, 5, 3, 6, 4, 8, 7, 1],
    [0, 2, 5, 3, 6, 4, 8, 7, 1, 0, 1, 3, 4, 5],
  ];

  #inputId;

  constructor() {
    this.#inputId = 0;
  }

  fetchInput() {
    return this.#inputSet[this.#inputId++];
  }
}

exports.TicTacToeInputController = TicTacToeInputController;
