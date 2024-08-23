import { Suspense, lazy } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const InterceptorExample = lazy(() => import("./components/InterceptorExample/InterceptorExample.tsx"))

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <InterceptorExample />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
