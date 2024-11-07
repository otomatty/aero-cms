import { Outlet } from "@remix-run/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@tsudoi-ui/components/ui/card";
import Header from "@/components/site/layouts/Header";

export default function AuthLayout() {
	return (
		<>
			<Header />
			<div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-background">
				<Card className="w-full max-w-md">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl font-bold">Tsudoi</CardTitle>
						<CardDescription>
							地域をつなぐコミュニティプラットフォーム
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Outlet />
					</CardContent>
				</Card>
			</div>
		</>
	);
}
