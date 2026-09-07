import React, { useEffect, useState } from "react";
import Board from "./Board";
import ConfettiBurst from "./ConfettiBurst";
import CoachTip from "./CoachTip";
import { canPlayAt, getWinningLine, isDraw } from "../game/logic";
import { getCoachTip } from "../game/coach";

const emptyBoard = () => Array(9).fill(null);

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([{ squares: emptyBoard() }]);
  const [celebrate, setCelebrate] = useState(false);

  const current = history[stepNumber];
  const winning = getWinningLine(current.squares);
  const winner = winning ? winning.player : null;
  const winningLine = winning ? winning.line : [];
  const draw = isDraw(current.squares);
  const tip = getCoachTip(current.squares, {
    xIsNext,
    winner,
    draw,
    winningLine,
  });

  useEffect(() => {
    if (!winner) {
      setCelebrate(false);
      return undefined;
    }

    const motionQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    if (motionQuery && motionQuery.matches) {
      return undefined;
    }

    setCelebrate(true);
    const timer = window.setTimeout(() => setCelebrate(false), 3200);
    return () => window.clearTimeout(timer);
  }, [winner, stepNumber]);

  const handleClick = (index) => {
    const timeline = history.slice(0, stepNumber + 1);
    const latest = timeline[timeline.length - 1];
    const squares = latest.squares.slice();

    if (!canPlayAt(squares, index, winner)) {
      return;
    }

    squares[index] = xIsNext ? "X" : "O";
    setHistory(timeline.concat([{ squares }]));
    setStepNumber(timeline.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (move) => {
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  };

  let status;
  if (winner) {
    status = `Gana ${winner}`;
  } else if (draw) {
    status = "Empate";
  } else {
    status = `Siguiente: ${xIsNext ? "X" : "O"}`;
  }

  const moves = history.map((step, move) => {
    const description = move === 0 ? "Inicio" : `Jugada ${move}`;
    const isCurrent = move === stepNumber;

    return (
      <li key={move}>
        <button
          type="button"
          className={isCurrent ? "history-btn is-current" : "history-btn"}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={winner ? "game is-won" : "game"}>
      <ConfettiBurst active={celebrate} />
      <div className="game-board">
        <p className={winner ? "game-status is-win" : "game-status"} aria-live="polite">
          {status}
        </p>
        <CoachTip tip={tip} />
        <Board
          squares={current.squares}
          onClick={handleClick}
          disabled={Boolean(winner || draw)}
          winningLine={winningLine}
        />
      </div>
      <div className="game-info">
        <p className="game-info-label">Historial</p>
        <ol className="history-list">{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
