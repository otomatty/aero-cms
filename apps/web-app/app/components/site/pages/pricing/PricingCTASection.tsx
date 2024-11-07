import { Link } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";

export default function PricingCTASection() {
	return (
		<section className="bg-blue-500 text-white py-16 text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-6">今すぐTsudoiを始めよう</h2>
				<p className="text-xl mb-8">
					フリープランですぐに始められます。プレミアムプランで地域活動をさらに充実させましょう。
				</p>
				<div className="flex justify-center space-x-4">
					<Link to="/download">
						<Button variant="secondary" size="lg">
							アプリをダウンロード
						</Button>
					</Link>
					<Link to="/contact">
						<Button
							variant="outline"
							size="lg"
							className="text-white border-white hover:bg-blue-600"
						>
							お問い合わせ
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
