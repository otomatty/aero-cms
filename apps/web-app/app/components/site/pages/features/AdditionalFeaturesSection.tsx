import { MessageCircle, Bell, ShieldCheck } from "lucide-react";

const additionalFeatures = [
	{
		id: "1",
		icon: MessageCircle,
		title: "コミュニケーション",
		description: "地域住民との効率的なコミュニケーションツール",
		details: ["グループチャット", "個人メッセージ", "通知システム"],
	},
	{
		id: "2",
		icon: Bell,
		title: "通知機能",
		description: "重要な情報をリアルタイムでお知らせ",
		details: [
			"イベント通知",
			"コミュニティ更新情報",
			"カスタマイズ可能な通知設定",
		],
	},
	{
		id: "3",
		icon: ShieldCheck,
		title: "セキュリティ",
		description: "安全で信頼できるプラットフォーム",
		details: ["データ暗号化", "プライバシー保護", "不適切な利用の監視"],
	},
];

export default function AdditionalFeaturesSection() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">追加機能</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{additionalFeatures.map((feature) => (
						<div
							key={feature.id}
							className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
						>
							<div className="flex items-center mb-4">
								<feature.icon className="mr-4 text-blue-500" size={48} />
								<h3 className="text-xl font-semibold">{feature.title}</h3>
							</div>
							<p className="text-gray-600 mb-4">{feature.description}</p>
							<ul className="list-disc list-inside text-gray-700">
								{feature.details.map((detail) => (
									<li key={feature.id}>{detail}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
