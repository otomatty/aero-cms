import type { ID, Timestamp } from "../common/CommonTypes";

export interface Event extends Timestamp {
	id: ID;
	communityId: ID;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	location?: string;
	capacity: number;
	remainingSpots: number;
	price?: number;
	isOnline: boolean;
	meetingUrl?: string;
	status: EventStatus;
	settings: EventSettings;
}

export type EventStatus =
	| "DRAFT"
	| "PUBLISHED"
	| "CANCELLED"
	| "COMPLETED"
	| "FULL";

export interface EventSettings {
	allowWaitlist: boolean;
	requireApproval: boolean;
	cancelationDeadline?: Date;
	refundPolicy?: string;
	maxAttendeesPerReservation?: number;
}
