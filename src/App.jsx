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
  const [priorityFilter, setPriorityFilter] = useState("All");

  function moveTask(taskId, newStatus) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const filteredTasks =
    priorityFilter === "All"
      ? tasks
      : tasks.filter((task) => task.priority === priorityFilter);

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const doingTasks = filteredTasks.filter((task) => task.status === "doing");
  const doneTasks = filteredTasks.filter((task) => task.status === "done");

  const completedTasks = tasks.filter((task) => task.status === "done").length;
  const progressPercentage = Math.round((completedTasks / tasks.length) * 100);

  return (
    <main className="app">
      <Header />
      <SprintSummary progressPercentage={progressPercentage} />

      <section className="controls">
        <label htmlFor="priority-filter">Filter by priority</label>

        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(event) => setPriorityFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </section>

      <section className="board">
        <TaskColumn title="To Do" tasks={todoTasks} onMoveTask={moveTask} />
        <TaskColumn title="Doing" tasks={doingTasks} onMoveTask={moveTask} />
        <TaskColumn title="Done" tasks={doneTasks} onMoveTask={moveTask} />
      </section>
    </main>
  );
}

export default App;
