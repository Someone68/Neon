function openBuggedGame() {
	window.open("mailto:68.someone.m@gmail.com?subject=Bugged%20Game");
}
try {
	var i = 0;
	var txt = "NEON"; /* The text */
	var speed = 50; /* The speed/duration of the effect in milliseconds */

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById("title").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
	typeWriter();
} catch (err) {
	console.log(err);
}
