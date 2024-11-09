import { useAtom } from "jotai";
import { Card } from "@tsudoi-ui/components/ui/card";
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from "@tsudoi-ui/components/ui/tabs";
import { selectedPeriodAtom } from "@/store/periodAtom";
import UserChart from "./UserChart";
import SessionChart from "./SessionChart";
import PageViewChart from "./PageViewChart";

const periods = {
	year: "1年",
	sixMonths: "6ヶ月",
	month: "1ヶ月",
	week: "1週間",
};

export default function Analytics() {
	const [selectedPeriod, setSelectedPeriod] = useAtom(selectedPeriodAtom);

	const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedPeriod(event.target.value);
	};

	return (
		<Card className="p-4">
			<div className="mb-4">
				<label htmlFor="period" className="mr-2">
					表示期間:
				</label>
				<select
					id="period"
					value={selectedPeriod}
					onChange={handlePeriodChange}
				>
					{Object.entries(periods).map(([value, label]) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			<Tabs defaultValue="user">
				<TabsList>
					<TabsTrigger value="user">ユーザー数</TabsTrigger>
					<TabsTrigger value="session">セッション数</TabsTrigger>
					<TabsTrigger value="pageview">ページビュー数</TabsTrigger>
				</TabsList>
				<TabsContent value="user">
					<UserChart />
				</TabsContent>
				<TabsContent value="session">
					<SessionChart />
				</TabsContent>
				<TabsContent value="pageview">
					<PageViewChart />
				</TabsContent>
			</Tabs>
		</Card>
	);
}
