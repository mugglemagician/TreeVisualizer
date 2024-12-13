import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Tree from "./Components/Tree/Tree";
import "./index.css";

function App() {

  const [visualize, setVisualize] = useState<boolean>(false);
  const [treeToVisualize, setTreeToVisualize] = useState<string | null>(null);

  return <>
    <Tree visualize={visualize} treeToVisualize={treeToVisualize} />
    <Sidebar setVisualize={setVisualize} setTreeToVisualize={setTreeToVisualize} />
  </>
}

export default App
