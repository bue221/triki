import { calculateWinner, canPlayAt, getWinningLine, isDraw } from "./logic";

const empty = () => Array(9).fill(null);

test("detects a row win for X", () => {
  const squares = empty();
  squares[0] = "X";
  squares[1] = "X";
  squares[2] = "X";
  expect(calculateWinner(squares)).toBe("X");
  expect(getWinningLine(squares)).toEqual({ player: "X", line: [0, 1, 2] });
});

test("detects a draw when the board is full with no winner", () => {
  const squares = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
  expect(isDraw(squares)).toBe(true);
  expect(calculateWinner(squares)).toBeNull();
});

test("blocks moves on occupied cells and after a win", () => {
  const squares = empty();
  squares[0] = "X";
  expect(canPlayAt(squares, 0, null)).toBe(false);
  expect(canPlayAt(squares, 1, null)).toBe(true);
  expect(canPlayAt(squares, 1, "X")).toBe(false);
});
