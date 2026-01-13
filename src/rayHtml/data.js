// 使用 importScripts 进行文件的引用，可引用 url、本地js文件
// importScripts('xxxxxxx')
// importScripts('xxxxxxx', 'xxxxxxxx') 也可以传多个

// 模拟数据处理
function handleData(num) {
  for (let i = 0; i < num; i++) {
    let str = ''
    while (str.length < 150) {
      str += '哈'
    }
  }
}

onmessage = async (e) => {
  console.time('处理数据时间')
  const res = handleData(e.data)
  postMessage('处理完了')
  console.timeEnd('处理数据时间')
}
