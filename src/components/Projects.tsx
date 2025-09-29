"use client";

import { projects } from "@/data/projects";
import Section from "@/components/ui/Section";
import Carousel from "@/components/ui/Carousel";
import Card from "@/components/ui/Card";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Image from "next/image";

const Projects = () => {
	return (
		<Section id="projects" background="gray">
			<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
			<div className="max-w-6xl mx-auto w-full flex flex-col h-full -mt-22">
				{/* Header */}
				<div className="flex-1 flex flex-col items-center justify-center text-center fade-in">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="gradient-text">Projects</span>
					</h2>
					<p className="text-lg sm:text-xl text-gray-400 max-w-3xl">
						A collection of innovative projects that showcase my passion for technology and problem-solving
					</p>
				</div>

				{/* Projects Carousel */}
				<div className="flex-1 flex justify-center items-center -mt-14">
					<div className="w-full max-w-5xl">
						<Carousel>
							{projects.map((project, index) => (
								<div key={project.id} className="flex-shrink-0 w-72 sm:w-80 snap-center h-96" style={{ animationDelay: `${index * 0.1}s` }}>
									{project.image ? (
										<Card className="h-full border-2 border-transparent p-0 overflow-hidden" hover={false} rotatingBorder={true} expandOnHover={true}>
											{/* Image Section - 2/3 of card height */}
											<div className="relative h-2/3 w-full">
												<Image src={project.image} alt={project.title} fill className="object-cover" />
												{/* Gradient overlay - darkens edges, clear in center */}
												<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
												<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
											</div>
											{/* Text Section - 1/3 of card height */}
											<div className="h-1/3 p-4 flex flex-col justify-start">
												<h4 className="text-lg sm:text-xl font-bold text-white mb-2 truncate w-full text-center" title={project.title}>
													{project.title}
												</h4>
												<p className="text-gray-400 text-xs sm:text-sm leading-tight w-full text-center flex-1 flex items-center justify-center">
													<span className="line-clamp-3">{project.description}</span>
												</p>
											</div>
										</Card>
									) : (
										<Card className="h-full border-2 border-transparent" hover={false} rotatingBorder={true} expandOnHover={true}>
											<PlaceholderImage title={project.title} />
											<div className="flex flex-col items-center flex-1">
												<h4 className="px-4 py-2 text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 truncate w-full text-center" title={project.title}>
													{project.title}
												</h4>
												<p className="px-4 text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-tight flex-1 w-full text-center flex items-center justify-center">
													<span className="line-clamp-3">{project.description}</span>
												</p>
											</div>
										</Card>
									)}
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Projects;
