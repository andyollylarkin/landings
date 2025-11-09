// === CONFIGURATION ===
const CONFIG = {
	scrollPoints: [10, 25, 50, 75, 90, 100],
	timePoints: [15, 30, 60, 120, 180, 300],
	sections: {
		'hero': '.hero-section',
		'problem': '.problem-section',
		'solution': '.solution-section',
		'results': '.results-section',
		'cta': '.cta-section'
	}
};

// === GLOBAL STATE ===
let pageLoadTime = Date.now();
let scrollTracked = {};
let timeTracked = {};
let sectionsViewed = [];
let ctaClicked = false;

// === HELPER FUNCTIONS ===
function getCurrentScrollPercent() {
	return Math.round(
		(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
	);
}

function getCTAPosition(element) {
	const rect = element.getBoundingClientRect();
	const pageHeight = document.documentElement.scrollHeight;
	const elementTop = rect.top + window.scrollY;

	if (elementTop < pageHeight * 0.33) return 'top';
	if (elementTop < pageHeight * 0.66) return 'middle';
	return 'bottom';
}

function getDeviceType() {
	const width = window.innerWidth;
	if (width < 768) return 'mobile';
	if (width < 1024) return 'tablet';
	return 'desktop';
}

function throttle(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// === TRACKING FUNCTIONS ===

// 1. Scroll Depth
function trackScrollDepth() {
	const scrollPercent = getCurrentScrollPercent();

	CONFIG.scrollPoints.forEach(point => {
		if (scrollPercent >= point && !scrollTracked[point]) {
			gtag('event', 'scroll_depth', {
				'depth_percentage': point,
				'time_to_depth': Math.round((Date.now() - pageLoadTime) / 1000)
			});
			scrollTracked[point] = true;
		}
	});
}

// 2. Time on Page
function initTimeTracking() {
	CONFIG.timePoints.forEach(seconds => {
		setTimeout(() => {
			if (!timeTracked[seconds] && document.visibilityState === 'visible') {
				gtag('event', 'time_on_page', {
					'seconds': seconds,
					'scroll_depth_at_time': getCurrentScrollPercent()
				});
				timeTracked[seconds] = true;
			}
		}, seconds * 1000);
	});
}

// 3. Section Views
function trackSectionViews() {
	Object.entries(CONFIG.sections).forEach(([name, selector]) => {
		const element = document.querySelector(selector);
		if (!element) return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
					if (!sectionsViewed.includes(name)) {
						gtag('event', 'section_view', {
							'section_name': name,
							'time_from_load': Math.round((Date.now() - pageLoadTime) / 1000)
						});
						sectionsViewed.push(name);
					}
					observer.disconnect();
				}
			});
		}, { threshold: 0.5 });

		observer.observe(element);
	});
}

// 4. CTA Clicks
function trackCTAClicks() {
	document.querySelectorAll('[data-cta], .cta-button, .cta-link').forEach(button => {
		button.addEventListener('click', (e) => {
			ctaClicked = true;
			gtag('event', 'cta_click', {
				'cta_text': e.target.innerText.trim().substring(0, 50),
				'cta_position': getCTAPosition(e.target),
				'scroll_depth_at_click': getCurrentScrollPercent(),
				'time_on_page_at_click': Math.round((Date.now() - pageLoadTime) / 1000),
				'sections_viewed': sectionsViewed.join(',')
			});
		});
	});
}

// 5. Engagement Score
function calculateEngagementScore() {
	let score = 0;

	// Scroll (30 points)
	score += Math.min(getCurrentScrollPercent() / 100 * 30, 30);

	// Time (40 points)
	const timeSeconds = Math.round((Date.now() - pageLoadTime) / 1000);
	score += Math.min(timeSeconds / 180 * 40, 40);

	// Sections (20 points)
	score += Math.min(sectionsViewed.length / Object.keys(CONFIG.sections).length * 20, 20);

	// Return visitor (10 points)
	if (localStorage.getItem('returning_visitor')) {
		score += 10;
	}

	return Math.round(score);
}

function trackEngagement() {
	const score = calculateEngagementScore();
	const qualityTier = score > 70 ? 'hot' : score > 40 ? 'warm' : 'cold';

	gtag('event', 'engagement_score', {
		'score': score,
		'quality_tier': qualityTier,
		'scroll_depth': getCurrentScrollPercent(),
		'time_spent': Math.round((Date.now() - pageLoadTime) / 1000),
		'sections_viewed_count': sectionsViewed.length,
		'sections_viewed_list': sectionsViewed.join(','),
		'cta_clicked': ctaClicked,
		'device_type': getDeviceType()
	});

	localStorage.setItem('returning_visitor', 'true');
}

// 6. Copy Text
function trackTextCopy() {
	document.addEventListener('copy', () => {
		const selectedText = window.getSelection().toString().trim();
		if (selectedText.length > 10) {
			gtag('event', 'text_copy', {
				'text_length': selectedText.length,
				'text_preview': selectedText.substring(0, 50)
			});
		}
	});
}

// 7. Page Performance
function trackPerformance() {
	window.addEventListener('load', () => {
		setTimeout(() => {
			const perfData = performance.timing;
			const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

			gtag('event', 'page_performance', {
				'load_time_ms': pageLoadTime,
				'load_time_seconds': Math.round(pageLoadTime / 1000),
				'device_type': getDeviceType()
			});
		}, 0);
	});
}

// === INITIALIZATION ===
function initAnalytics() {
	// Initial page view
	gtag('event', 'page_view', {
		'page_title': document.title,
		'device_type': getDeviceType(),
		'returning_visitor': localStorage.getItem('returning_visitor') === 'true'
	});

	// Start tracking
	initTimeTracking();
	trackSectionViews();
	trackCTAClicks();
	trackTextCopy();
	trackPerformance();

	// Scroll tracking (throttled)
	window.addEventListener('scroll', throttle(trackScrollDepth, 200));

	// Engagement score on exit
	window.addEventListener('beforeunload', trackEngagement);

	// Also track engagement on visibility change (tab switch)
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			trackEngagement();
		}
	});
}

// Start when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAnalytics);
} else {
	initAnalytics();
}