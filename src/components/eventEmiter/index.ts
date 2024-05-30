class EventEmiter {
  events: {
    [keys: string]: any[]
  }

  constructor() {
    this.events = {}
  }

  on(eventName: string, cb: () => void) {
    if (this.events[eventName]) {
      this.events[eventName].push(cb)
    } else {
      this.events[eventName] = [cb]
    }
  }

  emit(eventName: string, ...args: any) {
    const callbacks = this.events[eventName] || []
    callbacks.forEach((item) => {
      item(...args)
    })
  }

  off(eventName: string) {
    delete this.events[eventName]
  }

  //   触发一次之后立即解除
  once(eventName: string, cb: (params: any) => void) {
    const once = (...args: any) => {
      cb(...args)
      this.off(eventName)
    }

    this.on(eventName, once)
  }
}
