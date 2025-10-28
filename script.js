const q = document.createElement("div");
q.className = "question";
q.textContent = "Чи буде завтра сонячно?";

const ball = document.createElement("div");
ball.className = "ball";

const answer = document.createElement("div");
const answers = ["Yes", "No", "Maybe", "Ask again later"];
answer.textContent = answers[Math.floor(Math.random() * answers.length)];

ball.appendChild(answer);
document.body.append(q, ball);

ball.addEventListener("click", () => {
  answer.textContent = answers[Math.floor(Math.random() * answers.length)];
});
