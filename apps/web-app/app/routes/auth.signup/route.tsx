import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";
import { Input } from "@tsudoi-ui/components/ui/input";
import { Label } from "@tsudoi-ui/components/ui/label";
import { Separator } from "@tsudoi-ui/components/ui/separator";
import type { ActionFunctionArgs } from "@remix-run/node";
import { useToast } from "@tsudoi-ui/hooks/use-toast";
import { useEffect } from "react";
import type { AuthActionData } from "@/types/auth";
import { handleSignupSubmission } from "./signup-form.server";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";

export default function SignupPage() {
	const actionData = useActionData<AuthActionData>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const { toast } = useToast();

	useEffect(() => {
		if (actionData?.error) {
			toast({
				variant: "destructive",
				description: actionData.error,
			});
		}
		if (actionData?.success && actionData?.message) {
			toast({
				description: actionData.message,
			});
		}
	}, [actionData, toast]);

	return (
		<div className="grid gap-4">
			<Form method="post" className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="name">名前</Label>
					<Input
						id="name"
						name="name"
						type="text"
						placeholder="山田 太郎"
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="email">メールアドレス</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="example@tsudoi.com"
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">パスワード</Label>
					<Input
						id="password"
						name="password"
						type="password"
						required
						disabled={isSubmitting}
					/>
				</div>
				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? "アカウント作成中..." : "アカウント作成"}
				</Button>
			</Form>

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						または
					</span>
				</div>
			</div>

			<GoogleAuthButton isSubmitting={isSubmitting} />

			<Separator />

			<div className="text-center text-sm">
				すでにアカウントをお持ちですか？{" "}
				<Link to="/auth/login" className="underline">
					ログイン
				</Link>
			</div>
		</div>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	return handleSignupSubmission(request);
}
