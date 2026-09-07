import React from "react";

function MiniBoard({ cells, highlight = [] }) {
  return (
    <div className="mini-board" aria-hidden="true">
      {cells.map((value, index) => {
        const classes = ["mini-cell"];
        if (value) {
          classes.push("has-mark");
        }
        if (highlight.includes(index)) {
          classes.push("is-hot");
        }
        return (
          <span key={index} className={classes.join(" ")}>
            {value || ""}
          </span>
        );
      })}
    </div>
  );
}

function LearnSection() {
  return (
    <section className="learn" id="aprender">
      <h2 className="section-heading">Jugadas comunes</h2>
      <p className="section-body">
        El tres en raya se aprende rápido: hay casillas fuertes, una respuesta clásica
        y un hábito (bloquear) que evita casi todas las derrotas. El tip junto al
        tablero cambia con cada marca.
      </p>

      <div className="learn-grid">
        <article className="feature-card feature-card-highlight">
          <MiniBoard cells={["", "", "", "", "X", "", "", "", ""]} highlight={[4]} />
          <h3>El centro primero</h3>
          <p>
            El centro entra en cuatro líneas ganadoras. Si X lo toma, O suele
            responder en una esquina — no en un lado.
          </p>
        </article>

        <article className="feature-card">
          <MiniBoard cells={["X", "", "", "", "O", "", "", "", ""]} highlight={[0, 4]} />
          <h3>Esquina, luego centro</h3>
          <p>
            Si X abre en una esquina, la jugada más común de O es el centro. Así
            controla más tres en raya y corta tenedores.
          </p>
        </article>

        <article className="feature-card">
          <MiniBoard cells={["X", "X", "", "", "O", "", "", "", ""]} highlight={[2]} />
          <h3>Bloquea las dos en línea</h3>
          <p>
            Dos marcas seguidas del rival son una alarma. La casilla vacía de esa
            línea hay que tomarla ya, aunque tu ataque se vea más bonito.
          </p>
        </article>

        <article className="feature-card">
          <MiniBoard cells={["X", "O", "X", "X", "O", "O", "O", "X", "X"]} />
          <h3>El empate es el techo</h3>
          <p>
            Con juego atento, nadie gana: el tablero se llena. Aprender a bloquear
            vale más que buscar combinaciones raras.
          </p>
        </article>
      </div>
    </section>
  );
}

export default LearnSection;
