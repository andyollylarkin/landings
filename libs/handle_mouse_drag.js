export default function handleNoPageAction(callback) {
	let timer = null;
	function resetTimer() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			callback();
		}, 60000);
	}
	window.addEventListener('mousemove', resetTimer);
	window.addEventListener('touchstart', resetTimer);
	window.addEventListener('touchmove', resetTimer);
	window.addEventListener('scroll', resetTimer);
	resetTimer();
}