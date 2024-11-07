import { Link } from "@remix-run/react";

export default function HeroSection() {
	return (
		<section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
					地域をもっと身近に、つながりを深める
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
					Tsudoiは、地域住民のためのコミュニティプラットフォームです。
					近所の人々とつながり、地域のイベントに参加し、簡単に予約できます。
				</p>

				<div className="flex justify-center space-x-4 mb-8">
					<Link
						to="/features"
						className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
					>
						機能を見る
					</Link>
					<Link
						to="/download"
						className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 transition"
					>
						ダウンロード
					</Link>
				</div>
			</div>
		</section>
	);
}
