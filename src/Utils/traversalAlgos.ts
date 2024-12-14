import { Node } from "../types";

const preOrder = (root: Node, order: Node[]): void => {
    if (!root) return;
    order.push(root);
    preOrder(root.left, order);
    preOrder(root.right, order);
}

const preOrderTraversal = (root: Node): Node[] => {
    const order: Node[] = [];
    preOrder(root, order);
    return order;
}

const levelOrderTraversal = (root: Node): Node[] => {
    const order: Node[] = [];
    const queue: Node[] = [];
    queue.push(root);

    while (queue.length > 0) {
        const node = queue.shift();
        if (!node) break;
        order.push(node);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return order;
}


const inOrder = (root: Node, order: Node[]): void => {
    if (!root) return;
    inOrder(root.left, order);
    order.push(root);
    inOrder(root.right, order);
}

const inOrderTraversal = (root: Node): Node[] => {
    const order: Node[] = [];
    inOrder(root, order);
    return order;
}

const postOrder = (root: Node, order: Node[]): void => {
    if (!root) return;
    postOrder(root.left, order);
    postOrder(root.right, order);
    order.push(root);
}

const postOrderTraversal = (root: Node): Node[] => {
    const order: Node[] = [];
    postOrder(root, order);
    return order;
}


export function getTraversalAlgorithm(id: number, node: Node): Node[] {
    if (id === 0) return preOrderTraversal(node);
    else if (id === 1) return inOrderTraversal(node);
    else if (id === 2) return postOrderTraversal(node);
    else if (id === 3) return levelOrderTraversal(node);
    else return [];
}