export interface Project {
	id: string;
	title: string;
	description: string;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "1",
		title: "AI-Professor",
		description:
			"AI-Professor that helps you learn anything, on a virtual blackboard, with fully voiced explanations and guided lessons that cater to your learning style.",
		image: "/images/ai_professor.png",
	},
	{
		id: "2",
		title: "Personal Portfolio Website",
		description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Made to showcase and categorizes my projects and startups.",
		image: "/images/personal_portfolio.png",
	},
	{
		id: "3",
		title: "Pathfinder Visualizer",
		description: "Created as a means for learning and visualizing various pathfinding algorithms, such as A*, Dijkstra's, and Breadth-First Search.",
		image: "/images/pathfinder_visualizer.png",
	},
];
