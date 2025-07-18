import { useEffect } from "react";
import { Route, Routes } from "react-router";
import useLocalStorage from "use-local-storage";

import { VerificationInput } from "@/shared/components/ui/input-otp";
import globalKeys from "@/shared/lib/globalKeys";

export const TasksRoutes = () => {
  const [_lastVisitedApp, setLastVisitedApp] = useLocalStorage(
    globalKeys.lastVisitedApp,
    globalKeys.defaultLastVisitedApp,
  );

  useEffect(() => {
    setLastVisitedApp("/tasks");
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="flex p-[100px] flex-col gap-10">
            Tasks{" "}
            <VerificationInput
              label="Secure code"
              digits={6}
              helperText="This is a hint text to help user."
            />
          </div>
        }
      />
      <Route path="/:id" element={<div>Tasks ID</div>} />
    </Routes>
  );
};
