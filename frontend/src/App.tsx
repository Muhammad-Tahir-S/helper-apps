import { useState } from "react";

import viteLogo from "/vite.svg";
import { Button } from "@/shared/components/ui/button";

import reactLogo from "./shared/assets/react.svg";

function App() {
  const [count, setCount] = useState<string>(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>

        <Button variant="outline">Click me</Button>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
