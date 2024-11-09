import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import TaskList from "@/components/webapp/index/TaskList";
import Analytics from "@/components/webapp/index/Analytics";
import RecentInquiries from "@/components/webapp/index/RecentInquiries";
import UpdateHistory from "@/components/webapp/index/UpdateHistory";
import EventCalendar from "@/components/webapp/index/EventCalendar";

export const meta: MetaFunction = () => {
	return [
		{ title: "Web App" },
		{ name: "description", content: "Welcome to Web App!" },
	];
};

export default function DashboardContent() {
	useEffect(() => {
		// ダッシュボードデータの取得や初期化処理
	}, []);

	return (
		<div className="p-4 space-y-4">
			<div className="grid grid-cols-1 gap-4">
				<Analytics />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<TaskList />
				<RecentInquiries />
				<UpdateHistory />
			</div>
			<div className="grid grid-cols-1 gap-4">
				<EventCalendar />
			</div>
		</div>
	);
}
