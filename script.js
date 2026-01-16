let points = 0;

const pointsEl = document.getElementById("points");
const tapBtn = document.getElementById("tapBtn");

tapBtn.onclick = () => {
  points++;
  pointsEl.textContent = points;
};
