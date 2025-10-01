const questions = [
    { q: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    { q: "Capital of France?", options: ["Paris", "Rome", "Berlin"], answer: "Paris" }
];

let current = 0, score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

// Load a question
function loadQuestion() {
    questionEl.textContent = questions[current].q;
    optionsEl.innerHTML = "";
    questions[current].options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[current].answer) score++;
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        resultEl.textContent = `Your Score: ${score}/${questions.length}`;
        nextBtn.style.display = "none";
    }
});

// Start quiz
loadQuestion();
nextBtn.style.display = "none";
