import { ArrayQueue } from './Queue'
// 击鼓传花代码实现
function hotPotato(names: string[], num: number):string {
  if(names.length === 0) return ''
  // 使用队列
  const queue = new ArrayQueue<string>()

  // 将所有name加入队列
  for (const name of names) {
    queue.enqueue(name)
  }
  // 结束游戏的规则
  while (queue.size > 1) {
    // 淘汰的规则 当i等于num淘汰，即在循环内都不会淘汰
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      queue.enqueue(name as string)
    }
    queue.dequeue()
  }

  return queue.dequeue() as string
}

const lastname = hotPotato(['mei', 'kiana','bronya'], 2)
console.log(lastname)
