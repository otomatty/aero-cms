import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@tsudoi-ui/components/ui/dialog";
import { Button } from "@tsudoi-ui/components/ui/button";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeSection() {
	const appUrl = "https://tsudoi.app/download";

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-8">簡単ダウンロード</h2>
				<p className="text-gray-600 mb-8">
					QRコードをスキャンしてすぐにダウンロード
				</p>

				<div className="flex justify-center space-x-4">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">iOSアプリ QRコード</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>iOS版アプリ QRコード</DialogTitle>
							</DialogHeader>
							<div className="flex justify-center p-4">
								<QRCodeCanvas value={appUrl} size={256} />
							</div>
						</DialogContent>
					</Dialog>

					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Androidアプリ QRコード</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Android版アプリ QRコード</DialogTitle>
							</DialogHeader>
							<div className="flex justify-center p-4">
								<QRCodeCanvas value={appUrl} size={256} />
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</section>
	);
}
