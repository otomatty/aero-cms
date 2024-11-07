export default function UserBenefitsSection() {
	const userBenefits = [
		{
			title: "簡単な予約システム",
			description: "地域の施設やサービスを数タップで予約できます。",
			icon: "📅",
		},
		{
			title: "パーソナライズ情報",
			description: "あなたの興味や地域に合わせた情報をお届けします。",
			icon: "🎯",
		},
		{
			title: "時間と労力の節約",
			description: "すべての地域情報を一つのアプリで効率的に管理できます。",
			icon: "⏰",
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">個人のメリット</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{userBenefits.map((benefit) => (
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
