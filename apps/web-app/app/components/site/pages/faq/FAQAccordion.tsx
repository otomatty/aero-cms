import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@tsudoi-ui/components/ui/accordion";

const faqData = [
	{
		id: "1",
		question: "Tsudoiとは何ですか？",
		answer:
			"Tsudoiは、地域住民のためのコミュニティプラットフォームで、近所の人々とつながり、地域のイベントに参加し、施設予約などができるアプリです。",
	},
	{
		id: "2",
		question: "利用するには料金がかかりますか？",
		answer:
			"基本的な機能は無料でご利用いただけます。一部の高度な機能については有料プランをご用意しています。",
	},
	{
		id: "3",
		question: "どの地域で利用できますか？",
		answer:
			"現在は特定の地域（東京都内）でサービスを提供しています。今後、対応エリアを拡大していく予定です。",
	},
	{
		id: "4",
		question: "個人情報は安全に管理されますか？",
		answer:
			"ユーザーの個人情報保護には最大限の注意を払っています。詳細は当社のプライバシーポリシーをご確認ください。",
	},
	{
		id: "5",
		question: "アカウント登録に年齢制限はありますか？",
		answer:
			"基本的に16歳以上の方にご利用いただけます。未成年の方は保護者の同意が必要です。",
	},
	{
		id: "6",
		question: "アプリは無料でダウンロードできますか？",
		answer:
			"App StoreおよびGoogle Playから無料でダウンロード可能です。通信料は別途かかります。",
	},
];

export default function FAQAccordion() {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
			<Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
				{faqData.map((faq) => (
					<AccordionItem key={faq.id} value={`item-${faq.id}`}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
