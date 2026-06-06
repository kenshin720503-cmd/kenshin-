# K-Start · Learn Korean 🇰🇷

A bright, friendly web app that helps foreigners learn Korean from scratch —
Hangul, vocabulary, grammar, quizzes, and conversation practice, all with
audio pronunciation. No installation, no build step.

## Features

| Section | What you get |
|---|---|
| **Hangul (한글)** | All basic consonants, vowels, double consonants, and compound vowels as tappable cards with romanization + pronunciation hints. Tap to hear the sound. |
| **Vocabulary (단어)** | Topic-based word lists (Greetings, Numbers, Food, Family, Travel, Time, Colors, Feelings) tagged by level. Filter by level, tap 🔊 to listen, tap a card to flip and reveal the English meaning. |
| **Grammar (문법)** | Essential sentence patterns (particles, to-be, negation, past tense, connectives, "want to", honorifics) with example sentences you can listen to. |
| **Quiz (퀴즈)** | A 10-question multiple-choice round mixing letters, words, and meanings, with instant feedback, live score, and a results summary. |
| **Conversation (회화)** | Real-life dialogues (café, shopping, directions, self-intro). Play a single line or the whole conversation. |

## Pronunciation audio

Audio uses the browser's built-in **Web Speech API** (Korean `ko-KR` voice) —
free and offline-capable on supported browsers. If your browser doesn't
support it, a notice appears and the rest of the app works normally.

> For the best audio experience use **Chrome, Edge, or Safari** with Korean
> voices installed (most desktop systems include one by default).

## How to run

It's a static site — just open it:

```bash
# Option 1: open the file directly
open index.html        # macOS
xdg-open index.html    # Linux

# Option 2: serve locally (recommended; needed for some browsers' audio)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
index.html        # Single page with section navigation
css/styles.css    # Pastel theme, rounded cards, responsive layout
js/data.js        # All learning content (letters, words, grammar, dialogues)
js/app.js         # Navigation, rendering, TTS, and quiz logic
```

## Adding content

All learning material lives in `js/data.js` as plain JavaScript objects.
To add a word, grammar point, or dialogue line, edit the relevant array —
the page re-renders from the data automatically, no markup changes needed.

---

Made with ♥ for Korean learners · **화이팅!** (You can do it!)
