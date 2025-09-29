import { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
	hover?: boolean;
	hoverClasses?: string;
	style?: React.CSSProperties;
	rotatingBorder?: boolean;
	expandOnHover?: boolean;
}

const Card = ({ children, className = "", hover = true, hoverClasses = "", style, rotatingBorder = false, expandOnHover = false }: CardProps) => {
	const baseClasses = "bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300";
	const defaultHoverClasses = hover ? "hover:border-green-400/50 hover:glow" : "";
	const finalHoverClasses = hoverClasses || defaultHoverClasses;

	// Add expansion classes if enabled
	const expansionClasses = expandOnHover ? "card-hover" : "";

	return (
		<div className={`${baseClasses} ${finalHoverClasses} ${expansionClasses} ${className}`} style={style}>
			{children}
		</div>
	);
};

export default Card;
