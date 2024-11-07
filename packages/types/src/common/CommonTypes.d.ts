export type ID = string;

export type Timestamp = {
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date | null;
};

export type Prefecture =
	| "北海道"
	| "青森県"
	| "岩手県"
	// ... 他の都道府県
	| "鹿児島県"
	| "沖縄県";

export type Address = {
	postalCode: string;
	prefecture: Prefecture;
	city: string;
	street: string;
	building?: string;
};
