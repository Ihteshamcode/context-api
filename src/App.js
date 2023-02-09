import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      <Parent />
      <Child1 />
      <Child2 />
      <Child3 />
    </>
  );
}

export default App;
