/* -- Glow effect -- */

const blob = document.getElementById("blob");

if (blob){
	document.onmousemove = (e) => {
		let x = String(e.clientX) + 'px';
		let y = String(e.clientY) + 'px';
		blob.animate({left: x,top: y}, { duration: 300, fill: "forwards" });
	}
} 

document.getElementById("project-gallery").onmousemove = e => {
  for(const card of document.getElementsByClassName("card-border")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

/* -- Parallax -- */
const gallery = document.getElementById("project-gallery");
gallery.addEventListener('scroll', () => {
	for (const img of document.getElementsByClassName('card-content')) {
		const newpos = `${(gallery.scrollLeft / gallery.scrollWidth) * 100}% 30%`;
		img.style.setProperty("background-position", newpos);
	}
});

/* -- Transition -- */
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			if (entry.target.classList.contains('hidden')) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.add('show-delay');
			}
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-delay');
hiddenElements.forEach((el) => observer.observe(el));
											