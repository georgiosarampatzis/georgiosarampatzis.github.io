const root = document.documentElement;
const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const currentYear = document.getElementById("currentYear");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
  themeButton.textContent = savedTheme === "dark" ? "☀" : "☾";
}

themeButton.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  if (nextTheme === "light") {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = "dark";
  }

  localStorage.setItem("theme", nextTheme);
  themeButton.textContent = nextTheme === "dark" ? "☀" : "☾";
});

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

currentYear.textContent = new Date().getFullYear();
