export default function FeaturesOverviewSection() {
	const features = [
		{
			title: "コミュニティ",
			description: "近所の人々と簡単につながり、情報交換できます。",
			icon: "🤝",
		},
		{
			title: "イベント",
			description: "地域のイベントを探し、簡単に参加できます。",
			icon: "🎉",
		},
		{
			title: "予約",
			description: "地域の施設やサービスをスムーズに予約できます。",
			icon: "📅",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
						>
							<div className="text-5xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
