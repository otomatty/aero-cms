import type { LucideIcon } from "lucide-react";

export interface Team {
	name: string;
	logo: LucideIcon;
	plan: string;
}

export interface MenuItem {
	title: string;
	url?: string;
	path: string;
	icon: LucideIcon;
	isActive?: boolean;
	items?: {
		title: string;
		path: string;
	}[];
}

export interface Project {
	name: string;
	path: string;
	icon: LucideIcon;
}

export interface User {
	name: string;
	email: string;
	avatar: string;
}
