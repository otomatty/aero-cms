import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@tsudoi-ui/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@tsudoi-ui/components/ui/form";
import { Input } from "@tsudoi-ui/components/ui/input";
import { Textarea } from "@tsudoi-ui/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@tsudoi-ui/components/ui/select";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "お名前は2文字以上で入力してください。",
	}),
	email: z.string().email({
		message: "有効なメールアドレスを入力してください。",
	}),
	phone: z.string().optional(),
	category: z.enum(["general", "support", "partnership", "other"], {
		required_error: "お問い合わせ種別を選択してください。",
	}),
	message: z.string().min(10, {
		message: "メッセージは10文字以上で入力してください。",
	}),
});

export default function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			category: undefined,
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// TODO: 実際の送信処理を実装
		console.log(values);
		alert("お問い合わせありがとうございます。");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 max-w-md mx-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								お名前 <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder="山田 太郎" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								メールアドレス <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input placeholder="example@email.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>電話番号 (任意)</FormLabel>
							<FormControl>
								<Input placeholder="090-1234-5678" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								お問い合わせ種別 <span className="text-red-500">*</span>
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="種別を選択" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="general">一般的な問い合わせ</SelectItem>
									<SelectItem value="support">サポート</SelectItem>
									<SelectItem value="partnership">パートナーシップ</SelectItem>
									<SelectItem value="other">その他</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								メッセージ <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="お問い合わせ内容をご記入ください"
									className="resize-y"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full">
					送信
				</Button>
			</form>
		</Form>
	);
}
