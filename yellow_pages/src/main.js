import { handleKeydownCallback } from "../../libs/keydown_handler"
import { handleMouseOut } from "../../libs/handle_mouse_out"
import { clearSavedField, getSavedField, saveField } from "../../libs/save-field"
import handleMouseDrag from "../../libs/handle_mouse_drag"
import downloadFile from "./download.js"
import { initAnalytics } from "../../ga/tmp.js"

const header = document.getElementById('siteHeader');
const mobileBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const yearSpan = document.getElementById('year');

let modalShown = false;

const form = document.querySelector('.contact-grid');

window.onload = () => initAnalytics();

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const data = new FormData(form);

	try {
		const response = await fetch('https://yp.mridata.pro/contact', {
			method: 'POST',
			body: data,
		});


		if (response.ok) {
			alert('Message sent successfully!');
			form.reset();
		} else {
			alert('Failed to send message. Please try again.');
		}
	} catch (error) {
		console.error('Error sending form:', error);
	}
	clearSavedField('form-field-name');
	clearSavedField('form-field-email');
	clearSavedField('form-field-jobtitle');
	clearSavedField('form-field-message');
	saveField('form-field-already_submitted', 'true');
	form.reset();
	alert("Thank you! Our manager will contact you shortly.")
});


// Sticky header background change
function onScroll() {
	if (window.scrollY > 40) header.classList.add('scrolled');
	else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
if (mobileBtn && mainNav) {
	mobileBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		mainNav.classList.toggle('open');
		mobileBtn.classList.toggle('open');
	});

	// Close menu when clicking on a link
	mainNav.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			mainNav.classList.remove('open');
			mobileBtn.classList.remove('open');
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!mainNav.contains(e.target) && !mobileBtn.contains(e.target)) {
			mainNav.classList.remove('open');
			mobileBtn.classList.remove('open');
		}
	});
}

// Modal logic for contact form
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');


handleKeydownCallback('contactModal', (modal) => {
	modal.style.display = 'none';
	document.body.style.overflow = '';
});

handleMouseOut('', () => {
	let alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';

	console.log(alreadySubmitted, modalShown)
	if (alreadySubmitted || modalShown) return;
	modalShown = true;
	contactModal.style.display = 'flex';
	document.body.style.overflow = 'hidden';
})

// Close modal on close button
if (closeContactModal) {
	closeContactModal.addEventListener('click', () => {
		contactModal.style.display = 'none';
		document.body.style.overflow = '';
	});
}

// Close modal on backdrop click (not modal content)
if (contactModal) {
	contactModal.addEventListener('click', e => {
		if (e.target === contactModal) {
			contactModal.style.display = 'none';
			document.body.style.overflow = '';
		}
	});
}

handleMouseDrag(() => {
	let alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';
	if (modalShown || alreadySubmitted) return;
	modalShown = true;
	contactModal.style.display = 'flex';
	document.body.style.overflow = 'hidden';
});

// Testimonial carousel
const testimonials = [...document.querySelectorAll('.testimonial-card')];
const dots = [...document.querySelectorAll('.dot')];
let tIndex = 0;
const prevBtn = document.getElementById('prevTest');
const nextBtn = document.getElementById('nextTest');

function showTest(i) {
	testimonials.forEach((el, idx) => {
		el.classList.toggle('active', idx === i);
	});
	dots.forEach((dot, idx) => {
		dot.classList.toggle('active', idx === i);
	});
}

if (testimonials.length) {
	showTest(tIndex);
	nextBtn?.addEventListener('click', () => {
		tIndex = (tIndex + 1) % testimonials.length;
		showTest(tIndex);
	});
	prevBtn?.addEventListener('click', () => {
		tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
		showTest(tIndex);
	});
	dots.forEach((dot, idx) => {
		dot.addEventListener('click', () => {
			tIndex = idx;
			showTest(tIndex);
		});
	});

	// Auto-rotate every 5 seconds
	setInterval(() => {
		tIndex = (tIndex + 1) % testimonials.length;
		showTest(tIndex);
	}, 5000);
}

// Year in footer
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', (e) => {
		const href = a.getAttribute('href');
		if (href.length > 1) {
			e.preventDefault();
			const target = document.querySelector(href);
			target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

// Scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .feature-block, .stat').forEach(el => {
	el.style.opacity = '0';
	observer.observe(el);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
	const scrolled = window.pageYOffset;
	const heroVisual = document.querySelector('.hero-visual');
	if (heroVisual && scrolled < 600) {
		heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
	}
});

