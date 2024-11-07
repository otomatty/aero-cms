import {
	LayoutDashboard,
	FileText,
	Box,
	Calendar,
	Users,
	Settings,
	Command,
	AudioWaveform,
	GalleryVerticalEnd,
} from "lucide-react";
import type { Team, MenuItem, User } from "./types";

export const data = {
	user: {
		name: "ユーザー名",
		email: "user@example.com",
		avatar: "/avatars/user.png",
	} as User,

	teams: [
		{
			name: "チームA",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "チームB",
			logo: AudioWaveform,
			plan: "Pro",
		},
		{
			name: "チームC",
			logo: Command,
			plan: "Free",
		},
	] as Team[],

	menuItems: [
		{
			title: "ダッシュボード",
			path: "/app",
			icon: LayoutDashboard,
			items: [
				{ title: "概要", path: "/app" },
				{ title: "分析", path: "/app/analytics" },
			],
		},
		{
			title: "プロジェクト",
			path: "/app/projects",
			icon: FileText,
		},
		{
			title: "タスク",
			path: "/app/tasks",
			icon: Box,
		},
		{
			title: "カレンダー",
			path: "/app/calendar",
			icon: Calendar,
		},
		{
			title: "メンバー",
			path: "/app/members",
			icon: Users,
		},
		{
			title: "設定",
			path: "/app/settings",
			icon: Settings,
		},
	] as MenuItem[],
};
