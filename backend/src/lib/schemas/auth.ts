import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain uppercase, lowercase, number, and special character",
    ),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

export const signInSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export const resetPasswordSchema = z.object({
  email: z.email("Invalid email format"),
});

export const verifyEmailSchema = z.object({
  token: z.string().min(1, "Token is required"),
});
