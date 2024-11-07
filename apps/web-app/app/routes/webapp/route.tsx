import type { MetaFunction } from "@remix-run/node";
import { SidebarProvider } from "@tsudoi-ui/components/ui/sidebar";
import { Outlet } from "@remix-run/react";
import { AppSidebar } from "@/components/webapp/layouts/AppSidebar";
import { AppHeader } from "@/components/webapp/layouts/AppHeader";

export const meta: MetaFunction = () => {
	return [
		{ title: "Web App" },
		{ name: "description", content: "Welcome to Web App!" },
	];
};

export default function WebApp() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<div className="flex-1">
				<AppHeader />
				<main>
					<Outlet />
				</main>
			</div>
		</SidebarProvider>
	);
}

// モバイルナビゲーション用コンポーネント
function MobileNav() {
	return (
		<nav className="grid gap-2 p-4">
			<a
				className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
				href="/dashboard"
			>
				Dashboard
			</a>
			<a
				className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
				href="/settings"
			>
				Settings
			</a>
		</nav>
	);
}
