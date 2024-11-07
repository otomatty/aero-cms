import { Link, useParams } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@tsudoi-ui/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@tsudoi-ui/components/ui/collapsible";
import type { MenuItem } from "../types";

interface MainMenuProps {
	menuItems: MenuItem[];
}

export const MainMenu = ({ menuItems }: MainMenuProps) => {
	const params = useParams();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>メニュー</SidebarGroupLabel>
			<SidebarMenu>
				{menuItems.map((item) => {
					const isActive = params.path === item.path;
					return (
						<Collapsible
							key={item.path}
							asChild
							defaultOpen={isActive}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								{item.items ? (
									<>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton tooltip={item.title}>
												<item.icon className="h-4 w-4" />
												<span>{item.title}</span>
												<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												{item.items.map((subItem) => (
													<SidebarMenuSubItem key={subItem.path}>
														<SidebarMenuSubButton
															asChild
															isActive={params.path === subItem.path}
														>
															<Link to={subItem.path}>
																<span>{subItem.title}</span>
															</Link>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</>
								) : (
									<SidebarMenuButton
										asChild
										isActive={isActive}
										tooltip={item.title}
									>
										<Link to={item.path}>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								)}
							</SidebarMenuItem>
						</Collapsible>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
};
