import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

// const client = postgres(env.DATABASE_URL, {
//   max: env.NODE_ENV === "production" ? 20 : 5,
//   idle_timeout: 20,
//   connect_timeout: 10,
// });

export const db = drizzle({
  connection: { connectionString: process.env.DATABASE_URL, ssl: true },
  schema,
});

export type Database = typeof db;
