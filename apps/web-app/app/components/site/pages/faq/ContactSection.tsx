import { Link } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";

export default function ContactSection() {
	return (
		<section className="bg-blue-50 py-16 text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-6">まだ質問が解決しない場合</h2>
				<p className="text-xl text-gray-600 mb-8">
					お問い合わせフォームから詳細な質問を送付できます。
				</p>
				<Link to="/contact">
					<Button size="lg">お問い合わせはこちら</Button>
				</Link>
			</div>
		</section>
	);
}
