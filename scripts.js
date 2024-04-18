/* -- Glow effect -- */

const blob = document.getElementById("blob");

if (blob){
	document.onmousemove = (e) => {
		let x = String(e.clientX) + 'px';
		let y = String(e.clientY) + 'px';
		blob.animate({left: x,top: y}, { duration: 3000, fill: "forwards" });
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