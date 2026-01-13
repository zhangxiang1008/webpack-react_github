import { Subscriber } from "./Subscriber";

export class Observer {
  name?: string;
  subscribe?: Subscriber;
  constructor(name: string, subscribe: Subscriber) {
    this.name = name;
    this.subscribe = subscribe;
  }
  notify(data: any) {
    console.log(`${this.name} accept message: ${data}`);
  }
}

interface Aricle {
  title: string;
  content: string;
  author: string;
  stars: number;
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type AricleOptionnal = Optional<Aricle, "stars">;

function a(a:AricleOptionnal){}
a({
  title: '1',
  content: '1',
  author: '1',
})