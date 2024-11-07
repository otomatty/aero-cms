import type { ReactNode } from "react";

interface HeroSectionProps {
	title: string;
	description?: string;
	children?: ReactNode;
	backgroundClassName?: string;
}

export default function HeroSection({
	title,
	description,
	children,
	backgroundClassName = "bg-blue-50",
}: HeroSectionProps) {
	return (
		<section className={`py-16 text-center ${backgroundClassName}`}>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
				{description && (
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						{description}
					</p>
				)}
				{children && <div className="mt-8">{children}</div>}
			</div>
		</section>
	);
}
