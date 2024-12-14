import { Node } from "../types.ts";

export const createNode = (value: number, id: number, left: Node = null, right: Node = null): Node => ({
    value,
    left,
    right,
    id,
    isVisited: false,
    isVisiting: false
});

export const constructTree = (input: string | null): Node => {
    // nodeValues will represent the level order traversal of the tree
    if (!input || input.length === 0) return null;
    const nodeValues: string[] = input.split(",");
    const root = createNode(parseInt(nodeValues[0]), 0);

    const queue: Node[] = [];
    queue.push(root);

    let id = 1;
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
                    node.left = createNode(parseInt(nodeValues[ptr]), id++);
                    queue.push(node.left);
                }
                else queue.push(null);
                ptr++;

                if (ptr < nodeValues.length && nodeValues[ptr] !== "") {
                    node.right = createNode(parseInt(nodeValues[ptr]), id++);
                    queue.push(node.right);
                }
                else queue.push(null);
                ptr++;
            }
        }
    }

    return root;
}

export const cleanTree = (root: Node): void => {
    if (!root) return;
    root.isVisited = false;
    root.isVisiting = false;
    cleanTree(root.left);
    cleanTree(root.right);
}

export const createNewRoot = (prevRoot: Node): Node => {
    if (!prevRoot) return null;
    const newRoot = createNode(prevRoot.value, 0, prevRoot.left, prevRoot.right);
    if (newRoot) {
        newRoot.isVisited = prevRoot.isVisited;
        newRoot.isVisiting = prevRoot.isVisiting;
    }
    return newRoot;
}