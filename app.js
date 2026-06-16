// متغيرات الحالة
let currentLetterIndex = 0;
let learnedLetters = new Set();
let attempts = 0;
let correctAnswers = 0;
let currentExerciseAnswer = 0;

// العناصر
const elements = {
    currentLetter: document.getElementById('currentLetter'),
    letterName: document.getElementById('letterName'),
    dutchWord: document.getElementById('dutchWord'),
    speakBtn: document.getElementById('speakBtn'),
    nextBtn: document.getElementById('nextBtn'),
    prevBtn: document.getElementById('prevBtn'),
    playExerciseBtn: document.getElementById('playExerciseBtn'),
    alphabetGrid: document.getElementById('alphabetGrid'),
    exerciseButtons: document.getElementById('exerciseButtons'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    learnedCount: document.getElementById('learnedCount'),
    successRate: document.getElementById('successRate'),
    attemptCount: document.getElementById('attemptCount')
};

// تهيئة التطبيق
function init() {
    createAlphabetGrid();
    displayLetter(currentLetterIndex);
    createExercise();
    updateStats();
    loadFromLocalStorage();
}

// إنشاء شريط الحروف
function createAlphabetGrid() {
    elements.alphabetGrid.innerHTML = '';
    
    dutchAlphabet.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = item.letter;
        btn.onclick = () => selectLetter(index);
        
        if (index === currentLetterIndex) {
            btn.classList.add('active');
        }
        
        elements.alphabetGrid.appendChild(btn);
    });
}

// عرض الحرف الحالي
function displayLetter(index) {
    currentLetterIndex = index;
    const letter = dutchAlphabet[index];
    
    elements.currentLetter.textContent = letter.letter;
    elements.letterName.textContent = letter.name;
    elements.dutchWord.textContent = `${letter.example} - ${letter.exampleArabic}`;
    
    // تحديث الحرف النشط في الشريط
    document.querySelectorAll('.letter-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    // تحديث التمرين
    createExercise();
    updateProgressBar();
}

// اختيار حرف مباشرة
function selectLetter(index) {
    displayLetter(index);
}

// الزر التالي
elements.nextBtn.addEventListener('click', () => {
    if (currentLetterIndex < dutchAlphabet.length - 1) {
        displayLetter(currentLetterIndex + 1);
    } else {
        alert('وصلت إلى آخر حرف! 🎉');
    }
});

// الزر السابق
elements.prevBtn.addEventListener('click', () => {
    if (currentLetterIndex > 0) {
        displayLetter(currentLetterIndex - 1);
    }
});

// نطق الحرف
elements.speakBtn.addEventListener('click', () => {
    speakLetter(currentLetterIndex);
});

// دالة النطق الصوتي
function speakLetter(index) {
    const letter = dutchAlphabet[index];
    const utterance = new SpeechSynthesisUtterance(letter.letter);
    utterance.lang = 'nl-NL'; // اللغة الهولندية
    utterance.rate = 0.8; // سرعة النطق
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

// إنشاء تمرين عشوائي
function createExercise() {
    const correctIndex = currentLetterIndex;
    const correctLetter = dutchAlphabet[correctIndex].letter;
    
    // اختيار 3 خيارات إضافية عشوائية
    const options = new Set([correctIndex]);
    while (options.size < 4) {
        options.add(Math.floor(Math.random() * dutchAlphabet.length));
    }
    
    const optionsArray = Array.from(options).map(i => ({
        index: i,
        letter: dutchAlphabet[i].letter
    }));
    
    // خلط الخيارات
    optionsArray.sort(() => Math.random() - 0.5);
    
    currentExerciseAnswer = correctIndex;
    
    // عرض الخيارات
    elements.exerciseButtons.innerHTML = '';
    optionsArray.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'exercise-btn';
        btn.textContent = option.letter;
        btn.onclick = () => checkAnswer(option.index);
        elements.exerciseButtons.appendChild(btn);
    });
}

// التحقق من الإجابة
function checkAnswer(selectedIndex) {
    attempts++;
    const buttons = document.querySelectorAll('.exercise-btn');
    
    if (selectedIndex === currentExerciseAnswer) {
        correctAnswers++;
        learnedLetters.add(currentExerciseAnswer);
        
        buttons.forEach(btn => {
            if (btn.textContent === dutchAlphabet[selectedIndex].letter) {
                btn.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            alert('✅ إجابة صحيحة! احسنت!');
            createExercise();
        }, 500);
    } else {
        buttons.forEach(btn => {
            if (btn.textContent === dutchAlphabet[selectedIndex].letter) {
                btn.classList.add('incorrect');
            }
            if (btn.textContent === dutchAlphabet[currentExerciseAnswer].letter) {
                btn.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            alert('❌ إجابة خاطئة! الإجابة الصحيحة هي: ' + 
                  dutchAlphabet[currentExerciseAnswer].letter);
            createExercise();
        }, 500);
    }
    
    updateStats();
}

// تشغيل صوت التمرين
elements.playExerciseBtn.addEventListener('click', () => {
    speakLetter(currentExerciseAnswer);
});

// تحديث شريط التقدم
function updateProgressBar() {
    const percentage = ((currentLetterIndex + 1) / dutchAlphabet.length) * 100;
    elements.progressFill.style.width = percentage + '%';
    elements.progressText.textContent = `${currentLetterIndex + 1}/${dutchAlphabet.length}`;
}

// تحديث الإحصائيات
function updateStats() {
    elements.learnedCount.textContent = learnedLetters.size;
    
    if (attempts > 0) {
        const successPercentage = Math.round((correctAnswers / attempts) * 100);
        elements.successRate.textContent = successPercentage + '%';
    }
    
    elements.attemptCount.textContent = attempts;
    
    // حفظ البيانات
    saveToLocalStorage();
}

// حفظ البيانات في التخزين المحلي
function saveToLocalStorage() {
    const data = {
        learnedLetters: Array.from(learnedLetters),
        attempts: attempts,
        correctAnswers: correctAnswers,
        currentLetterIndex: currentLetterIndex
    };
    localStorage.setItem('dutchLearnerData', JSON.stringify(data));
}

// تحميل البيانات من التخزين المحلي
function loadFromLocalStorage() {
    const data = localStorage.getItem('dutchLearnerData');
    if (data) {
        const parsed = JSON.parse(data);
        learnedLetters = new Set(parsed.learnedLetters);
        attempts = parsed.attempts;
        correctAnswers = parsed.correctAnswers;
        updateStats();
    }
}

// زر إعادة تعيين البيانات
window.resetProgress = function() {
    if (confirm('هل تريد حقاً إعادة تعيين كل تقدمك؟ ⚠️')) {
        learnedLetters.clear();
        attempts = 0;
        correctAnswers = 0;
        localStorage.removeItem('dutchLearnerData');
        updateStats();
        alert('تم إعادة تعيين التقدم! ✨');
    }
};

// تبديل الوضع الليلي (اختياري)
window.toggleDarkMode = function() {
    document.body.classList.toggle('dark-mode');
};

// تهيئة التطبيق عند تحميل الصفحة
window.addEventListener('load', init);

// حفظ البيانات تلقائياً عند إغلاق الصفحة
window.addEventListener('beforeunload', saveToLocalStorage);
