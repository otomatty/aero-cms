import { Smartphone, Tablet, Monitor } from "lucide-react";

const deviceSupport = [
	{
		icon: Smartphone,
		title: "スマートフォン",
		description: "iOS 14.0以上、Android 8.0以上に対応",
	},
	{
		icon: Tablet,
		title: "タブレット",
		description: "iPad、Android タブレットで最適化表示",
	},
	{
		icon: Monitor,
		title: "デスクトップ",
		description: "Webブラウザ版も近日リリース予定",
	},
];

export default function DeviceSupportSection() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					多様なデバイスに対応
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{deviceSupport.map((device) => (
						<div
							key={device.title}
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
