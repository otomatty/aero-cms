// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Tsudoi公式ドキュメント",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "ガイド",
					items: [
						{
							label: "はじめに",
							slug: "guides/getting-started",
						},
						{
							label: "Webアプリ",
							autogenerate: { directory: "guides/web-app" },
						},
						{
							label: "Tauriアプリ",
							autogenerate: { directory: "guides/tauri-app" },
						},
					],
				},
				{
					label: "用件定義",
					autogenerate: { directory: "requirements" },
				},
				{
					label: "リファレンス",
					items: [
						{
							label: "Remix",
							items: [
								{
									label: "Remixとは？",
									slug: "reference/remix",
								},
								{
									label: "Discussion Topics(議事録)",
									autogenerate: {
										directory: "reference/remix/discussion-topics",
									},
								},
								{
									label: "File Convention(ファイル規約)",
									autogenerate: {
										directory: "reference/remix/file-convention",
									},
								},
							],
						},
						{
							label: "Bun",
							autogenerate: { directory: "reference/bun" },
						},
						{
							label: "Starlight",
							autogenerate: { directory: "reference/starlight" },
						},
					],
				},
			],
		}),
	],
});
