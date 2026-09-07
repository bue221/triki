# Design system — Triki

Triki uses a **notebook-on-warm-paper** visual system. The page canvas is Paper. White cards carry the product. Magenta is illustration only. Blue is the only conversion fill.

Agents and UI work should follow this file, not invent a second palette.

## Quick path

1. Read tokens below before adding UI.
2. Put the live board in a white chrome preview card on Paper.
3. Use blue only on the primary play CTA. Use magenta only on doodles, icon strokes, and one highlight ring.

## Surfaces

| Level | Token | Value | Use |
|-------|-------|-------|-----|
| 0 | `--color-paper` | `#e0e0df` | Full-bleed page canvas |
| 1 | `--color-white` | `#ffffff` | Cards, board, inputs |
| 2 | `--color-mist` | `#f3f3f3` | Hover washes, secondary panels |

## Color discipline

| Role | Token | Value | Rule |
|------|-------|-------|------|
| Ink | `--color-ink` | `#37352f` | Headings and body text |
| Graphite | `--color-graphite` | `#898884` | Helper copy |
| Ash | `--color-ash` | `#777672` | Default borders |
| Charcoal | `--color-charcoal` | `#45433e` | Inline links |
| Magenta | `--color-tally-magenta` | `#f81ce5` | Line art, icons, highlight ring — never a button fill |
| Action blue | `--color-action-blue` | `#0070d7` | Primary CTA fill only |
| Black | `--color-black` | `#000000` | Dark header button only — not body text |

Purple-to-pink (`--gradient-purple-to-pink`) is for short underline flourishes under a display keyword.

## Type

Inter only. Tracking about `-0.031em` at every size.

| Role | Size | Weight | Token |
|------|------|--------|-------|
| Caption | 13px | 500 | `--text-caption` |
| Body | 16px | 400–500 | `--text-body` |
| Body large | 18px | 400 | `--text-body-lg` |
| Subheading | 22px | 600–700 | `--text-subheading` |
| Heading | 30px | 700 | `--text-heading` |
| Heading large | 36px | 700 | `--text-heading-lg` |
| Display | 64px | 800 | `--text-display` |

## Shape and space

- Base unit: 8px. Comfortable density. Page max-width: 1200px. Section gap: 64px. Card padding: 24px.
- Radius 7px: buttons, inputs, tags. Radius 10px: cards. Never pill buttons.
- Preview card shadow: `--shadow-subtle` (warm four-stack). Feature cards: `--shadow-md`. Highlighted card: `--shadow-subtle-2` (2px magenta ring + glow).

## Landing layout

Centered stack on Paper:

1. Minimal nav (wordmark left, text links + black button right). Not sticky.
2. 64px display headline, 18px subhead, one blue CTA, helper line.
3. **The game is the hero visual** — a chrome-windowed white card (macOS dots + inline title), not a screenshot.
4. Optional logo/caption row, then left-aligned 2-up feature cards. One highlighted card per row.

Body copy in feature sections stays left-aligned. Doodles float in the margins as 1.5–2px stroke line art (Ink for faces/arrows, Magenta for stars/confetti). They are ornaments, not banners.

## Components

| Component | Spec |
|-----------|------|
| Primary CTA | Blue fill, white text, Inter 15px/500, 7px radius, 6px 14px padding, optional right arrow |
| Dark header button | Black fill, same type and padding as the CTA |
| Preview card | White, 10px radius, `--shadow-subtle`, window chrome |
| Feature card | White, 10px, 24px padding, `--shadow-md`, magenta 1.5px icon |
| Highlighted card | Same + magenta ring; heading in magenta |
| Inline link | Charcoal + 1.5px underline |
| Square | White, Ash border, Ink marks, 7px radius |

## Do / don't

- Do keep magenta and blue in separate jobs (expression vs action).
- Do leave dead space for doodles; keep them off-grid.
- Don't use magenta as a button, link, or large fill.
- Don't add extra chromatic colors.
- Don't use pure black for body text.
- Don't round cards past 10px.

## Tokens in code

CSS custom properties live in `src/styles/tokens.css`. Landing and game styles consume those tokens; do not hardcode a parallel palette.
