import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";
import { Input } from "@tsudoi-ui/components/ui/input";
import { Label } from "@tsudoi-ui/components/ui/label";
import { Separator } from "@tsudoi-ui/components/ui/separator";
import type { ActionFunctionArgs } from "@remix-run/node";
import { useToast } from "@tsudoi-ui/hooks/use-toast";
import { useEffect } from "react";
import type { AuthActionData } from "@/types/auth";
import { handleLoginSubmission } from "./login-form.server";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";

export default function LoginPage() {
	const actionData = useActionData<AuthActionData>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const { toast } = useToast();

	useEffect(() => {
		if (actionData?.error) {
			toast({
				variant: "destructive",
				title: "ログインに失敗しました",
			});
		}
	}, [actionData, toast]);

	return (
		<div className="grid gap-4">
			<Form method="post" className="grid gap-4">
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
				<Link
					to="/auth/forgot-password"
					className="text-sm text-right text-muted-foreground hover:underline"
				>
					パスワードを忘れた方
				</Link>
				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? "ログイン中..." : "ログイン"}
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
				アカウントをお持ちでない方は{" "}
				<Link to="/auth/signup" className="underline">
					新規登録
				</Link>
			</div>
		</div>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	return handleLoginSubmission(request);
}
