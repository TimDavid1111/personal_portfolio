"use client";

import { personalInfo } from "@/data/personal";
import Section from "@/components/ui/Section";

const About = () => {
	return (
		<Section id="about">
			<div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
					{/* Left Half - Text Content */}
					<div className="flex flex-col h-full">
						{/* Content Centered in Middle */}
						<div className="flex-1 flex flex-col justify-center text-center lg:text-left">
							<div className="space-y-6 sm:space-y-8 lg:space-y-10 fade-in">
								{/* Title */}
								<div className="space-y-4">
									<h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium leading-tight text-center">{personalInfo.title}</h2>
								</div>

								{/* Bio */}
								<div className="space-y-4">
									<p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed font-light text-center">{personalInfo.bio}</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Half - Profile Image */}
					<div className="flex justify-center lg:justify-end">
						<div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
							<div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
								<img
									src="/images/profile_photo.png"
									alt="Profile Picture"
									className="w-full h-full object-cover object-center brightness-75 contrast-125 opacity-75"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bouncing Arrow */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</Section>
	);
};

export default About;
