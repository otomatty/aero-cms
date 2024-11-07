import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@tsudoi-ui/components/ui/accordion";

const pricingFAQ = [
	{
		id: "1",
		question: "支払い方法は？",
		answer:
			"クレジットカード、デビットカード、Apple Pay、Google Payに対応しています。",
	},
	{
		id: "2",
		question: "途中解約は可能ですか？",
		answer:
			"いつでも簡単に解約できます。月額プランは解約した月の末日まで利用可能です。",
	},
	{
		id: "3",
		question: "無料プランから有料プランへの変更は？",
		answer:
			"いつでも簡単にプランをアップグレードできます。日割り計算で課金されます。",
	},
	{
		id: "4",
		question: "返金は可能ですか？",
		answer: "初回月額プラン登録後30日以内であれば全額返金いたします。",
	},
];

export default function PricingFAQSection() {
	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12">
				料金プランに関するよくある質問
			</h2>
			<Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
				{pricingFAQ.map((faq) => (
					<AccordionItem key={faq.id} value={`item-${faq.id}`}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
