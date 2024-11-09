import { Card } from "@tsudoi-ui/components/ui/card";

export default function TaskList() {
	const tasks = [
		{ id: 1, title: "タスク1", completed: false },
		{ id: 2, title: "タスク2", completed: true },
		// 他のタスク
	];

	return (
		<Card className="p-4">
			<h2 className="text-lg font-semibold">タスク一覧</h2>
			<ul>
				{tasks.map((task) => (
					<li key={task.id} className={task.completed ? "line-through" : ""}>
						{task.title}
					</li>
				))}
			</ul>
		</Card>
	);
}
