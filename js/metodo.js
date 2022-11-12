const navToggle = document.querySelector(".nav-toggle");
const Menu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    Menu.classList.toggle("menu_visible");
});