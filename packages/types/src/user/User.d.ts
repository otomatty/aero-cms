import type { ID, Timestamp } from "../common/CommonTypes";

export interface User extends Timestamp {
	id: ID;
	email: string;
	password?: string;
	firstName: string;
	lastName: string;
	firstNameKana?: string;
	lastNameKana?: string;
	avatar?: string;
	phoneNumber?: string;
	status: UserStatus;
	role: UserRole;
	profile?: UserProfile;
}

export type UserStatus = "ACTIVE" | "INACTIVE" | "PENDING" | "SUSPENDED";

export type UserRole = "ADMIN" | "USER" | "COMMUNITY_ADMIN";

export interface UserProfile {
	bio?: string;
	interests?: string[];
	website?: string;
	location?: string;
	birthday?: Date;
	gender?: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY";
}
