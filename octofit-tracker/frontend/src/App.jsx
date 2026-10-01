import { NavLink, Route, Routes } from 'react-router-dom';

import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { getApiBaseUrl } from './lib/api';
import './App.css';

const navItems = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' }
];

function App() {
  const apiBaseUrl = getApiBaseUrl();
  const codespaceConfigured = Boolean(import.meta.env.VITE_CODESPACE_NAME && import.meta.env.VITE_CODESPACE_NAME.trim());

  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid px-4">
          <span className="navbar-brand fw-bold">OctoFit Tracker</span>
          <div className="navbar-nav flex-row flex-wrap gap-2 ms-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link px-3 py-2 rounded ${isActive ? 'bg-primary-subtle text-white' : 'text-white-50'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <div className="alert alert-info d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
          <span>
            API base: <strong>{apiBaseUrl}</strong>
          </span>
          <span className="badge text-bg-light">
            {codespaceConfigured ? 'VITE_CODESPACE_NAME configured' : 'Localhost fallback active'}
          </span>
        </div>

        <div className="alert alert-warning mb-4" role="alert">
          Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use the Codespaces URL pattern
          <code>https://{`${import.meta.env.VITE_CODESPACE_NAME || '{CODESPACE_NAME}'}`}-8000.app.github.dev/api/[component]/</code>.
        </div>

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
