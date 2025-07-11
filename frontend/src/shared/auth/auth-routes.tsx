import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/auth-layout";
import CreateAccount from "./components/create-account";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signup" element={<CreateAccount />} />
      </Route>
    </Routes>
  );
}
