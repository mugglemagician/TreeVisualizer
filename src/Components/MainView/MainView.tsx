import { MainViewPropType } from "../../types";
import BottomBar from "../BottomBar/BottomBar";
import Tree from "../Tree/Tree";
import "./MainView.css";

export default function MainView({ drawTree, treeToVisualize, setDrawTree, isWindowResized, setIsWindowResized, visualizeTraversal, setVisualizeTraversal, traversalAlgo, treeLogs, setTreeLogs, speed }: MainViewPropType) {
    return (
        <div className="main-view">
            <Tree
                drawTree={drawTree}
                treeToVisualize={treeToVisualize}
                setDrawTree={setDrawTree}
                isWindowResized={isWindowResized}
                setIsWindowResized={setIsWindowResized}
                visualizeTraversal={visualizeTraversal}
                setVisualizeTraversal={setVisualizeTraversal}
                traversalAlgo={traversalAlgo}
                setTreeLogs={setTreeLogs}
                speed={speed} />

            <BottomBar setIsWindowResized={setIsWindowResized} treeLogs={treeLogs} />
        </div>
    );
}
