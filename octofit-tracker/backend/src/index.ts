import express, { type Request, type Response } from 'express';
import './config/database';

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

const users = [
  { id: 1, name: 'Maya Chen', email: 'maya@example.com', role: 'student' },
  { id: 2, name: 'Leo Patel', email: 'leo@example.com', role: 'student' },
  { id: 3, name: 'Ava Johnson', email: 'ava@example.com', role: 'coach' }
];

const activities = [
  { id: 1, userId: 1, type: 'run', durationMinutes: 25, caloriesBurned: 220 },
  { id: 2, userId: 2, type: 'strength', durationMinutes: 40, caloriesBurned: 300 },
  { id: 3, userId: 3, type: 'walk', durationMinutes: 30, caloriesBurned: 180 }
];

app.use(express.json());

app.get('/api/health', (_request: Request, response: Response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.get('/api/config', (_request: Request, response: Response) => {
  response.json({
    port,
    codespaceName: codespaceName || null,
    apiBaseUrl
  });
});

app.get('/api/users', (_request: Request, response: Response) => {
  response.json({ data: users, total: users.length });
});

app.get('/api/users/', (_request: Request, response: Response) => {
  response.json({ data: users, total: users.length });
});

app.get('/api/activities', (_request: Request, response: Response) => {
  response.json({ data: activities, total: activities.length });
});

app.get('/api/activities/', (_request: Request, response: Response) => {
  response.json({ data: activities, total: activities.length });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening on ${apiBaseUrl}`);
});