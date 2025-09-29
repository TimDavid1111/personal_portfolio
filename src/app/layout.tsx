import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tim David - Full-Stack Developer & Entrepreneur",
	description: "Personal portfolio showcasing innovative projects, startup ventures, and technical expertise in AI, blockchain, and sustainable technology.",
	keywords: ["Tim David", "Full-Stack Developer", "Entrepreneur", "AI", "Blockchain", "Startups", "Portfolio"],
	authors: [{ name: "Tim David" }],
	creator: "Tim David",
	openGraph: {
		title: "Tim David - Full-Stack Developer & Entrepreneur",
		description: "Personal portfolio showcasing innovative projects, startup ventures, and technical expertise.",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tim David - Full-Stack Developer & Entrepreneur",
		description: "Personal portfolio showcasing innovative projects, startup ventures, and technical expertise.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
