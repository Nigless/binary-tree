import { createEvent, createStore } from "effector";


interface Node {
    value: number,
    left: number | null,
    right: number | null
}

export const insertValueRequested = createEvent<number>()

export const treeStore = createStore<Record<number, Node>>({});

{
    let id = 0;
    treeStore.on(insertValueRequested, (state, payload) => {
        const newNode = {
            value: payload,
            left: null,
            right: null
        }
        const newNodeId = id++

        if (newNodeId === 0) {
            return {
                0: newNode
            }
        }

        state[newNodeId] = newNode

        let nodeId = 0;
        let node = state[0] as Node
        while (true) {
            if (payload >= node.value) {
                if (node.right !== null) {
                    nodeId = node.right;
                    node = state[node.right]
                    continue;
                }
                state[nodeId] = {
                    ...node,
                    right: newNodeId
                }
                break;
            }

            if (node.left !== null) {
                nodeId = node.left;
                node = state[node.left]
                continue;
            }

            state[nodeId] = {
                ...node,
                left: newNodeId
            }
            break;

        }

        return {
            ...state
        }
    })
}