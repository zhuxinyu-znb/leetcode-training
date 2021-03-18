/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  let stack = [];
  let map = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };
  for (let i = 0, len = tokens.length; i < len; i++) {
    if (map[tokens[i]]) {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let num3;
      switch (tokens[i]) {
        case "+":
          num3 = Number(num2) + Number(num1);
          break;
        case "-":
          num3 = Number(num2) - Number(num1);
          break;
        case "*":
          num3 = Number(num2) * Number(num1);
          break;
        case "/":
          num3 = Number(num2) / Number(num1);
          break;
        default:
            break;
      }
      stack.push(Math.floor(num3));
    } else {
      stack.push(tokens[i]);
    }
  }
  return stack[0];
}
// @lc code=end
