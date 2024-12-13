import { useEffect, useRef, useState } from "react";
import { Node } from "../../types";
import TreeNode from "../TreeNode/TreeNode";
import "./Tree.css";

const createNode = (value: number, left: Node = null, right: Node = null): Node => ({
    value,
    left,
    right
});

const constructTree = (input: string | null): Node => {
    // nodeValues will represent the level order traversal of the tree
    if (!input) return null;
    const nodeValues: string[] = input.split(",");
    const root = createNode(parseInt(nodeValues[0]));

    for (let node of nodeValues) console.log(node);

    const queue: Node[] = [];
    queue.push(root);

    let ptr = 1;

    while (ptr < nodeValues.length) {
        let len = queue.length;
        while (len-- && ptr < nodeValues.length) {
            const node = queue.shift();
            if (nodeValues[ptr] != "") {
                if (node) {
                    node.left = createNode(parseInt(nodeValues[ptr]));
                    queue.push(node.left);
                }
            }
            ptr++;
            if (nodeValues[ptr] != "") {
                if (node) {
                    node.right = createNode(parseInt(nodeValues[ptr]));
                    queue.push(node.right);
                }
            }
            ptr++;

        }
    }

    return root;
}

export default function Tree({ visualize, treeToVisualize }: { visualize: boolean, treeToVisualize: string | null }) {

    const root = constructTree(treeToVisualize);
    const treeRef = useRef<HTMLDivElement | null>(null);
    const [treeWidth, setTreeWidth] = useState<number>(0);

    useEffect(() => {
        if (treeRef) {
            setTreeWidth(treeRef.current?.getBoundingClientRect().width || 0);
        }
    }, []);


    return (
        <div ref={treeRef} className="tree">
            <TreeNode node={root} xLB={0} xRB={treeWidth} yPos={50} parentX={undefined} parentY={undefined} />
        </div>
    )
}
