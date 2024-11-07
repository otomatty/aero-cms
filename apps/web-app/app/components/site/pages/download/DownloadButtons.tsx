import { Button } from "@tsudoi-ui/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export default function DownloadButtons() {
	return (
		<div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
			<Button
				variant="default"
				size="lg"
				className="w-full md:w-auto"
				onClick={() => window.open("https://apps.apple.com", "_blank")}
			>
				<Apple className="mr-2" />
				App Store
			</Button>
			<Button
				variant="secondary"
				size="lg"
				className="w-full md:w-auto"
				onClick={() => window.open("https://play.google.com", "_blank")}
			>
				<Smartphone className="mr-2" />
				Google Play
			</Button>
		</div>
	);
}
