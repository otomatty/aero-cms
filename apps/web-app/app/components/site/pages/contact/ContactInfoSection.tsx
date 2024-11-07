import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfoSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">連絡先情報</h2>
				<div className="grid md:grid-cols-3 gap-8 text-center">
					<div className="bg-gray-50 p-6 rounded-lg">
						<Mail className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="font-semibold mb-2">メール</h3>
						<p>support@tsudoi.com</p>
					</div>
					<div className="bg-gray-50 p-6 rounded-lg">
						<Phone className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="font-semibold mb-2">電話</h3>
						<p>03-1234-5678</p>
					</div>
					<div className="bg-gray-50 p-6 rounded-lg">
						<MapPin className="mx-auto mb-4 text-blue-500" size={48} />
						<h3 className="font-semibold mb-2">住所</h3>
						<p>東京都渋谷区道玄坂1-2-3</p>
					</div>
				</div>
			</div>
		</section>
	);
}
