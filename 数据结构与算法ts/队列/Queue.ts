// 队列可以基于数组和链表实现
import type { IList } from '../types/IList'
interface IQueue<T> extends IList<T> {
  // 入队
  enqueue(element: T): void
  // 出队
  dequeue(): T | undefined
}
class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = []

  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  get size(): number {
    return this.data.length
  }
}

export { ArrayQueue }
