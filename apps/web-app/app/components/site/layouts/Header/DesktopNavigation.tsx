import { Link } from "@remix-run/react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@tsudoi-ui/components/ui/navigation-menu";
import { NavigationListItem } from "./NavigationListItem";

export function DesktopNavigation() {
	return (
		<NavigationMenu className="hidden md:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>製品情報</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link to="/features">
										<div className="mb-2 mt-4 text-lg font-medium">
											機能紹介
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											あなたの地域をつなぐコミュニティプラットフォーム
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<NavigationListItem to="/benefits" title="メリット">
								メリット
							</NavigationListItem>
							<NavigationListItem to="/screenshots" title="スクリーンショット">
								スクリーンショット
							</NavigationListItem>
							<NavigationListItem to="/pricing" title="料金プラン">
								料金プラン
							</NavigationListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>サポート</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<NavigationListItem to="/faq" title="よくある質問">
								よくある質問
							</NavigationListItem>
							<NavigationListItem to="/contact" title="お問い合わせ">
								お問い合わせ
							</NavigationListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
