"use client";

import * as React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarFooter,
	SidebarRail,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@tsudoi-ui/components/ui/sidebar";
import { Button } from "@tsudoi-ui/components/ui/button";
import { Settings } from "lucide-react";
import { data } from "./sidebar.data";
import { TeamSwitcher } from "./sidebar/TeamSwitcher";
import { QuickActions } from "./sidebar/QuickActions";
import { MainMenu } from "./sidebar/MainMenu";
import { NotificationSection } from "./sidebar/NotificationSection";
import { UserMenu } from "./sidebar/UserMenu";
import { AdminMenu } from "./sidebar/AdminMenu";

export const AppSidebar = () => {
	const [activeTeam, setActiveTeam] = React.useState(data.teams[0]);
	// 管理者メニューの表示状態を管理
	const [showAdminMenu, setShowAdminMenu] = React.useState(false);
	// 仮の管理者フラグ（実際の実装では認証情報から取得）
	const isAdmin = true;

	// 管理者メニューの切り替え
	const toggleAdminMenu = () => {
		setShowAdminMenu((prev) => !prev);
	};

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<TeamSwitcher
					activeTeam={activeTeam}
					teams={data.teams}
					onTeamChange={setActiveTeam}
				/>
			</SidebarHeader>

			<SidebarContent>
				{/* メニューの条件付きレンダリング */}
				{showAdminMenu ? (
					<AdminMenu isAdmin={isAdmin} />
				) : (
					<>
						<QuickActions />
						<MainMenu menuItems={data.menuItems} />
						<NotificationSection />
					</>
				)}

				{/* 管理者の場合のみ切り替えボタンを表示（最下部に配置） */}
				{isAdmin && (
					<SidebarMenu className="mt-auto">
						<SidebarMenuItem>
							<Button
								variant={showAdminMenu ? "secondary" : "ghost"}
								className="w-full justify-start"
								onClick={toggleAdminMenu}
							>
								<Settings className="mr-2 h-4 w-4" />
								{showAdminMenu ? "通常メニューに戻る" : "システム管理"}
							</Button>
						</SidebarMenuItem>
					</SidebarMenu>
				)}
			</SidebarContent>

			<SidebarFooter>
				<UserMenu />
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
};
