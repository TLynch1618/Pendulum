let animation = anime({
	targets: '#rod',
	rotate: [60, -60],
	duration: 3000,
	easing: 'easeInOutSine',
	direction: 'alternate',
	loop: true,
	autoplay: false,
});

document.getElementById("play").onclick = animation.play;
document.getElementById("pause").onclick = animation.pause;
