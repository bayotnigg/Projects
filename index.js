const button = document.querySelectorAll(".collapsible");
const content = document.querySelector(".content");
let i;

for (i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		this.classList.toggle("active");
		content.classList.toggle("active");
	});
}

//scroll anim

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElems = document.querySelectorAll(".scroll");
const hiddenElemsRight = document.querySelectorAll(".scroll-right");
hiddenElems.forEach((el) => observer.observe(el));
hiddenElemsRight.forEach((el) => observer.observe(el));
