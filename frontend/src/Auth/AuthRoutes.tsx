import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";
import CreateAccount from "./components/CreateAccount";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<CreateAccount />} />
      </Route>
    </Routes>
  );
}
