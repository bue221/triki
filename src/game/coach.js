import { WIN_LINES } from "./logic";

const CELL_NAMES = [
  "la esquina superior izquierda",
  "el lado de arriba",
  "la esquina superior derecha",
  "el lado izquierdo",
  "el centro",
  "el lado derecho",
  "la esquina inferior izquierda",
  "el lado de abajo",
  "la esquina inferior derecha",
];

const CORNERS = [0, 2, 6, 8];
const SIDES = [1, 3, 5, 7];

export function cellName(index) {
  return CELL_NAMES[index] || `la casilla ${index + 1}`;
}

export function describeLine(line) {
  if (!line || line.length !== 3) {
    return "la línea";
  }

  const key = [...line].sort((a, b) => a - b).join(",");
  const labels = {
    "0,1,2": "la fila de arriba",
    "3,4,5": "la fila del medio",
    "6,7,8": "la fila de abajo",
    "0,3,6": "la columna izquierda",
    "1,4,7": "la columna del medio",
    "2,5,8": "la columna derecha",
    "0,4,8": "la diagonal principal",
    "2,4,6": "la diagonal inversa",
  };

  return labels[key] || "la línea";
}

export function findThreats(squares, player) {
  if (!squares || !player) {
    return [];
  }

  const threats = [];

  WIN_LINES.forEach((line) => {
    const empty = line.filter((index) => squares[index] == null);
    const owned = line.filter((index) => squares[index] === player);
    if (owned.length === 2 && empty.length === 1) {
      threats.push(empty[0]);
    }
  });

  return threats;
}

export function getCoachTip(squares, { xIsNext, winner, draw, winningLine } = {}) {
  if (winner) {
    return {
      title: `${winner} cerró ${describeLine(winningLine)}`,
      body: "Tres en raya es eso: dos marcas y la tercera casilla libre. Revisa el historial para ver en qué jugada se decidió.",
    };
  }

  if (draw) {
    return {
      title: "Empate: el cuaderno se llenó",
      body: "Si ambos bloquean a tiempo, el tres en raya perfecto termina siempre en tablas. Prueba otra apertura.",
    };
  }

  const player = xIsNext ? "X" : "O";
  const rival = xIsNext ? "O" : "X";
  const myWins = findThreats(squares, player);
  const rivalWins = findThreats(squares, rival);

  if (myWins.length > 0) {
    return {
      title: `Puedes ganar ahora en ${cellName(myWins[0])}`,
      body: "Tienes dos en línea. La tercera casilla libre cierra el tres en raya.",
    };
  }

  if (rivalWins.length > 0) {
    return {
      title: `Bloquea ${cellName(rivalWins[0])}`,
      body: `${rival} ya tiene dos en línea. Si no marcas esa casilla, gana en el siguiente turno.`,
    };
  }

  const filled = (squares || []).filter(Boolean).length;

  if (filled === 0) {
    return {
      title: "Apertura: centro o esquina",
      body: "X empieza. El centro toca 4 líneas ganadoras; una esquina toca 3. Un lado (arriba, abajo, izquierda, derecha) es la casilla más débil.",
    };
  }

  if (filled === 1 && squares[4] === "X" && !xIsNext) {
    return {
      title: "O contra el centro",
      body: "X tomó el centro. La respuesta más sólida de O es una esquina, no un lado.",
    };
  }

  if (filled === 1 && CORNERS.includes(squares.indexOf("X")) && !xIsNext) {
    return {
      title: "Respuesta clásica: el centro",
      body: "X empezó en una esquina. Si O marca el centro, controla más líneas y evita muchos tenedores.",
    };
  }

  if (filled === 1 && SIDES.includes(squares.indexOf("X")) && !xIsNext) {
    return {
      title: "X empezó débil",
      body: "Un lado es la peor primera marca. O suele ir al centro y luego a una esquina.",
    };
  }

  if (squares[4] == null) {
    return {
      title: "El centro sigue libre",
      body: "Mientras el centro esté vacío, es la casilla que más partidas decide. Tómalo si no tienes que bloquear.",
    };
  }

  const emptyCorners = CORNERS.filter((index) => squares[index] == null);
  if (emptyCorners.length > 0) {
    return {
      title: "Prefiere esquinas a lados",
      body: "Las esquinas entran en más tres en raya que los lados. Un tenedor (dos amenazas a la vez) casi siempre nace en una esquina.",
    };
  }

  return {
    title: "Mira las dos en línea",
    body: "Antes de inventar ataque, cuenta: si el rival tiene dos juntas, bloquea. Si tú tienes dos, cierra.",
  };
}
