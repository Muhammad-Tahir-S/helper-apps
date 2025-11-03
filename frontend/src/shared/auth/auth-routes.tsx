import { Route, Routes } from "react-router";

import AuthLayout from "./components/auth-layout";
import SigninPage from "./components/signin-page";
import SignupPage from "./components/signup-page";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<SignupPage />} />
        <Route path="signin" element={<SigninPage />} />
      </Route>
    </Routes>
  );
}
