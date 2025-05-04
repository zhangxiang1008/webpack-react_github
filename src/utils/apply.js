Function.prototype.myApply = function (context, params) {
  const _context = context || window;
  // 使用Symbol保持唯一
  const fnKey = Symbol();
  _context[fnKey] = this;
  let res = _context[fnKey](...params);
  delete _context[fnKey];
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

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw Error("当前不是函数");
  }
  const _context = context || window;
  const key = Symbol();
  _context[key] = this;
  const res = _context[key](args);
  delete _context[key];
  return res;
};

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error("当前不是函数");
  }
  return this.myApply(context, args);
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error("当前不是函数");
  }
  const _this = this;
  return function fn(...innerArgs) {
    if (_this instanceof fn) {
      return new _this(...args, ...innerArgs);
    } else {
      return _this.apply(args.concat(innerArgs));
    }
  };
};

function printName() {
  console.log(this.name);
}

const a = {
  name: "213",
};

printName.myApply(a);
