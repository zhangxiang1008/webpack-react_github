import { Observer } from './Observer'

export class Subscriber {
  observers: Observer[] = []
  constructor() {
    this.observers = []
  }
  addObserver(observe: Observer) {
    this.observers.push(observe)
  }
  removeObserver(observe: Observer) {
    const index = this.observers.findIndex((item) => item === observe)
    this.observers.splice(index, 1)
  }
  notifyAll(data: any) {
    this.observers.forEach((item) => {
      item.notify(data)
    })
  }
}
