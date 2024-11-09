import { useAtom } from "jotai";
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";
import {
	ChartContainer,
	ChartTooltipContent,
	ChartLegendContent,
} from "@tsudoi-ui/components/ui/chart";
import { selectedPeriodAtom } from "@/store/periodAtom";
import { sessionData } from "./data";
import type { SessionData } from "./types";

const chartConfig = {};

export default function SessionChart() {
	const [selectedPeriod] = useAtom(selectedPeriodAtom);

	const filterDataByPeriod = (data: SessionData[]): SessionData[] => {
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

	const filteredData = filterDataByPeriod(sessionData);

	return (
		<ChartContainer config={chartConfig} className="h-[200px] w-full">
			<BarChart data={filteredData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<Tooltip content={<ChartTooltipContent />} />
				<Legend content={<ChartLegendContent />} />
				<Bar dataKey="sessions" fill="#82ca9d" />
			</BarChart>
		</ChartContainer>
	);
}
