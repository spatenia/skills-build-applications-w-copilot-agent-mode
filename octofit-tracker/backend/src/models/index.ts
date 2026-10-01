import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  teamId?: string;
}

export interface ITeam extends Document {
  name: string;
  members: string[];
  points: number;
}

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  date: Date;
}

export interface ILeaderboardEntry extends Document {
  userId: string;
  points: number;
  rank: number;
}

export interface IWorkout extends Document {
  title: string;
  category: string;
  durationMinutes: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'student' },
    teamId: { type: String, default: null }
  },
  { timestamps: true }
);

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    members: { type: [String], default: [] },
    points: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const activitySchema = new Schema<IActivity>(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    caloriesBurned: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true }
  },
  { timestamps: true }
);

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
  },
  { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export const Team: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);
export const Activity: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry: Model<ILeaderboardEntry> = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);
export const Workout: Model<IWorkout> = mongoose.model<IWorkout>('Workout', workoutSchema);
