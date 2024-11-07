import { Link } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";
import { Checkbox } from "@tsudoi-ui/components/ui/checkbox";
import { Label } from "@tsudoi-ui/components/ui/label";

export default function AgreementSection() {
	return (
		<section className="bg-blue-50 py-16 text-center">
			<div className="container mx-auto px-4 max-w-2xl">
				<h2 className="text-2xl font-bold mb-6">利用規約への同意</h2>
				<div className="flex items-center justify-center mb-6">
					<Checkbox id="terms-agreement" />
					<Label htmlFor="terms-agreement" className="ml-2">
						利用規約およびプライバシーポリシーに同意します
					</Label>
				</div>
				<p className="text-gray-600 mb-8">
					利用規約に同意いただくことで、Tsudoiのサービスをご利用いただけます。
				</p>
				<div className="flex justify-center space-x-4">
					<Link to="/privacy">
						<Button variant="outline">プライバシーポリシー</Button>
					</Link>
					<Link to="/download">
						<Button variant="default">同意して続行</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
