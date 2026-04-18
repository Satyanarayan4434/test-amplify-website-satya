const btn = document.getElementById("btn");
const themeBtn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  btn.innerText = "🔥 Let's Go!";
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.innerText = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});