export const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function getWinningLine(squares) {
  if (!squares || squares.length !== 9) {
    return null;
  }

  for (let i = 0; i < WIN_LINES.length; i += 1) {
    const [a, b, c] = WIN_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }

  return null;
}

export function calculateWinner(squares) {
  const result = getWinningLine(squares);
  return result ? result.player : null;
}

export function isBoardFull(squares) {
  if (!squares || squares.length !== 9) {
    return false;
  }

  return squares.every((cell) => cell !== null);
}

export function isDraw(squares) {
  return !calculateWinner(squares) && isBoardFull(squares);
}

export function canPlayAt(squares, index, winner) {
  if (winner) {
    return false;
  }

  if (!squares || index < 0 || index > 8) {
    return false;
  }

  return squares[index] == null;
}
