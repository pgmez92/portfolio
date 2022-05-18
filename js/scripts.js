let toggleTheme = document.querySelector(".toggle-theme");
let icon = document.querySelector(".toggle-theme_icon");
let text = document.querySelector(".toggle-theme_text");
let toggleColor = document.querySelector(".colors");
let rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (icon.src.includes("moon.svg")) {
    icon.src = "assets/icons/sun.svg";
    text.textContent = "Light Mode";
  } else {
    icon.src = "assets/icons/moon.svg";
    text.textContent = "Dark Mode";
  }
});

toggleColor.addEventListener("click", (e) => {
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
