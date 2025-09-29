import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/utils/constants";
import { isScrolled, getActiveSection } from "@/utils/scrollUtils";

/**
 * Custom hook for managing scroll state and active section
 */
export const useScroll = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isScrolledState, setIsScrolledState] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsScrolledState(isScrolled(scrollY));
			setActiveSection(getActiveSection(NAV_ITEMS));
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return { activeSection, isScrolledState };
};
