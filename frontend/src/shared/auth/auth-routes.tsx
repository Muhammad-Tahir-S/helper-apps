import { Route, Routes } from "react-router";

import AuthLayout from "./components/auth-layout";
import CreateAccountForm from "./components/create-account-form";
import LoginForm from "./components/log-in-form";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<CreateAccountForm />} />
        <Route path="signin" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}
