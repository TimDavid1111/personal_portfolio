import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionProps {
	id: string;
	children: ReactNode;
	className?: string;
	background?: "transparent" | "gray";
}

const Section = ({ id, children, className = "", background = "transparent" }: SectionProps) => {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

	const backgroundClasses = {
		transparent: "",
		gray: "bg-gray-900/30",
	};

	const getAnimationClass = () => {
		if (isVisible) {
			return "section-fade-in";
		} else {
			return "section-fade-out";
		}
	};

	return (
		<section
			ref={ref}
			id={id}
			className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-visible ${
				backgroundClasses[background]
			} ${getAnimationClass()} ${className}`}>
			{children}
		</section>
	);
};

export default Section;
