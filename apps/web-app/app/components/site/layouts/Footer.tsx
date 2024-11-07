const Footer = () => {
	return (
		<footer className="border-t bg-background">
			<div className="container py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* 会社情報 */}
					<div className="space-y-3">
						<h3 className="text-lg font-semibold">Tsudoi</h3>
						<p className="text-sm text-muted-foreground">
							地域をつなぐコミュニティプラットフォーム
						</p>
					</div>

					{/* リンク集1 */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold">製品</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/features"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									機能
								</a>
							</li>
							<li>
								<a
									href="/pricing"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									料金
								</a>
							</li>
						</ul>
					</div>

					{/* リンク集2 */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold">会社情報</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/about"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="/contact"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									お問い合わせ
								</a>
							</li>
						</ul>
					</div>

					{/* リンク集3 */}
					<div className="space-y-3">
						<h3 className="text-sm font-semibold">法的情報</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="/privacy"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									プライバシーポリシー
								</a>
							</li>
							<li>
								<a
									href="/terms"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									利用規約
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t pt-8 text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Your App. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
