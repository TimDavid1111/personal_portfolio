import { useEffect, useCallback } from "react";

/**
 * Custom hook for performance optimizations
 */
export const usePerformance = () => {
	// Debounce function for scroll events
	const debounce = useCallback((func: Function, wait: number) => {
		let timeout: NodeJS.Timeout;
		return (...args: any[]) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(null, args), wait);
		};
	}, []);

	// Throttle function for frequent events
	const throttle = useCallback((func: Function, limit: number) => {
		let inThrottle: boolean;
		return (...args: any[]) => {
			if (!inThrottle) {
				func.apply(null, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}, []);

	// Preload images
	const preloadImages = useCallback((imageUrls: string[]) => {
		imageUrls.forEach((url) => {
			const img = new Image();
			img.src = url;
		});
	}, []);

	// Optimize scroll performance
	useEffect(() => {
		let ticking = false;

		const optimizedScrollHandler = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					// Scroll handling logic here
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", optimizedScrollHandler, { passive: true });

		return () => {
			window.removeEventListener("scroll", optimizedScrollHandler);
		};
	}, []);

	return {
		debounce,
		throttle,
		preloadImages,
	};
};
