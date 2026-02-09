function _new(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new Error("constructor must be a function");
  }

  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";

  console.log(isObject || isFunction);

  return isObject || isFunction ? res : obj;
}

function Person(age) {
  this.age = age;
  this.name = "vortesnail";
  return this;
}

const person = _new(Person, 28);

console.log(person);
