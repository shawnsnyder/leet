//recursion
class Solution {
    reverseList(head) {
        if (!head) {
            return null;
        }
        let newHead = head;
        if (head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;
        return newHead;
    }
}
//O(n)
//O(n)


//iterative
class Solution2 {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}

//o(n)
//O(1)