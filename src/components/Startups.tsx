"use client";

import { startups } from "@/data/startups";
import Section from "@/components/ui/Section";
import Carousel from "@/components/ui/Carousel";
import Card from "@/components/ui/Card";
import Image from "next/image";

const Startups = () => {
	return (
		<Section id="startups">
			<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
			<div className="max-w-6xl mx-auto w-full flex flex-col h-full -mt-18">
				{/* Header - Top Half */}
				<div className="flex-1 flex flex-col items-center justify-center text-center fade-in">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						<span className="gradient-text">Startups</span>
					</h2>
					<p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
						Entrepreneurial ventures and innovative ideas that I'm currently working on or worked on
					</p>
				</div>

				{/* Startups Carousel - Bottom Half */}
				<div className="flex-1 flex justify-center items-center">
					<div className="w-full max-w-5xl mx-auto overflow-visible">
						<Carousel showArrows={false}>
							{startups.map((startup, index) => (
								<div key={startup.id} className="flex-shrink-0 w-80 sm:w-88 snap-center h-[26rem] -mt-12" style={{ animationDelay: `${index * 0.1}s` }}>
									<Card className="h-full border-2 border-transparent p-0 overflow-hidden" hover={false} rotatingBorder={true} expandOnHover={true}>
										{startup.image ? (
											// Image-based startup card
											<div className="relative w-full h-full">
												<Image src={startup.image} alt={startup.name} fill className="object-cover" />
												{/* Gradient overlay - darkens edges from 30% to 0% towards center */}
												<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
												<div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
											</div>
										) : (
											// Fallback card with first letter
											<div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
												<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
													<span className="text-black font-bold text-4xl sm:text-5xl">{startup.name.charAt(0).toUpperCase()}</span>
												</div>
											</div>
										)}
									</Card>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Startups;
