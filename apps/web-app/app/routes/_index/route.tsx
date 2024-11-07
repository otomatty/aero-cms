import type { MetaFunction } from "@remix-run/node";
import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/pages/index/HeroSection";
import FeaturesOverviewSection from "@/components/site/pages/index/FeaturesOverviewSection";
import BenefitsSection from "@/components/site/pages/index/BenefitsSection";
import CTASection from "@/components/site/pages/index/CTASection";

export const meta: MetaFunction = () => {
	return [
		{ title: "Tsudoi - 地域をつなぐコミュニティプラットフォーム" },
		{
			name: "description",
			content:
				"地域住民のためのコミュニティ、予約、イベント機能を提供する地域密着型アプリ",
		},
	];
};

export default function Index() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<FeaturesOverviewSection />
				<BenefitsSection />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
