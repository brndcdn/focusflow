import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onMoveTask }) {
  return (
    <section className="task-column">
      <h2>
        {title} <span>({tasks.length})</span>
      </h2>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-state">No tasks here yet.</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskColumn;
