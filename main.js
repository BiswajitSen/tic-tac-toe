const { Player } = require('./src/player');
const { Players } = require('./src/players');
const { TicTacToe } = require('./src/tic-tac-toe');
const { TicTacToeController } = require('./src/tic-tac-toe-controller');
const { TicTacToeInputController } = require('./src/tic-tac-toe-input-controller');
const { TicTacToeRenderer } = require('./src/tic-tac-toe-renderer');

const main = () => {
  const player1 = new Player('Biswa', 'X');
  const player2 = new Player('Jit', 'O');

  const players = new Players(player1, player2);
  const ticTacToe = new TicTacToe(players);
  const ticTacToeInputController = new TicTacToeInputController();
  const ticTacToeRenderer = new TicTacToeRenderer();
  const ticTacToeController = new TicTacToeController(
    ticTacToe,
    ticTacToeInputController,
    ticTacToeRenderer
  );

  ticTacToeController.start();
};

main();
