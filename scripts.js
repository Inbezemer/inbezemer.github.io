/* -- Glow effect -- */

const blob = document.getElementById("blob");

if (blob){
	document.onmousemove = (e) => {
		let x = String(e.clientX) + 'px';
		let y = String(e.clientY) + 'px';
		blob.animate({left: x,top: y}, { duration: 3000, fill: "forwards" });
	}
} 