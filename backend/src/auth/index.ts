import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { auth } from "../lib/auth";
import { logger } from "../lib/logger";
import {
  resetPasswordSchema,
  signInSchema,
  signUpSchema,
  verifyEmailSchema,
} from "../lib/schemas/auth";

const authApp = new Hono();

// Middleware
authApp.use(
  "*",
  cors({
    origin: process.env.NODE_ENV === "prod" ? process.env.CLIENT_URL : "*",
    credentials: true,
  }),
);

// authApp.use(
//   "*",
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     limit: 50, // Limit each IP to 50 requests per windowMs
//     standardHeaders: "draft-7",
//     keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "unknown",
//   }),
// );

// Auth middleware for protected routes
// const requireAuth = async (c: any, next: any) => {
//   const session = await auth.api.getSession({
//     headers: c.req.raw.headers,
//   });

//   if (!session) {
//     return c.json({ error: "Unauthorized" }, 401);
//   }

//   c.set("session", session);
//   c.set("user", session.user);
//   await next();
// };

// Sign up
authApp.post("/signup", zValidator("json", signUpSchema), async (c) => {
  try {
    const { email, password, name } = c.req.valid("json");

    const result = await auth.api.signUpEmail({
      body: { email, password, name: name ?? "" },
      headers: c.req.raw.headers,
    });

    logger.info({ email }, "User signed up");

    return c.json({
      message:
        "Account created successfully. Please check your email to verify your account.",
      user: result.user,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error({ error: error.message }, "Signup error");
      if (error.message.includes("already exists")) {
        return c.json({ error: "Email already exists" }, 409);
      }
      return c.json({ error: "Failed to create account" }, 500);
    }
    return c.json({ error: "Failed to create account" }, 500);
  }
});

// Sign in
authApp.post("/signin", zValidator("json", signInSchema), async (c) => {
  try {
    const { email, password } = c.req.valid("json");

    const result = await auth.api.signInEmail({
      body: { email, password },
      headers: c.req.raw.headers,
    });

    logger.info({ email }, "User signed in");

    return c.json({
      message: "Signed in successfully",
      user: result.user,
      // session: result.session,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error({ error: error.message }, "Signin error");
      return c.json({ error: "Invalid credentials" }, 401);
    }
    return c.json({ error: "Invalid credentials" }, 401);
  }
});

// Google OAuth
authApp.get("/google", async (c) => {
  return auth.handler(c.req.raw);
});

authApp.get("/google/callback", async (c) => {
  return auth.handler(c.req.raw);
});

// Password reset request
authApp.post(
  "/reset-password",
  zValidator("json", resetPasswordSchema),
  async (c) => {
    try {
      const { email } = c.req.valid("json");

      await auth.api.forgetPassword({
        body: { email },
        headers: c.req.raw.headers,
      });

      logger.info({ email }, "Password reset requested");

      return c.json({
        message:
          "If an account exists, a reset link has been sent to your email.",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        logger.error({ error: error.message }, "Password reset error");
      }
      // Always return success to prevent email enumeration
      return c.json({
        message:
          "If an account exists, a reset link has been sent to your email.",
      });
    }
  },
);

// Email verification
authApp.post(
  "/verify-email",
  zValidator("json", verifyEmailSchema),
  async (c) => {
    try {
      const { token } = c.req.valid("json");

      await auth.api.verifyEmail({
        body: undefined,
        // body: { token: token ?? "" },
        headers: c.req.raw.headers,
        query: { token: token ?? "" },
      });

      logger.info({ token: token.substring(0, 10) + "..." }, "Email verified");

      return c.json({ message: "Email verified successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        logger.error({ error: error.message }, "Email verification error");
      }
      return c.json({ error: "Invalid or expired token" }, 400);
    }
  },
);

// Sign out
authApp.post("/signout", async (c) => {
  try {
    await auth.api.signOut({
      headers: c.req.raw.headers,
    });

    return c.json({ message: "Signed out successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error({ error: error.message }, "Signout error");
    }
    return c.json({ error: "Failed to sign out" }, 500);
  }
});

// Get current session
authApp.get("/session", async (c) => {
  try {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });

    if (!session) {
      return c.json({ session: null });
    }

    return c.json({ session });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error({ error: error.message }, "Get session error");
    }
    return c.json({ error: "Failed to get session" }, 500);
  }
});

// Protected route example
// authApp.get("/profile", requireAuth, async (c) => {
//   const user = c.get("user") as InferUser;
//   return c.json({ user });
// });

export default authApp;
