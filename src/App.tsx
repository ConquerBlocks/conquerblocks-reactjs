import { Suspense, lazy } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

const Form = lazy(() => import("./components/Form/Form.tsx"))

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
