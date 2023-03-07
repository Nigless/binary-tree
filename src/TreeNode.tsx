import { useStore, useStoreMap } from "effector-react"
import { ReactNode } from "react"
import { treeStore } from "./store"
import c from "classnames"
import NodeContainer from "./NodeContainer"
import TreePlaceholder from "./TreePlaceholder"


interface TreeNodeProps {
    id: number,
}

export default function TreeNode({ id }: TreeNodeProps) {
    const data = useStoreMap({
        store: treeStore,
        keys: [id],
        fn: (state) => state[id]
    })

    return <>
        <div className="border-2 border-white bg-zinc-800 rounded-full w-12 h-12 flex items-center justify-center">
            {data.value}
        </div>
        <div className="flex gap-4">
            <NodeContainer type="left">
                {data.left !== null ? <TreeNode id={data.left} /> : <TreePlaceholder />}
            </NodeContainer>
            <NodeContainer type="right">
                {data.right !== null ? <TreeNode id={data.right} /> : <TreePlaceholder />}
            </NodeContainer>
        </div>
    </>
}