import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import CommunityBenefitsSection from "@/components/site/pages/benefits/CommunityBenefitsSection";
import UserBenefitsSection from "@/components/site/pages/benefits/UserBenefitsSection";
import TestimonialSection from "@/components/site/pages/benefits/TestimonialSection";

export const meta = () => {
	return [
		{ title: "メリット - Tsudoi" },
		{ name: "description", content: "Tsudoiを使うメリットをご紹介" },
	];
};

export default function BenefitsPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="Tsudoiで地域生活をもっと豊かに"
					description="Tsudoiは、地域コミュニティとのつながりを強化し、日常生活をより便利で楽しいものにします。"
				/>
				<CommunityBenefitsSection />
				<UserBenefitsSection />
				<TestimonialSection />
			</main>
			<Footer />
		</>
	);
}
