import { Check, X } from "lucide-react";
import { Button } from "@tsudoi-ui/components/ui/button";

const pricingPlans = [
	{
		id: "1",
		title: "フリープラン",
		price: "無料",
		description: "基本的な機能を利用できる標準プラン",
		features: [
			"コミュニティ参加",
			"イベント閲覧",
			"基本的な施設情報",
			"月5回の予約",
		],
		unavailableFeatures: [
			"プレミアムイベント参加",
			"詳細な統計情報",
			"優先サポート",
		],
		buttonText: "現在のプラン",
		isCurrent: true,
	},
	{
		id: "2",
		title: "プレミアムプラン",
		price: "月額 500円",
		description: "地域活動をさらに充実させる拡張プラン",
		features: [
			"すべてのフリープラン機能",
			"プレミアムイベント参加",
			"無制限の予約",
			"詳細な統計情報",
			"優先サポート",
		],
		unavailableFeatures: [],
		buttonText: "プランを選択",
		isCurrent: false,
	},
];

export default function PricingPlansSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{pricingPlans.map((plan) => (
						<div
							key={plan.id}
							className={`
                p-8 rounded-lg shadow-lg 
                ${
									plan.isCurrent
										? "bg-gray-50 border-2 border-blue-500"
										: "bg-white border border-gray-200"
								}
              `}
						>
							<h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
							<p className="text-4xl font-bold mb-4 text-blue-600">
								{plan.price}
							</p>
							<p className="text-gray-600 mb-6">{plan.description}</p>

							<div className="mb-6">
								<h4 className="font-semibold mb-4">含まれる機能:</h4>
								<ul className="space-y-2">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className="flex items-center text-green-600"
										>
											<Check className="mr-2" size={20} />
											{feature}
										</li>
									))}
								</ul>
							</div>

							{plan.unavailableFeatures.length > 0 && (
								<div className="mb-6">
									<h4 className="font-semibold mb-4">利用できない機能:</h4>
									<ul className="space-y-2">
										{plan.unavailableFeatures.map((feature) => (
											<li
												key={feature}
												className="flex items-center text-red-600"
											>
												<X className="mr-2" size={20} />
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}

							<Button
								variant={plan.isCurrent ? "secondary" : "default"}
								className="w-full mt-4"
							>
								{plan.buttonText}
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
