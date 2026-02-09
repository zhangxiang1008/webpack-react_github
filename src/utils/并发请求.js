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