class MyPromise {
  status: "pending" | "fulfilled" | "rejected";
  value: any;
  fulfillCallbacks: Function[];
  rejextedCallbacks: Function[];
  constructor(executor: Function) {
    this.status = "pending";
    this.value = undefined;
    this.fulfillCallbacks = [];
    this.rejextedCallbacks = [];
    executor(
      (value: any) => {
        console.log("---resolved", value);
        this.status = "fulfilled";
        this.value = value;
        this.fulfillCallbacks.forEach((callback: Function) => {
          callback(value);
        });
      },
      (error: any) => {
        this.status = "rejected";
        this.value = error;
        console.log("---rejected", error);
        this.rejextedCallbacks.forEach((callback: Function) => {
          callback(error);
        });
      }
    );
  }
  then(onResolved: Function, onRejected?: Function) {
    console.log("-----then");
    if (this.status == "fulfilled") {
      onResolved();
      return new MyPromise((resolve: Function, reject: Function) => {
        resolve(this.value);
      });
    } else if (this.status === "rejected") {
      onRejected?.();
      return new MyPromise((resolve: Function, reject: Function) => {
        reject(this.value);
      });
    } else {
      this.fulfillCallbacks.push(onResolved);
      this.rejextedCallbacks.push(onRejected!);
    }
  }
  static resolve(value: any) {
    return new MyPromise((resolve: Function, reject: Function) => {
      resolve(value);
    });
  }
  static reject(value: any) {
    return new MyPromise((resolve: Function, reject: Function) => {
      reject(value);
    });
  }
}

export default MyPromise;
