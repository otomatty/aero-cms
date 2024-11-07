import Header from "@/components/site/layouts/Header";
import Footer from "@/components/site/layouts/Footer";
import HeroSection from "@/components/site/common/HeroSection";
import ContactForm from "@/components/site/pages/contact/ContactForm";
import ContactInfoSection from "@/components/site/pages/contact/ContactInfoSection";

export const meta = () => {
	return [
		{ title: "お問い合わせ - Tsudoi" },
		{ name: "description", content: "Tsudoiへのお問い合わせはこちら" },
	];
};

export default function ContactPage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection
					title="お問い合わせ"
					description="Tsudoiについてのご質問、ご意見、提案などお気軽にお問い合わせください。"
				/>
				<div className="container mx-auto px-4 py-16">
					<h2 className="text-3xl font-bold text-center mb-12">
						お問い合わせフォーム
					</h2>
					<ContactForm />
				</div>
				<ContactInfoSection />
			</main>
			<Footer />
		</>
	);
}
