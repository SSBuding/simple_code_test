// 1.创建node节点类
// 2.创建链表
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  get length() {
    return this.size
  }
  // 私有方法
  // 获取当前节点本身
  private getNode(position:number):Node<T>|null{
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current

  }
  // 判断链表是否为空
  isEmpty():boolean{
    return this.size ===0
  }
  // 追加节点
  append(value: T) {
    const newNode = new Node<T>(value)

    // 判断是否为空
    if (!this.head) {
      this.head = newNode
    } else {
      // 临时变量，用来找下一个节点
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  // 往中间某个位置插入节点
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false
    const newNode = new Node<T>(value)
    // 判断插入位置是否为头节点
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      // 找到需要的前一个节点
      const previous = this.getNode(position -1)
      
      newNode.next = previous!.next
      previous!.next = newNode
    }
    this.size++
    return true
  }

  // 根据索引删除节点
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.size) return null
    // 删除索引为0的情况
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null
    } else {
      // 找到需要的前一个节点
      const previous = this.getNode(position -1)
      
      previous!.next = previous?.next?.next ?? null
    }
    this.size--
    return current?.value ?? null
  }
  // 根据值删除节点
  remove(value:T): T | null{
    const index = this.indexOf(value)
    return this.removeAt(index)

  }
  // 根据索引获取节点
  getElementAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.size) return null

    return this.getNode(position)?.value ?? null
  }
  // 更新节点
  update(value:T,position:number):boolean{
    if (position < 0 || position >= this.size) return false
    // 获取节点，更新对应值
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }
  // 返回一个元素的索引
  indexOf(value:T):number{
    let current = this.head
    let index = 0
    while(current){
      if(current.value === value){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  // 遍历链表
  traverse() {
    const value: T[] = []
    let current = this.head
    while (current) {
      value.push(current.value)
      current = current.next
    }
    console.log(value.join('->'))
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.traverse()
console.log('-------')
linkedList.getElementAt(0)
linkedList.traverse()
console.log('-------')
linkedList.insert('dddd',3)
linkedList.traverse()
linkedList.removeAt(1)
linkedList.traverse()
export { LinkedList }
