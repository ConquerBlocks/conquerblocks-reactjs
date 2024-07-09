import "./App.css";
import { Sandwich } from "./components/Sandwich";
import { Panes, Relleno } from "./models/sandwich.model";

function App() {
  const relleno: Relleno = {
    lechuga: true,
    carne: true,
    pepinillo: true,
    mostaza: true,
    mayonesa: false,
  };

  const pan: Panes = Panes.SEMILLAS;

  return (
    <>
      <Sandwich relleno={relleno} pan={pan} />
    </>
  );
}

export default App;
