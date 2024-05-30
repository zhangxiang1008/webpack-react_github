import { Subscriber } from './Subscriber'

export class Observer {
  name?: string
  subscribe?: Subscriber
  constructor(name: string, subscribe: Subscriber) {
    this.name = name
    this.subscribe = subscribe
  }
  notify(data: any) {
    console.log(`${this.name} accept message: ${data}`)
  }
}
