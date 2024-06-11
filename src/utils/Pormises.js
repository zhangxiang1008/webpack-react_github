Promise.myAll = (promises) => {
  let count = 0
  let res = new Array(promises.length)
  return new Promise((resolve, rejected) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          count++
          res[i] = result
          if (count === promises.length) {
            resolve(res)
          }
        })
        .catch(rejected)
    })
  })
}
Promise.myRace = (promises) => {
  let count = 0
  return new Promise((resolve, rejected) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((result) => {
          count++
          if (count === 1) {
            resolve(result)
          }
        })
        .catch(rejected)
    })
  })
}
try {
  const p1 = Promise.resolve('p1')

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2 延时一秒')
    }, 1000)
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p3 延时两秒')
    }, 2000)
  })

  const p4 = new Promise((resolve, rejected) => {
    rejected('p4 rejected 500ms')
  })
  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p5 rejected 延时1.5秒')
    }, 1500)
  })
  Promise.myAll([p1, p2, p3])
    .then((res) => {
      console.log('myAll', res)
    })
    .catch((err) => console.log(err))
  Promise.myRace([p2, p3])
    .then((res) => {
      console.log('myRace', res)
    })
    .catch((err) => console.log(err))
} catch (e) {
  console.log(e)
}
