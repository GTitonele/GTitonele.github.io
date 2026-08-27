const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
	link.addEventListener("click", (event) => {
		const targetId = link.getAttribute("href");

		if (targetId === "#") {
			return;
		}

		const target = document.querySelector(targetId);

		if (!target) {
			return;
		}

		event.preventDefault();

		target.scrollIntoView({
			behavior: "smooth"
		});
	});
});