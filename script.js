let points = 0;

const pointsEl = document.getElementById("points");
const tapBtn = document.getElementById("tapBtn");

tapBtn.addEventListener("click", () => {
  points++;
  pointsEl.textContent = points;
});
