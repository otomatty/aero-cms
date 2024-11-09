import { Card } from "@tsudoi-ui/components/ui/card";

export default function WelcomeMessage() {
	return (
		<Card className="p-4">
			<h2 className="text-xl font-bold">ようこそ、ユーザー名さん！</h2>
			<p>今日も素晴らしい一日をお過ごしください。</p>
		</Card>
	);
}
