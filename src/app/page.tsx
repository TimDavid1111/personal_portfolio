import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Startups from "@/components/Startups";
import Connect from "@/components/Connect";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
	return (
		<ErrorBoundary>
			<div className="bg-black text-white">
				<Navigation />
				<main>
					<About />
					<Startups />
					<Projects />
					<Connect />
				</main>
			</div>
		</ErrorBoundary>
	);
}
