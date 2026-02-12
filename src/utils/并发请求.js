class Scheduler {
  constructor(maxExcutingNum) {
    this.maxExcutingNum = maxExcutingNum // 最大并发数
    this.queue = [] // 存放任务的队列
    this.executingCount = 0 // 当前执行中的任务数
  }

  add(promiseMaker) {
    const task = () => {
      this.executingCount++
      return promiseMaker().finally(() => {
        this.executingCount--
        this._runNext()
      })
    }

    if (this.executingCount < this.maxExcutingNum) {
      task().then(() => {})
    } else {
      this.queue.push(task)
    }
  }

  _runNext() {
    if (this.queue.length > 0) {
      const nextTask = this.queue.shift()
      nextTask()
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

const scheduler = new Scheduler(2)
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

for (let index = 0; index < 100; index++) {
  addTask(Math.random() * 1000, index)
}

/**
 * 控制并发请求并返回所有结果
 * @param {Array} urls - 请求地址数组
 * @param {Function} fetchFn - 请求函数
 * @param {number} max - 最大并发数
 */
async function limitRequests(urls, fetchFn, max) {
  const results = [];
  let index = 0; // 下一个要执行的url下标
  let count = 0; // 当前并发数

  return new Promise((resolve) => {
    async function next() {
      // 循环创建请求，直到达到并发数或任务结束
      while (index < urls.length && count < max) {
        const i = index++;
        count++;
        
        fetchFn(urls[i])
          .then((res) => {
            results[i] = res; // 保持顺序
          })
          .catch((err) => {
            results[i] = err;
          })
          .finally(() => {
            count--;
            next(); // 完成一个，尝试开始下一个
          });
      }

      // 所有任务完成
      if (results.length === urls.length && count === 0) {
        resolve(results);
      }
    }

    next();
  });
}
