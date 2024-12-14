import React from "react";

export type Node = {
    value: number,
    left: Node | null,
    right: Node | null
} | null;

export type TreeNodePropType = {
    node: Node,
    xLB: number,
    xRB: number,
    yPos: number,
    parentX: number | undefined,
    parentY: number | undefined,
};

export type TreePropType = {
    startVisualizing: boolean,
    treeToVisualize: string | null,
    setStartVisualizing: React.Dispatch<React.SetStateAction<boolean>>,
    isWindowResized: boolean,
    setIsWindowResized: React.Dispatch<React.SetStateAction<boolean>>
};

export type SidebarPropType = {
    setStartVisualizing: React.Dispatch<React.SetStateAction<boolean>>,
    setTreeToVisualize: React.Dispatch<React.SetStateAction<string | null>>
    setIsWindowResized: React.Dispatch<React.SetStateAction<boolean>>
};