const modal = document.getElementById("questionModal");
const submitBtn = document.getElementById("submitQuestion");
const input = document.getElementById("userQuestion");
const questionBox = document.getElementById("questionBox");
const ball = document.getElementById("magicBall");
const answerEl = document.getElementById("answer");

const answers = ["Yes", "No", "Maybe", "Ask again later"];

window.onload = () => {
  modal.style.display = "flex";
};

submitBtn.onclick = () => {
  const text = input.value.trim();

  if (text === "") {
    alert("Введіть, будь ласка, запитання!");
    return;
  }

  if (!text.includes("?")) {
    alert("Введіть, будь ласка, знак питання '?'!");
    return;
  }

  questionBox.textContent = text;
  modal.style.display = "none";
  answerEl.textContent = "-";
};

ball.addEventListener("click", () => {
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  answerEl.textContent = randomAnswer;
});
