import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./index.css";
import MainView from "./Components/MainView/MainView";

function App() {

  const [startVisualizing, setStartVisualizing] = useState<boolean>(false);
  const [treeToVisualize, setTreeToVisualize] = useState<string | null>(null);
  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);

  return <>
    <MainView
      startVisualizing={startVisualizing}
      treeToVisualize={treeToVisualize}
      setStartVisualizing={setStartVisualizing}
      isWindowResized={isWindowResized}
      setIsWindowResized={setIsWindowResized} />

    <Sidebar
      setStartVisualizing={setStartVisualizing}
      setTreeToVisualize={setTreeToVisualize}
      setIsWindowResized={setIsWindowResized} />

  </>
}

export default App
