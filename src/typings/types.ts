interface Bird {
    a: string
    b:string
}

interface Fish {
    a: string
    c: string
}

function getSmallPet(): Fish | Bird {
    return {
        a: "1",
        b:"1"
    }
}

let pet = getSmallPet();
if((<Bird>pet).b){
    (<Bird>pet).b
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).c !== undefined;
}
const bird:Bird = {
    a:"2",
    b:"2",
}
if(isFish(bird)){
    bird.c
}else{
    bird.b
}

export namespace Zoo{
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

export function getPropertyMine<T extends Object>(obj:T,propName: keyof T){
    if(obj.hasOwnProperty(propName)){
        return obj[propName]
    }else if(!!Object.getPrototypeOf(obj)){
        return getPropertyMine(Object.getPrototypeOf(obj),propName)
    }else{
        return undefined
    }
}

export function instanceOfMy<T extends Object>(obj: T,constructor: new()=>T ):boolean{
    const leftProto = Object.getPrototypeOf(obj)
    const rightProto = constructor.prototype
    if(leftProto === null){
        return false
    }
    if(leftProto === rightProto){
        return true
    }
    return instanceOfMy(leftProto,constructor)
}

// desc: 以传入参数对象实例作为原型产生一个新对象
export function createObject (proto:Object){
    if(!(proto instanceof Object)){
        throw Error("请传入对象实例")
    }
    function F(){}
    F.prototype = proto
    F.prototype.constructor = F
    const f =  F();
    return f;
}

// 模拟new操作
export function newOperator(func:Function, ...args: any[]){
    // 1. 判断入参类型
    if(typeof func !== "function"){
        throw Error("传入构造函数")
    }
    // 2.基于create创建一个新对象 -- 无属性 仅指定了原型
    let obj = Object.create(func.prototype)
    // 3.this指向对象 并
    let result = func.apply(obj,args);
    return (result instanceof Object) ? result : obj
}