import react from "react";

import LudoBoard from "./components/LudoBoard";
import DiceBoard from "./components/DiceBoard";
function App() {
  return (
    <div className="flex flex-row justify-between gap-9">
      <LudoBoard />
      <DiceBoard />
    </div>
  );
}

export default App;
