import { Link } from "@remix-run/react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { HeaderActions } from "./HeaderActions";
import { cn } from "@tsudoi-ui/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@tsudoi-ui/components/ui/sheet";
import { Button } from "@tsudoi-ui/components/ui/button";
import { Menu } from "lucide-react";

const headerStyle = cn(
	"sticky z-50 mx-auto rounded-lg border",
	"bg-background/90 backdrop-blur",
	{
		"top-2 w-[calc(100%-1rem)]": true,
		"md:top-4 md:w-[calc(100%-2rem)]": true,
	},
);

const Header = () => {
	return (
		<header className={headerStyle}>
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center space-x-4">
					{/* ロゴ */}
					<Link to="/" className="flex items-center space-x-2">
						<span className="font-bold text-xl">Tsudoi</span>
					</Link>
				</div>

				{/* デスクトップナビゲーションとアクション */}
				<div className="flex items-center space-x-4">
					<DesktopNavigation />
					<HeaderActions />
				</div>
				{/* モバイルメニュー */}
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<Menu className="h-6 w-6" />
							<span className="sr-only">メニューを開く</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="pr-0">
						<MobileNavigation />
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};

export default Header;
