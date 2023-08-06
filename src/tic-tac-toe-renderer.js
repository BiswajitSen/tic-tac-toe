class TicTacToeRenderer {
  #renderBoard(movesMade) {
    const board = [];
    for (let i = 0; i < 9; i++) {
      if (i % 3 === 0 && i !== 0) {
        board.push('\n');
      }

      const boxContent = movesMade[i] || ' ';
      board.push('|' + boxContent + '|');
    }

    console.log(board.join(''));
  }

  #displayWinner(winner) {
    console.log('Winner :', winner);
  }

  #displayCurrentPlayer(player) {
    console.log(player);
  }

  render({ movesMade, currentPlayer, isOver, winner }) {
    this.#renderBoard(movesMade);
    this.#displayCurrentPlayer(currentPlayer);

    if (winner) {
      this.#displayWinner(winner);
    }

    if (isOver) {
      console.log('Game Over');
    }
  }
}

exports.TicTacToeRenderer = TicTacToeRenderer;
