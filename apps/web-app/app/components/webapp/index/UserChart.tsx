import { useAtom } from "jotai";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
} from "recharts";
import {
	ChartContainer,
	ChartTooltipContent,
	ChartLegendContent,
} from "@tsudoi-ui/components/ui/chart";
import { selectedPeriodAtom } from "@/store/periodAtom";
import { userData } from "./data";
import type { UserData } from "./types";

const chartConfig = {};

export default function UserChart() {
	const [selectedPeriod] = useAtom(selectedPeriodAtom);

	const filterDataByPeriod = (data: UserData[]): UserData[] => {
		switch (selectedPeriod) {
			case "year":
				return data;
			case "sixMonths":
				return data.slice(-6);
			case "month":
				return data.slice(-1);
			case "week":
				return data.slice(-1);
			default:
				return data;
		}
	};

	const filteredData = filterDataByPeriod(userData);

	return (
		<ChartContainer config={chartConfig} className="h-[200px] w-full">
			<LineChart data={filteredData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<Tooltip content={<ChartTooltipContent />} />
				<Legend content={<ChartLegendContent />} />
				<Line type="monotone" dataKey="users" stroke="#8884d8" />
			</LineChart>
		</ChartContainer>
	);
}
