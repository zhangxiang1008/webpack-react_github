function getAtrributeByRegex(str = "", obj) {
  const reg = /\[(\d+)\]/g;
  const new_str = str.replaceAll(reg, ".$1");
  const arr = new_str.split(".");
  let res = obj;
  for (let key of arr) {
    if (res[key] === undefined) {
      throw new Error(`key: ${key} is not existed`);
    }
    res = res[key];
  }
  return res;
}

const obj = {
  a: {
    c: [1, 3],
    d: {
      0: [1,2],
    },
  },
  b: 0,
};

console.log(getAtrributeByRegex("a.c[0]", obj));
console.log(getAtrributeByRegex("a.d[0][1]", obj));
