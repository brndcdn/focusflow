function TaskCard({ task, onMoveTask }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <span className={`priority priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <div className="task-actions">
        {task.status !== "todo" && (
          <button onClick={() => onMoveTask(task.id, "todo")}>
            Move to To Do
          </button>
        )}

        {task.status !== "doing" && (
          <button onClick={() => onMoveTask(task.id, "doing")}>
            Move to Doing
          </button>
        )}

        {task.status !== "done" && (
          <button onClick={() => onMoveTask(task.id, "done")}>
            Move to Done
          </button>
        )}
      </div>
    </article>
  );
}

export default TaskCard;
