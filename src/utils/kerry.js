function dynamicAdd() {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
function staticAdd(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1);
  console.log("presetArgs", presetArgs);
  // 返回一个新函数
  function curried() {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments);
    const allArgs = [...presetArgs, ...restArgs];
    return curry.call(null, fn, ...allArgs);
  }
  // 重写toString
  curried.toString = function () {
    return fn.apply(null, presetArgs);
  };
  return curried;
}

const curryAdd = curry(dynamicAdd);
console.log(curryAdd(1, 2)(3));
// console.log(curryAdd(1, 2)(3).toString());
// const curryAdd2 = curry(staticAdd);
// console.log(curryAdd2(1)(3).toString());
