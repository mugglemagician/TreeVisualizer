import React from "react";

export type Node = {
    value: number,
    left: Node | null,
    right: Node | null,
    id: number,
    isVisited: boolean,
    isVisiting: boolean
} | null;

export type TreeNodePropType = {
    node: Node,
    xLB: number,
    xRB: number,
    yPos: number,
    parentX: number | undefined,
    parentY: number | undefined,
    depth: number
};

export type TreePropType = {
    drawTree: boolean,
    treeToVisualize: string | null,
    setDrawTree: React.Dispatch<React.SetStateAction<boolean>>,
    isWindowResized: boolean,
    setIsWindowResized: React.Dispatch<React.SetStateAction<boolean>>,
    visualizeTraversal: boolean,
    setVisualizeTraversal: React.Dispatch<React.SetStateAction<boolean>>,
    traversalAlgo: number,
    setTreeLogs: React.Dispatch<React.SetStateAction<string>>,
    speed: number
};

export type MainViewPropType = TreePropType & { treeLogs: string }

export type SidebarPropType = {
    setDrawTree: React.Dispatch<React.SetStateAction<boolean>>,
    setTreeToVisualize: React.Dispatch<React.SetStateAction<string | null>>
    setIsWindowResized: React.Dispatch<React.SetStateAction<boolean>>,
    visualizeTraversal: boolean,
    setVisualizeTraversal: React.Dispatch<React.SetStateAction<boolean>>,
    traversalAlgo: { current: number },
    speed: { current: number }
};