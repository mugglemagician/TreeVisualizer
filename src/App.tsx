import { useRef, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./index.css";
import MainView from "./Components/MainView/MainView";

function App() {

  const [drawTree, setDrawTree] = useState<boolean>(false);
  const [treeToVisualize, setTreeToVisualize] = useState<string | null>(null);
  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [visualizeTraversal, setVisualizeTraversal] = useState<boolean>(false);
  // -1 for nothing, 0 for pre, 1 for in, 2 for post, 3 for level
  const traversalAlgo = useRef<number>(-1);
  const [treeLogs, setTreeLogs] = useState<string>("");
  const speed = useRef<number>(150);

  return <>
    <MainView
      drawTree={drawTree}
      treeToVisualize={treeToVisualize}
      setDrawTree={setDrawTree}
      isWindowResized={isWindowResized}
      setIsWindowResized={setIsWindowResized}
      visualizeTraversal={visualizeTraversal}
      setVisualizeTraversal={setVisualizeTraversal}
      traversalAlgo={traversalAlgo.current}
      treeLogs={treeLogs}
      setTreeLogs={setTreeLogs}
      speed={speed.current} />

    <Sidebar
      setDrawTree={setDrawTree}
      setTreeToVisualize={setTreeToVisualize}
      setIsWindowResized={setIsWindowResized}
      visualizeTraversal={visualizeTraversal}
      setVisualizeTraversal={setVisualizeTraversal}
      traversalAlgo={traversalAlgo}
      speed={speed} />

  </>
}

export default App
