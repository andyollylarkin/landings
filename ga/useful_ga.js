export function trackFieldInteraction(fieldName, interactionType) {
	gtag('event', 'field_interaction', {
		'field_name': fieldName,
		'interaction_type': interactionType
	});
}