import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { createSupabaseServerClient } from "@/utils/supabase.server";

export async function action({ request }: ActionFunctionArgs) {
	const supabase = createSupabaseServerClient(request);
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: `${process.env.PUBLIC_URL}/auth/callback`,
		},
	});

	if (error) {
		return redirect("/auth/login?error=google-auth-failed");
	}

	return redirect(data.url);
}
