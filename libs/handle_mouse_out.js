export function handleMouseOut(elementId, callback) {
	window.addEventListener('mouseout', function (e) {
		if (e.clientY <= 0) {
			callback(e);
		}
	});
}