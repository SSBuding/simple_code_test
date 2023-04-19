import { ArrayQueue } from './Queue'
// 实现约瑟夫环问题
function lastRemaining(n: number, m: number): number {
  if (n === 0) return -1
  // 创建队列
  const queue = new ArrayQueue<number>()
  // 将所有数字加入队列
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  while (queue.size > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }
  return queue.dequeue()!
}
console.log(lastRemaining(5, 3))

// 动态规划版本
// function lastRemaining(n: number, m: number): number {
//   if (n === 0) return -1
//     // 创建队列
//     let position = 0
//     for(let i = 2;i<= n;i++){
//         position = (position +m)%i
//     }
//     return position
//   };