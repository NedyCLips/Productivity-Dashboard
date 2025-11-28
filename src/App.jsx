import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    const next = [
      { id: Date.now(), text: trimmed, done: false },
      ...tasks,
    ];
    setTasks(next);
    setNewTask("");
  }

  function handleToggleTask(id) {
    const next = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(next);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAddTask();
  }

  const tasksDone = tasks.filter((t) => t.done).length;

  return (
    <div className="app">
      <header className="app-header">
        <div className="identity">
          <h1>Productivity Dashboard</h1>
          <span className="underline" />
        </div>
        <button className="mode-toggle">Light / Dark</button>
      </header>

      <main className="app-grid-3">

        {/* LEFT - WEEKLY GOALS */}
        <section className="card large-card">
          <h2>Weekly Goals</h2>
          <p className="gold-note">Every day is worth gold — spend it wisely.</p>
          <div className="week-grid-big">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day) => (
              <div key={day} className="day-cell-big">
                <span className="day-label-big">{day}</span>
                <p className="day-goal-big">Set a focus goal</p>
              </div>
            ))}
          </div>
        </section>

        {/* CENTER - STATS */}
        <section className="card">
          <h2>Streaks & Stats</h2>
          <div className="stats-row">
            <div className="stat-block">
              <div className="stat-label">Daily streak</div>
              <div className="stat-value">0 days</div>
            </div>

            <div className="stat-block">
              <div className="stat-label">Tasks done today</div>
              <div className="stat-value">{tasksDone}</div>
            </div>

            <div className="stat-block">
              <div className="stat-label">Hours focused this week</div>
              <div className="stat-value">0.0</div>
            </div>
          </div>
        </section>

        {/* RIGHT - TASKS */}
        <section className="card">
          <h2>Today&apos;s Tasks</h2>

          <div className="tasks-input-row">
            <input
              type="text"
              placeholder="Add a new task..."
              className="text-input"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="primary-button" onClick={handleAddTask}>
              Add
            </button>
          </div>

          <ul className="tasks-list">
            {tasks.length === 0 && (
              <li className="task-item">
                <span>No tasks yet.</span>
              </li>
            )}

            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span>{task.text}</span>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
