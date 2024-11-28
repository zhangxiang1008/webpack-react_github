Function.prototype.myApply = function (context, params) {
  context = context || window;
  // 使用Symbol保持唯一
  const fnKey = Symbol();
  context[fnKey] = this;
  let res = context[fnKey](...params);
  delete context.fn;
  return res;
};
// 手写call 功能：绑定函数this 且第二个参数为rest
// @ts-ignore
Function.prototype.myCall = function (context, ...args) {
  return this.myApply(context, args);
};
//@ts-ignore
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error("caller is not a function");
  }
  const _context = context || globalThis;

  const _this = this;

  return function fn(...innerArgs) {
    // 防止当作构造函数调用
    if (_this instanceof fn) {
      return new _this(...args, ...innerArgs);
    } else {
      return _this.apply(_context, args.concat(innerArgs));
    }
  };
};