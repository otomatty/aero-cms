import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import ScreenshotGallerySection from "@/components/site/pages/screenshots/ScreenshotGallerySection";
import DeviceSupportSection from "@/components/site/pages/screenshots/DeviceSupportSection";

export const meta = () => {
	return [
		{ title: "スクリーンショット - Tsudoi" },
		{ name: "description", content: "Tsudoiのアプリ画面をご覧ください" },
	];
};

export default function ScreenshotsPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="スクリーンショット"
					description="Tsudoiのアプリ画面をご覧ください"
				/>
				<ScreenshotGallerySection />
				<DeviceSupportSection />
			</main>
			<Footer />
		</>
	);
}
