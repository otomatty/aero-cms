import type { ID, Prefecture, Timestamp } from "../common/CommonTypes";

export interface Community extends Timestamp {
	id: ID;
	name: string;
	description: string;
	ownerId: ID;
	avatar?: string;
	coverImage?: string;
	location?: {
		prefecture: Prefecture;
		city: string;
		address?: string;
	};
	category: CommunityCategory;
	tags?: string[];
	memberCount: number;
	status: CommunityStatus;
	settings: CommunitySettings;
}

export type CommunityCategory =
	| "SPORTS"
	| "CULTURE"
	| "EDUCATION"
	| "HOBBY"
	| "SOCIAL"
	| "BUSINESS"
	| "OTHER";

export type CommunityStatus = "ACTIVE" | "INACTIVE" | "PENDING" | "CLOSED";

export interface CommunitySettings {
	isPrivate: boolean;
	joinApprovalRequired: boolean;
	allowGuestReservation: boolean;
	maxMembers?: number;
	guidelines?: string;
}
