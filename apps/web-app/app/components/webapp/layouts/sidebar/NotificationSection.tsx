import { Bell } from "lucide-react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuBadge,
} from "@tsudoi-ui/components/ui/sidebar";

export const NotificationSection = () => {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>通知</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<Bell className="mr-2 h-4 w-4" />
						<span className="flex-1">最新の通知</span>
						<SidebarMenuBadge>3</SidebarMenuBadge>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
};
