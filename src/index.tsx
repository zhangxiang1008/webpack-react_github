import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { event1 } from "./demo/eventCycle";
interface Item {
  key: string;
  label: string;
  children?: Item[];
}
const treeData: Item[] = [
  { key: "1", label: "江苏", children: [{ key: "1-1", label: "nanjing" }] },
  {
    key: "2",
    label: "安徽",
    children: [
      {
        key: "2-1",
        label: "滁州",
        children: [{ key: "2-1-1", label: "定远" }],
      },
      { key: "2-2", label: "合肥" },
    ],
  },
];

const dfsSearch = (treeArr: Item[], target: string, keyPath: string[]): string[] => {
  const result = treeArr.find((item) => item.label === target);
  if (result) {
    keyPath.push(result.key);
    return keyPath;
  }
  const result2 = treeArr.find((item) => {
    keyPath.push(item.key);
    const res = dfsSearch(item.children || [], target, keyPath);
    console.log("res", res);
    if (res && res.length > 0) return true;
    else {
      keyPath.pop();
    }
  });
  if (result2) {
    return keyPath;
  }
  return [];
};
//闭包
function initEvents() {
  let i = 1;
  for (i = 1; i <= 3; i++) {
    setTimeout(function showNumber() {
      console.log("initEvents", i); //444
    }, 2000);
  }
}

initEvents();
console.log("trdddddd", dfsSearch(treeData, "滁州", []));

// 单例 闭包
let Singleton = (function () {
  let instance: any = null;
  return function (name: any) {
    if (instance) {
      return instance;
    }
    // @ts-ignore
    this.name = name;
    // @ts-ignore
    return (instance = this);
  };
})();
Singleton.prototype.getName = function () {
  // @ts-ignore
  console.log(this.name);
};
// @ts-ignore
const s1 = new Singleton("2eek");
// @ts-ignore
const s2 = new Singleton("1eek");

s1.getName();
s2.getName();

// 自增函数
let autoIncrement = (start: number, increment: number) => {
  return function () {
    start += increment;
    return start;
  };
};

const increment = autoIncrement(0, 1);

console.log("increment----", increment());
console.log("increment----", increment());

console.log(s1 === s2);

// 闭包 与 工厂函数
let Todo = (function Factory() {
  let prototype = {
    // @ts-ignore
    toString: function () {
      // @ts-ignore
      return "血汗工厂" + this.id;
    },
  };
  return function (todo: any) {
    let todoNew = Object.create(prototype);
    Object.assign(todoNew, todo);
    return todoNew;
  };
})();
const todo1 = Todo({ id: 1 });
const todo2 = Todo({ id: 2 });
console.log(todo1.toString(), todo2.toString());
// 手写apply 功能：绑定函数的this 且第二个参数为数组
// @ts-ignore
Function.prototype.myApply = function (context: any, params?: any[]) {
  context = context || window;
  // 使用Symbol保持唯一
  const fnKey = Symbol();
  context[fnKey] = this;
  let res = context[fnKey](...(params || []));
  delete context.fn;
  return res;
};
function greet(this: any, name?: string) {
  console.log(`Hello, ${name || this.name}!`);
}

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
