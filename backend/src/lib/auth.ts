import { createId } from "@paralleldrive/cuid2";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "../db";
import * as schema from "../db/schema";
import { sendVerificationEmail } from "./email/sender";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verificationTokens,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendVerificationEmail({
        to: user.email,
        subject: "Reset Your Password",
        url,
        type: "reset-password",
      });
    },
  },
  emailVerification: {
    enabled: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerificationEmail({
        to: user.email,
        subject: "Verify Your Email",
        url,
        type: "verify-email",
      });
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },

  rateLimit: {
    window: 60, // 1 minute
    max: 100, // 100 requests per minute
  },

  advanced: {
    generateId: () => createId(),
    crossSubDomainCookies: {
      enabled: process.env.NODE_ENV === "prod",
      domain: process.env.NODE_ENV === "prod" ? ".yourdomain.com" : undefined,
    },
  },
});
