// Current year in the footer
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Mobile menu
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

function setMenu(open) {
	navbar.classList.toggle("menu-open", open);
	menuToggle.setAttribute("aria-expanded", String(open));
	menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuToggle.addEventListener("click", () => {
	setMenu(!navbar.classList.contains("menu-open"));
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		setMenu(false);
	}
});
