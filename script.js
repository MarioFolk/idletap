// load saved state
let points = Number(localStorage.getItem("points")) || 0;

const pointsEl = document.getElementById("points");
const tapBtn = document.getElementById("tapBtn");

// update UI
function update() {
  pointsEl.textContent = points;
}

// tap button
tapBtn.addEventListener("click", () => {
  points++;
  localStorage.setItem("points", points);
  update();
});

// init
update();
