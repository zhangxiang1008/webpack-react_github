class Subscriber {
  constructor() {
    this.observers = [];
  }
  addObserver(observe) {
    this.observers.push(observe);
  }
  removeObserver(observe) {
    const index = this.observers.findIndex((item) => item === observe);
    this.observers.splice(index, 1);
  }
  notifyAll(data) {
    this.observers.forEach((item) => {
      item.notify(data);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  notify(data) {
    console.log(`${this.name} accept message: ${data}`);
  }
}

console.log("观察者模式======================");
const sub = new Subscriber();
const ob1 = new Observer("1");
const ob2 = new Observer("2");
sub.addObserver(ob1);
sub.addObserver(ob2);
sub.notifyAll("oberserve");

class EventBus {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!!this.events[event] && this.events[event].length > 0) {
      this.events[event].push(callback);
    } else {
      this.events[event] = [callback];
    }
  }
  publish(event, data) {
    this.events[event]?.forEach((callback) => {
      callback?.(data);
    });
  }
}

console.log("发布订阅=====================");

const eventbus = new EventBus();
eventbus.subscribe("eat", (data) => {
  console.log("订阅1", data);
});
eventbus.subscribe("eat", (data) => {
  console.log("订阅12", data);
});

eventbus.publish("eat", "shit");

const key = Buffer.from("mysecretkey", "utf8");
console.log(key);
