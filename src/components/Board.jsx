import React from "react";
import Square from "./Square";

function Board({ squares, onClick, disabled, winningLine = [] }) {
  return (
    <div
      className={winningLine.length ? "board is-won" : "board"}
      role="grid"
      aria-label="Tablero de tres en raya"
    >
      {squares.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          onClick={() => onClick(index)}
          disabled={disabled || Boolean(value)}
          winning={winningLine.includes(index)}
        />
      ))}
    </div>
  );
}

export default Board;
