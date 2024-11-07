import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import FAQAccordion from "@/components/site/pages/faq/FAQAccordion";
import FAQCategorySection from "@/components/site/pages/faq/FAQCategorySection";
import ContactSection from "@/components/site/pages/faq/ContactSection";

export const meta = () => {
	return [
		{ title: "よくある質問 - Tsudoi" },
		{ name: "description", content: "Tsudoiに関するよくある質問" },
	];
};

export default function FAQPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="よくある質問"
					description="Tsudoiについてよく寄せられる質問をカテゴリ別にまとめました。"
				/>
				<FAQCategorySection />
				<FAQAccordion />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
