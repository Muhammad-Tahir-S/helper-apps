import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./shared/app";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
