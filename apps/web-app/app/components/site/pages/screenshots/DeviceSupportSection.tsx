import { Smartphone, Tablet, Monitor } from "lucide-react";

const deviceSupport = [
	{
		id: "1",
		icon: Smartphone,
		title: "スマートフォン",
		description: "iOS、Androidで最適化されたデザイン",
	},
	{
		id: "2",
		icon: Tablet,
		title: "タブレット",
		description: "大画面でも使いやすいレイアウト",
	},
	{
		id: "3",
		icon: Monitor,
		title: "レスポンシブ対応",
		description: "あらゆる画面サイズに自動調整",
	},
];

export default function DeviceSupportSection() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					マルチデバイス対応
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{deviceSupport.map((device) => (
						<div
							key={device.id}
							className="text-center p-6 bg-white rounded-lg shadow-sm"
						>
							<device.icon className="mx-auto mb-4 text-blue-500" size={48} />
							<h3 className="text-xl font-semibold mb-4">{device.title}</h3>
							<p className="text-gray-600">{device.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
