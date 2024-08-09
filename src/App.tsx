import "./App.css";
import { UseCallBackParent } from "./components/Memory/UseCallBack";
import { UseMemo } from "./components/Memory/UseMemo";
import { UseRef } from "./components/Memory/UseRef";

function App() {
  return (
    <>
      <UseRef />
      <UseMemo num={100} />
      <UseCallBackParent />
    </>
  );
}

export default App;
