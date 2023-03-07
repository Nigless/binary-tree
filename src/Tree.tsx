import { useStore, useStoreMap } from "effector-react"
import { ReactNode, useEffect } from "react"
import { treeStore } from "./store"
import c from "classnames"
import TreeNode from "./TreeNode"
import TreePlaceholder from "./TreePlaceholder"
import NodeContainer from "./NodeContainer"
import { insertValueRequested } from "./store"

export default function Tree() {
    const data = useStoreMap({
        store: treeStore,
        keys: [],
        fn: (state) => state[0]
    })

    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.code !== "Space")
                return;
            insertValueRequested(Math.floor(Math.random() * 200 - 100))
        })
    }, [])

    if (!data)
        return "Пусто..." as any as JSX.Element;

    return <div className="flex flex-col items-center gap-2">
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
    </div >
}