const TOKEN = 'pk.eyJ1IjoibXJpZGF0YXRlYW0iLCJhIjoiY21pZ2h6OHp6MDZuZTNlc2VocjJ4c2phayJ9.IZi32931QDWqMOsPcON70A';

mapboxgl.accessToken = TOKEN;
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v12',
	center: [-73.938317, 40.692339],
	zoom: 1
});

async function geocodeCity(city) {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?access_token=${TOKEN}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error("Geocoding error");
	const json = await res.json();
	if (!json.features.length) throw new Error("City not found");
	return json.features[0].center; // [lon, lat]
}

const BUSINESS_TYPES = {
	// Amenities (удобства)
	'bank': { tag: 'amenity', value: 'bank' },
	'banks': { tag: 'amenity', value: 'bank' },
	'atm': { tag: 'amenity', value: 'atm' },
	'restaurant': { tag: 'amenity', value: 'restaurant' },
	'restaurants': { tag: 'amenity', value: 'restaurant' },
	'cafe': { tag: 'amenity', value: 'cafe' },
	'cafes': { tag: 'amenity', value: 'cafe' },
	'bar': { tag: 'amenity', value: 'bar' },
	'bars': { tag: 'amenity', value: 'bar' },
	'pub': { tag: 'amenity', value: 'pub' },
	'pubs': { tag: 'amenity', value: 'pub' },
	'fast food': { tag: 'amenity', value: 'fast_food' },
	'pharmacy': { tag: 'amenity', value: 'pharmacy' },
	'pharmacies': { tag: 'amenity', value: 'pharmacy' },
	'hospital': { tag: 'amenity', value: 'hospital' },
	'hospitals': { tag: 'amenity', value: 'hospital' },
	'clinic': { tag: 'amenity', value: 'clinic' },
	'clinics': { tag: 'amenity', value: 'clinic' },
	'dentist': { tag: 'amenity', value: 'dentist' },
	'dentists': { tag: 'amenity', value: 'dentist' },
	'doctor': { tag: 'amenity', value: 'doctors' },
	'doctors': { tag: 'amenity', value: 'doctors' },
	'veterinary': { tag: 'amenity', value: 'veterinary' },
	'school': { tag: 'amenity', value: 'school' },
	'schools': { tag: 'amenity', value: 'school' },
	'kindergarten': { tag: 'amenity', value: 'kindergarten' },
	'kindergartens': { tag: 'amenity', value: 'kindergarten' },
	'university': { tag: 'amenity', value: 'university' },
	'universities': { tag: 'amenity', value: 'university' },
	'college': { tag: 'amenity', value: 'college' },
	'colleges': { tag: 'amenity', value: 'college' },
	'library': { tag: 'amenity', value: 'library' },
	'libraries': { tag: 'amenity', value: 'library' },
	'police': { tag: 'amenity', value: 'police' },
	'fire station': { tag: 'amenity', value: 'fire_station' },
	'post office': { tag: 'amenity', value: 'post_office' },
	'fuel': { tag: 'amenity', value: 'fuel' },
	'gas station': { tag: 'amenity', value: 'fuel' },
	'parking': { tag: 'amenity', value: 'parking' },
	'gym': { tag: 'amenity', value: 'gym' },
	'gyms': { tag: 'amenity', value: 'gym' },
	'cinema': { tag: 'amenity', value: 'cinema' },
	'cinemas': { tag: 'amenity', value: 'cinema' },
	'theatre': { tag: 'amenity', value: 'theatre' },
	'theatres': { tag: 'amenity', value: 'theatre' },
	'nightclub': { tag: 'amenity', value: 'nightclub' },
	'nightclubs': { tag: 'amenity', value: 'nightclub' },

	// Shops (магазины)
	'supermarket': { tag: 'shop', value: 'supermarket' },
	'supermarkets': { tag: 'shop', value: 'supermarket' },
	'convenience': { tag: 'shop', value: 'convenience' },
	'bakery': { tag: 'shop', value: 'bakery' },
	'bakeries': { tag: 'shop', value: 'bakery' },
	'bakers': { tag: 'shop', value: 'bakery' },
	'butcher': { tag: 'shop', value: 'butcher' },
	'butchers': { tag: 'shop', value: 'butcher' },
	'clothes': { tag: 'shop', value: 'clothes' },
	'clothing': { tag: 'shop', value: 'clothes' },
	'shoes': { tag: 'shop', value: 'shoes' },
	'bookshop': { tag: 'shop', value: 'books' },
	'bookshops': { tag: 'shop', value: 'books' },
	'bookstore': { tag: 'shop', value: 'books' },
	'bookstores': { tag: 'shop', value: 'books' },
	'florist': { tag: 'shop', value: 'florist' },
	'florists': { tag: 'shop', value: 'florist' },
	'furniture': { tag: 'shop', value: 'furniture' },
	'hardware': { tag: 'shop', value: 'hardware' },
	'jewelry': { tag: 'shop', value: 'jewelry' },
	'jewellery': { tag: 'shop', value: 'jewelry' },
	'mall': { tag: 'shop', value: 'mall' },
	'shopping mall': { tag: 'shop', value: 'mall' },
	'electronics': { tag: 'shop', value: 'electronics' },
	'mobile phone': { tag: 'shop', value: 'mobile_phone' },
	'computer': { tag: 'shop', value: 'computer' },
	'bicycle': { tag: 'shop', value: 'bicycle' },
	'car': { tag: 'shop', value: 'car' },
	'car dealer': { tag: 'shop', value: 'car' },
	'hairdresser': { tag: 'shop', value: 'hairdresser' },
	'hairdressers': { tag: 'shop', value: 'hairdresser' },
	'beauty': { tag: 'shop', value: 'beauty' },
	'beauty salon': { tag: 'shop', value: 'beauty' },
	'tattoo': { tag: 'shop', value: 'tattoo' },
	'laundry': { tag: 'shop', value: 'laundry' },
	'dry cleaning': { tag: 'shop', value: 'dry_cleaning' },
	'pet': { tag: 'shop', value: 'pet' },
	'pet shop': { tag: 'shop', value: 'pet' },
	'alcohol': { tag: 'shop', value: 'alcohol' },
	'liquor': { tag: 'shop', value: 'alcohol' },

	// Offices (офисы)
	'lawyer': { tag: 'office', value: 'lawyer' },
	'lawyers': { tag: 'office', value: 'lawyer' },
	'accountant': { tag: 'office', value: 'accountant' },
	'accountants': { tag: 'office', value: 'accountant' },
	'insurance': { tag: 'office', value: 'insurance' },
	'estate agent': { tag: 'office', value: 'estate_agent' },
	'real estate': { tag: 'office', value: 'estate_agent' },
	'architect': { tag: 'office', value: 'architect' },
	'architects': { tag: 'office', value: 'architect' },
	'company': { tag: 'office', value: 'company' },
	'government': { tag: 'office', value: 'government' },

	// Tourism (туризм)
	'hotel': { tag: 'tourism', value: 'hotel' },
	'hotels': { tag: 'tourism', value: 'hotel' },
	'hostel': { tag: 'tourism', value: 'hostel' },
	'hostels': { tag: 'tourism', value: 'hostel' },
	'motel': { tag: 'tourism', value: 'motel' },
	'motels': { tag: 'tourism', value: 'motel' },
	'museum': { tag: 'tourism', value: 'museum' },
	'museums': { tag: 'tourism', value: 'museum' },
	'attraction': { tag: 'tourism', value: 'attraction' },
	'attractions': { tag: 'tourism', value: 'attraction' },
	'viewpoint': { tag: 'tourism', value: 'viewpoint' },
	'zoo': { tag: 'tourism', value: 'zoo' },
	'aquarium': { tag: 'tourism', value: 'aquarium' },

	// Leisure (досуг)
	'park': { tag: 'leisure', value: 'park' },
	'parks': { tag: 'leisure', value: 'park' },
	'playground': { tag: 'leisure', value: 'playground' },
	'playgrounds': { tag: 'leisure', value: 'playground' },
	'sports centre': { tag: 'leisure', value: 'sports_centre' },
	'sports center': { tag: 'leisure', value: 'sports_centre' },
	'stadium': { tag: 'leisure', value: 'stadium' },
	'stadiums': { tag: 'leisure', value: 'stadium' },
	'swimming pool': { tag: 'leisure', value: 'swimming_pool' },
	'golf course': { tag: 'leisure', value: 'golf_course' },

	// Craft (ремесла)
	'carpenter': { tag: 'craft', value: 'carpenter' },
	'carpenters': { tag: 'craft', value: 'carpenter' },
	'electrician': { tag: 'craft', value: 'electrician' },
	'electricians': { tag: 'craft', value: 'electrician' },
	'plumber': { tag: 'craft', value: 'plumber' },
	'plumbers': { tag: 'craft', value: 'plumber' },
	'painter': { tag: 'craft', value: 'painter' },
	'painters': { tag: 'craft', value: 'painter' },
	'photographer': { tag: 'craft', value: 'photographer' },
	'photographers': { tag: 'craft', value: 'photographer' }
};

