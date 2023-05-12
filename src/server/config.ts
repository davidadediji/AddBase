const env = process.env;

export const PORT = env.PORT ?? '8081';
export const HOST = env.HOST ?? '0.0.0.0';
export const SERVER_URL = env.SERVER_URL ?? `0.0.0.0/${PORT}`

export const MONGODB_URI =
  env.MONGODB_URI ?? 'mongodb://localhost:27017';
export const DATABASE_NAME = env.DATABASE_NAME ?? 'local';
export default {
  PORT,
  HOST,
  SERVER_URL,
  MONGODB_URI,
  DATABASE_NAME,
};
