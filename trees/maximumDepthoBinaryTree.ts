//recursive dfs
function maxDepth(root: TreeNode | null): number {
    if(root === null) return null
    return(1+Math.max(maxDepth(root.left), maxDepth(root.right)))
 }

 //bfs
 function maxDepthBFS(root: TreeNode | null): number {
    if (!root) return 0
    let depth = 0
    let queue = [root]

    while (queue.length > 0) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }

    return depth
}


//max depth iterative 
function maxDepthDFSIterative(root: TreeNode | null): number {
    if (!root) return 0

    let stack = [{node: root, level: 1}]
    let depth = 0

    while (stack.length > 0) {
        const { node, level } = stack.pop()
        depth = Math.max(depth, level)

        if (node.left) stack.push({node: node.left, level: level + 1})
        if (node.right) stack.push({node: node.right, level: level + 1})
    }

    return depth
}