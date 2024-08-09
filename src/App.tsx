import "./App.css";
import { Providers } from "./providers/Providers";
import { AppRouter } from "./App.router";

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
