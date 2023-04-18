import { ArrayStack } from "./Stack";

function decimalToBinary(decimal:number):string{

  // 创建一个栈，用于存放余数
  const stack = new ArrayStack<number>()

  // 使用循环添加余数
  while(decimal >0){
    const result =  decimal % 2
    stack.push(result)
    decimal  = Math.floor(decimal/2)
  }
  
  let binary = ''
  // 取出余数
  while(!stack.isEmpty()){

    binary += stack.pop()
  }
 
  return binary
}


console.log(decimalToBinary(3))