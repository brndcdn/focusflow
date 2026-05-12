import { useState } from "react";
import Header from "./components/Header";
import SprintSummary from "./components/SprintSummary";
import TaskColumn from "./components/TaskColumn";
import "./App.css";

const initialTasks = [
  { id: 1, title: "Set up Vite project", priority: "High", status: "done" },
  {
    id: 2,
    title: "Create component structure",
    priority: "Medium",
    status: "done",
  },
  {
    id: 3,
    title: "Build static task board layout",
    priority: "High",
    status: "doing",
  },
  {
    id: 4,
    title: "Add task movement buttons",
    priority: "High",
    status: "todo",
  },
  {
    id: 5,
    title: "Show task counts per column",
    priority: "Medium",
    status: "todo",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function moveTask(taskId, newStatus) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <main className="app">
      <Header />
      <SprintSummary />

      <section className="board">
        <TaskColumn title="To Do" tasks={todoTasks} onMoveTask={moveTask} />
        <TaskColumn title="Doing" tasks={doingTasks} onMoveTask={moveTask} />
        <TaskColumn title="Done" tasks={doneTasks} onMoveTask={moveTask} />
      </section>
    </main>
  );
}

export default App;
