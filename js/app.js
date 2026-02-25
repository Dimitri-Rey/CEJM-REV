// ========== QUIZ ENGINE ==========

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let answers = [];
let quizType = '';
let quizChapter = '';
let activeSubject = 'cejm';
let hintTimerId = null;

// All quiz data registry
const quizData = {};

// ========== PROGRESS (localStorage) ==========

function getAllProgress() {
    try {
        return JSON.parse(localStorage.getItem('cejm_progress') || '{}');
    } catch { return {}; }
}

function saveProgress(chapter, type, correctCount, total) {
    const progress = getAllProgress();
    const key = `${chapter}_${type}`;
    const pct = Math.round((correctCount / total) * 100);
    const prev = progress[key] || { best: 0, attempts: 0, lastDate: null };

    progress[key] = {
        best: Math.max(prev.best, pct),
        last: pct,
        attempts: prev.attempts + 1,
        lastDate: new Date().toISOString()
    };

    localStorage.setItem('cejm_progress', JSON.stringify(progress));
    updateAllProgressBadges();
}

function updateAllProgressBadges() {
    const progress = getAllProgress();
    document.querySelectorAll('.score-badge[data-key]').forEach(badge => {
        const key = badge.getAttribute('data-key');
        const p = progress[key];
        if (p) {
            badge.textContent = `${p.best}%`;
            badge.classList.add('visible');
            if (p.best >= 80) badge.className = 'score-badge visible badge-gold';
            else if (p.best >= 60) badge.className = 'score-badge visible badge-silver';
            else badge.className = 'score-badge visible badge-bronze';
        }
    });
}

function registerQuiz(chapter, type, data) {
    const key = `${chapter}_${type}`;
    quizData[key] = data;
    // Update count on homepage
    const countEl = document.getElementById(`${chapter}-${type}-count`);
    if (countEl) {
        countEl.textContent = `(${data.length} questions)`;
    }
}

