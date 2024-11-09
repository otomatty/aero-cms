import { useAtom } from "jotai";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import {
	ChartContainer,
	ChartTooltipContent,
	ChartLegendContent,
} from "@tsudoi-ui/components/ui/chart";
import { selectedPeriodAtom } from "@/store/periodAtom";
import { pageViewData } from "./data";
import type { PageViewData } from "./types";

const chartConfig = {};

export default function PageViewChart() {
	const [selectedPeriod] = useAtom(selectedPeriodAtom);

	const filterDataByPeriod = (data: PageViewData[]): PageViewData[] => {
		switch (selectedPeriod) {
			case "year":
				return data;
			case "sixMonths":
				return data.slice(-3);
			case "month":
				return data.slice(-1);
			case "week":
				return data.slice(-1);
			default:
				return data;
		}
	};

	const filteredData = filterDataByPeriod(pageViewData);

	return (
		<ChartContainer config={chartConfig} className="h-[200px] w-full">
			<PieChart>
				<Tooltip content={<ChartTooltipContent />} />
				<Legend content={<ChartLegendContent />} />
				<Pie
					data={filteredData}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={80}
					fill="#8884d8"
				/>
			</PieChart>
		</ChartContainer>
	);
}
