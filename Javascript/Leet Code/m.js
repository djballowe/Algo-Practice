/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let ans;
    let curr;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            if (ans === null) {
                ans = list1;
                curr = ans;
            } else {
                curr.next = list1; 
                curr = curr.next;
            }
            list1 = list1.next;
        } else {
            if (ans === null) {
                ans = list2;
                curr = ans;
            } else {
                curr.next = list2;
                curr = curr.next;
            }
            list2 = list2.next;
        }
    }
    return ans;
};
