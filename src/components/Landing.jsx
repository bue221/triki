import React, { useState } from "react";
import Game from "./Game";
import Doodles from "./Doodles";
import LearnSection from "./LearnSection";
import { navigate } from "../navigation";

function FeatureIcon({ children }) {
  return (
    <svg className="feature-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function Landing() {
  const [gameKey, setGameKey] = useState(0);

  const startNewGame = () => {
    setGameKey((key) => key + 1);
  };

  const openPlayView = (event) => {
    event.preventDefault();
    navigate("/animation");
  };

  return (
    <div className="page">
      <header className="topbar">
        <a className="wordmark" href="#inicio">
          Triki
        </a>
        <nav className="topbar-nav" aria-label="Principal">
          <a
            className="nav-link"
            href="/animation"
            onClick={(event) => {
              event.preventDefault();
              navigate("/animation");
            }}
          >
            Juego
          </a>
          <a className="nav-link" href="#aprender">
            Jugadas
          </a>
          <button type="button" className="btn btn-dark" onClick={startNewGame}>
            Nueva partida
          </button>
        </nav>
      </header>

      <main id="inicio" className="shell">
        <section className="hero">
          <Doodles />
          <p className="eyebrow">Tres en raya · dos jugadores</p>
          <h1 className="display">
            El tres en raya más{" "}
            <span className="flourish">simple</span>
          </h1>
          <p className="hero-sub">
            Un tablero en blanco, marcas a mano y un historial para volver atrás.
            Sin cuentas. Sin ruido. Solo X y O.
          </p>
          <a className="btn btn-primary" href="/animation" onClick={openPlayView}>
            Jugar ahora
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <p className="hero-helper">X empieza. Empate si el cuaderno se llena.</p>

          <article className="preview-card" id="juego">
            <div className="preview-chrome">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <h2 className="preview-title">Partida local</h2>
            </div>
            <Game key={gameKey} />
          </article>
        </section>

        <p className="logo-caption">Hecho para jugar en el mismo teclado</p>

        <section className="rules" id="reglas">
          <h2 className="section-heading">Cómo se juega</h2>
          <p className="section-body">
            Tres marcas en línea ganan — fila, columna o diagonal. Si nadie lo logra,
            es empate. El historial a la derecha del tablero te deja saltar a
            cualquier jugada anterior. Debajo del estado verás un tip que cambia
            con la posición.
          </p>
        </section>

        <LearnSection />

        <section className="features" aria-label="Características">
          <article className="feature-card feature-card-highlight">
            <FeatureIcon>
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </FeatureIcon>
            <h3>Gratis, en el navegador</h3>
            <p>
              Abre la página y juega. No hay registro ni envío de datos: la partida
              vive solo en esta pestaña.
            </p>
          </article>
          <article className="feature-card">
            <FeatureIcon>
              <rect x="6" y="8" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 16h12M16 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </FeatureIcon>
            <h3>Historial de jugadas</h3>
            <p>
              Cada movimiento queda anotado. Vuelve al inicio o a una jugada
              concreta y continúa desde ahí.
            </p>
          </article>
          <article className="feature-card">
            <FeatureIcon>
              <path d="M8 24V8h16v16H8z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 16h16M16 8v16" stroke="currentColor" strokeWidth="1.5" />
            </FeatureIcon>
            <h3>Turnos claros</h3>
            <p>
              El estado dice quién sigue, quién ganó o si hay empate. Las casillas
              ocupadas no se pueden sobrescribir.
            </p>
          </article>
          <article className="feature-card">
            <FeatureIcon>
              <path
                d="M8 20c4-8 12-8 16 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="14" r="1.5" fill="currentColor" />
              <circle cx="20" cy="14" r="1.5" fill="currentColor" />
            </FeatureIcon>
            <h3>Cuaderno, no dashboard</h3>
            <p>
              Papel tibio, tarjetas blancas y garabatos en los márgenes. El tablero
              es el producto; el resto se aparta.
            </p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>
          Triki · tres en raya local.{" "}
          <a
            className="inline-link"
            href="/animation"
            onClick={(event) => {
              event.preventDefault();
              navigate("/animation");
            }}
          >
            Ir al tablero grande
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Landing;
