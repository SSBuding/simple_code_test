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
if(head === null) return null
// head只有一个节点
if(head.next === null)return head
// 栈实现
const stack:ListNode[]=[]
let current:ListNode|null= head
while(current){
  stack.push(current)
  current = current.next
}
const newHead :ListNode= stack.pop()!
let curNode = newHead
while(stack.length){
  const node = stack.pop()!
  curNode.next = node
  curNode = curNode.next
}
curNode.next =null
return newHead
};

export {}