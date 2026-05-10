// ============================================
// VASCO AI LEARNING PLATFORM - lessons.js
// Lesson Rendering & Navigation System
// ============================================

let currentCourse = null;
let currentLevel = null;
let currentLessonIndex = 0;

// ── LEVEL GATING ─────────────────────────────────────────────
// Beginner  : always open
// Intermediate : beginner lessons 100% done AND beginner test passed
// Advanced     : intermediate lessons 100% done AND intermediate test passed

function isLevelUnlocked(courseId, level) {
  if (level === 'beginner') return true;
  if (level === 'intermediate') {
    const lessonsOk = isLevelComplete(courseId, 'beginner');
    const test      = getTestResult(courseId, 'beginner');
    return lessonsOk && test && test.passed === true;
  }
  if (level === 'advanced') {
    const lessonsOk = isLevelComplete(courseId, 'intermediate');
    const test      = getTestResult(courseId, 'intermediate');
    return lessonsOk && test && test.passed === true;
  }
  return false;
}

function levelRequirementMessage(level) {
  if (level === 'intermediate') {
    return 'Complete all <strong>Beginner</strong> lessons and pass the <strong>Beginner Test</strong> to unlock Intermediate.';
  }
  if (level === 'advanced') {
    return 'Complete all <strong>Intermediate</strong> lessons and pass the <strong>Intermediate Test</strong> to unlock Advanced.';
  }
  return '';
}

// ── OPEN A COURSE ──
function openCourse(courseId) {
  currentCourse = courses.find(c => c.id === courseId);
  if (!currentCourse) return;
  currentLevel = "beginner";
  currentLessonIndex = 0;

  // Expose globals for ai-tutor.js
  const lesson = currentCourse.levels[currentLevel].lessons[0];
  window.VASCO_COURSE = { id: currentCourse.id, title: currentCourse.title };
  window.VASCO_LESSON = {
    id          : lesson.id,
    title       : lesson.title,
    explanation : lesson.explanation,
    example     : lesson.example,
    task        : lesson.task,
  };

  renderCourseView();
}

// ── RENDER FULL COURSE VIEW ──
function renderCourseView() {
  document.getElementById("main-content").innerHTML = `
    <div class="course-view">

      <div class="course-header">
        <button class="btn-back" onclick="goHome()">
          <i class="fas fa-arrow-left"></i> Back to Courses
        </button>
        <div class="course-title-wrap">
          <div class="course-icon-wrap ${currentCourse.color}">
            <i class="${currentCourse.icon}"></i>
          </div>
          <div>
            <h2>${currentCourse.title}</h2>
            <p>${currentCourse.description}</p>
          </div>
        </div>
      </div>

      <div class="level-tabs">
        ${renderLevelTab('beginner',     'fas fa-seedling',    'Beginner')}
        ${renderLevelTab('intermediate', 'fas fa-chart-line',  'Intermediate')}
        ${renderLevelTab('advanced',     'fas fa-trophy',      'Advanced')}
      </div>

      <div class="lesson-layout">
        <div class="lesson-sidebar" id="lesson-sidebar">
          ${renderLessonList()}
        </div>
        <div class="lesson-content" id="lesson-content">
          ${renderLesson(currentLessonIndex)}
        </div>
      </div>

    </div>
  `;
}

// ── RENDER A SINGLE LEVEL TAB ──
function renderLevelTab(level, icon, label) {
  const unlocked = isLevelUnlocked(currentCourse.id, level);
  const isActive = currentLevel === level;
  const lockIcon = unlocked ? '' : '<i class="fas fa-lock" style="font-size:.75rem;margin-left:.35rem;opacity:.7;"></i>';

  if (unlocked) {
    return `
      <button class="level-tab ${isActive ? 'active' : ''}" onclick="switchLevel('${level}')">
        <i class="${icon}"></i> ${label}
      </button>`;
  } else {
    return `
      <button class="level-tab level-tab-locked" onclick="showLockedMessage('${level}')">
        <i class="${icon}"></i> ${label} ${lockIcon}
      </button>`;
  }
}

// ── SHOW LOCKED LEVEL MESSAGE ──
function showLockedMessage(level) {
  const content = document.getElementById("lesson-content");
  if (!content) return;
  content.innerHTML = `
    <div class="locked-level-card">
      <div class="locked-icon">
        <i class="fas fa-lock"></i>
      </div>
      <h3>Level Locked</h3>
      <p>${levelRequirementMessage(level)}</p>
      <button class="btn-primary" onclick="switchLevel('${getPreviousLevel(level)}')">
        <i class="fas fa-arrow-left"></i> Go Back
      </button>
    </div>`;
}

function getPreviousLevel(level) {
  if (level === 'intermediate') return 'beginner';
  if (level === 'advanced')     return 'intermediate';
  return 'beginner';
}

// ── RENDER LESSON LIST (SIDEBAR) ──
function renderLessonList() {
  const unlocked = isLevelUnlocked(currentCourse.id, currentLevel);

  // If level is locked, show nothing in sidebar
  if (!unlocked) return '';

  const lessons = currentCourse.levels[currentLevel].lessons;
  return lessons.map((lesson, index) => {
    const isCompleted = isLessonCompleted(currentCourse.id, currentLevel, lesson.id);
    const isActive = index === currentLessonIndex;
    return `
      <div class="sidebar-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
        onclick="selectLesson(${index})">
        <div class="sidebar-icon">
          ${isCompleted
            ? '<i class="fas fa-check-circle"></i>'
            : `<span class="lesson-num">${lesson.id}</span>`}
        </div>
        <span class="sidebar-title">${lesson.title}</span>
      </div>
    `;
  }).join("");
}

