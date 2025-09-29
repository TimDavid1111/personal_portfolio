import { ReactNode } from "react";

interface PlaceholderImageProps {
	title: string;
	children?: ReactNode;
	className?: string;
}

const PlaceholderImage = ({ title, children, className = "" }: PlaceholderImageProps) => {
	const firstLetter = title.charAt(0).toUpperCase();

	return (
		<div className={`h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${className}`}>
			<div className="text-center">
				<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center">
					<span className="text-black font-bold text-lg sm:text-xl">{firstLetter}</span>
				</div>
				{children || <p className="text-gray-400 text-xs sm:text-sm">Project Image</p>}
			</div>
		</div>
	);
};

export default PlaceholderImage;
