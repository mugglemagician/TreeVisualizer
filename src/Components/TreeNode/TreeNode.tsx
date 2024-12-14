import { useEffect, useRef, useState } from "react";
import { TreeNodePropType } from "../../types";
import "./TreeNode.css";
import React from "react";

export default React.memo(function TreeNode({ node, xLB, xRB, yPos, parentX, parentY, depth }: TreeNodePropType) {

    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [centerX, setCenterX] = useState<number | undefined>(undefined);
    const [centerY, setCenterY] = useState<number | undefined>(undefined);


    useEffect(() => {
        if (nodeRef) {
            const rect = nodeRef.current?.getBoundingClientRect();
            if (rect) {
                setCenterX(rect.left + rect.width / 2);
                setCenterY(rect.top + rect.height / 2);
            }
        }
    }, [xRB]);

    if (!node) return <>
    </>;

    let classes = node.isVisiting ? "tree-node-visiting" : node.isVisited ? "tree-node-visited" : "";
    classes += depth === 5 ? " tree-node-depth-five" : "";

    // define spacing between nodes
    const verticalSpacing = 150;

    // calcualte child node positions
    const nodeXPos = Math.floor((xLB + xRB) / 2);
    const leftChildRB = nodeXPos;
    const rightChildLB = nodeXPos;

    const childYPos = yPos + verticalSpacing;


    return (
        <>

            {parentX && parentY &&

                <svg width={"100%"} height={"100%"} style={{ position: "absolute", zIndex: -100 }}>
                    <line
                        x1={centerX}
                        y1={centerY}
                        x2={parentX}
                        y2={parentY}
                        stroke="black"
                        strokeWidth={2}>

                    </line>
                </svg>

            }

            <div ref={nodeRef} className={`tree-node ${classes}`} style={{ left: nodeXPos - 20, top: yPos }}>
                {depth <= 4 ? node.value : `${node.value}...`}
            </div>

            {depth <= 4 && <TreeNode
                node={node.left}
                xLB={xLB}
                xRB={leftChildRB}
                yPos={childYPos}
                parentX={centerX}
                parentY={centerY}
                depth={depth + 1} />}

            {depth <= 4 && <TreeNode
                node={node.right}
                xLB={rightChildLB}
                xRB={xRB}
                yPos={childYPos}
                parentX={centerX}
                parentY={centerY}
                depth={depth + 1} />}
        </>
    );
});