function startQuiz(chapter, type) {
    const key = `${chapter}_${type}`;
    const data = quizData[key];
    if (!data || data.length === 0) {
        alert('Ce quiz n\'est pas encore disponible. Reviens bientôt !');
        return;
    }

    currentQuiz = shuffleArray([...data]);
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    quizType = type;
    quizChapter = chapter;

    // Set quiz title
    const titles = {
        // CEJM
        'ch1': 'Ch. 1 — Approche économique',
        'ch2': 'Ch. 2 — Le fonctionnement des marchés',
        'ch3': 'Ch. 3 — La formation du contrat',
        'ch4': 'Ch. 4 — La mise en œuvre du contrat',
        'ch5': 'Ch. 5 — L\'environnement de l\'entreprise',
        'theme1': 'Thème 1 — Grand Quiz 100 Questions',
        'ch6': 'Ch. 6 — Les fonctions économiques de l\'État',
        'ch7': 'Ch. 7 — La régulation par le droit',
        'ch8': 'Ch. 8 — L\'environnement et les décisions',
        'theme2': 'Thème 2 — Grand Quiz 100 Questions',
        'ch9': 'Ch. 9 — Les choix de production',
        'ch10': 'Ch. 10 — Les choix de structure juridique',
        'ch11': 'Ch. 11 — Les risques et la responsabilité',
        'ch12': 'Ch. 12 — L\'organisation des ressources',
        'ch13': 'Ch. 13 — L\'organisation interne',
        'ch14': 'Ch. 14 — Le financement de l\'entreprise',
        'theme3': 'Thème 3 — Grand Quiz 100 Questions',
        // Maths
        'maths-m1': 'M1 — Bases numériques',
        'maths-m2': 'M2 — Logique booléenne',
        'maths-m3': 'M3 — Subnetting & Masques réseau',
        'maths-m4': 'M4 — Probabilités & Statistiques',
        'maths-m5': 'M5 — Suites numériques',
        'maths-m6': 'M6 — Algorithmique & Complexité',
        // Français
        'francais-f1': 'F1 — Synthèse de documents',
        'francais-f2': 'F2 — Écriture personnelle',
        'francais-f3': 'F3 — Les animaux et nous (Thème 2026)',
        // Anglais
        'anglais-a1': 'A1 — Vocabulaire IT',
        'anglais-a2': 'A2 — Expression professionnelle'
    };

    const typeLabels = {
        'knowledge': ' — Quiz Connaissances',
        'practical': ' — Cas Pratiques / BTS',
        'exercises': ' — Exercices'
    };

    const isTheme = chapter.startsWith('theme');
    const suffix = isTheme ? '' : (typeLabels[type] || '');
    document.getElementById('quiz-title').textContent = (titles[chapter] || chapter) + suffix;

    document.getElementById('score-total').textContent = currentQuiz.length;
    document.getElementById('score-correct').textContent = '0';

    // Show/hide calculator button for maths quizzes
    const calcBtn = document.getElementById('btn-calculator');
    if (calcBtn) calcBtn.classList.toggle('hidden', !chapter.startsWith('maths-'));
    const calcWidget = document.getElementById('calculator-widget');
    if (calcWidget) calcWidget.classList.add('hidden');

    showPage('quiz-page');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
        return;
    }

    const q = currentQuiz[currentQuestionIndex];
    const total = currentQuiz.length;

    // Update progress
    const pct = ((currentQuestionIndex) / total) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent =
        `Question ${currentQuestionIndex + 1} / ${total}`;

    // Question number
    document.getElementById('question-number').textContent =
        `Question ${currentQuestionIndex + 1}`;

    // Question text
    document.getElementById('question-text').textContent = q.question;

    // Context (for practical questions)
    const contextEl = document.getElementById('question-context');
    if (q.context) {
        contextEl.textContent = q.context;
        contextEl.classList.add('visible');
    } else {
        contextEl.classList.remove('visible');
        contextEl.textContent = '';
    }

    // Options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    const shuffledOptions = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    // Shuffle options
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    shuffledOptions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt.text}</span>
        `;
        btn.addEventListener('click', () => selectAnswer(btn, opt.originalIndex, q));
        container.appendChild(btn);
    });

    // Hide explanation and next button
    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('explanation').className = 'explanation hidden';
    document.getElementById('btn-next').classList.add('hidden');

    // Hint system for maths quizzes
    clearHintTimer();
    if (quizChapter.startsWith('maths-') && q.hint) {
        startHintTimer(q.hint);
    }
}

function selectAnswer(btn, selectedIndex, question) {
    // Prevent double click
    const allBtns = document.querySelectorAll('.option-btn');
    if (btn.classList.contains('disabled')) return;

    clearHintTimer();

    const isCorrect = selectedIndex === question.answer;

    // Disable all buttons
    allBtns.forEach(b => {
        b.classList.add('disabled');
        // Find the original index of this button's option
        const optText = b.querySelector('.option-text').textContent;
        const origIdx = question.options.indexOf(optText);
        if (origIdx === question.answer) {
            b.classList.add('correct');
        }
    });

    if (!isCorrect) {
        btn.classList.add('wrong');
    }

    if (isCorrect) score++;

    // Save answer
    answers.push({
        question: question.question,
        context: question.context || null,
        selectedIndex: selectedIndex,
        selectedText: question.options[selectedIndex],
        correctIndex: question.answer,
        correctText: question.options[question.answer],
        isCorrect: isCorrect,
        explanation: question.explanation
    });

    // Update score display
    document.getElementById('score-correct').textContent = score;

    // Show explanation
    const expEl = document.getElementById('explanation');
    expEl.classList.remove('hidden', 'correct-exp', 'wrong-exp');
    expEl.classList.add(isCorrect ? 'correct-exp' : 'wrong-exp');

    document.getElementById('explanation-icon').textContent = isCorrect ? '✓' : '✗';
    document.getElementById('explanation-text').textContent = question.explanation;

    // Show next button
    document.getElementById('btn-next').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const total = currentQuiz.length;
    const pct = Math.round((score / total) * 100);

    let icon, title;
    if (pct >= 90) { icon = '🏆'; title = 'Excellent !'; }
    else if (pct >= 75) { icon = '👏'; title = 'Tres bien !'; }
    else if (pct >= 60) { icon = '👍'; title = 'Bien !'; }
    else if (pct >= 40) { icon = '📚'; title = 'A revoir...'; }
    else { icon = '💪'; title = 'Courage, revise encore !'; }

    document.getElementById('results-icon').textContent = icon;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-score-value').textContent = pct + '%';

    const wrongCount = total - score;
    document.getElementById('results-details').innerHTML = `
        <div class="detail-item correct-detail">
            <span class="detail-value">${score}</span>
            <span class="detail-label">Correctes</span>
        </div>
        <div class="detail-item wrong-detail">
            <span class="detail-value">${wrongCount}</span>
            <span class="detail-label">Erreurs</span>
        </div>
        <div class="detail-item total-detail">
            <span class="detail-value">${total}</span>
            <span class="detail-label">Total</span>
        </div>
    `;

    // Save progress
    saveProgress(quizChapter, quizType, score, total);

    showPage('results-page');
}

function retryQuiz() {
    startQuiz(quizChapter, quizType);
}

function reviewQuiz() {
    const container = document.getElementById('review-content');
    const wrongAnswers = answers.filter(a => !a.isCorrect);

    if (wrongAnswers.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--success);font-size:1.2rem;padding:40px;">Aucune erreur ! Parfait !</p>';
    } else {
        container.innerHTML = wrongAnswers.map((a, i) => `
            <div class="review-card">
                <p class="review-question">${i + 1}. ${a.question}</p>
                ${a.context ? `<p style="font-size:0.85rem;color:var(--text-muted);font-style:italic;margin-bottom:8px;">${a.context}</p>` : ''}
                <p class="review-your-answer">✗ Ta reponse : ${a.selectedText}</p>
                <p class="review-correct-answer">✓ Bonne reponse : ${a.correctText}</p>
                <p class="review-explanation">${a.explanation}</p>
            </div>
        `).join('');
    }

    showPage('review-page');
}

function goHome() {
    showPage('home-page');
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ========== SUBJECT SWITCHING ==========

function switchSubject(subject) {
    activeSubject = subject;

    // Show/hide subject sections
    document.querySelectorAll('.subject-section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById(`subject-${subject}`);
    if (section) section.classList.add('active');

    // Update subject tabs
    document.querySelectorAll('.subject-tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.subject-tab[data-subject="${subject}"]`);
    if (tab) tab.classList.add('active');

    // Show CEJM theme nav only for CEJM
    const themeNav = document.getElementById('cejm-theme-nav');
    if (subject === 'cejm') {
        themeNav.classList.remove('hidden');
    } else {
        themeNav.classList.add('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// ========== CEJM THEME SWITCHING ==========

function switchTheme(themeNum) {
    // Hide all CEJM theme cards
    document.querySelectorAll('#subject-cejm .theme-card').forEach(el => el.style.display = 'none');

    // Show selected theme
    if (themeNum === 1) {
        const t1 = document.getElementById('theme-1');
        if (t1) t1.style.display = '';
    } else {
        const section = document.getElementById(`theme-${themeNum}`);
        if (section) section.style.display = '';
    }

    // Update theme nav pills
    document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
    const pill = document.querySelector(`.nav-pill[data-theme="${themeNum}"]`);
    if (pill) pill.classList.add('active');
}

// ========== HINT TIMER (MATHS) ==========

function startHintTimer(hintText) {
    clearHintTimer();
    const hintSection = document.getElementById('hint-section');
    const timerEl = document.getElementById('hint-timer');
    const hintEl = document.getElementById('hint-content');
    if (!hintSection) return;

    hintSection.classList.remove('hidden');
    timerEl.classList.remove('hidden');
    hintEl.classList.add('hidden');

    let seconds = 30;
    document.getElementById('hint-seconds').textContent = seconds;
    const progressFill = document.getElementById('hint-progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '100%';
    // Force reflow then animate
    progressFill.offsetWidth;
    progressFill.style.transition = 'width 1s linear';

    hintTimerId = setInterval(() => {
        seconds--;
        document.getElementById('hint-seconds').textContent = seconds;
        progressFill.style.width = ((seconds / 30) * 100) + '%';

        if (seconds <= 0) {
            clearInterval(hintTimerId);
            hintTimerId = null;
            timerEl.classList.add('hidden');
            hintEl.classList.remove('hidden');
            document.getElementById('hint-text-content').textContent = hintText;
        }
    }, 1000);
}

function clearHintTimer() {
    if (hintTimerId) {
        clearInterval(hintTimerId);
        hintTimerId = null;
    }
    const hintSection = document.getElementById('hint-section');
    if (hintSection) hintSection.classList.add('hidden');
}

// ========== CALCULATOR ==========

let calcExpression = '';

function toggleCalculator() {
    document.getElementById('calculator-widget').classList.toggle('hidden');
}

function calcInput(val) {
    if (calcExpression === 'Erreur') calcExpression = '';
    calcExpression += val;
    document.getElementById('calc-display').textContent = calcExpression || '0';
}

function calcClear() {
    calcExpression = '';
    document.getElementById('calc-display').textContent = '0';
    document.getElementById('calc-history').textContent = '';
}

function calcBackspace() {
    if (calcExpression === 'Erreur') { calcClear(); return; }
    calcExpression = calcExpression.slice(0, -1);
    document.getElementById('calc-display').textContent = calcExpression || '0';
}

function calcEquals() {
    try {
        let expr = calcExpression.replace(/\^/g, '**');
        const result = new Function('return ' + expr)();
        document.getElementById('calc-history').textContent = calcExpression + ' =';
        calcExpression = String(result);
        document.getElementById('calc-display').textContent = calcExpression;
    } catch {
        document.getElementById('calc-display').textContent = 'Erreur';
        calcExpression = 'Erreur';
    }
}

function calcConvert(base) {
    const str = calcExpression.trim();
    let num;
    if (str.startsWith('0x') || str.startsWith('0X')) num = parseInt(str, 16);
    else if (str.startsWith('0b') || str.startsWith('0B')) num = parseInt(str.slice(2), 2);
    else if (str.startsWith('0o') || str.startsWith('0O')) num = parseInt(str.slice(2), 8);
    else num = parseInt(str);

    if (isNaN(num)) {
        document.getElementById('calc-display').textContent = 'Erreur';
        calcExpression = 'Erreur';
        return;
    }
    document.getElementById('calc-history').textContent = calcExpression + ' → ' + base;
    switch (base) {
        case 'BIN': calcExpression = '0b' + num.toString(2); break;
        case 'HEX': calcExpression = '0x' + num.toString(16).toUpperCase(); break;
        case 'OCT': calcExpression = '0o' + num.toString(8); break;
        case 'DEC': calcExpression = String(num); break;
    }
    document.getElementById('calc-display').textContent = calcExpression;
}

// ========== COURSE TOGGLE ==========

function toggleCourse(moduleId) {
    const content = document.getElementById('course-content-' + moduleId);
    const btn = document.getElementById('course-btn-' + moduleId);
    if (!content) return;
    const isHidden = content.classList.toggle('hidden');
    if (btn) btn.textContent = isHidden ? 'Voir le cours' : 'Masquer le cours';
}

// ========== OEUVRES CATALOG ==========

function renderOeuvresCatalog() {
    const container = document.getElementById('oeuvres-grid');
    const countEl = document.getElementById('oeuvres-count');
    if (!container || typeof OEUVRES === 'undefined') return;

    const activeCat = document.querySelector('.oeuvre-cat-pill.active');
    const activeDiff = document.querySelector('.oeuvre-diff-pill.active');
    const category = activeCat ? activeCat.dataset.category : 'all';
    const difficulty = activeDiff ? activeDiff.dataset.difficulty : 'all';

    let filtered = OEUVRES;
    if (category !== 'all') filtered = filtered.filter(o => o.category === category);
    if (difficulty !== 'all') filtered = filtered.filter(o => o.difficulty === difficulty);

    if (countEl) countEl.textContent = filtered.length + ' oeuvre' + (filtered.length > 1 ? 's' : '');

    container.innerHTML = filtered.map(o => `
        <div class="oeuvre-card" onclick="openOeuvreModal('${o.id}')">
            <div class="oeuvre-cover" style="background:${o.coverGradient}">
                <span class="oeuvre-icon">${o.icon}</span>
                <span class="oeuvre-cover-cat">${o.categoryLabel}</span>
            </div>
            <div class="oeuvre-info">
                <span class="oeuvre-diff-badge diff-${o.difficulty}">${o.diffLabel}</span>
                <h4 class="oeuvre-title">${o.title}</h4>
                <p class="oeuvre-author">${o.author}</p>
            </div>
        </div>
    `).join('');
}

function openOeuvreModal(id) {
    const o = OEUVRES.find(x => x.id === id);
    if (!o) return;
    const modal = document.getElementById('oeuvre-modal');
    modal.innerHTML = `
        <div class="oeuvre-modal-overlay" onclick="closeOeuvreModal()">
            <div class="oeuvre-modal-content" onclick="event.stopPropagation()">
                <button class="oeuvre-modal-close" onclick="closeOeuvreModal()">&times;</button>
                <div class="oeuvre-modal-cover" style="background:${o.coverGradient}">
                    <span class="oeuvre-icon-large">${o.icon}</span>
                </div>
                <div class="oeuvre-modal-badges">
                    <span class="oeuvre-diff-badge diff-${o.difficulty}">${o.diffLabel}</span>
                    <span class="oeuvre-cat-badge">${o.categoryLabel}</span>
                    ${o.year ? '<span class="oeuvre-year-badge">' + o.year + '</span>' : ''}
                </div>
                <h3 class="oeuvre-modal-title">${o.title}</h3>
                <p class="oeuvre-modal-author">${o.author}</p>
                <div class="oeuvre-modal-summary">${o.summary}</div>
                ${o.examTip ? '<div class="oeuvre-modal-exam"><strong>Pour l\'examen :</strong> ' + o.examTip + '</div>' : ''}
                ${o.keyQuote ? '<blockquote class="oeuvre-modal-quote">' + o.keyQuote + '</blockquote>' : ''}
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeOeuvreModal() {
    document.getElementById('oeuvre-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function filterOeuvresCategory(category, btn) {
    document.querySelectorAll('.oeuvre-cat-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderOeuvresCatalog();
}

function filterOeuvresDifficulty(difficulty, btn) {
    document.querySelectorAll('.oeuvre-diff-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderOeuvresCatalog();
}

// ========== PWA INSTALL ==========

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById('install-btn');
    if (btn) btn.style.display = 'block';
});

function installApp() {
    if (!deferredPrompt) {
        // Fallback for iOS / browsers that don't fire beforeinstallprompt
        alert('Pour installer : ouvre le menu de ton navigateur puis "Ajouter a l\'ecran d\'accueil"');
        return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
        const btn = document.getElementById('install-btn');
        if (btn) btn.style.display = 'none';
    });
}

window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('install-btn');
    if (btn) btn.style.display = 'none';
    deferredPrompt = null;
});

// Show install button on iOS (no beforeinstallprompt)
function checkIOSInstall() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
    if (isIOS && !isStandalone) {
        const btn = document.getElementById('install-btn');
        if (btn) btn.style.display = 'block';
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
    updateAllProgressBadges();
    checkIOSInstall();

    // Subject tabs
    document.querySelectorAll('.subject-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const subject = tab.getAttribute('data-subject');
            switchSubject(subject);
            showPage('home-page');
        });
    });

    // CEJM theme pills
    document.querySelectorAll('.nav-pill:not(.locked)').forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.preventDefault();
            const themeNum = parseInt(pill.getAttribute('data-theme'));
            switchTheme(themeNum);
            showPage('home-page');
        });
    });

    // Render oeuvres catalog if available
    if (typeof OEUVRES !== 'undefined') renderOeuvresCatalog();

    // Close modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeOeuvreModal();
    });

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/CEJM-REV/sw.js')
            .catch(() => {});
    }
});
