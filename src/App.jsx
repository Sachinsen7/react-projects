import { useState } from "react";
import DiwaliGift from "./Component/DiwaliGift";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <DiwaliGift />;
}

export default App;
