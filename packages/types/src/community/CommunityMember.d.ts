import type { ID, Timestamp } from "../common/CommonTypes";

export interface CommunityMember extends Timestamp {
	id: ID;
	communityId: ID;
	userId: ID;
	role: CommunityMemberRole;
	status: CommunityMemberStatus;
}

export type CommunityMemberRole = "OWNER" | "ADMIN" | "MODERATOR" | "MEMBER";

export type CommunityMemberStatus = "ACTIVE" | "PENDING" | "BLOCKED";
