// Detect supporter on page load
if (localStorage.getItem("supported") === "yes") {
  console.log("❤️ Supporter detected");
}

let donateShown = false;
let points = Number(localStorage.getItem("points")) || 0;
let incomePerSecond = Number(localStorage.getItem("income")) || 1;
let upgradeCost = Number(localStorage.getItem("upgradeCost")) || 50;
let prestige = Number(localStorage.getItem("prestige")) || 0;

const pointsEl = document.getElementById("points");
const incomeEl = document.getElementById("income");
const prestigeEl = document.getElementById("prestige");
const tapBtn = document.getElementById("tapBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const prestigeBtn = document.getElementById("prestigeBtn");

function render() {
  pointsEl.textContent = points;
  incomeEl.textContent = incomePerSecond * (1 + prestige);
  prestigeEl.textContent = prestige;

  localStorage.setItem("points", points);
  localStorage.setItem("income", incomePerSecond);
  localStorage.setItem("upgradeCost", upgradeCost);
  localStorage.setItem("prestige", prestige);

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

prestigeBtn.addEventListener("click", () => {
  if (points >= 1000) {
    prestige++;
    points = 0;
    incomePerSecond = 1;
    upgradeCost = 50;
    render();
    showDonate(); // 👈 TU
  }
});


// idle
setInterval(() => {
  points += incomePerSecond * (1 + prestige);
  render();
}, 1000);

render();

function showDonate() {
  if (donateShown) return;
  donateShown = true;
  document.getElementById("donatePopup").style.display = "flex";
}

function closeDonate() {
  document.getElementById("donatePopup").style.display = "none";
}

document.querySelectorAll('a[href*="buymeacoffee"]').forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("supported", "yes");
  });
});