async function searchBusiness(city, business) {
	const [lon, lat] = await geocodeCity(city);
	const businessLower = business.toLowerCase().trim();

	// Ищем в словаре
	const businessType = BUSINESS_TYPES[businessLower];

	if (!businessType) {
		throw new Error(`Business type "${business}" not supported. Please use one of the predefined types.`);
	}

	console.log(`Searching ${businessLower} (${businessType.tag}=${businessType.value}) near ${lat}, ${lon}`);

	const query = `
		[out:json][timeout:25];
		(
			node["${businessType.tag}"="${businessType.value}"](around:10000,${lat},${lon});
			way["${businessType.tag}"="${businessType.value}"](around:10000,${lat},${lon});
		);
		out center;
	`;

	const res = await fetch("https://overpass-api.de/api/interpreter", {
		method: "POST",
		body: query
	});

	if (!res.ok) throw new Error("Overpass error");
	return res.json();
}

// Функция для получения списка доступных типов
function getAvailableBusinessTypes() {
	return Object.keys(BUSINESS_TYPES).sort();
}

async function addMarkers(markers) {
	markers.forEach(marker => {
		const el = document.createElement('div');
		el.className = 'custom-marker';
		const tags = marker.tags;
		const filtered = {
			...tags,
			tags: Object.fromEntries(Object.entries(marker.tags).filter(([_, v]) => v !== ""))
		}.tags;


		// Create popup HTML with Tailwind classes
		let html = '<div class="min-w-[250px] max-w-[350px] font-sans">';

		// Add title if available
		const title = filtered.name || filtered.title || filtered.business_name || 'Business';
		if (title && title !== 'Business') {
			html += `
				<div class="pb-3 mb-3 border-b-2 border-slate-200">
					<h3 class="m-0 text-base font-bold text-slate-900 leading-tight">${title}</h3>
				</div>
			`;
		}

		// Add other fields
		html += '<div class="flex flex-col gap-2.5">';

		for (const [key, value] of Object.entries(filtered)) {
			if (!value || !key) continue;
			if (value.length < 10) continue;
			if (key === 'name' || key === 'title' || key === 'business_name') continue; // Skip title fields as they're already shown

			// Check if value is a URL
			if (value.includes('http')) {
				html += `
					<div class="flex items-start gap-2">
						<div class="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-green-500 mt-1.5 flex-shrink-0"></div>
						<div class="flex-1 min-w-0">
							<span class="text-slate-500 text-xs font-medium capitalize">${key.replace(/_/g, ' ')}:</span>
							<a href="${value}" 
								target="_blank" 
								class="text-blue-600 text-sm no-underline block mt-0.5 break-all hover:text-blue-700 hover:underline transition-colors duration-200"
							>${value}</a>
						</div>
					</div>
				`;
			} else {
				html += `
					<div class="flex items-start gap-2">
						<div class="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-green-500 mt-1.5 flex-shrink-0"></div>
						<div class="flex-1 min-w-0">
							<span class="text-slate-500 text-xs font-medium capitalize">${key.replace(/_/g, ' ')}:</span>
							<span class="text-slate-900 text-sm block mt-0.5 leading-relaxed">${value}</span>
						</div>
					</div>
				`;
			}
		}


		html += '</div>';

		// Create popup with custom styling
		const popup = new mapboxgl.Popup({
			offset: 25,
			className: 'custom-mapbox-popup',
			maxWidth: '350px'
		}).setHTML(html);

		new mapboxgl.Marker(el)
			.setLngLat([marker.lon, marker.lat])
			.setPopup(popup)
			.addTo(map);
	});
}

