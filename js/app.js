/* =========================================================================
   app.js — Navigation, rendering, TTS, and quiz logic for K-Start.
   Depends on window.KData (js/data.js).
   ========================================================================= */
(function () {
  "use strict";

  const D = window.KData;

  /* ----------------------------------------------------------------- */
  /* TTS — speak Korean text via the Web Speech API                    */
  /* ----------------------------------------------------------------- */
  const tts = {
    supported:
      typeof window.speechSynthesis !== "undefined" &&
      typeof window.SpeechSynthesisUtterance !== "undefined",
    voice: null,
    pickVoice() {
      if (!this.supported) return;
      const voices = window.speechSynthesis.getVoices() || [];
      this.voice =
        voices.find((v) => v.lang === "ko-KR") ||
        voices.find((v) => v.lang && v.lang.startsWith("ko")) ||
        null;
    }
  };

  function speak(text) {
    if (!tts.supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ko-KR";
    u.rate = 0.9;
    if (tts.voice) u.voice = tts.voice;
    window.speechSynthesis.speak(u);
  }

  // Speak a sequence of texts one after another (for whole dialogues).
  function speakSequence(texts) {
    if (!tts.supported) return;
    window.speechSynthesis.cancel();
    texts.forEach((text) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ko-KR";
      u.rate = 0.9;
      if (tts.voice) u.voice = tts.voice;
      window.speechSynthesis.speak(u);
    });
  }

  if (tts.supported) {
    tts.pickVoice();
    // Voices often load asynchronously.
    window.speechSynthesis.onvoiceschanged = () => tts.pickVoice();
  } else {
    const warn = document.getElementById("audioWarning");
    if (warn) warn.hidden = false;
  }

  /* ----------------------------------------------------------------- */
  /* Small DOM helpers                                                 */
  /* ----------------------------------------------------------------- */
  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // A reusable 🔊 button that speaks the given text.
  function speakButton(text, label) {
    const btn = el("button", "speak-btn", "🔊" + (label ? " " + label : ""));
    btn.type = "button";
    btn.setAttribute("aria-label", "Listen: " + text);
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      speak(text);
    });
    return btn;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ----------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ----------------------------------------------------------------- */
  function initNav() {
    const nav = document.getElementById("mainNav");
    nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".nav-btn");
      if (!btn) return;
      const target = btn.dataset.section;

      nav.querySelectorAll(".nav-btn").forEach((b) =>
        b.classList.toggle("active", b === btn)
      );
      document.querySelectorAll(".page").forEach((p) =>
        p.classList.toggle("active", p.id === target)
      );
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ----------------------------------------------------------------- */
  /* 1. Hangul                                                         */
  /* ----------------------------------------------------------------- */
  function renderHangul() {
    const root = document.getElementById("hangulGroups");
    D.hangul.forEach((group) => {
      const block = el("div", "group-block");
      block.appendChild(el("h3", "group-title", group.group));
      block.appendChild(el("p", "group-note", group.note));

      const grid = el("div", "letter-grid");
      group.letters.forEach((l) => {
        const card = el("button", "letter-card");
        card.type = "button";
        card.innerHTML =
          '<span class="letter-ch">' + l.ch + "</span>" +
          '<span class="letter-rom">' + l.rom + "</span>" +
          '<span class="letter-hint">' + l.hint + "</span>";
        card.setAttribute("aria-label", l.ch + " — " + l.rom);
        card.addEventListener("click", () => {
          speak(l.ch);
          card.classList.add("pop");
          setTimeout(() => card.classList.remove("pop"), 300);
        });
        grid.appendChild(card);
      });

      block.appendChild(grid);
      root.appendChild(block);
    });
  }

  /* ----------------------------------------------------------------- */
  /* 2. Vocabulary (with level filter + flip cards)                    */
  /* ----------------------------------------------------------------- */
  let vocabLevel = "all";

  function renderVocab() {
    const root = document.getElementById("vocabGroups");
    root.innerHTML = "";

    D.vocab.forEach((topic) => {
      const words = topic.words.filter(
        (w) => vocabLevel === "all" || w.level === vocabLevel
      );
      if (!words.length) return;

      const block = el("div", "group-block");
      block.appendChild(el("h3", "group-title", topic.topic));

      const grid = el("div", "vocab-grid");
      words.forEach((w) => {
        const card = el("div", "vocab-card");
        card.tabIndex = 0;
        card.innerHTML =
          '<span class="level-tag ' + w.level.toLowerCase() + '">' + w.level + "</span>" +
          '<div class="vocab-front">' +
          '<span class="vocab-ko">' + w.ko + "</span>" +
          '<span class="vocab-rom">' + w.rom + "</span>" +
          "</div>" +
          '<div class="vocab-back">' + w.en + "</div>" +
          '<span class="flip-hint">tap to flip</span>';

        // Flip on click (but not when the 🔊 button is pressed).
        card.addEventListener("click", () => card.classList.toggle("flipped"));
        card.addEventListener("keypress", (e) => {
          if (e.key === "Enter" || e.key === " ") card.classList.toggle("flipped");
        });

        const speakBtn = speakButton(w.ko);
        card.appendChild(speakBtn);
        grid.appendChild(card);
      });

      block.appendChild(grid);
      root.appendChild(block);
    });
  }

  function initVocabFilter() {
    const bar = document.getElementById("vocabFilter");
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      vocabLevel = chip.dataset.level;
      bar.querySelectorAll(".chip").forEach((c) =>
        c.classList.toggle("active", c === chip)
      );
      renderVocab();
    });
  }

  /* ----------------------------------------------------------------- */
  /* 3. Grammar                                                        */
  /* ----------------------------------------------------------------- */
  function renderGrammar() {
    const root = document.getElementById("grammarList");
    D.grammar.forEach((g) => {
      const card = el("div", "grammar-card");
      card.innerHTML =
        '<div class="grammar-head">' +
        '<h3>' + g.title + "</h3>" +
        '<span class="level-tag ' + g.level.toLowerCase() + '">' + g.level + "</span>" +
        "</div>" +
        '<p class="grammar-explain">' + g.explain + "</p>";

      const exWrap = el("div", "examples");
      g.examples.forEach((ex) => {
        const row = el("div", "example-row");
        row.innerHTML =
          '<div class="example-text">' +
          '<span class="example-ko">' + ex.ko + "</span>" +
          '<span class="example-rom">' + ex.rom + "</span>" +
          '<span class="example-en">' + ex.en + "</span>" +
          "</div>";
        row.appendChild(speakButton(ex.ko));
        exWrap.appendChild(row);
      });

      card.appendChild(exWrap);
      root.appendChild(card);
    });
  }

  /* ----------------------------------------------------------------- */
  /* 4. Quiz                                                           */
  /* ----------------------------------------------------------------- */
  const QUIZ_SIZE = 10;
  let quiz = null;

  // Build a pool of questions from the data, then sample QUIZ_SIZE of them.
  function buildQuestions() {
    const pool = [];

    // (a) Letter → romanization
    D.hangul.forEach((g) =>
      g.letters.forEach((l) => {
        pool.push({
          prompt: 'Which sound does "' + l.ch + '" make?',
          answer: l.rom,
          choicesFrom: "hangul"
        });
      })
    );

    // (b) Korean word → English meaning
    D.vocab.forEach((t) =>
      t.words.forEach((w) => {
        pool.push({
          prompt: 'What does "' + w.ko + '" (' + w.rom + ") mean?",
          answer: w.en,
          choicesFrom: "vocab"
        });
      })
    );

    const allRoms = D.hangul.flatMap((g) => g.letters.map((l) => l.rom));
    const allEns = D.vocab.flatMap((t) => t.words.map((w) => w.en));

    return shuffle(pool)
      .slice(0, QUIZ_SIZE)
      .map((q) => {
        const distractPool = q.choicesFrom === "hangul" ? allRoms : allEns;
        const distractors = shuffle(distractPool.filter((x) => x !== q.answer)).slice(0, 3);
        return { prompt: q.prompt, answer: q.answer, options: shuffle([q.answer, ...distractors]) };
      });
  }

  function startQuiz() {
    quiz = { questions: buildQuestions(), index: 0, score: 0, answered: false };
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const area = document.getElementById("quizArea");
    const q = quiz.questions[quiz.index];

    area.innerHTML = "";
    const head = el("div", "quiz-head");
    head.innerHTML =
      '<span class="quiz-progress">Question ' + (quiz.index + 1) + " / " + quiz.questions.length + "</span>" +
      '<span class="quiz-score">Score: ' + quiz.score + "</span>";
    area.appendChild(head);

    area.appendChild(el("p", "quiz-prompt", q.prompt));

    const opts = el("div", "quiz-options");
    q.options.forEach((opt) => {
      const b = el("button", "quiz-option", opt);
      b.type = "button";
      b.addEventListener("click", () => handleAnswer(b, opt, q.answer, opts));
      opts.appendChild(b);
    });
    area.appendChild(opts);
  }

  function handleAnswer(btn, chosen, correct, optsWrap) {
    if (quiz.answered) return;
    quiz.answered = true;

    optsWrap.querySelectorAll(".quiz-option").forEach((b) => {
      b.disabled = true;
      if (b.textContent === correct) b.classList.add("correct");
    });
    if (chosen !== correct) btn.classList.add("wrong");
    else quiz.score++;

    const next = el("button", "btn-primary quiz-next",
      quiz.index + 1 < quiz.questions.length ? "Next →" : "See results");
    next.type = "button";
    next.addEventListener("click", () => {
      quiz.index++;
      quiz.answered = false;
      if (quiz.index < quiz.questions.length) renderQuizQuestion();
      else renderQuizResults();
    });
    document.getElementById("quizArea").appendChild(next);
  }

  function renderQuizResults() {
    const area = document.getElementById("quizArea");
    const total = quiz.questions.length;
    const pct = Math.round((quiz.score / total) * 100);
    let msg = "Keep practicing! 화이팅!";
    if (pct === 100) msg = "Perfect! 완벽해요! 🎉";
    else if (pct >= 70) msg = "Great job! 잘했어요! 👍";
    else if (pct >= 40) msg = "Good effort! 좋아요!";

    area.innerHTML =
      '<div class="quiz-results">' +
      '<div class="result-score">' + quiz.score + " / " + total + "</div>" +
      '<div class="result-pct">' + pct + "%</div>" +
      '<p class="result-msg">' + msg + "</p>" +
      "</div>";

    const again = el("button", "btn-primary", "Try again ↻");
    again.type = "button";
    again.addEventListener("click", startQuiz);
    area.appendChild(again);
  }

  /* ----------------------------------------------------------------- */
  /* 5. Conversation                                                   */
  /* ----------------------------------------------------------------- */
  function renderConversation() {
    const root = document.getElementById("conversationList");
    D.conversation.forEach((conv) => {
      const card = el("div", "conv-card");
      const head = el("div", "conv-head");
      head.innerHTML =
        "<h3>" + conv.title + "</h3>" +
        '<span class="level-tag ' + conv.level.toLowerCase() + '">' + conv.level + "</span>";

      const playAll = el("button", "btn-primary play-all", "▶ Play all");
      playAll.type = "button";
      playAll.addEventListener("click", () => speakSequence(conv.lines.map((l) => l.ko)));
      head.appendChild(playAll);
      card.appendChild(head);

      conv.lines.forEach((line) => {
        const row = el("div", "conv-line");
        row.innerHTML =
          '<span class="conv-who">' + line.who + "</span>" +
          '<div class="conv-text">' +
          '<span class="conv-ko">' + line.ko + "</span>" +
          '<span class="conv-rom">' + line.rom + "</span>" +
          '<span class="conv-en">' + line.en + "</span>" +
          "</div>";
        row.appendChild(speakButton(line.ko));
        card.appendChild(row);
      });

      root.appendChild(card);
    });
  }

  /* ----------------------------------------------------------------- */
  /* Init                                                              */
  /* ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    renderHangul();
    initVocabFilter();
    renderVocab();
    renderGrammar();
    startQuiz();
    renderConversation();
  });
})();
