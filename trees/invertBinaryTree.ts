// Depth First Search

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root === null) return null
    const node = new TreeNode(root.val) 
    const temp = root.left
    node.left = invertTree(root.right)
    node.right = invertTree(temp)
    return node
}

//O(n)
//O(n)

//iterative dfs 
/*
invertTree(root) {
    if (!root) return null;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        [node.left, node.right] = [node.right, node.left];
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return root;
}
    */