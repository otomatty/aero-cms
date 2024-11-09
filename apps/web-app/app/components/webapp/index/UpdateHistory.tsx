import { Card } from "@tsudoi-ui/components/ui/card";

export default function UpdateHistory() {
	const updates = [
		{ id: 1, description: "更新1", date: "2023-10-01" },
		{ id: 2, description: "更新2", date: "2023-10-02" },
		// 他の更新
	];

	return (
		<Card className="p-4">
			<h2 className="text-lg font-semibold">更新履歴</h2>
			<ul>
				{updates.map((update) => (
					<li key={update.id}>
						{update.description} - {update.date}
					</li>
				))}
			</ul>
		</Card>
	);
}
