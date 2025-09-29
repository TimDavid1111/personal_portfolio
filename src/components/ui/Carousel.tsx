import { ReactNode, useState } from "react";

interface CarouselProps {
	children: ReactNode;
	className?: string;
	showArrows?: boolean;
}

const Carousel = ({ children, className = "", showArrows = true }: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	// Get total number of children
	const totalItems = Array.isArray(children) ? children.length : 0;

	// Create array of visible cards (always 3 cards)
	const getVisibleCards = () => {
		if (totalItems === 0) return [];
		if (totalItems <= 3) {
			// If 3 or fewer cards, show all and cycle through them
			return Array.from({ length: 3 }, (_, i) => {
				const cardIndex = (currentIndex + i) % totalItems;
				return { index: cardIndex, child: Array.isArray(children) ? children[cardIndex] : children };
			});
		} else {
			// If more than 3 cards, show 3 consecutive cards
			return Array.from({ length: 3 }, (_, i) => {
				const cardIndex = (currentIndex + i) % totalItems;
				return { index: cardIndex, child: Array.isArray(children) ? children[cardIndex] : children };
			});
		}
	};

	const visibleCards = getVisibleCards();
	const centerCardIndex = 1; // Always the middle card (index 1 of the 3 visible cards)

	// Navigation functions
	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev + 1) % totalItems);
		setTimeout(() => setIsAnimating(false), 600);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
		setTimeout(() => setIsAnimating(false), 600);
	};

	return (
		<div className={`relative ${className}`}>
			<div className="flex items-center justify-center gap-8 sm:gap-20">
				{/* Left Arrow */}
				{showArrows && (
					<button
						onClick={handlePrev}
						disabled={isAnimating}
						className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-gray-700/80 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 z-10 flex-shrink-0 border border-gray-700/50 hover:border-gray-600/70 ${
							isAnimating ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
						}`}
						aria-label="Previous items">
						<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
				)}

				{/* Carousel Container - Always shows exactly 3 cards */}
				<div className="flex-1 max-w-5xl">
					<div
						className="flex gap-4 sm:gap-6 justify-center items-start"
						style={{
							paddingBottom: "3rem", // 48px - enough for the 32px dip + some extra space
						}}>
						{visibleCards.map((card, index) => (
							<div
								key={`${card.index}-${currentIndex}`}
								className={`transition-all duration-700 ease-out ${index === centerCardIndex ? "transform translate-y-8" : "transform translate-y-0"}`}>
								{card.child}
							</div>
						))}
					</div>
				</div>

				{/* Right Arrow */}
				{showArrows && (
					<button
						onClick={handleNext}
						disabled={isAnimating}
						className={`w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:bg-gray-700/80 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 z-10 flex-shrink-0 border border-gray-700/50 hover:border-gray-600/70 ${
							isAnimating ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
						}`}
						aria-label="Next items">
						<svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};

export default Carousel;
