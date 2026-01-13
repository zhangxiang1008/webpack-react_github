/**
 * 迭代版 flat 函数 - 避免递归栈溢出
 * @param {Array} arr - 要扁平化的数组
 * @param {number} depth - 扁平化深度
 * @returns {Array} 扁平化后的数组
 */
function flatIterative(arr, depth = Infinity) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }

  if (depth < 0) return arr.slice();

  const result = [];
  const stack = [...arr.map((item) => ({ value: item, depth: 0 }))];

  while (stack.length > 0) {
    const { value, depth: currentDepth } = stack.pop();
    if (Array.isArray(value) && currentDepth < depth) {
      // 将数组元素展开推入栈中（注意顺序）
      for (let i = 0; i <= value.length - 1; i++) {
        stack.push({ value: value[i], depth: currentDepth + 1 });
      }
    } else {
      result.unshift(value); // 使用 unshift 保持顺序
    }
  }
  return result;
}

/**
 * 迭代版 flat 函数 - 避免递归栈溢出
 * @param {Array} arr - 要扁平化的数组
 * @param {number} depth - 扁平化深度
 * @returns {Array} 扁平化后的数组
 */

function test(arr, depth = Infinity) {
  if (!Array.isArray(arr)) {
    throw new Error("not array");
  }
  const res = [];
  const stack = [
    ...arr.map((item) => {
      return {
        value: item,
        depth: 0,
      };
    }),
  ];
  while (stack.length > 0) {
    const { value, depth: currentDepth } = stack.pop();
    if (Array.isArray(value) && currentDepth < depth) {
      for (let index = 0; index < value.length; index++) {
        stack.push({
          value: value[index],
          depth: currentDepth + 1,
        });
      }
    } else {
      res.unshift(value);
    }
  }
  return res;
}

// 测试
const deepNested = [
  [0, 1],
  [2, [3, [4, 5]]],
];

console.log(test(deepNested, 2)); // 处理深度嵌套数组
console.log(test(deepNested, 1)); // 处理深度嵌套数组
console.log(test(deepNested)); // 处理深度嵌套数组

