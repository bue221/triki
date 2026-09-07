# Triki — agent instructions

Triki is a two-player tic-tac-toe (tres en raya) React app. The product surface is a **Tally-inspired landing** whose hero is the live game, not marketing photography.

Visual system: [docs/design.md](docs/design.md). Follow that file for color, type, radius, shadow, and layout. Magenta is decorative. Blue is the only primary button fill.

## Quick path

1. `npm start` — Vite at http://localhost:3000
2. `npm test` — Vitest
3. Change game rules in `src/game/logic.js`; change chrome in `src/components/Landing.jsx`; change the full-board play view in `src/components/PlayPage.jsx` (`/animation`)

## Stack

Vite 7 + React 18, CSS custom properties. No CRA/`react-scripts` (that toolchain is unmaintained and is where the audit findings lived). No router, no state library, no Tailwind. Use `package-lock.json` as the lockfile.

## Architecture

| Piece | Path | Job |
|-------|------|-----|
| Tokens | `src/styles/tokens.css` | Design tokens from `docs/design.md` |
| Landing | `src/components/Landing.jsx` | Nav, hero copy, doodles, feature grid; remounts the game to reset |
| Game | `src/components/Game.jsx` | Turn, history, status; hosts Board |
| Board / Square | `src/components/Board.jsx`, `Square.jsx` | 3×3 grid |
| Rules | `src/game/logic.js` | Winner, draw, occupied-cell guards |
| Coach | `src/game/coach.js` | Live tip + common-play copy |
| Play view | `src/components/PlayPage.jsx` | Full-viewport board at `/animation` |

Keep win/draw rules in `logic.js` so they stay testable without rendering. Do not duplicate winning-line tables in components.

## UI rules

- Page canvas is Paper (`#e0e0df`). The board lives inside the white chrome preview card.
- Primary CTA (`#0070d7`) is the only chromatic fill. Header “Nueva partida” is black.
- Magenta (`#f81ce5`) is strokes, doodles, and at most one highlighted feature card per row.
- Inter only. Display headlines use weight 800 and tight tracking.
- Spanish copy in the product UI. Commit messages in English, Conventional Commits.

## Game rules (do not regress)

- X starts. Players alternate. Occupied cells and finished games ignore clicks.
- History jump truncates the future timeline when a new move is played from a past step.
- Status covers next player, winner, and draw. A win paints the three cells green and plays a short confetti burst (skipped if the user prefers reduced motion).

## Errors and UX

- Invalid clicks are no-ops (no thrown errors). Empty history and missing squares should not crash render.
- Squares need an accessible name (which cell, whose mark).
- Keep the landing usable without JavaScript only as a noscript notice; the game itself requires JS.

## Out of scope unless asked

Online multiplayer, accounts, backend, new chromatic palettes, pill-shaped buttons, photography heroes.
