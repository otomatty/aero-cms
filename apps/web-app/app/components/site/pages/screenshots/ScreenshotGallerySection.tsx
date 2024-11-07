import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@tsudoi-ui/components/ui/dialog";

const screenshots = [
	{
		id: "1",
		title: "ホーム画面",
		description: "地域のイベントや最新情報をひと目で確認",
		src: "/images/screenshots/home.png",
	},
	{
		id: "2",
		title: "コミュニティ画面",
		description: "近隣住民とのコミュニケーション",
		src: "/images/screenshots/community.png",
	},
	{
		id: "3",
		title: "イベント詳細",
		description: "イベント情報と参加申し込み",
		src: "/images/screenshots/event-detail.png",
	},
	{
		id: "4",
		title: "施設予約",
		description: "簡単な施設予約システム",
		src: "/images/screenshots/booking.png",
	},
	{
		id: "5",
		title: "プロフィール",
		description: "ユーザープロフィールと設定",
		src: "/images/screenshots/profile.png",
	},
	{
		id: "6",
		title: "通知画面",
		description: "重要な通知を一元管理",
		src: "/images/screenshots/notifications.png",
	},
];

export default function ScreenshotGallerySection() {
	const [selectedScreenshot, setSelectedScreenshot] = useState<
		(typeof screenshots)[0] | null
	>(null);

	return (
		<section className="container mx-auto px-4 py-16">
			<h2 className="text-3xl font-bold text-center mb-12">
				アプリ画面ギャラリー
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{screenshots.map((screenshot) => (
					<button
						type="button"
						key={screenshot.id}
						className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
						onClick={() => setSelectedScreenshot(screenshot)}
					>
						<img
							src={screenshot.src}
							alt={screenshot.title}
							className="w-full h-auto rounded-md"
						/>
						<div className="mt-4 text-center">
							<h3 className="font-semibold">{screenshot.title}</h3>
							<p className="text-gray-600 text-sm">{screenshot.description}</p>
						</div>
					</button>
				))}
			</div>

			{selectedScreenshot && (
				<Dialog
					open={!!selectedScreenshot}
					onOpenChange={() => setSelectedScreenshot(null)}
				>
					<DialogContent className="max-w-4xl">
						<DialogHeader>
							<DialogTitle>{selectedScreenshot.title}</DialogTitle>
						</DialogHeader>
						<img
							src={selectedScreenshot.src}
							alt={selectedScreenshot.title}
							className="w-full h-auto"
						/>
						<p className="text-center text-gray-600">
							{selectedScreenshot.description}
						</p>
					</DialogContent>
				</Dialog>
			)}
		</section>
	);
}
