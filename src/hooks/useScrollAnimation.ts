"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
	const { threshold = 0.1, rootMargin = "0px 0px -20% 0px", triggerOnce = false } = options;

	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (triggerOnce) {
						setHasAnimated(true);
					}
				} else {
					setIsVisible(false);
					// Reset animation state when not visible to allow re-triggering
					if (!triggerOnce) {
						setHasAnimated(false);
					}
				}
			},
			{
				threshold,
				rootMargin,
			}
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
		};
	}, [threshold, rootMargin, triggerOnce]);

	return {
		ref,
		isVisible: triggerOnce ? hasAnimated || isVisible : isVisible,
	};
};
