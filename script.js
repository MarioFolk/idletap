let points = parseInt(localStorage.getItem("points")) || 0;
let incomePerSecond = parseInt(localStorage.getItem("income")) || 1;

const pointsEl = document.getElementById("points");
const tapBtn = document.getElementById("tapBtn");

pointsEl.textContent = points;

// klik
tapBtn.addEventListener("click", () => {
  points++;
  update();
});

// idle income – každú sekundu
setInterval(() => {
  points += incomePerSecond;
  update();
}, 1000);

function update() {
  pointsEl.textContent = points;
  localStorage.setItem("points", points);
  localStorage.setItem("income", incomePerSecond);
}
