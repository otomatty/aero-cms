import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import MainFeaturesSection from "@/components/site/pages/features/MainFeaturesSection";
import AdditionalFeaturesSection from "@/components/site/pages/features/AdditionalFeaturesSection";
import CTAFeaturesSection from "@/components/site/pages/features/CTAFeaturesSection";

export const meta = () => {
	return [
		{ title: "機能紹介 - Tsudoi" },
		{ name: "description", content: "Tsudoiの主な機能を紹介します" },
	];
};

export default function FeaturesPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="Tsudoiの機能"
					description="地域とのつながりを深める、革新的な機能を紹介します。"
				/>
				<MainFeaturesSection />
				<AdditionalFeaturesSection />
				<CTAFeaturesSection />
			</main>
			<Footer />
		</>
	);
}
