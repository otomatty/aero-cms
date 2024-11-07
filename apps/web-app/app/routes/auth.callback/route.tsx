import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { createSupabaseServerClient } from "@/utils/supabase.server";

export async function loader({ request }: LoaderFunctionArgs) {
	const supabase = createSupabaseServerClient(request);
	const { searchParams } = new URL(request.url);
	const code = searchParams.get("code");

	if (code) {
		await supabase.auth.exchangeCodeForSession(code);
	}

	return redirect("/webapp");
}
