import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

interface VerificationEmailProps {
  verificationUrl: string;
  type: "verify-email" | "reset-password";
}

function VerificationEmail(props: VerificationEmailProps) {
  const { type, verificationUrl } = props;

  const isReset = type === "reset-password";

  return (
    <>
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            <Section style={section}>
              <Img
                src="https://yourdomain.com/logo.png"
                width="40"
                height="40"
                alt="Logo"
              />
              <Text style={title}>
                {isReset ? "Reset Your Password" : "Verify Your Email"}
              </Text>
              <Text style={text}>
                {isReset
                  ? "Click the button below to reset your password."
                  : "Click the button below to verify your email address."}
              </Text>
              <Button style={button} href={verificationUrl}>
                {isReset ? "Reset Password" : "Verify Email"}
              </Button>
              <Text style={footer}>
                This link will expire in 24 hours. If you didn't request this,
                please ignore this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </>
  );
}

export default VerificationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const text = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const footer = {
  fontSize: "12px",
  color: "#b4becc",
};
