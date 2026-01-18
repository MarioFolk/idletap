// ======= ZÁKLADNÉ PREMENNÉ =======
let points = Number(localStorage.getItem("points")) || 0;
let incomePerSecond = Number(localStorage.getItem("income")) || 1;
let upgradeCost = Number(localStorage.getItem("upgradeCost")) || 50;
let prestige = Number(localStorage.getItem("prestige")) || 0;
let donateShown = false;

// ======= ELEMENTY =======
const pointsEl = document.getElementById("points");
const incomeEl = document.getElementById("income");
const prestigeEl = document.getElementById("prestige");
const tapBtn = document.getElementById("tapBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const prestigeBtn = document.getElementById("prestigeBtn");
const supporterBadge = document.getElementById("supporterBadge");

// ======= RENDER FUNKCIA =======
function render() {
  pointsEl.textContent = points;
  incomeEl.textContent = Math.floor(incomePerSecond * (1 + prestige));
  prestigeEl.textContent = prestige;

  localStorage.setItem("points", points);
  localStorage.setItem("income", incomePerSecond);
  localStorage.setItem("upgradeCost", upgradeCost);
  localStorage.setItem("prestige", prestige);

  upgradeBtn.textContent = `Buy +5/sec (${upgradeCost})`;
}

// ======= TAP =======
tapBtn.addEventListener("click", () => {
  points++;
  render();
});

// ======= UPGRADE =======
upgradeBtn.addEventListener("click", () => {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    incomePerSecond += 5;
    upgradeCost = Math.floor(upgradeCost * 1.6);
    render();
  }
});

// ======= PRESTIGE =======
prestigeBtn.addEventListener("click", () => {
  if (points >= 1000) {
    prestige++;
    points = 0;
    incomePerSecond = 1;
    upgradeCost = 50;
    render();
    showDonate();
  }
});

// ======= IDLE LOOP =======
setInterval(() => {
  points += incomePerSecond * (1 + prestige);
  render();
}, 1000);

// ======= DONATE POPUP =======
function showDonate() {
  if (donateShown) return;
  donateShown = true;
  document.getElementById("donatePopup").style.display = "flex";
}

function closeDonate() {
  document.getElementById("donatePopup").style.display = "none";
}

// ======= SUPPORTER DETEKCIA + BONUS =======
function activateSupporterBonus() {
  if (localStorage.getItem("supported") === "yes") {
    supporterBadge.style.display = "block";
    incomePerSecond = incomePerSecond * 1.05; // +5% passive income
  }
}

window.addEventListener("load", () => {
  activateSupporterBonus();
  if (localStorage.getItem("supported") === "yes") {
    console.log("❤️ Supporter detected (on page load)");
  }
});

// Klik na Donate link
document.querySelectorAll('a[href*="buymeacoffee"]').forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("supported", "yes");
    console.log("❤️ Supporter detected (clicked)");
    activateSupporterBonus();
  });
});

// ======= PRVÝ RENDER =======
render();
