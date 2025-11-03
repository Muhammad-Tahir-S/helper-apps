import { VerificationEmail } from "emails";
import { Resend } from "resend";

import { logger } from "../logger";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendVerificationEmailProps {
  to: string;
  subject: string;
  url: string;
  type: "verify-email" | "reset-password";
}

export async function sendVerificationEmail({
  to,
  subject,
  url,
  type,
}: SendVerificationEmailProps) {
  try {
    const result = await resend.emails.send({
      from: "noreply@yourdomain.com",
      to,
      subject,
      react: <VerificationEmail verificationUrl={url} type={type} />,
    });

    logger.info(
      {
        to,
        subject,
        type,
        messageId: result.data?.id,
      },
      "Email sent successfully",
    );

    return result;
  } catch (error) {
    logger.error(
      {
        to,
        subject,
        type,
        error,
      },
      "Failed to send email",
    );
    throw error;
  }
}
