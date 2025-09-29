"use client";

interface LoadingProps {
	message?: string;
	size?: "sm" | "md" | "lg";
}

const Loading = ({ message = "Loading...", size = "md" }: LoadingProps) => {
	const sizeClasses = {
		sm: "w-6 h-6",
		md: "w-8 h-8",
		lg: "w-12 h-12",
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
			<div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-600 border-t-green-400 mb-4`}></div>
			<p className="text-gray-400">{message}</p>
		</div>
	);
};

export default Loading;
