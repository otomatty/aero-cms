export default function CommunityBenefitsSection() {
	const benefits = [
		{
			title: "地域情報の共有",
			description: "近隣住民と重要な情報をリアルタイムで共有できます。",
			icon: "🌐",
		},
		{
			title: "イベント参加",
			description: "地域のイベントに簡単に参加し、新しい出会いを楽しめます。",
			icon: "🤝",
		},
		{
			title: "相互サポート",
			description: "地域住民同士で助け合い、コミュニティの絆を深められます。",
			icon: "❤️",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					コミュニティのメリット
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
						>
							<div className="text-5xl mb-4">{benefit.icon}</div>
							<h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
							<p className="text-gray-600">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
