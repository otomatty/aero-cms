const privacyPolicySections = [
	{
		id: "1",
		title: "1. 収集する情報",
		content: [
			"アカウント登録時に提供される個人情報（氏名、メールアドレス、電話番号）",
			"アプリ利用中に生成される行動履歴データ",
			"デバイス情報およびIPアドレス",
		],
	},
	{
		id: "2",
		title: "2. 情報の利用目的",
		content: [
			"サービス提供およびユーザーサポート",
			"パーソナライズされたコンテンツと機能の提供",
			"セキュリティとシステム改善",
			"法的要件への対応",
		],
	},
	{
		id: "3",
		title: "3. 情報の共有",
		content: [
			"法的要件がある場合を除き、第三者に個人情報を提供しません",
			"匿名化されたデータは分析目的で利用する場合があります",
			"業務委託先との必要最小限の情報共有",
		],
	},
	{
		id: "4",
		title: "4. データセキュリティ",
		content: [
			"最新の暗号化技術による情報保護",
			"厳格なアクセス制御",
			"定期的なセキュリティ監査の実施",
		],
	},
	{
		id: "5",
		title: "5. ユーザーの権利",
		content: [
			"個人情報の開示、訂正、削除をリクエストする権利",
			"データポータビリティの権利",
			"同意の撤回",
		],
	},
];

export default function PrivacyPolicySection() {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12">
				プライバシーポリシー
			</h2>
			<div className="max-w-4xl mx-auto space-y-8">
				{privacyPolicySections.map((section) => (
					<div key={section.id} className="bg-gray-50 p-6 rounded-lg">
						<h3 className="text-xl font-semibold mb-4 text-blue-600">
							{section.title}
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-2">
							{section.content.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
