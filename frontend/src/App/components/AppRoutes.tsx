import { Route, Routes } from "react-router-dom";

import AuthRoutes from "@/Auth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
    </Routes>
  );
}
