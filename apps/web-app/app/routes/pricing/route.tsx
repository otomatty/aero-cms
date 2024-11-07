import type { MetaFunction } from "@remix-run/node";
import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import PricingPlansSection from "@/components/site/pages/pricing/PricingPlansSection";
import PricingFAQSection from "@/components/site/pages/pricing/PricingFAQSection";
import PricingCTASection from "@/components/site/pages/pricing/PricingCTASection";

export const meta: MetaFunction = () => {
	return [
		{ title: "料金プラン - Tsudoi" },
		{ name: "description", content: "Tsudoiの料金プランをご紹介" },
	];
};

export default function PricingPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="料金プラン"
					description="Tsudoiの柔軟な料金プランで、あなたのニーズに合ったプランを選択"
				/>
				<PricingPlansSection />
				<PricingFAQSection />
				<PricingCTASection />
			</main>
			<Footer />
		</>
	);
}
