const backscrollState = {
	passedHalf: false,
	triggeredAt: null,
	lastScrollY: 0,
	listener: null,
	callback: null,
	alreadyTriggered: false,
};

const ensureListener = () => {
	if (backscrollState.listener || typeof window === "undefined" || typeof document === "undefined") {
		return;
	}

	const doc = document.documentElement;
	backscrollState.lastScrollY = window.scrollY || doc.scrollTop || 0;

	backscrollState.listener = () => {
		const scrollableHeight = doc.scrollHeight - doc.clientHeight;
		const currentScroll = window.scrollY || doc.scrollTop || 0;
		const progress = scrollableHeight > 0 ? currentScroll / scrollableHeight : 0;
		const isScrollingUp = currentScroll < backscrollState.lastScrollY;

		if (progress >= 0.5) {
			backscrollState.passedHalf = true;
		}

		const scrolledBackUpRatio = backscrollState.triggeredAt
			? (backscrollState.triggeredAt - currentScroll) / (scrollableHeight || 1)
			: 0;

		if (progress >= 0.5 && backscrollState.triggeredAt === null) {
			backscrollState.passedHalf = true;
			backscrollState.triggeredAt = currentScroll;
		}

		if (
			backscrollState.passedHalf &&
			backscrollState.triggeredAt !== null &&
			isScrollingUp &&
			scrolledBackUpRatio >= 0.2
		) {
			backscrollState.passedHalf = false;
			backscrollState.triggeredAt = null;
			if (typeof backscrollState.callback === "function") {
				if (backscrollState.alreadyTriggered) {
					// Already initialized
					return;
				}
				backscrollState.alreadyTriggered = true;
				backscrollState.callback();
			}
		}

		backscrollState.lastScrollY = currentScroll;
	};

	window.addEventListener("scroll", backscrollState.listener, { passive: true });
};

export function handleBackscroll(callback) {
	if (typeof callback !== "function") {
		return;
	}


	backscrollState.callback = callback;
	ensureListener();
}