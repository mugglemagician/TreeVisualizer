import { TreePropType } from "../../types";
import BottomBar from "../BottomBar/BottomBar";
import Tree from "../Tree/Tree";
import "./MainView.css";

export default function MainView({ startVisualizing, treeToVisualize, setStartVisualizing, isWindowResized, setIsWindowResized }: TreePropType) {
    return (
        <div className="main-view">
            <Tree
                startVisualizing={startVisualizing}
                treeToVisualize={treeToVisualize}
                setStartVisualizing={setStartVisualizing}
                isWindowResized={isWindowResized}
                setIsWindowResized={setIsWindowResized} />

            <BottomBar setIsWindowResized={setIsWindowResized} />
        </div>
    );
}
