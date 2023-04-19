 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function reverseList(head: ListNode | null): ListNode | null {
// head 为null
if(head === null||head.next === null) return head

// 递归
const newHead =  reverseList(head.next)

head.next.next =head
head.next = null
return newHead

};

export {}