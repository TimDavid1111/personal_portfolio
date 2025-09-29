import { CARD_WIDTH, SCROLL_OFFSET, SCROLL_THRESHOLD } from "./constants";

/**
 * Scrolls to a specific section with smooth behavior
 */
export const scrollToSection = (sectionId: string): void => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	}
};

/**
 * Determines if the user has scrolled past the threshold
 */
export const isScrolled = (scrollY: number): boolean => {
	return scrollY > SCROLL_THRESHOLD;
};

/**
 * Gets the active section based on scroll position
 */
export const getActiveSection = (navItems: readonly { id: string; label: string }[]): string => {
	const sections = navItems.map((item) => document.getElementById(item.id));
	const scrollPosition = window.scrollY + SCROLL_OFFSET;

	for (let i = sections.length - 1; i >= 0; i--) {
		const section = sections[i];
		if (section && section.offsetTop <= scrollPosition) {
			return navItems[i].id;
		}
	}

	return navItems[0].id; // Default to first section
};

/**
 * Scrolls carousel to the next item
 */
export const scrollCarouselNext = (container: HTMLDivElement | null): void => {
	if (!container) return;

	const maxScroll = container.scrollWidth - container.clientWidth;
	const newScrollLeft = Math.min(container.scrollLeft + CARD_WIDTH, maxScroll);
	container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
};

/**
 * Scrolls carousel to the previous item
 */
export const scrollCarouselPrev = (container: HTMLDivElement | null): void => {
	if (!container) return;

	const newScrollLeft = Math.max(container.scrollLeft - CARD_WIDTH, 0);
	container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
};
