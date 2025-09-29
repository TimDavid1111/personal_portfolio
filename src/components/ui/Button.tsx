import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
}

const Button = ({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) => {
	const baseClasses =
		"font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black";

	const variantClasses = {
		primary: "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:shadow-lg hover:shadow-green-400/25",
		secondary: "bg-gray-800 text-white border border-gray-700 hover:border-green-400/50 hover:glow",
		ghost: "text-gray-300 hover:text-white hover:text-green-400",
	};

	const sizeClasses = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3",
		lg: "px-8 py-4 text-lg",
	};

	return (
		<button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
