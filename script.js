let points = Number(localStorage.getItem("points")) || 0;
let incomePerSecond = Number(localStorage.getItem("income")) || 1;
let upgradeCost = Number(localStorage.getItem("upgradeCost")) || 50;

const pointsEl = document.getElementById("points");
const incomeEl = document.getElementById("income");
const tapBtn = document.getElementById("tapBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

function render() {
  pointsEl.textContent = points;
  incomeEl.textContent = incomePerSecond;
  localStorage.setItem("points", points);
  localStorage.setItem("income", incomePerSecond);
  localStorage.setItem("upgradeCost", upgradeCost);
  upgradeBtn.textContent = `Buy +5/sec (${upgradeCost})`;
}

tapBtn.addEventListener("click", () => {
  points++;
  render();
});

upgradeBtn.addEventListener("click", () => {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    incomePerSecond += 5;
    upgradeCost = Math.floor(upgradeCost * 1.6);
    render();
  }
});

// idle
setInterval(() => {
  points += incomePerSecond;
  render();
}, 1000);

render();
