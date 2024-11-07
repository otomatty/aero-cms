export default function LastUpdatedSection() {
	const lastUpdated = "2023年12月1日";

	return (
		<section className="container mx-auto px-4 py-8 text-center">
			<p className="text-gray-600">最終更新日: {lastUpdated}</p>
			<p className="text-sm text-gray-500 mt-4">
				当社は、法律の変更や当社のサービス提供方法の変更に応じて、利用規約を随時更新する権利を留保します。
			</p>
		</section>
	);
}
