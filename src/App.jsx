import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="p-4 bg-black ">
      <Header/>
      <Input/>
    </div>
    </>
  );
}

export default App;
