export default function App() {
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
        <section className="card">
          <h2>Today&apos;s Tasks</h2>
          <div className="tasks-input-row">
            <input
              type="text"
              placeholder="Add a new task..."
              className="text-input"
            />
            <button className="primary-button">Add</button>
          </div>
          <ul className="tasks-list">
            <li className="task-item">
              <input type="checkbox" />
              <span>Sample task to replace later</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Weekly Goals</h2>
          <div className="week-grid">
            <div className="day-cell">
              <span className="day-label">Mon</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Tue</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Wed</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Thu</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Fri</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Sat</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
            <div className="day-cell">
              <span className="day-label">Sun</span>
              <p className="day-goal">Set a focus goal</p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Streaks & Stats</h2>
          <div className="stats-row">
            <div className="stat-block">
              <div className="stat-label">Daily streak</div>
              <div className="stat-value">0 days</div>
            </div>
            <div className="stat-block">
              <div className="stat-label">Tasks done today</div>
              <div className="stat-value">0</div>
            </div>
            <div className="stat-block">
              <div className="stat-label">Hours f
