import { Users, Shield, CreditCard, HelpCircle } from "lucide-react";

const categories = [
	{
		id: "1",
		icon: Users,
		title: "アカウント",
		description: "アカウント登録や設定に関する質問",
	},
	{
		id: "2",
		icon: Shield,
		title: "セキュリティ",
		description: "個人情報保護やセキュリティに関する質問",
	},
	{
		id: "3",
		icon: CreditCard,
		title: "支払い",
		description: "料金プランや支払い方法に関する質問",
	},
	{
		id: "4",
		icon: HelpCircle,
		title: "その他",
		description: "上記以外の一般的な質問",
	},
];

export default function FAQCategorySection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					カテゴリ別よくある質問
				</h2>
				<div className="grid md:grid-cols-4 gap-8">
					{categories.map((category) => (
						<div
							key={category.id}
							className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition"
						>
							<category.icon className="mx-auto mb-4 text-blue-500" size={48} />
							<h3 className="text-xl font-semibold mb-4">{category.title}</h3>
							<p className="text-gray-600">{category.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
