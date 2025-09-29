import { SOCIAL_ICONS, EXTERNAL_LINK_ICON } from "./constants";

/**
 * Gets the appropriate SVG path for a social media platform
 */
export const getSocialIconPath = (platform: string): string => {
	const normalizedPlatform = platform.toLowerCase();
	return SOCIAL_ICONS[normalizedPlatform as keyof typeof SOCIAL_ICONS] || EXTERNAL_LINK_ICON;
};

/**
 * Creates a social media icon SVG component
 */
export const createSocialIcon = (platform: string, className: string = "w-6 h-6") => {
	const iconPath = getSocialIconPath(platform);

	return {
		className,
		fill: "currentColor",
		viewBox: "0 0 24 24",
		path: iconPath,
	};
};
