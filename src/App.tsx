import { useStoreMap } from "effector-react"
import TreeNode from "./TreeNode"

import { insertValueRequested, treeStore } from "./store"
import Tree from "./Tree"

const dd = insertValueRequested

function App() {

  return <Tree />
}

export default App
