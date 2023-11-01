// src/app.tsx
import React from "react";
import style from "./index.scss";
// 将数组转化为树
const list = [
  { id: 4, pid: 3 },
  { id: 1, pid: null },
  { id: 2, pid: null },
  { id: 3, pid: 1 },
  { id: 5, pid: 1 },
  { id: 6, pid: 3 },
  { id: 7, pid: 2 },
  { id: 9, pid: 2 },
  { id: 10, pid: 7 },
];

function toTree(data: any) {
  let result: any = [];
  let obj: any = {};
  data.forEach((item: any) => {
    //遍历之前的pid可能已经将此次遍历到的数据id，放入map中，所以在此将obj[item.id]合入item 获得之前的push的children
    obj[item.id] = Object.assign(item, obj?.[item.id] || {});
    if (item.pid) {
      let parent = obj[item.pid] || {};
      parent.child = parent.child || [];
      parent.child.push(item);
      obj[item.pid] = parent;
    } else {
      result.push(obj[item.id]);
    }
  });
  return result;
}
console.log(toTree(list));
const App: React.FC<any> = () => {
  return <div className={style.app}>1111331222</div>;
};

export default App;
