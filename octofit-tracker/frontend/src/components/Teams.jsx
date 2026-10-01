import { useEffect, useState } from 'react';

import { fetchApiData } from '../lib/api';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        const response = await fetch(teamsEndpoint, { headers: { Accept: 'application/json' } });
        const payload = await response.json();
        const data = Array.isArray(payload) ? payload : Array.isArray(payload.data) ? payload.data : [];
        setTeams(data);
        setError('');
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  if (loading) {
    return <div className="alert alert-secondary">Loading teams…</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Teams</h2>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.id ?? team.name}>
                  <td>{team.name}</td>
                  <td>{team.members ? team.members.length : 0}</td>
                  <td>{team.points ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
