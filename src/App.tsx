import { Suspense, lazy, useState } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const UndefinedExample = lazy(() => import("./components/UndefinedExample/UndefineExample.tsx"))
const ProblematicExample = lazy(() => import("./components/ProblematicExample/ProblematicExample.tsx"))
const PromiseErrorExample = lazy(() => import("./components/PromiseErrorExample/PromiseErrorExample.tsx"))

function App() {
  const [selection, setSelection] = useState(0)

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Todo bien papa</h2>
        <button onClick={() => setSelection(1)}>Selecciona UndefinedExample</button>
        <button onClick={() => setSelection(2)}>Selecciona ProblematicExample</button>
        <button onClick={() => setSelection(3)}>Selecciona PromiseErrorExample</button>
        {selection === 1 && <UndefinedExample />}
        {selection === 2 && <ProblematicExample />}
        {selection === 3 && <PromiseErrorExample />}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
