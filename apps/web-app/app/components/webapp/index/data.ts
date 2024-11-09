import type { UserData, SessionData, PageViewData } from "./types";

export const userData: UserData[] = [
	{ month: "January", users: 120 },
	{ month: "February", users: 150 },
	{ month: "March", users: 180 },
	{ month: "April", users: 200 },
	{ month: "May", users: 220 },
	{ month: "June", users: 250 },
	{ month: "July", users: 270 },
	{ month: "August", users: 300 },
	{ month: "September", users: 320 },
	{ month: "October", users: 350 },
	{ month: "November", users: 370 },
	{ month: "December", users: 400 },
];

export const sessionData: SessionData[] = [
	{ month: "January", sessions: 300 },
	{ month: "February", sessions: 320 },
	{ month: "March", sessions: 350 },
	{ month: "April", sessions: 370 },
	{ month: "May", sessions: 400 },
	{ month: "June", sessions: 420 },
	{ month: "July", sessions: 450 },
	{ month: "August", sessions: 470 },
	{ month: "September", sessions: 500 },
	{ month: "October", sessions: 520 },
	{ month: "November", sessions: 550 },
	{ month: "December", sessions: 570 },
];

export const pageViewData: PageViewData[] = [
	{ name: "ホーム", value: 3000 },
	{ name: "ブログ", value: 1500 },
	{ name: "お問い合わせ", value: 500 },
	{ name: "製品", value: 2000 },
	{ name: "サービス", value: 1800 },
	{ name: "会社情報", value: 1200 },
	{ name: "採用情報", value: 800 },
	{ name: "ニュース", value: 600 },
	{ name: "イベント", value: 400 },
	{ name: "サポート", value: 1000 },
	{ name: "プライバシーポリシー", value: 300 },
	{ name: "利用規約", value: 200 },
];
