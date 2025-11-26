export function saveField(field, value) {
	localStorage.setItem(`form-field-${field}`, value);
}

export function getSavedField(field) {
	return localStorage.getItem(`form-field-${field}`);
}

export function clearSavedField(field) {
	localStorage.removeItem(`form-field-${field}`);
}