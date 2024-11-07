import { Link } from "@remix-run/react";

export function MobileNavigation() {
	return (
		<nav className="flex flex-col space-y-4 p-4">
			<Link to="/" className="text-sm font-medium hover:text-primary">
				ホーム
			</Link>

			<div className="space-y-2">
				<span className="text-sm font-semibold">製品情報</span>
				<div className="pl-4 space-y-2">
					<Link to="/features" className="block text-sm hover:text-primary">
						機能紹介
					</Link>
					<Link to="/benefits" className="block text-sm hover:text-primary">
						メリット
					</Link>
					<Link to="/screenshots" className="block text-sm hover:text-primary">
						スクリーンショット
					</Link>
				</div>
			</div>

			<div className="space-y-2">
				<span className="text-sm font-semibold">サポート</span>
				<div className="pl-4 space-y-2">
					<Link to="/pricing" className="block text-sm hover:text-primary">
						料金プラン
					</Link>
					<Link to="/faq" className="block text-sm hover:text-primary">
						よくある質問
					</Link>
					<Link to="/contact" className="block text-sm hover:text-primary">
						お問い合わせ
					</Link>
				</div>
			</div>
		</nav>
	);
}
