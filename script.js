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

	var i2 = 0;
	var txt2 =
		"It is a platformer.\n Use arrow keys to move.\n Press the up arrowkey to jump.\n Don't touch lava.\n Press the X to exit.\n Collect all the coins to go to the next level.\n Supported devices: Chrome OS, MacOS, and Windows."; /* The text */
	var speed2 = 20; /* The speed/duration of the effect in milliseconds */

	function typeWriterinst() {
		if (i2 < txt2.length) {
			document.getElementById("inst").innerHTML += txt2.charAt(i2);
			i2++;
			setTimeout(typeWriterinst, speed2);
		}
	}
	typeWriterinst();
} catch (err) {
	console.log(err);
}