const searchSelect = document.getElementById('business-types');
if (searchSelect) {
	// Заполняем селект доступными типами
	const types = getAvailableBusinessTypes();
	types.forEach(type => {
		const option = document.createElement('option');
		option.value = type;
		option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
		searchSelect.appendChild(option);
	});
}

// remove mapbox identity
document.querySelector(".mapboxgl-ctrl-logo").remove()
document.querySelector(".mapboxgl-ctrl-attrib-inner").remove()


const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const mapBlockscreen = document.getElementById('map-block')
	mapBlockscreen.classList.remove('map-block-hide')
	mapBlockscreen.classList.add('map-block-show')

	const business = document.getElementById('business-types').value;
	const location = document.querySelector('.search-form input[aria-label="location"]').value;
	try {
		const data = await searchBusiness(location, business);
		if (data.elements.length > 0) {
			map.flyTo({
				center: [data.elements[0].lon, data.elements[0].lat],
				zoom: 12
			});
			mapBlockscreen.classList.remove('map-block-show')
			mapBlockscreen.classList.add('map-block-hide')

			const dp = new DOMParser();
			const parsedIcon = dp.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>`, "image/svg+xml")

			const link = document.createElement('a');
			const filename = `${business}_${location}_business_tags.json`;
			const allTags = data.elements.map(el => el.tags);
			const url = downloadFile(allTags);
			link.href = url;
			link.download = filename;
			link.innerText = 'Download results';
			link.style.position = 'absolute';
			link.style.top = '10px';
			link.style.left = '10px';
			link.style.zIndex = '7';
			link.style.padding = '8px 12px';
			link.style.backgroundColor = '#2563eb';
			link.style.color = '#ffffff';
			link.style.borderRadius = '4px';
			link.style.textDecoration = 'none';
			link.style.fontSize = '14px';
			link.style.display = 'flex';
			link.style.alignItems = 'center';
			link.style.gap = '6px';
			link.style.flexDirection = 'row';
			link.appendChild(parsedIcon.documentElement);

			document.querySelector('.hero-map').appendChild(link)

			addMarkers(data.elements);

			console.log(`Found ${data.elements.length} businesses for ${business} in ${location}`);
			return;
		}
		const noContent = document.createElement('div');
		noContent.textContent = 'No businesses found.';
		noContent.style.position = 'absolute';
		noContent.style.top = '10px';
		noContent.style.left = '10px';
		noContent.style.zIndex = '7';
		noContent.style.padding = '8px 12px';
		noContent.style.backgroundColor = '#ef4444';
		noContent.style.color = '#ffffff';
		noContent.style.borderRadius = '4px';
		noContent.style.fontSize = '14px';

		document.querySelector('.hero-map').appendChild(noContent)

		setTimeout(() => {
			noContent.remove();
		}, 5000);

		console.log(`No businesses found for ${business} in ${location}`);
		mapBlockscreen.classList.remove('map-block-show')
		mapBlockscreen.classList.add('map-block-hide')
		// Clear existing markers
	} catch (e) {
		console.error(e);
		const noContent = document.createElement('div');
		noContent.textContent = 'No businesses found.';
		noContent.style.position = 'absolute';
		noContent.style.top = '10px';
		noContent.style.left = '10px';
		noContent.style.zIndex = '7';
		noContent.style.padding = '8px 12px';
		noContent.style.backgroundColor = '#ef4444';
		noContent.style.color = '#ffffff';
		noContent.style.borderRadius = '4px';
		noContent.style.fontSize = '14px';

		document.querySelector('.hero-map').appendChild(noContent)

		setTimeout(() => {
			noContent.remove();
		}, 5000);

		console.log(`No businesses found for ${business} in ${location}`);
		mapBlockscreen.classList.remove('map-block-show')
		mapBlockscreen.classList.add('map-block-hide')
	}

});

// handle inputs
document.querySelectorAll('input[name="name"], input[name="email"], input[name="jobtitle"], textarea[name="message"]').forEach(input => {
	input.addEventListener('input', (e) => {
		saveField(`form-field-${input.name}`, input.value);
	});
	input.addEventListener('focus', (e) => {
		input.classList.remove('input-error');
	});
	// Load saved value
	const saved = getSavedField(`form-field-${input.name}`);
	if (saved) {
		input.value = saved;
	}
});