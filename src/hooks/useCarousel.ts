import { useRef } from "react";
import { scrollCarouselNext, scrollCarouselPrev } from "@/utils/scrollUtils";

/**
 * Custom hook for managing carousel functionality
 */
export const useCarousel = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scrollToNext = () => {
		scrollCarouselNext(scrollContainerRef.current);
	};

	const scrollToPrev = () => {
		scrollCarouselPrev(scrollContainerRef.current);
	};

	return {
		scrollContainerRef,
		scrollToNext,
		scrollToPrev,
	};
};
