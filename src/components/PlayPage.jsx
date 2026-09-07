import React, { useEffect, useState } from "react";
import Game from "./Game";
import Doodles from "./Doodles";
import { goToLearn, navigate } from "../navigation";

function PlayPage() {
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    document.title = "Jugar Triki — tres en raya local";
    return () => {
      document.title = "Triki — tres en raya local para dos jugadores";
    };
  }, []);

  return (
    <div className="play-page">
      <header className="topbar play-topbar">
        <a
          className="wordmark"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
        >
          Triki
        </a>
        <nav className="topbar-nav" aria-label="Partida">
          <a
            className="nav-link"
            href="/#aprender"
            onClick={(event) => {
              event.preventDefault();
              goToLearn();
            }}
          >
            Jugadas
          </a>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setGameKey((key) => key + 1)}
          >
            Nueva partida
          </button>
        </nav>
      </header>

      <main className="play-stage">
        <Doodles />
        <Game key={gameKey} />
      </main>
    </div>
  );
}

export default PlayPage;
