// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import MyPromise from "../utils/Promise/Mypromise";
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./app.tsx", function () {
    console.log("Accepting the updated printMe  module!");
    ReactDOM.render(<App />, document.querySelector("#root"));
  });
}

const promise = new MyPromise((resolve: Function, reject: Function) => {
  setTimeout(() => resolve("Hello, World!"), 5000);
});

promise.then((value: any) => console.log(value));
console.log(Promise.resolve(111));
ReactDOM.render(<App />, document.querySelector("#root"));
