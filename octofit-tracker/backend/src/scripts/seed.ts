import mongoose from 'mongoose';

import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const userData = [
  { name: 'Maya Chen', email: 'maya.chen@mergington.edu', role: 'student', teamId: 'team-1' },
  { name: 'Leo Patel', email: 'leo.patel@mergington.edu', role: 'student', teamId: 'team-1' },
  { name: 'Ava Johnson', email: 'ava.johnson@mergington.edu', role: 'coach', teamId: 'team-2' },
  { name: 'Noah Rivera', email: 'noah.rivera@mergington.edu', role: 'student', teamId: 'team-2' },
  { name: 'Zoe Kim', email: 'zoe.kim@mergington.edu', role: 'student', teamId: 'team-3' }
];

const teamData = [
  { name: 'Thunder Striders', members: ['maya.chen@mergington.edu', 'leo.patel@mergington.edu'], points: 540 },
  { name: 'Solar Sprinters', members: ['ava.johnson@mergington.edu', 'noah.rivera@mergington.edu'], points: 420 },
  { name: 'River Runners', members: ['zoe.kim@mergington.edu'], points: 380 }
];

const activityData = [
  { userId: 'maya.chen@mergington.edu', type: 'run', durationMinutes: 25, caloriesBurned: 220, date: new Date('2026-10-01T08:00:00.000Z') },
  { userId: 'leo.patel@mergington.edu', type: 'strength', durationMinutes: 40, caloriesBurned: 300, date: new Date('2026-10-01T12:15:00.000Z') },
  { userId: 'ava.johnson@mergington.edu', type: 'walk', durationMinutes: 30, caloriesBurned: 180, date: new Date('2026-10-01T17:30:00.000Z') },
  { userId: 'noah.rivera@mergington.edu', type: 'cycling', durationMinutes: 35, caloriesBurned: 260, date: new Date('2026-10-01T18:30:00.000Z') }
];

const leaderboardData = [
  { userId: 'maya.chen@mergington.edu', points: 980, rank: 1 },
  { userId: 'leo.patel@mergington.edu', points: 860, rank: 2 },
  { userId: 'noah.rivera@mergington.edu', points: 760, rank: 3 },
  { userId: 'ava.johnson@mergington.edu', points: 720, rank: 4 }
];

const workoutData = [
  { title: 'Cardio Blast', category: 'cardio', durationMinutes: 20, difficulty: 'medium' },
  { title: 'Core Stability Circuit', category: 'strength', durationMinutes: 25, difficulty: 'easy' },
  { title: 'Hill Sprint Challenge', category: 'endurance', durationMinutes: 30, difficulty: 'hard' },
  { title: 'Mobility Reset', category: 'recovery', durationMinutes: 15, difficulty: 'easy' }
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    console.log('Seed the octofit_db database with test data');
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const createdUsers = await User.insertMany(userData);
    const createdTeams = await Team.insertMany(teamData);
    const createdActivities = await Activity.insertMany(activityData);
    const createdLeaderboard = await LeaderboardEntry.insertMany(leaderboardData);
    const createdWorkouts = await Workout.insertMany(workoutData);

    console.log(`Inserted ${createdUsers.length} users, ${createdTeams.length} teams, ${createdActivities.length} activities, ${createdLeaderboard.length} leaderboard entries, and ${createdWorkouts.length} workouts.`);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Database seeding complete');
  }
}

seedDatabase();
