import { json, redirect } from "@remix-run/node";
import { z } from "zod";
import { createSupabaseServerClient } from "@/utils/supabase.server";

const LoginSchema = z.object({
	email: z.string().email("有効なメールアドレスを入力してください"),
	password: z.string().min(1, "パスワードは必須です"),
});

export async function handleLoginSubmission(
	request: Request,
): Promise<Response> {
	const formData = await request.formData();
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	try {
		const validatedData = LoginSchema.parse({ email, password });
		const supabase = createSupabaseServerClient(request);

		const { data, error } = await supabase.auth.signInWithPassword({
			email: validatedData.email,
			password: validatedData.password,
		});

		if (error) {
			return json({ error: error.message }, { status: 400 });
		}

		// const user = data.user;

		// const { data: userProfile, error: profileError } = await supabase
		// 	.from("user_profiles")
		// 	.select("*")
		// 	.eq("user_id", user.id)
		// 	.single();

		// if (profileError || !userProfile) {
		// 	return redirect("/initial-setup");
		// }

		return redirect("/webapp");
	} catch (error) {
		if (error instanceof z.ZodError) {
			return json({ error: error.errors[0].message }, { status: 400 });
		}
		return json({ error: "ログインに失敗しました" }, { status: 500 });
	}
}
