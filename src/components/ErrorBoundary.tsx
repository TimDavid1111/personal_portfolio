"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className="min-h-screen flex items-center justify-center bg-black text-white">
						<div className="text-center">
							<h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
							<p className="text-gray-400 mb-6">We're sorry, but something unexpected happened.</p>
							<button onClick={() => window.location.reload()} className="px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-300 transition-colors">
								Reload Page
							</button>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
