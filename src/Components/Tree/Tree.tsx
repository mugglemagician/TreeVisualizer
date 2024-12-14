import { useEffect, useRef, useState } from "react";
import { Node, TreePropType } from "../../types";
import TreeNode from "../TreeNode/TreeNode";
import "./Tree.css";
import { cleanTree, constructTree, createNewRoot } from "../../Utils/construct";
import { getTraversalAlgorithm } from "../../Utils/traversalAlgos";
import React from "react";


export default React.memo(function Tree({ drawTree, treeToVisualize, setDrawTree, isWindowResized, setIsWindowResized, visualizeTraversal, setVisualizeTraversal, traversalAlgo, setTreeLogs, speed }: TreePropType) {

    const [root, setRoot] = useState(constructTree(treeToVisualize));
    const treeRef = useRef<HTMLDivElement | null>(null);
    const [treeWidth, setTreeWidth] = useState<number>(0);
    const [destroyTree, setDestroyTree] = useState<boolean>(false);
    const [isTreeCleaned, setIsTreeCleaned] = useState<boolean>(false);
    const startTraversalAlgorithm = useRef<boolean>(false);

    useEffect(() => {
        if (treeRef) {
            setTreeWidth(treeRef.current?.getBoundingClientRect().width || 0);
        }

        if (drawTree && !destroyTree) {
            // to draw the tree first of all destroy the current tree
            setDestroyTree(true);
            setTreeLogs("");
        }
        else if (drawTree && destroyTree) {
            // after destroying the tree recreate it
            setRoot(constructTree(treeToVisualize));
            setDrawTree(false);
            setDestroyTree(false);
        }

        if (isWindowResized && !destroyTree) {
            // if the window is resized then first of all destroy the tree
            setDestroyTree(true);
        }
        else if (isWindowResized && destroyTree) {
            // after destroying the tree recreate it in the resized window
            setDestroyTree(false);
            setIsWindowResized(false);
        }

        if (visualizeTraversal && !isTreeCleaned && !startTraversalAlgorithm.current) {
            // before starting the traversal algorithm, clean the tree
            cleanTree(root);
            setTreeLogs("");
            setIsTreeCleaned(true);
            startTraversalAlgorithm.current = true;
        }


    }, [drawTree, destroyTree, isWindowResized, visualizeTraversal, isTreeCleaned]);

    if (visualizeTraversal && startTraversalAlgorithm.current && isTreeCleaned) {
        const order: Node[] = getTraversalAlgorithm(traversalAlgo, root);
        let offset = 0;

        for (let node of order) {
            setTimeout(() => {
                if (!node) return;
                node.isVisiting = true;
                setRoot(createNewRoot(root));
                setTreeLogs(curr => curr.length === 0 ? node.value.toString() : curr + ", " + node.value);
            }, offset++ * speed);

            setTimeout(() => {
                if (!node) return;
                node.isVisiting = false;
                node.isVisited = true;
                setRoot(createNewRoot(root));
            }, offset++ * speed);

        }

        startTraversalAlgorithm.current = false;
        setTimeout(() => {

            setVisualizeTraversal(false);
            setIsTreeCleaned(false);

        }, ++offset * speed);
    }


    return (
        <div ref={treeRef} className="tree">
            {!destroyTree
                ? <TreeNode
                    node={root}
                    xLB={0}
                    xRB={treeWidth}
                    yPos={50}
                    parentX={undefined}
                    parentY={undefined}
                    depth={0} />
                : <></>}
        </div>
    );
});
