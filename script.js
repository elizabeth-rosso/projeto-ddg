const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    } else {
        navbar.classList.add("active");
    }
});