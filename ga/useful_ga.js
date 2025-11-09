export function trackFieldInteraction(fieldName, interactionType) {
	gtag('event', 'field_interaction', {
		'field_name': fieldName,
		'interaction_type': interactionType
	});
}

export function trackScrollDepth(depthPercentage) {
	gtag('event', 'scroll_depth', {
		'depth_percentage': depthPercentage,
	});
}

export function buttonClick(buttonName) {
	gtag('event', 'button_click', {
		'button_name': buttonName
	});
}

export function ctaPathClick(ctaName, path) {
	gtag('event', 'cta_path_click', {
		'cta_name': ctaName,
		'path': path
	});
}
