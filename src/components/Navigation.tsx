"use client";

import Image from "next/image";
import { NAV_ITEMS } from "@/utils/constants";
import { useScroll } from "@/hooks/useScroll";
import { scrollToSection } from "@/utils/scrollUtils";

const Navigation = () => {
	const { activeSection, isScrolledState } = useScroll();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-1000 backdrop-blur-lg shadow-lg transition-all duration-500">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between pt-4 px-8">
					{/* Logo */}
					<div className="flex items-center">
						<Image src="/images/luther.png" alt="Luther" width={180} height={60} className="h-10 sm:h-14 lg:h-14 w-auto" priority />
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12">
						{NAV_ITEMS.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`relative px-5 lg:px-6 py-1 lg:py-2 text-sm lg:text-base font-medium transition-all duration-300 hover:text-green-400 hover:scale-105 ${
									activeSection === item.id ? "text-green-400 scale-105" : "text-gray-300 hover:text-white"
								}`}>
								{item.label}
								{activeSection === item.id && (
									<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg" />
								)}
							</button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button className="md:hidden text-white p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
