import { json, redirect } from "@remix-run/node";
import { z } from "zod";
import { createSupabaseServerClient } from "@/utils/supabase.server";
import type { AuthActionData } from "@/types/auth";

const SignupSchema = z.object({
	email: z.string().email("有効なメールアドレスを入力してください"),
	password: z.string().min(8, "パスワードは8文字以上である必要があります"),
});

export async function handleSignupSubmission(
	request: Request,
): Promise<Response> {
	const formData = await request.formData();
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		const validatedData = SignupSchema.parse({ email, password });
		const supabase = createSupabaseServerClient(request);

		const { error: signUpError } = await supabase.auth.signUp({
			email: validatedData.email,
			password: validatedData.password,
		});

		if (signUpError) {
			return json<AuthActionData>({
				error: signUpError.message,
				success: false,
			});
		}

		return redirect("/auth/login?message=check-email");
	} catch (error) {
		if (error instanceof z.ZodError) {
			return json<AuthActionData>({
				error: error.errors[0].message,
				success: false,
			});
		}
		return json<AuthActionData>({
			error: "サインアップに失敗しました",
			success: false,
		});
	}
}
