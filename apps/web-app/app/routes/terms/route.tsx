import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import TermsOfServiceSection from "@/components/site/pages/terms/TermsOfServiceSection";
import LastUpdatedSection from "@/components/site/pages/terms/LastUpdatedSection";
import AgreementSection from "@/components/site/pages/terms/AgreementSection";

export const meta = () => {
	return [
		{ title: "利用規約 - Tsudoi" },
		{ name: "description", content: "Tsudoiの利用規約" },
	];
};

export default function TermsOfServicePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="利用規約"
					description="Tsudoiサービスの利用に関する重要な情報"
				/>
				<TermsOfServiceSection />
				<LastUpdatedSection />
				<AgreementSection />
			</main>
			<Footer />
		</>
	);
}
