// index.js

// console.time('处理数据时间')

// // 模拟数据处理
// function handleData(num) {
//   for (let i = 0; i < num; i++) {
//     let str = ''
//     while (str.length < 150) {
//       str += '哈'
//     }
//   }
// }

// handleData(200000000)
// console.timeEnd('处理数据时间')

// index.js

// 实例一个 Woeker ，并传入目标文件路径，这个目标文件将会生成一个worker线程
const worker = new Worker("./data.js");
// 使用 postMessage 传输信息到目标文件
worker.postMessage(2000000);
// 使用 onmessage 接受信息
worker.onmessage = (e) => {
  console.log(e.data);
};
// 使用 onerror 进行目标文件，也就是指定worker线程发生错误时的回调
worker.onerror = function (e) {
  console.log("error at " + e.filename + ":" + e.lineno + e.message);
};
