import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import DownloadButtons from "@/components/site/pages/download/DownloadButtons";
import DeviceSupportSection from "@/components/site/pages/download/DeviceSupportSection";
import QRCodeSection from "@/components/site/pages/download/QRCodeSection";

export const meta = () => {
	return [
		{ title: "ダウンロード - Tsudoi" },
		{ name: "description", content: "Tsudoiアプリのダウンロード方法" },
	];
};

export default function DownloadPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="アプリをダウンロード"
					description="Tsudoiアプリを今すぐダウンロードして、地域とのつながりを体験しましょう。"
				>
					<DownloadButtons />
				</HeroSection>
				<DeviceSupportSection />
				<QRCodeSection />
			</main>
			<Footer />
		</>
	);
}
