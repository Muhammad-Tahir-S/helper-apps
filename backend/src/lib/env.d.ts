declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NODE_ENV: "dev" | "prod";
      DB_PORT: number;
      SERVER_PORT: number;
      BETTER_AUTH_SECRET: string;
      BETTER_AUTH_URL: string;
      CLIENT_URL: string;
      RESEND_API_KEY: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
