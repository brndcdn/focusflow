import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks }) {
  return (
    <section className="task-column">
      <h2>{title}</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
            priority={task.priority}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskColumn;
