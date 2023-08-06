class TicTacToeController {
  #game;
  #inputController;
  #renderer;

  constructor(game, inputController, renderer) {
    this.#game = game;
    this.#inputController = inputController;
    this.#renderer = renderer;
  }

  start() {
    this.#renderer.render(this.#game.stats());

    while (!this.#game.isOver) {
      const move = this.#inputController.fetchInput();
      this.#game.consolidateMove(move);
      this.#renderer.render(this.#game.stats());
    }
  }
}

exports.TicTacToeController = TicTacToeController;
