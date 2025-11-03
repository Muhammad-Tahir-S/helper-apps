import pino from "pino";

export const logger = pino({
  level: process.env.NODE_ENV === "prod" ? "info" : "debug",
  transport:
    process.env.NODE_ENV === "dev"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        }
      : undefined,
  redact: ["password", "token", "refreshToken", "accessToken"],
});
