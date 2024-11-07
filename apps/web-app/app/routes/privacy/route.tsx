import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import PrivacyPolicySection from "@/components/site/pages/privacy/PrivacyPolicySection";
import LastUpdatedSection from "@/components/site/pages/privacy/LastUpdatedSection";
import ContactSection from "@/components/site/pages/privacy/ContactSection";

export const meta = () => {
	return [
		{ title: "プライバシーポリシー - Tsudoi" },
		{ name: "description", content: "Tsudoiのプライバシーポリシー" },
	];
};

export default function PrivacyPolicyPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="プライバシーポリシー"
					description="Tsudoiにおける個人情報の取り扱いについて詳しく説明します。"
				/>
				<PrivacyPolicySection />
				<LastUpdatedSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
