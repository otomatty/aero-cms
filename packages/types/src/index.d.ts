// お知らせ
export interface Announcement {
	date: Date;
	title: string;
	description: string;
	content: string; // リッチテキスト対応
}

// ブログ記事
export interface BlogPost {
	date: Date;
	title: string;
	summary: string;
	content: string; // リッチテキスト対応
	tags?: string[];
	category?: string;
}

// イベント
export interface Event {
	name: string;
	dateTime: Date;
	location: string;
	description: string;
	registrationLink?: string;
	image?: string;
}

// 製品情報
export interface ProductInfo {
	name: string;
	description: string;
	price?: number;
	status: "公開" | "非公開";
	image: string;
	specs?: string;
	purchaseLink?: string;
}

// FAQ
export interface FAQ {
	question: string;
	answer: string;
	category?: string;
	status?: "公開" | "非公開";
}

// チームメンバー
export interface TeamMember {
	name: string;
	position: string;
	profileImage: string;
	bio: string;
	snsLinks?: string[];
	expertise?: string[];
}

// 顧客の声
export interface Testimonial {
	customerName?: string;
	rating: number;
	comment: string;
	date?: Date;
	relatedProductsOrServices?: string[];
}

// ギャラリー
export interface GalleryItem {
	projectName: string;
	date: Date;
	description: string;
	media: string[]; // 画像・動画
	link?: string;
}

// ニュース
export interface News {
	title: string;
	date: Date;
	summary: string;
	content: string; // リッチテキスト対応
	relatedLinks?: string[];
}

// 採用情報
export interface JobPosting {
	position: string;
	location: string;
	employmentType: string;
	jobDescription: string;
	qualifications: {
		required: string[];
		preferred?: string[];
	};
	salary: string;
	benefits?: string;
	workingHours: string;
	holidays: string;
	numberOfOpenings?: number;
	status: "募集" | "終了";
	applicationMethod: string;
	companyInfoLink?: string;
	publishDate: Date;
	deadline?: Date;
}

// お問い合わせ
export interface Inquiry {
	content: string;
	name: string;
	email: string;
	phone?: string;
	category: string;
	subject: string;
	message: string;
	inquiryDate: Date;
	status: "対応中" | "対応完了" | "保留";
	handler?: string;
	notes: string;
	responseHistory?: string[];
}
