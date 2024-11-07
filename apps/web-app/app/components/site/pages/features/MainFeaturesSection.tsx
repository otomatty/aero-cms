import { Users, Calendar, MapPin } from "lucide-react";

const mainFeatures = [
	{
		id: "1",
		icon: Users,
		title: "コミュニティ機能",
		description: "近隣住民とつながり、情報交換や交流を促進します。",
		details: [
			"地域限定のコミュニティグループ",
			"メッセージ機能",
			"地域イベント情報共有",
		],
	},
	{
		id: "2",
		icon: Calendar,
		title: "イベント管理",
		description: "地域のイベントを簡単に探し、参加できます。",
		details: ["イベント検索と詳細表示", "簡単な参加申し込み", "カレンダー連携"],
	},
	{
		id: "3",
		icon: MapPin,
		title: "施設予約",
		description: "地域の施設を簡単に予約できるシステム。",
		details: ["リアルタイム空き状況確認", "簡単な予約プロセス", "予約履歴管理"],
	},
];

export default function MainFeaturesSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{mainFeatures.map((feature) => (
						<div
							key={feature.id}
							className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
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
