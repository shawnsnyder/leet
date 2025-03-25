/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    const res = [0];
    dfs(root, res)
    return res[0]
};

function dfs(node: TreeNode, res): number {
    if(node === null) return 0
    let left = dfs(node.left, res)
    let right = dfs(node.right, res)
    res[0] = Math.max(res[0], left + right)
    return 1 + (Math.max(left, right))
}

//O(n)
//O(h) h height of tree