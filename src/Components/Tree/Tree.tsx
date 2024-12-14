import { useEffect, useRef, useState } from "react";
import { Node, TreePropType } from "../../types";
import TreeNode from "../TreeNode/TreeNode";
import "./Tree.css";

const createNode = (value: number, left: Node = null, right: Node = null): Node => ({
    value,
    left,
    right
});

const constructTree = (input: string | null): Node => {
    // nodeValues will represent the level order traversal of the tree
    if (!input || input.length === 0) return null;
    const nodeValues: string[] = input.split(",");
    const root = createNode(parseInt(nodeValues[0]));

    const queue: Node[] = [];
    queue.push(root);

    let ptr = 1;
    let depth = 0;

    while (ptr < nodeValues.length) {
        let nodesInCurrentLevel = 1 << depth;
        let nodesInNextLevel = 2 * nodesInCurrentLevel;
        while (nodesInCurrentLevel-- > 0 && nodesInNextLevel-- > 0 && ptr < nodeValues.length) {
            const node = queue.shift();
            if (!node) {
                queue.push(null);
                queue.push(null);
                ptr += 2;
            }
            else {
                if (ptr < nodeValues.length && nodeValues[ptr] !== "") {
                    node.left = createNode(parseInt(nodeValues[ptr]));
                    queue.push(node.left);
                }
                else queue.push(null);
                ptr++;

                if (ptr < nodeValues.length && nodeValues[ptr] !== "") {
                    node.right = createNode(parseInt(nodeValues[ptr]));
                    queue.push(node.right);
                }
                else queue.push(null);
                ptr++;
            }
        }
    }

    return root;
}

export default function Tree({ startVisualizing, treeToVisualize, setStartVisualizing, isWindowResized, setIsWindowResized }: TreePropType) {

    const root = constructTree(treeToVisualize);
    const treeRef = useRef<HTMLDivElement | null>(null);
    const [treeWidth, setTreeWidth] = useState<number>(0);

    useEffect(() => {
        if (treeRef) {
            setTreeWidth(treeRef.current?.getBoundingClientRect().width || 0);
        }
        if (startVisualizing) {
            setStartVisualizing(false);
        }

        if (isWindowResized) setIsWindowResized(false);
    }, [startVisualizing, isWindowResized]);


    return (
        <div ref={treeRef} className="tree">
            {!startVisualizing
                ? <TreeNode node={root} xLB={0} xRB={treeWidth} yPos={50} parentX={undefined} parentY={undefined} />
                : <></>}
        </div>
    );
}
