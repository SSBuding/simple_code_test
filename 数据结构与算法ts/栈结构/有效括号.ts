import { ArrayStack } from './Stack'
/* 
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  每个右括号都有一个对应的相同类型的左括号。
*/
function isValid(s: string): boolean {
  const stack = new ArrayStack<string>()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}

console.log(isValid('[]'))
