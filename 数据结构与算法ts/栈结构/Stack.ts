// 定义接口
import type { IList } from "../types/IList"
interface IStack<T> extends IList<T>{
  push(element:T):void
  pop():T |undefined
 
}

// 封装一个栈 基于数组、链表
class ArrayStack<T> implements IStack<T> {
  // 定义一个数组/链表，用于存储元素
  private data: T[] = []

  // 实现栈中方法

  // 将一个元素压入栈中
  push(element: T): void {
    this.data.push(element)
  }

  // 弹出栈顶元素并返回该元素
  pop(): T | undefined {
    return this.data.pop()
  }

  // 查看栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 返回元素个数
  get size(): number {
    return this.data.length
  }
}



class LinkedStack<T> implements IStack<T>{
  // 创建一个链表结构
  pop(): T | undefined {
    throw new Error("Method not implemented.")
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.")
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.")
  }
  get size(): number {
    throw new Error("Method not implemented.")
  }

  push(element:T){}
 

}

// 创建栈实例
const stack1 = new ArrayStack<string>()

// stack1.push('aaa')
// console.log(stack1.peek())


const stack2 = new LinkedStack<string>()

export {ArrayStack,LinkedStack}
