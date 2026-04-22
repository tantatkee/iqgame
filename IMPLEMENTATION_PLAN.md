# IQGame — Brain Training Puzzle Game

A fun, multi-subject puzzle game that helps players get smarter across 6 core subjects. Built as a polished web app using **Vite + React**.

---

## Game Concept

Players pick a **subject**, then work through a series of progressively harder **puzzles**. Each puzzle awards XP and stars. A session ends after 10 questions, with a summary showing score, accuracy, and earned stars.

---

## Subjects & Puzzle Types

| Subject | Puzzle Type | Example |
|---|---|---|
| 🔢 **Math** | Arithmetic / Algebra | "Solve: 3x + 7 = 22" |
| 🔬 **Science** | Multiple choice trivia | "What is the atomic number of Carbon?" |
| 🌍 **History** | Timeline ordering / MCQ | "Who was the first US President?" |
| 🗺️ **Geography** | Map-based / MCQ | "Which country has the most coastline?" |
| 📖 **Language** | Word puzzles / Vocabulary | "Unscramble: LPUZER → ?" |
| 🧩 **Logic** | Pattern / sequence puzzles | "What comes next: 2, 6, 18, 54, ?" |

---

## Feature Set

### Core
- **Subject Selection Screen** — 6 animated subject cards on Home
- **Puzzle Engine** — renders puzzle by type (MCQ, fill-in, sequence, unscramble)
- **Timer per question** — 30-second countdown, penalizes slow answers
- **XP/Score System** — base XP + speed bonus
- **Results Screen** — accuracy %, XP earned, stars (⭐⭐⭐), replay/back buttons

### UX
- Smooth animated transitions between screens
- Animated correct/wrong feedback
- Sound cues (correct ding, wrong buzz, timer tick)
- Streak counter (🔥 3-in-a-row bonus)
- Difficulty levels: Easy / Medium / Hard (selectable per session)

---

## Tech Stack

- **Framework**: Vite + React
- **Styling**: Vanilla CSS with CSS variables (dark-mode, premium)
- **Fonts**: Google Fonts — `Outfit` (headings), `Inter` (body)
- **Sounds**: Web Audio API (programmatic, no external files)
- **State**: React `useState` / `useReducer` (no external state library)
- **Routing**: React state machine (no React Router needed for this scale)

---

## Proposed File Structure

```
iqgame/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx                  # Top-level state machine (screen routing)
│   ├── index.css                # Design system, CSS variables, animations
│   ├── data/
│   │   ├── math.js              # Math puzzle bank
│   │   ├── science.js           # Science Q&A bank
│   │   ├── history.js           # History Q&A bank
│   │   ├── geography.js         # Geography Q&A bank
│   │   ├── language.js          # Word puzzles bank
│   │   └── logic.js             # Logic/pattern puzzles bank
│   ├── components/
│   │   ├── Home.jsx             # Subject selector screen
│   │   ├── DifficultyPicker.jsx # Easy/Medium/Hard selector
│   │   ├── Game.jsx             # Main game loop
│   │   ├── PuzzleRenderer.jsx   # Renders puzzle by type
│   │   ├── Timer.jsx            # Countdown ring
│   │   ├── ScoreBar.jsx         # XP / streak display
│   │   └── Results.jsx          # End-of-session summary
│   └── utils/
│       ├── sounds.js            # Web Audio API sound effects
│       └── scoring.js           # XP calculation logic
```

---

## Proposed Changes

### [NEW] Project scaffold
- `npx create-vite@latest ./ --template react` in `/home/tktan/src/iqgame`

### [NEW] Data Banks (`src/data/*.js`)
- ~15 questions per subject per difficulty → ~270 total questions
- Math puzzles include programmatic equation generation

### [NEW] Components
- `Home.jsx` — subject cards with hover animations
- `Game.jsx` — drives question loop, manages timer, score, streak
- `PuzzleRenderer.jsx` — polymorphic renderer for all puzzle types
- `Timer.jsx` — animated SVG countdown ring
- `Results.jsx` — animated results with star rating

### [NEW] Design System (`index.css`)
- Deep navy/slate dark mode base
- Per-subject accent colors (each subject gets its own gradient)
- CSS keyframe animations for card entrance, answer feedback, transitions

---

## Open Questions

> [!IMPORTANT]
> **Platform target**: Should this be a web-only app, or do you also want a mobile-friendly layout (like DigitMath was built for Android)?

> [!NOTE]
> **Multiplayer?** Should players be able to compete head-to-head (like DigitMath's multi-player mode), or is this a single-player solo experience?

> [!NOTE]
> **Persistence**: Should high scores / XP be saved locally (localStorage) between sessions?

---

## Verification Plan

1. Run `npm run dev`, confirm all 6 subjects load
2. Play through 10-question sessions for each subject
3. Verify correct/wrong feedback, timer, XP, and results screen
4. Test on mobile viewport (375px width)
