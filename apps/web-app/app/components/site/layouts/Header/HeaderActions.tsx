import { Link } from "@remix-run/react";
import { Button } from "@tsudoi-ui/components/ui/button";

export function HeaderActions() {
	return (
		<div className="hidden md:flex items-center space-x-2">
			<Button variant="outline" asChild>
				<Link to="/auth/login">ログイン</Link>
			</Button>
			<Button asChild>
				<Link to="/auth/signup">新規登録</Link>
			</Button>
		</div>
	);
}
