export type Node = {
    value: number,
    left: Node | null,
    right: Node | null
} | null;

export type TreeNodeType = {
    node: Node,
    xLB: number,
    xRB: number,
    yPos: number,
    parentX: number | undefined,
    parentY: number | undefined,
}