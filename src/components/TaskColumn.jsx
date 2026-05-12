import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onMoveTask }) {
  return (
    <section className="task-column">
      <h2>
        {title} <span>({tasks.length})</span>
      </h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
        ))}
      </div>
    </section>
  );
}

export default TaskColumn;
