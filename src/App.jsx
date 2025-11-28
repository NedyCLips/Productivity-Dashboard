import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage on first render
  useEffect(() => {
    try {
      const stored = localStorage.getItem("pd-tasks");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to read tasks", err);
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("pd-tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Failed to store tasks", err);
    }
  }, [tasks]);

  function handleAddTask() {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    const next = [{ id: Date.now(), text: trimmed, done: false }, ...tasks];
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

      <main className="app-grid">
        {/* LEFT – weekly calendar */}
        <section className="card weekly-card">
          <h2>Weekly Goals</h2>
          <p className="gold-note">Every day is worth gold — spend it wisely.</p>
          <div className="week-grid">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="day-cell">
                <span className="day-label">{day}</span>
                <p className="day-goal">Set a focus goal</p>
              </div>
            ))}
          </div>
        </section>

        {/* CENTER – stats */}
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

        {/* RIGHT – tasks */}
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
