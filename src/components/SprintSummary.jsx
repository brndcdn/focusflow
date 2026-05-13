function SprintSummary({ progressPercentage }) {
  return (
    <section className="sprint-summary">
      <div>
        <h2>Week 1 Sprint</h2>
        <p>
          Build a simple React task board for managing a 1-week design
          engineering sprint.
        </p>
      </div>

      <div className="progress">
        <span>{progressPercentage}% complete</span>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default SprintSummary;
