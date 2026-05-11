import Header from "./components/Header";
import SprintSummary from "./components/SprintSummary";
import TaskColumn from "./components/TaskColumn";
import "./App.css";

const tasks = {
  todo: [
    { title: "Set up Vite project", priority: "High" },
    { title: "Create component structure", priority: "Medium" },
  ],
  doing: [{ title: "Build static task board layout", priority: "High" }],
  done: [{ title: "Lock Monday scope", priority: "Low" }],
};

function App() {
  return (
    <main className="app">
      <Header />
      <SprintSummary />

      <section className="board">
        <TaskColumn title="To Do" tasks={tasks.todo} />
        <TaskColumn title="Doing" tasks={tasks.doing} />
        <TaskColumn title="Done" tasks={tasks.done} />
      </section>
    </main>
  );
}

export default App;
