import { describeLine, findThreats, getCoachTip } from "./coach";

const empty = () => Array(9).fill(null);

test("empty board tells X to open center or corner", () => {
  const tip = getCoachTip(empty(), { xIsNext: true });
  expect(tip.title).toMatch(/centro o esquina/i);
});

test("O should take center after an X corner", () => {
  const squares = empty();
  squares[0] = "X";
  const tip = getCoachTip(squares, { xIsNext: false });
  expect(tip.title).toMatch(/centro/i);
});

test("spotlights a block when the rival has two in a row", () => {
  const squares = empty();
  squares[0] = "X";
  squares[1] = "X";
  squares[4] = "O";
  expect(findThreats(squares, "X")).toEqual([2]);
  const tip = getCoachTip(squares, { xIsNext: false });
  expect(tip.title).toMatch(/esquina superior derecha/i);
});

test("names the winning line after a win", () => {
  const squares = empty();
  squares[0] = "X";
  squares[4] = "X";
  squares[8] = "X";
  const tip = getCoachTip(squares, {
    winner: "X",
    winningLine: [0, 4, 8],
  });
  expect(describeLine([0, 4, 8])).toBe("la diagonal principal");
  expect(tip.title).toMatch(/diagonal principal/);
});
