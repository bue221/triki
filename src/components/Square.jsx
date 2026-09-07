import React from "react";

function Square({ value, onClick, disabled, index, winning }) {
  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;
  const label = value
    ? `Casilla ${row}, ${col}: ${value}${winning ? ", línea ganadora" : ""}`
    : `Casilla ${row}, ${col}: vacía`;

  const classNames = ["square"];
  if (value) {
    classNames.push(`square-${value.toLowerCase()}`);
  }
  if (winning) {
    classNames.push("square-win");
  }

  return (
    <button
      type="button"
      className={classNames.join(" ")}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {value ? (
        <span className="square-mark" key={`${index}-${value}`}>
          {value}
        </span>
      ) : null}
    </button>
  );
}

export default Square;
