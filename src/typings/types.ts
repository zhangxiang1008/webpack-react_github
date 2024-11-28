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

function getPropertyMine<T extends Object>(obj:T,propName: keyof T){
    if(obj.hasOwnProperty(propName)){
        return obj[propName]
    }else if(!!Object.getPrototypeOf(obj)){
        return getPropertyMine(Object.getPrototypeOf(obj),propName)
    }else{
        return undefined
    }
}

getPropertyMine<Bird>(bird,"b")
