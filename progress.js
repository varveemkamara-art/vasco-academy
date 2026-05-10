// ============================================
// VASCO AI LEARNING PLATFORM - progress.js
// localStorage Progress Tracking System
// ============================================

// ── SAVE LESSON COMPLETE ──
function saveProgress(courseId, level, lessonId) {
  const key = `vasco_progress_${courseId}_${level}`;
  let completed = JSON.parse(localStorage.getItem(key) || "[]");
  const id = String(lessonId);
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem(key, JSON.stringify(completed));
    // Sync to Firebase if user is logged in
    syncProgressKey(key, completed);
  }
}

// ── CHECK IF LESSON IS COMPLETED ──
function isLessonCompleted(courseId, level, lessonId) {
  const key = `vasco_progress_${courseId}_${level}`;
  let completed = JSON.parse(localStorage.getItem(key) || "[]");
  return completed.includes(String(lessonId));
}

// ── GET LEVEL PROGRESS PERCENTAGE ──
function getLevelProgress(courseId, level) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return 0;
  const total = course.levels[level].lessons.length;
  const key = `vasco_progress_${courseId}_${level}`;
  const completed = JSON.parse(localStorage.getItem(key) || "[]");
  return Math.round((completed.length / total) * 100);
}

// ── CHECK IF ALL LESSONS IN LEVEL ARE DONE ──
function isLevelComplete(courseId, level) {
  return getLevelProgress(courseId, level) === 100;
}

// ── SAVE TEST RESULT ──
function saveTestResult(courseId, level, score, passed) {
  const key = `vasco_test_${courseId}_${level}`;
  const result = {
    score: score,
    passed: passed,
    date: new Date().toLocaleDateString(),
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(result));
  // Sync to Firebase if user is logged in
  syncTestKey(key, result);
}

// ── GET TEST RESULT ──
function getTestResult(courseId, level) {
  const key = `vasco_test_${courseId}_${level}`;
  return JSON.parse(localStorage.getItem(key) || "null");
}

// ── SAVE CERTIFICATE ──
function saveCertificate(courseId, level) {
  const key = `vasco_cert_${courseId}_${level}`;
  const cert = {
    courseId: courseId,
    level: level,
    date: new Date().toLocaleDateString(),
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cert));
}

// ── CHECK IF CERTIFICATE EARNED ──
function hasCertificate(courseId, level) {
  const key = `vasco_cert_${courseId}_${level}`;
  return localStorage.getItem(key) !== null;
}

// ── GET ALL CERTIFICATES ──
function getAllCertificates() {
  const certs = [];
  courses.forEach(course => {
    ["beginner", "intermediate", "advanced"].forEach(level => {
      if (hasCertificate(course.id, level)) {
        const cert = JSON.parse(localStorage.getItem(`vasco_cert_${course.id}_${level}`));
        cert.courseTitle = course.title;
        cert.icon = course.icon;
        cert.color = course.color;
        certs.push(cert);
      }
    });
  });
  return certs;
}

// ── GET OVERALL COURSE PROGRESS ──
function getCourseProgress(courseId) {
  const levels = ["beginner", "intermediate", "advanced"];
  let total = 0;
  levels.forEach(level => {
    total += getLevelProgress(courseId, level);
  });
  return Math.round(total / 3);
}

// ── GET DASHBOARD SUMMARY ──
function getDashboardSummary() {
  const summary = {
    totalCourses: courses.length,
    activeCourses: 0,
    completedLevels: 0,
    certificates: getAllCertificates().length
  };

  courses.forEach(course => {
    const progress = getCourseProgress(course.id);
    if (progress > 0) summary.activeCourses++;

    ["beginner", "intermediate", "advanced"].forEach(level => {
      if (isLevelComplete(course.id, level)) {
        summary.completedLevels++;
      }
    });
  });

  return summary;
}

// ── RESET ALL PROGRESS (for testing) ──
function resetAllProgress() {
  const keys = Object.keys(localStorage).filter(k => k.startsWith("vasco_"));
  keys.forEach(k => localStorage.removeItem(k));
  console.log("All Vasco progress reset.");
}

// ── FIREBASE SYNC HELPERS ──
function syncProgressKey(key, value) {
  try {
    const db   = window._vascoFirebaseDB;
    const user = window._vascoFirebaseUser;
    if (!db || !user) return;
    import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js")
      .then(({ doc, updateDoc }) => {
        updateDoc(doc(db, 'users', user.email), {
          [`progress.${key}`]: value
        });
      });
  } catch(e) { console.warn('[sync]', e); }
}

function syncTestKey(key, value) {
  try {
    const db   = window._vascoFirebaseDB;
    const user = window._vascoFirebaseUser;
    if (!db || !user) return;
    import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js")
      .then(({ doc, updateDoc }) => {
        updateDoc(doc(db, 'users', user.email), {
          [`tests.${key}`]: value
        });
      });
  } catch(e) { console.warn('[sync]', e); }
}