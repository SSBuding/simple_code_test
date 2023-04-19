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

// 非递归

let newHead :ListNode|null= null

while(head){
  let current:ListNode|null = head.next
  head.next = newHead
  newHead= head
  head = current
}


return newHead
};

export {}