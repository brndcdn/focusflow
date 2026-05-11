function TaskCard({ title, priority }) {
  return (
    <article className="task-card">
      <h3>{title}</h3>
      <span>{priority}</span>
    </article>
  );
}

export default TaskCard;
