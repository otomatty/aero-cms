import { Link } from "@remix-run/react";
import { cn } from "@tsudoi/ui/src/lib/utils";
import { NavigationMenuLink } from "@tsudoi-ui/components/ui/navigation-menu";

interface NavigationListItemProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	title: string;
}

export function NavigationListItem({
	to,
	children,
	className,
	title,
}: NavigationListItemProps) {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					to={to}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
