/**
 * ai-tutor.js — Vasco AI Tutor
 * Smart rule-based tutor — works offline, no API key needed.
 * Reads window.VASCO_LESSON and window.VASCO_COURSE for context.
 */

(function () {
  'use strict';

  /* ── State ──────────────────────────────────────────────── */
  let panelOpen = false;
  let messageCount = 0;

  /* ── Quick prompts ──────────────────────────────────────── */
  const QUICK_PROMPTS = [
    'Can you explain this again?',
    'Give me another example.',
    'How do I complete the task?',
    'Why is this important?',
  ];

  /* ═══════════════════════════════════════════════════════════
     SMART RESPONSE ENGINE
  ═══════════════════════════════════════════════════════════ */
  function generateResponse(userMessage) {
    const msg     = userMessage.toLowerCase().trim();
    const lesson  = window.VASCO_LESSON || {};
    const course  = window.VASCO_COURSE  || {};

    const title       = lesson.title       || 'this lesson';
    const explanation = lesson.explanation || '';
    const example     = lesson.example     || '';
    const task        = lesson.task        || '';
    const courseName  = course.title       || 'this course';

    /* ── Greetings ── */
    if (matches(msg, ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
      return `Hello! I am Vasco, your AI tutor. I am here to help you understand "${title}". What would you like to know?`;
    }

    /* ── Explain again ── */
    if (matches(msg, ['explain', 'explain again', 'dont understand', "don't understand", 'confused', 'what does this mean', 'what is this', 'tell me more', 'elaborate'])) {
      return `Let me explain "${title}" in a simpler way.\n\n${simplify(explanation)}\n\nThe key point to remember is: ${getKeyPoint(explanation)}.\n\nDoes that make more sense now?`;
    }

    /* ── Example request ── */
    if (matches(msg, ['example', 'another example', 'show me', 'give example', 'real life', 'real world'])) {
      return `Here is a real-life example for "${title}":\n\n${example}\n\nCan you think of a similar example from your own life or community?`;
    }

    /* ── Task help ── */
    if (matches(msg, ['task', 'how do i', 'what should i do', 'complete', 'assignment', 'try this', 'exercise', 'help with task'])) {
      return `Here is your task for this lesson:\n\n"${task}"\n\nHere is how to approach it:\n1. Read the explanation again carefully.\n2. Look at the example for guidance.\n3. Apply the same idea to your own situation.\n4. Write your answer in your own words.\n\nTake your time — there is no rush. Would you like a hint?`;
    }

    /* ── Why important ── */
    if (matches(msg, ['why', 'important', 'why learn', 'why does this matter', 'what is the point', 'useful'])) {
      return `"${title}" is important because it is part of ${courseName}.\n\n${getImportance(explanation, courseName)}\n\nLearning this will help you build real skills that you can use in your daily life.`;
    }

    /* ── How does it work ── */
    if (matches(msg, ['how does', 'how do', 'how it works', 'how this works', 'explain how'])) {
      return `Great question! Here is how "${title}" works:\n\n${explanation}\n\nA simple way to remember it: ${getKeyPoint(explanation)}.`;
    }

    /* ── Definition ── */
    if (matches(msg, ['what is', 'what are', 'define', 'meaning', 'definition'])) {
      return `"${title}" refers to the following concept:\n\n${explanation}\n\nIn simple terms: ${simplify(explanation)}`;
    }

    /* ── Hint request ── */
    if (matches(msg, ['hint', 'clue', 'tip', 'help me', 'stuck', 'not sure'])) {
      return `Here is a hint for the task:\n\nTask: "${task}"\n\nHint: Think about the example — "${example}"\n\nTry applying the same thinking to your own situation. You are closer than you think!`;
    }

    /* ── Check answer ── */
    if (matches(msg, ['check my answer', 'is this right', 'correct', 'my answer', 'did i get it'])) {
      return `I am not able to see your answer directly, but here is how to check it yourself:\n\n1. Does your answer relate to "${title}"?\n2. Does it follow the idea in the explanation?\n3. Is it similar to the example given?\n\nIf yes to all three — you are on the right track! Share your answer and I will guide you further.`;
    }

    /* ── Encouragement / struggle ── */
    if (matches(msg, ['hard', 'difficult', 'too hard', 'i cant', "i can't", 'give up', 'too much', 'frustrat'])) {
      return `I understand — learning new things can feel challenging. But you are doing great by asking questions!\n\nLet us break "${title}" into smaller steps:\n\n1. First, just read the explanation once slowly.\n2. Then look at the example.\n3. Then try the task one sentence at a time.\n\nYou can do this. What part is giving you the most trouble?`;
    }

    /* ── Positive feedback ── */
    if (matches(msg, ['thank', 'thanks', 'got it', 'i understand', 'understand now', 'makes sense', 'clear now', 'perfect', 'great'])) {
      return `You are welcome! I am glad that helped.\n\nKeep going — you are making great progress in "${title}". Every lesson you complete brings you closer to your certificate.\n\nIs there anything else you would like to know about this lesson?`;
    }

    /* ── Summary request ── */
    if (matches(msg, ['summary', 'summarize', 'short version', 'in short', 'brief', 'overview'])) {
      return `Here is a quick summary of "${title}":\n\n${getSummary(explanation)}\n\nKey example: ${example}\n\nYour task: ${task}`;
    }

    /* ── Test / quiz ── */
    if (matches(msg, ['test', 'quiz', 'question', 'practice', 'exam'])) {
      return `Here is a quick practice question for "${title}":\n\nBased on what you learned — ${getPracticeQuestion(explanation, title)}\n\nTake your time and think about it. When you are ready, tell me your answer!`;
    }

    /* ── Off topic ── */
    if (matches(msg, ['weather', 'news', 'sport', 'football', 'music', 'movie', 'game', 'joke'])) {
      return `I am only able to help with lesson content. Let us stay focused on "${title}" — you are doing well!\n\nDo you have any questions about the lesson?`;
    }

    /* ── Default fallback ── */
    return getDefaultResponse(title, explanation, example, task, messageCount);
  }

  /* ── Matching helper ── */
  function matches(msg, keywords) {
    return keywords.some(k => msg.includes(k));
  }

  /* ── Simplify explanation ── */
  function simplify(text) {
    if (!text) return 'This lesson covers an important concept.';
    const sentences = text.split('. ');
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
  }

  /* ── Get key point ── */
  function getKeyPoint(text) {
    if (!text) return 'apply what you learn to real life situations';
    const sentences = text.split('. ');
    return sentences[sentences.length > 1 ? 1 : 0] || text;
  }

  /* ── Get summary ── */
  function getSummary(text) {
    if (!text) return 'Review the lesson explanation above.';
    const sentences = text.split('. ').filter(s => s.length > 10);
    return sentences.slice(0, 3).join('. ') + '.';
  }

  /* ── Get importance ── */
  function getImportance(text, course) {
    const openings = [
      `Understanding this helps you succeed in ${course}.`,
      `This is a foundational skill that builds on everything else in ${course}.`,
      `Professionals who master this topic perform better in ${course}.`,
    ];
    return openings[Math.floor(Math.random() * openings.length)] + ' ' + simplify(text);
  }

  /* ── Get practice question ── */
  function getPracticeQuestion(text, title) {
    const questions = [
      `can you describe "${title}" in your own words?`,
      `what is the most important thing to remember about "${title}"?`,
      `how would you explain "${title}" to a friend?`,
      `what is one way you can apply "${title}" in your daily life?`,
    ];
    return questions[Math.floor(Math.random() * questions.length)];
  }

  /* ── Default rotating responses ── */
  function getDefaultResponse(title, explanation, example, task, count) {
    const responses = [
      `Good question! Let me help you with "${title}".\n\n${simplify(explanation)}\n\nWould you like me to give you an example or help with the task?`,
      `For "${title}", the key thing to understand is:\n\n${getKeyPoint(explanation)}\n\nHere is a real-life example:\n${example}`,
      `Let us focus on "${title}". Here is what you need to know:\n\n${simplify(explanation)}\n\nYour task is: "${task}"\n\nWould you like a hint?`,
      `I am here to help you with "${title}".\n\nRemember the example: ${example}\n\nApply that same thinking to complete your task. You are doing well!`,
    ];
    return responses[count % responses.length];
  }

  /* ═══════════════════════════════════════════════════════════
     STYLES
  ═══════════════════════════════════════════════════════════ */
  function injectStyles() {
    if (document.getElementById('vasco-ai-styles')) return;
    const s = document.createElement('style');
    s.id = 'vasco-ai-styles';
    s.textContent = `
      #vt-launcher {
        position: fixed; bottom: 1.75rem; right: 1.75rem; z-index: 9000;
        width: 54px; height: 54px; border-radius: 50%;
        background: linear-gradient(135deg, #1a73e8 0%, #0d9488 100%);
        border: none; cursor: pointer; color: #fff; font-size: 1.25rem;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 18px rgba(26,115,232,0.4);
        transition: transform .2s ease, box-shadow .2s ease; outline: none;
      }
      #vt-launcher:hover { transform: scale(1.07); box-shadow: 0 6px 24px rgba(26,115,232,0.5); }
      #vt-unread-dot {
        position: absolute; top: 2px; right: 2px;
        width: 13px; height: 13px; border-radius: 50%;
        background: #ef4444; border: 2px solid #fff; display: none;
      }
      #vt-launcher.vt-has-unread #vt-unread-dot { display: block; }

      #vt-panel {
        position: fixed; bottom: 5.25rem; right: 1.75rem; z-index: 9001;
        width: 370px; max-width: calc(100vw - 2rem); max-height: 560px;
        background: #fff; border-radius: 16px;
        box-shadow: 0 10px 44px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
        display: flex; flex-direction: column; overflow: hidden;
        transform: translateY(20px) scale(0.97); opacity: 0; pointer-events: none;
        transition: transform .25s cubic-bezier(.34,1.56,.64,1), opacity .2s ease;
      }
      #vt-panel.vt-open { transform: translateY(0) scale(1); opacity: 1; pointer-events: all; }

      #vt-header {
        background: linear-gradient(135deg, #1a73e8 0%, #0d9488 100%);
        padding: .9rem 1.1rem; display: flex; align-items: center; gap: .7rem; flex-shrink: 0;
      }
      #vt-header-icon {
        width: 34px; height: 34px; border-radius: 50%;
        background: rgba(255,255,255,.2); display: flex; align-items: center;
        justify-content: center; color: #fff; font-size: .95rem; flex-shrink: 0;
      }
      #vt-header-text { flex: 1; min-width: 0; }
      #vt-header-text strong {
        display: block; color: #fff; font-size: .9rem; font-weight: 700;
        font-family: 'Segoe UI', system-ui, sans-serif;
      }
      #vt-header-text span { color: rgba(255,255,255,.78); font-size: .72rem; font-family: 'Segoe UI', system-ui, sans-serif; }
      #vt-btn-clear, #vt-btn-close {
        background: none; border: none; color: rgba(255,255,255,.75);
        cursor: pointer; font-size: .9rem; padding: .2rem .35rem;
        border-radius: 5px; transition: color .15s; line-height: 1; flex-shrink: 0;
      }
      #vt-btn-clear:hover, #vt-btn-close:hover { color: #fff; }

      #vt-context {
        background: #f0f9ff; border-bottom: 1px solid #e0f2fe;
        padding: .45rem 1.1rem; font-size: .7rem; color: #0369a1;
        font-family: 'Segoe UI', system-ui, sans-serif;
        display: flex; align-items: center; gap: .35rem; flex-shrink: 0;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }

      #vt-messages {
        flex: 1; overflow-y: auto; padding: .9rem 1rem;
        display: flex; flex-direction: column; gap: .65rem;
        min-height: 0; scroll-behavior: smooth;
      }
      #vt-messages::-webkit-scrollbar { width: 4px; }
      #vt-messages::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 2px; }

      .vt-msg { max-width: 90%; animation: vt-pop .18s ease; }
      @keyframes vt-pop {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .vt-msg-label {
        font-size: .66rem; font-weight: 700; letter-spacing: .04em;
        text-transform: uppercase; color: #94a3b8; margin-bottom: .22rem;
        font-family: 'Segoe UI', system-ui, sans-serif;
      }
      .vt-bubble {
        padding: .6rem .85rem; border-radius: 12px; font-size: .855rem;
        line-height: 1.6; font-family: 'Segoe UI', system-ui, sans-serif;
        word-break: break-word; white-space: pre-wrap;
      }
      .vt-msg.vt-assistant { align-self: flex-start; }
      .vt-msg.vt-assistant .vt-bubble { background: #f1f5f9; color: #1e293b; border-bottom-left-radius: 3px; }
      .vt-msg.vt-user { align-self: flex-end; }
      .vt-msg.vt-user .vt-msg-label { text-align: right; }
      .vt-msg.vt-user .vt-bubble {
        background: linear-gradient(135deg, #1a73e8, #1558c0);
        color: #fff; border-bottom-right-radius: 3px;
      }

      #vt-quick {
        padding: 0 .9rem .55rem;
        display: flex; flex-wrap: wrap; gap: .35rem; flex-shrink: 0;
      }
      .vt-quick-btn {
        background: #eff6ff; border: 1px solid #bfdbfe; color: #1a73e8;
        font-size: .7rem; padding: .28rem .6rem; border-radius: 20px;
        cursor: pointer; font-family: 'Segoe UI', system-ui, sans-serif;
        transition: background .15s; white-space: nowrap;
      }
      .vt-quick-btn:hover { background: #dbeafe; }

      #vt-input-row {
        padding: .65rem .9rem; border-top: 1px solid #e2e8f0;
        display: flex; align-items: flex-end; gap: .45rem;
        flex-shrink: 0; background: #fff;
      }
      #vt-input {
        flex: 1; border: 1.5px solid #e2e8f0; border-radius: 10px;
        padding: .5rem .7rem; font-size: .855rem;
        font-family: 'Segoe UI', system-ui, sans-serif;
        resize: none; outline: none; line-height: 1.45;
        max-height: 110px; overflow-y: auto;
        color: #1e293b; background: #f8fafc; transition: border-color .15s;
      }
      #vt-input:focus { border-color: #1a73e8; background: #fff; }
      #vt-input::placeholder { color: #94a3b8; }
      #vt-send {
        width: 36px; height: 36px; border-radius: 9px;
        background: linear-gradient(135deg, #1a73e8, #0d9488);
        border: none; color: #fff; cursor: pointer; font-size: .85rem;
        display: flex; align-items: center; justify-content: center;
        transition: opacity .15s, transform .15s; flex-shrink: 0;
      }
      #vt-send:hover { transform: scale(1.07); }

      @media (max-width: 480px) {
        #vt-panel    { right: .75rem; bottom: 4.75rem; width: calc(100vw - 1.5rem); }
        #vt-launcher { right: .75rem; bottom: .9rem; }
      }
    `;
    document.head.appendChild(s);
  }

  /* ═══════════════════════════════════════════════════════════
     BUILD DOM
  ═══════════════════════════════════════════════════════════ */
  function buildDOM() {
    const launcher = document.createElement('button');
    launcher.id = 'vt-launcher';
    launcher.setAttribute('aria-label', 'Open Vasco AI Tutor');
    launcher.innerHTML = `<i class="fas fa-robot"></i><span id="vt-unread-dot"></span>`;

    const panel = document.createElement('div');
    panel.id = 'vt-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Vasco AI Tutor');
    panel.innerHTML = `
      <div id="vt-header">
        <div id="vt-header-icon"><i class="fas fa-robot"></i></div>
        <div id="vt-header-text">
          <strong>Vasco AI Tutor</strong>
          <span>Ask me anything about this lesson</span>
        </div>
        <button id="vt-btn-clear" title="Clear chat" aria-label="Clear chat">
          <i class="fas fa-rotate-left"></i>
        </button>
        <button id="vt-btn-close" aria-label="Close tutor">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div id="vt-context">
        <i class="fas fa-book-open"></i>
        <span id="vt-context-text">Loading context…</span>
      </div>
      <div id="vt-messages" role="log" aria-live="polite"></div>
      <div id="vt-quick"></div>
      <div id="vt-input-row">
        <textarea id="vt-input" rows="1"
          placeholder="Ask Vasco something…"
          aria-label="Your message"></textarea>
        <button id="vt-send" aria-label="Send message">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(panel);
  }

  /* ═══════════════════════════════════════════════════════════
     UI HELPERS
  ═══════════════════════════════════════════════════════════ */
  function openPanel() {
    panelOpen = true;
    document.getElementById('vt-panel').classList.add('vt-open');
    document.getElementById('vt-launcher').classList.remove('vt-has-unread');
    document.getElementById('vt-input').focus();
  }

  function closePanel() {
    panelOpen = false;
    document.getElementById('vt-panel').classList.remove('vt-open');
  }

  function clearChat() {
    messageCount = 0;
    document.getElementById('vt-messages').innerHTML = '';
    buildQuickPrompts();
    showWelcome();
  }

  function appendMessage(role, text) {
    const msgs = document.getElementById('vt-messages');
    const wrap = document.createElement('div');
    wrap.className = `vt-msg vt-${role}`;
    wrap.innerHTML = `
      <div class="vt-msg-label">${role === 'assistant' ? 'Vasco' : 'You'}</div>
      <div class="vt-bubble">${escHtml(text)}</div>
    `;
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showWelcome() {
    const lesson = window.VASCO_LESSON || {};
    const title  = lesson.title || 'this lesson';
    appendMessage('assistant',
      `Hi! I am Vasco, your AI tutor for "${title}".\n\nAsk me anything — I am here to help you understand, practise, and succeed.`
    );
  }

  function buildQuickPrompts() {
    const container = document.getElementById('vt-quick');
    container.innerHTML = '';
    QUICK_PROMPTS.forEach(prompt => {
      const btn = document.createElement('button');
      btn.className = 'vt-quick-btn';
      btn.textContent = prompt;
      btn.addEventListener('click', () => {
        container.innerHTML = '';
        sendMessage(prompt);
      });
      container.appendChild(btn);
    });
  }

  function updateContextPill() {
    const ctx = window.VASCO_LESSON || {};
    const course = window.VASCO_COURSE || {};
    document.getElementById('vt-context-text').textContent =
      `${course.title || 'Course'}  —  ${ctx.title || 'Lesson'}`;
  }

  function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 110) + 'px';
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;');
  }

  /* ═══════════════════════════════════════════════════════════
     SEND FLOW
  ═══════════════════════════════════════════════════════════ */
  function sendMessage(text) {
    text = (text || '').trim();
    if (!text) return;

    document.getElementById('vt-quick').innerHTML = '';
    appendMessage('user', text);

    // Small delay to feel natural
    setTimeout(() => {
      const reply = generateResponse(text);
      appendMessage('assistant', reply);
      messageCount++;
      if (!panelOpen) {
        document.getElementById('vt-launcher').classList.add('vt-has-unread');
      }
    }, 400);
  }

  /* ═══════════════════════════════════════════════════════════
     EVENTS
  ═══════════════════════════════════════════════════════════ */
  function wireEvents() {
    document.getElementById('vt-launcher').addEventListener('click', () => {
      panelOpen ? closePanel() : openPanel();
    });
    document.getElementById('vt-btn-close').addEventListener('click', closePanel);
    document.getElementById('vt-btn-clear').addEventListener('click', clearChat);

    const input = document.getElementById('vt-input');
    const send  = document.getElementById('vt-send');

    const submit = () => {
      const val = input.value;
      input.value = '';
      autoResize(input);
      sendMessage(val);
    };

    send.addEventListener('click', submit);
    input.addEventListener('input', () => autoResize(input));
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && panelOpen) closePanel();
    });
  }

  /* ═══════════════════════════════════════════════════════════
     INIT — also called when lesson changes
  ═══════════════════════════════════════════════════════════ */
  function init() {
    injectStyles();
    if (!document.getElementById('vt-launcher')) {
      buildDOM();
      wireEvents();
    }
    updateContextPill();
    buildQuickPrompts();
    document.getElementById('vt-messages').innerHTML = '';
    showWelcome();
  }

  // Re-init when lesson changes
  window.vascoTutorInit = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();