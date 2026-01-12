const handler = {
  get: function (target, prop) {
    const fn = target[prop];
    if (typeof fn === "function") {
      if (fn.name === "toString") {
        return fn.apply(target, args);
      }
      return function (...args) {
        fn.apply(target, args);
        return proxy; // 返回代理对象自身
      };
    }
    return target[prop];
  },
};

export default function createProxyChain(target) {
  return new Proxy(target, handler);
}
