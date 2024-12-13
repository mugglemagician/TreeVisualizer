import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ setVisualize, setTreeToVisualize }: { setVisualize: React.Dispatch<React.SetStateAction<boolean>>, setTreeToVisualize: React.Dispatch<React.SetStateAction<string | null>> }) {

    const [treeInput, setTreeInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTreeInput(e.target.value);
    }

    const startVisualizing = () => {
        setVisualize(true);
        setTreeToVisualize(treeInput);
    }

    return (
        <div className="sidebar">

            <span className="logo">
                Tree Visualizer
            </span>

            <div className="tree-input">
                <label htmlFor="treeInput">Input Your Tree In Level Order</label>
                <textarea name="treeInput" id="treeInput" value={treeInput} onChange={(e) => handleChange(e)}></textarea>
                <button className="visualize" onClick={startVisualizing}>Visualize</button>
            </div>

            <div className="traversals">
                <button className="pre-order">
                    PreOrder
                </button>

                <button className="in-order">
                    InOrder
                </button>

                <button className="post-order">
                    PostOrder
                </button>

                <button className="level-order">
                    LevelOrder
                </button>
            </div>

        </div>
    )
}
