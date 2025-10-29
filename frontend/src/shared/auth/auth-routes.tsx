import { Route, Routes } from "react-router";

import AuthLayout from "./components/auth-layout";
import LoginForm from "./components/log-in-form";
import SignUpForm from "./components/sign-up-form";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<SignUpForm />} />
        <Route path="signin" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}
