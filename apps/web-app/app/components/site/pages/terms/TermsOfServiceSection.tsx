const termsOfService = [
	{
		id: "1",
		title: "1. サービス利用の基本条件",
		content: [
			"Tsudoiサービスは、法律を遵守し、他のユーザーの権利を尊重する方に利用いただけます。",
			"18歳未満の方は、保護者の同意を得た上でサービスを利用してください。",
			"一つのアカウントは一人のユーザーのみが使用できます。",
		],
	},
	{
		id: "2",
		title: "2. ユーザーアカウント",
		content: [
			"登録時に正確な情報を提供する必要があります。",
			"アカウント情報の機密性を保持する責任があります。",
			"アカウントの不正利用について、当社は一切の責任を負いません。",
		],
	},
	{
		id: "3",
		title: "3. コンテンツの投稿と共有",
		content: [
			"他者を侮辱、脅威、差別するコンテンツの投稿は禁止します。",
			"著作権を侵害するコンテンツの共有は禁止します。",
			"不適切または違法なコンテンツを発見した場合、即座に削除する権利を有します。",
		],
	},
	{
		id: "4",
		title: "4. プライバシーとデータ保護",
		content: [
			"ユーザーの個人情報は、プライバシーポリシーに基づいて取り扱います。",
			"ユーザーの同意なく個人情報を第三者に提供することはありません。",
			"データセキュリティには最大限の注意を払います。",
		],
	},
	{
		id: "5",
		title: "5. サービスの変更と終了",
		content: [
			"サービスの機能、料金プランを予告なく変更する場合があります。",
			"サービスの全部または一部を終了する権利を有します。",
			"サービス終了時は、事前に通知いたします。",
		],
	},
];

export default function TermsOfServiceSection() {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12">利用規約</h2>
			<div className="max-w-4xl mx-auto space-y-8">
				{termsOfService.map((section) => (
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
