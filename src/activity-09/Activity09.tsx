import { useEffect, useState } from "react";
import './Activity09.css'

export default function Activity09() {
    const [tasks, setTasks] = useState<
        { id: number; title: string; completed: boolean }[]
    >(
        () =>
            JSON.parse(localStorage.getItem("tasks") || "[]") as {
                id: number;
                title: string;
                completed: boolean;
            }[],
    );

    const [text, setText] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="activity-card">
            <h1>Activity 09: Tasklist with LocalStorage</h1>
            <div className="task-row">
                <input
                    className="input-field"
                    type="text"
                    placeholder="Task title"
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="btn-primary"
                    onClick={() =>
                        setTasks([
                            ...tasks,
                            { id: tasks.length + 1, title: text, completed: false },
                        ])
                    }
                >
                    Add Task
                </button>
                <button className="btn-danger" onClick={() => setTasks([])}>Clear Tasks</button>
            </div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <input
                            className="task-checkbox"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() =>
                                setTasks(
                                    tasks.map((t) =>
                                        t.id === task.id
                                            ? { ...t, completed: !t.completed }
                                            : t,
                                    ),
                                )
                            }
                        />
                        <span className={task.completed ? "completed" : "task-text"}>{task.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
