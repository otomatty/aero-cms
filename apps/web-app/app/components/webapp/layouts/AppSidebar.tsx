import { Link, useLocation } from "@remix-run/react";
import { cn } from "@tsudoi-ui/lib/utils";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@tsudoi-ui/components/ui/sidebar";
import {
	LayoutDashboard,
	Calendar,
	Users,
	Settings,
	Plus,
	Bell,
	User,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@tsudoi-ui/components/ui/dropdown-menu";
import { Button } from "@tsudoi-ui/components/ui/button";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@tsudoi-ui/components/ui/avatar";
import { ScrollArea } from "@tsudoi-ui/components/ui/scroll-area";

const menuItems = [
	{
		title: "ホーム",
		icon: LayoutDashboard,
		path: "/webapp",
	},
	{
		title: "イベント",
		icon: Calendar,
		path: "/webapp/events",
	},
	{
		title: "メンバー",
		icon: Users,
		path: "/webapp/members",
	},
	{
		title: "設定",
		icon: Settings,
		path: "/webapp/settings",
	},
];

export function AppSidebar() {
	const location = useLocation();

	return (
		<Sidebar className="border-r">
			<SidebarHeader className="border-b px-6 py-4">
				<Link to="/webapp" className="flex items-center gap-2">
					<div className="h-6 w-6 bg-primary rounded-lg" />
					<span className="text-lg font-bold">Tsudoi</span>
				</Link>
			</SidebarHeader>

			<SidebarContent>
				<ScrollArea className="h-[calc(100vh-8.5rem)] px-4">
					<div className="space-y-4 py-4">
						{/* クイックアクション */}
						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
								クイックアクション
							</h2>
							<div className="space-y-1">
								<Button variant="secondary" className="w-full justify-start">
									<Plus className="mr-2 h-4 w-4" />
									新規イベント作成
								</Button>
							</div>
						</div>

						{/* メインメニュー */}
						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
								メニュ��
							</h2>
							<SidebarMenu>
								{menuItems.map((item) => {
									const isActive = location.pathname === item.path;
									return (
										<SidebarMenuItem key={item.path}>
											<SidebarMenuButton asChild isActive={isActive}>
												<Link
													to={item.path}
													className={cn(
														"flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium",
														isActive
															? "bg-primary text-primary-foreground"
															: "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
													)}
												>
													<item.icon className="h-4 w-4" />
													{item.title}
												</Link>
											</SidebarMenuButton>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</div>

						{/* 通知セクション */}
						<div className="px-3 py-2">
							<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
								通知
							</h2>
							<div className="space-y-1">
								<Button variant="ghost" className="w-full justify-start">
									<Bell className="mr-2 h-4 w-4" />
									<span className="flex-1">最新の通知</span>
									<span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
										3
									</span>
								</Button>
							</div>
						</div>
					</div>
				</ScrollArea>
			</SidebarContent>

			<SidebarFooter className="border-t p-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="w-full justify-start">
							<Avatar className="h-8 w-8 mr-2">
								<AvatarImage src="/avatars/user.png" alt="ユーザー" />
								<AvatarFallback>UN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col items-start">
								<span className="text-sm font-medium">ユーザー名</span>
								<span className="text-xs text-muted-foreground">
									user@example.com
								</span>
							</div>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end">
						<DropdownMenuLabel>マイアカウント</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<User className="mr-2 h-4 w-4" />
							プロフィール
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
