let points = parseInt(localStorage.getItem("points")) || 0;

const pointsEl = document.getElementById("points");
const tapBtn = document.getElementById("tapBtn");

pointsEl.textContent = points;

tapBtn.addEventListener("click", () => {
  points++;
  pointsEl.textContent = points;
  localStorage.setItem("points", points);
});
