export default function downloadFile(data) {
	const json = typeof data === "string" ? data : JSON.stringify(data, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	return url;
}
