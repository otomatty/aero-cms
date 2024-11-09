import { Card } from "@tsudoi-ui/components/ui/card";

export default function RecentInquiries() {
	const inquiries = [
		{ id: 1, subject: "お問い合わせ1", date: "2023-10-01" },
		{ id: 2, subject: "お問い合わせ2", date: "2023-10-02" },
		// 他のお問い合わせ
	];

	return (
		<Card className="p-4">
			<h2 className="text-lg font-semibold">最新のお問い合わせ</h2>
			<ul>
				{inquiries.map((inquiry) => (
					<li key={inquiry.id}>
						{inquiry.subject} - {inquiry.date}
					</li>
				))}
			</ul>
		</Card>
	);
}
