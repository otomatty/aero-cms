import { Link } from "@remix-run/react";

export default function CTASection() {
	return (
		<section className="py-16 bg-blue-500 text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					今すぐTsudoiを始めよう
				</h2>
				<p className="text-xl mb-8 max-w-2xl mx-auto">
					地域とのつながりを深め、新しいコミュニティ体験を楽しみましょう。
				</p>
				<div className="flex justify-center space-x-4">
					<Link
						to="/download"
						className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-gray-100 transition"
					>
						アプリをダウンロード
					</Link>
					<Link
						to="/features"
						className="border border-white text-white px-8 py-3 rounded-full hover:bg-blue-600 transition"
					>
						詳細を見る
					</Link>
				</div>
			</div>
		</section>
	);
}
