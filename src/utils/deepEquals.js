function deepEqualOptimized(a, b, visited = new WeakMap()) {
  // 基本类型和 null 检查
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  // 处理循环引用
  if (visited.has(a) && visited.get(a) === b) return true;
  if (visited.has(b) && visited.get(b) === a) return true;

  visited.set(a, b);
  visited.set(b, a);

  // 处理特殊对象类型
  if (a instanceof Date)
    return b instanceof Date && a.getTime() === b.getTime();
  if (a instanceof RegExp)
    return b instanceof RegExp && a.toString() === b.toString();
  if (a instanceof Map) {
    if (!(b instanceof Map) || a.size !== b.size) return false;
    for (let [key, val] of a) {
      if (!b.has(key) || !deepEqualOptimized(val, b.get(key), visited))
        return false;
    }
    return true;
  }
  if (a instanceof Set) {
    if (!(b instanceof Set) || a.size !== b.size) return false;
    const arrA = Array.from(a);
    const arrB = Array.from(b);
    return arrA.every((val, index) =>
      deepEqualOptimized(val, arrB[index], visited),
    );
  }

  // 数组比较
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, index) =>
      deepEqualOptimized(item, b[index], visited),
    );
  }

  // 普通对象比较
  const keysA = Reflect.ownKeys(a);
  const keysB = Reflect.ownKeys(b);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(
    (key) => keysB.includes(key) && deepEqualOptimized(a[key], b[key], visited),
  );
}

var lengthOfLongestSubstring = function(s = '') {
   const len = s.length;
   const set = new Set()
   const res = 0
   let right = -1;
   for (let i = 0; i < len; i++) {
        if(i !== 0){
            set.delete(s.charAt(i))
        }
        while(right + 1 < n && !set.has(s.charAt(right + 1))){
            set.add(s.charAt(right + 1));
            right ++;
        }
        res = Math.max(res, right - i + 1)
   }
   return res
};

console.log(lengthOfLongestSubstring('abbdada'))