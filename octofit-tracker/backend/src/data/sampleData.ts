export const users = [
  { id: 'user-1', name: 'Maya Chen', email: 'maya@example.com', role: 'student', teamId: 'team-1' },
  { id: 'user-2', name: 'Leo Patel', email: 'leo@example.com', role: 'student', teamId: 'team-1' },
  { id: 'user-3', name: 'Ava Johnson', email: 'ava@example.com', role: 'coach', teamId: 'team-2' }
];

export const teams = [
  { id: 'team-1', name: 'Thunder Striders', members: ['user-1', 'user-2'], points: 540 },
  { id: 'team-2', name: 'Solar Sprinters', members: ['user-3'], points: 420 }
];

export const activities = [
  { id: 'activity-1', userId: 'user-1', type: 'run', durationMinutes: 25, caloriesBurned: 220, date: '2026-10-01T08:00:00.000Z' },
  { id: 'activity-2', userId: 'user-2', type: 'strength', durationMinutes: 40, caloriesBurned: 300, date: '2026-10-01T12:15:00.000Z' },
  { id: 'activity-3', userId: 'user-3', type: 'walk', durationMinutes: 30, caloriesBurned: 180, date: '2026-10-01T17:30:00.000Z' }
];

export const leaderboard = [
  { id: 'leaderboard-1', userId: 'user-1', points: 980, rank: 1 },
  { id: 'leaderboard-2', userId: 'user-2', points: 860, rank: 2 },
  { id: 'leaderboard-3', userId: 'user-3', points: 760, rank: 3 }
];

export const workouts = [
  { id: 'workout-1', title: 'Cardio Blast', category: 'cardio', durationMinutes: 20, difficulty: 'medium' },
  { id: 'workout-2', title: 'Core Stability Circuit', category: 'strength', durationMinutes: 25, difficulty: 'easy' },
  { id: 'workout-3', title: 'Hill Sprint Challenge', category: 'endurance', durationMinutes: 30, difficulty: 'hard' }
];
