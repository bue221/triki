import React, { useMemo } from "react";

const COLORS = ["#1f8a4c", "#f81ce5", "#0070d7", "#37352f", "#f4d35e"];

function makePieces(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 17 + 11) % 100}%`,
    delay: `${(index % 12) * 0.08}s`,
    duration: `${2.1 + (index % 7) * 0.18}s`,
    rotate: `${(index * 47) % 360}deg`,
    color: COLORS[index % COLORS.length],
    width: 8 + (index % 6),
    height: 11 + (index % 8),
  }));
}

function ConfettiBurst({ active }) {
  const pieces = useMemo(() => makePieces(56), []);

  if (!active) {
    return null;
  }

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            background: piece.color,
            width: piece.width,
            height: piece.height,
            transform: `rotate(${piece.rotate})`,
          }}
        />
      ))}
    </div>
  );
}

export default ConfettiBurst;
