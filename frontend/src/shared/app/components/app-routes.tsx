import { Navigate, Route, Routes } from "react-router";
import useLocalStorage from "use-local-storage";

import { NotesRoutes } from "@/notes/components/notes-routes";
import AuthRoutes from "@/shared/auth/auth-routes";
import globalKeys from "@/shared/lib/globalKeys";
import { TasksRoutes } from "@/task-manager/components/tasks-routes";

export const AppRoutes = () => {
  const [lastVisitedApp] = useLocalStorage(
    globalKeys.lastVisitedApp,
    globalKeys.defaultLastVisitedApp,
  );

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={lastVisitedApp} />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/notes/*" element={<NotesRoutes />} />
      <Route path="/tasks/*" element={<TasksRoutes />} />
    </Routes>
  );
};
