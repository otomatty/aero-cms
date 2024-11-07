export default function BenefitsSection() {
	const benefits = [
		{
			title: "地域とのつながり",
			description: "近隣住民との交流を簡単に深められます。",
			icon: "🌐",
		},
		{
			title: "便利な情報収集",
			description: "地域のイベントや重要な情報をリアルタイムで入手。",
			icon: "📱",
		},
		{
			title: "簡単な予約管理",
			description: "地域の施設やサービスを数タップで予約。",
			icon: "✅",
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Tsudoiのメリット
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
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
