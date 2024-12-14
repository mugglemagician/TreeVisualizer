import { useState } from "react";
import "./Sidebar.css";
import { SidebarPropType } from "../../types";
import React from "react";

export default function Sidebar({ setDrawTree, setTreeToVisualize, setIsWindowResized, visualizeTraversal, setVisualizeTraversal, traversalAlgo, speed }: SidebarPropType) {

    const [treeInput, setTreeInput] = useState<string>("");
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
    const [travSpeed, setTravSpeed] = useState<number>(speed.current);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (visualizeTraversal) return;
        setTreeInput(e.target.value);
    }

    const startDrawing = () => {
        if (visualizeTraversal) return;
        setDrawTree(true);
        setTreeToVisualize(treeInput);
    }

    const startTraversing = (algo: number) => {
        if (visualizeTraversal) return;
        setVisualizeTraversal(true);
        traversalAlgo.current = algo;
    }

    return (

        <>
            <div className="toggle-sidebar" onClick={(e) => { setIsSidebarVisible(curr => !curr); setIsWindowResized(true) }}>
                {isSidebarVisible && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>}

                {!isSidebarVisible && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>}
            </div>


            {isSidebarVisible && <div className="sidebar">

                <h1 className="logo">
                    Tree Visualizer
                </h1>

                <div className="tree-input">
                    <h2>Input Your Tree In Level Order</h2>
                    <textarea name="treeInput" id="treeInput" value={treeInput} onChange={(e) => handleChange(e)}></textarea>
                    <button className="visualize" onClick={startDrawing}>Draw</button>
                </div>

                <div className="traversals">

                    <h2 className="traversals-heading">
                        Perform Tree Traversal
                    </h2>

                    <div className="speed">
                        <label htmlFor="speed">Speed</label>
                        <input type="range" className="slider" min={100} max={400} id="speed" value={travSpeed} onChange={(e) => { setTravSpeed(parseInt(e.target.value)); speed.current = 500 - parseInt(e.target.value) }} />
                    </div>

                    <button className="pre-order" onClick={e => startTraversing(0)}>
                        PreOrder
                    </button>

                    <button className="in-order" onClick={e => startTraversing(1)}>
                        InOrder
                    </button>

                    <button className="post-order" onClick={e => startTraversing(2)}>
                        PostOrder
                    </button>

                    <button className="level-order" onClick={e => startTraversing(3)}>
                        LevelOrder
                    </button>
                </div>

            </div >}
        </>

    )
}
