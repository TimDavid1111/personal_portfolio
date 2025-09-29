export interface Startup {
	id: string;
	name: string;
	image?: string;
}

export const startups: Startup[] = [
	{
		id: "1",
		name: "Athena AI",
		image: "/images/athena.png",
	},
	{
		id: "2",
		name: "Vibe Marketing",
		image: "/images/vibe_marketing.png",
	},
	{
		id: "3",
		name: "Chruch Connect",
		image: "/images/church_connect.png",
	},
];
