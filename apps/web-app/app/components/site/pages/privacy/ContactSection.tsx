import { Link } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";

export default function ContactSection() {
	return (
		<section className="bg-blue-50 py-16 text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold mb-6">プライバシーに関するご質問</h2>
				<p className="text-gray-600 mb-8">
					プライバシーポリシーについて不明な点がございましたら、お気軽にお問い合わせください。
				</p>
				<Link to="/contact">
					<Button variant="default">お問い合わせ</Button>
				</Link>
			</div>
		</section>
	);
}