// ── RENDER SINGLE LESSON ──
function renderLesson(index) {
  // Guard: if level is locked, show locked message instead
  if (!isLevelUnlocked(currentCourse.id, currentLevel)) {
    return `
      <div class="locked-level-card">
        <div class="locked-icon"><i class="fas fa-lock"></i></div>
        <h3>Level Locked</h3>
        <p>${levelRequirementMessage(currentLevel)}</p>
        <button class="btn-primary" onclick="switchLevel('${getPreviousLevel(currentLevel)}')">
          <i class="fas fa-arrow-left"></i> Go Back
        </button>
      </div>`;
  }

  const lessons = currentCourse.levels[currentLevel].lessons;
  const lesson = lessons[index];
  if (!lesson) return "";

  const isCompleted = isLessonCompleted(currentCourse.id, currentLevel, lesson.id);
  const progress = getLevelProgress(currentCourse.id, currentLevel);
  const allDone = progress === 100;

  return `
    <div class="lesson-card">

      <div class="lesson-top">
        <span class="lesson-tag">
          <i class="fas fa-book-open"></i>
          Lesson ${lesson.id} of ${lessons.length}
        </span>
        ${isCompleted
          ? '<span class="lesson-done-badge"><i class="fas fa-check"></i> Completed</span>'
          : ''}
      </div>

      <h2 class="lesson-title">${lesson.title}</h2>

      <div class="lesson-section">
        <div class="section-label">
          <i class="fas fa-lightbulb"></i> Explanation
        </div>
        <p>${lesson.explanation}</p>
      </div>

      <div class="lesson-section example">
        <div class="section-label">
          <i class="fas fa-user-check"></i> Real-Life Example
        </div>
        <p>${lesson.example}</p>
      </div>

      <div class="lesson-section task">
        <div class="section-label">
          <i class="fas fa-tasks"></i> Try This Now
        </div>
        <p>${lesson.task}</p>
      </div>

      <div class="lesson-actions">
        <button class="btn-secondary" onclick="prevLesson()"
          ${index === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left"></i> Previous
        </button>

        ${!isCompleted ? `
          <button class="btn-green" onclick="markComplete(${lesson.id})">
            <i class="fas fa-check"></i> Mark Complete
          </button>
        ` : ''}

        ${index < lessons.length - 1 ? `
          <button class="btn-secondary" onclick="nextLesson()">
            Next <i class="fas fa-arrow-right"></i>
          </button>
        ` : ''}
      </div>

      <div class="progress-bar-wrap">
        <div class="progress-label">
          <i class="fas fa-chart-pie"></i> Level Progress
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <span class="progress-pct">${progress}%</span>
      </div>

      ${allDone ? `
        <div class="test-unlock-banner">
          <i class="fas fa-lock-open"></i>
          All lessons complete! You can now take the
          <strong>${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}</strong> test.
          <button class="btn-primary" onclick="startTest('${currentCourse.id}', '${currentLevel}')">
            <i class="fas fa-pen"></i> Take Test
          </button>
        </div>
      ` : ''}
      <div class="ai-tutor-wrap" id="ai-tutor-wrap">
        <!-- Vasco AI Tutor rendered by ai-tutor.js as floating panel -->
      </div>

    </div>
  `;
}

// ── AI TUTOR stub (floating panel handles everything) ──
function sendAIMessage(courseId, level, lessonTitle) {}

// ── NAVIGATION ──
function selectLesson(index) {
  currentLessonIndex = index;

  const lesson = currentCourse.levels[currentLevel].lessons[index];
  window.VASCO_COURSE = { id: currentCourse.id, title: currentCourse.title };
  window.VASCO_LESSON = {
    id          : lesson.id,
    title       : lesson.title,
    explanation : lesson.explanation,
    example     : lesson.example,
    task        : lesson.task,
  };

  document.getElementById("lesson-content").innerHTML = renderLesson(index);
  document.getElementById("lesson-sidebar").innerHTML = renderLessonList();
}

function nextLesson() {
  const lessons = currentCourse.levels[currentLevel].lessons;
  if (currentLessonIndex < lessons.length - 1) {
    selectLesson(currentLessonIndex + 1);
  }
}

function prevLesson() {
  if (currentLessonIndex > 0) {
    selectLesson(currentLessonIndex - 1);
  }
}

function switchLevel(level) {
  // Block switching to a locked level
  if (!isLevelUnlocked(currentCourse.id, level)) {
    showLockedMessage(level);
    return;
  }

  currentLevel = level;
  currentLessonIndex = 0;

  const lesson = currentCourse.levels[currentLevel].lessons[0];
  window.VASCO_LESSON = {
    id          : lesson.id,
    title       : lesson.title,
    explanation : lesson.explanation,
    example     : lesson.example,
    task        : lesson.task,
  };

  renderCourseView();
}

function goHome() {
  document.getElementById("main-content").innerHTML = getHomeHTML();
}

// ── MARK LESSON COMPLETE ──
function markComplete(lessonId) {
  saveProgress(currentCourse.id, currentLevel, lessonId);
  selectLesson(currentLessonIndex);
}