// Re-export all types from data files
export type { PersonalInfo } from "@/data/personal";
export type { Project } from "@/data/projects";
export type { Startup } from "@/data/startups";

// Navigation types
export interface NavItem {
	id: string;
	label: string;
}

// Component prop types
export interface SectionProps {
	id: string;
	children: React.ReactNode;
	className?: string;
	background?: "transparent" | "gray";
}

export interface CardProps {
	children: React.ReactNode;
	className?: string;
	hover?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "ghost";
	size?: "sm" | "md" | "lg";
	children: React.ReactNode;
}

export interface CarouselProps {
	children: React.ReactNode;
	className?: string;
	showArrows?: boolean;
}

export interface PlaceholderImageProps {
	title: string;
	children?: React.ReactNode;
	className?: string;
}

// Hook return types
export interface UseScrollReturn {
	activeSection: string;
	isScrolledState: boolean;
}

export interface UseCarouselReturn {
	scrollContainerRef: React.RefObject<HTMLDivElement>;
	scrollToNext: () => void;
	scrollToPrev: () => void;
}

// Utility types
export type SocialPlatform = "linkedin" | "github" | "twitter" | "medium";

export type ProjectCategory = "web" | "mobile" | "ai" | "other";

export type StartupStage = "idea" | "mvp" | "beta" | "launched" | "scaling";

export type StartupStatus = "active" | "paused" | "completed";
