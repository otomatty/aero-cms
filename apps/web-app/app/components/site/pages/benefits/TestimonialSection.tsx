export default function TestimonialSection() {
	const testimonials = [
		{
			quote:
				"Tsudoiのおかげで、地域の新しいイベントや情報をすぐに知ることができます。",
			name: "田中 健太さん",
			location: "東京都",
		},
		{
			quote: "施設予約が簡単になり、地域活動への参加が格段に増えました。",
			name: "佐藤 美咲さん",
			location: "神奈川県",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">ユーザーの声</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="bg-gray-50 p-6 rounded-lg shadow-sm"
						>
							<p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
							<div>
								<p className="font-semibold">{testimonial.name}</p>
								<p className="text-gray-600">{testimonial.location}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
