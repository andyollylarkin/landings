export default function handleKeydown(elementId, removeClass) {
	window.addEventListener('keydown', function (e) {
		var modal = document.getElementById(elementId);
		if (!modal || modal.style.display !== 'flex') return;
		if (e.key === 'Escape') {
			modal.style.display = 'none';
			document.body.classList.remove(removeClass);
		}
	});
}
