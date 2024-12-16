console.log('1'); 
setTimeout(function() { 
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
}) 
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})


function getValue(obj, key, defaultVal) {
    //实现代码
    let objTemp = obj
    key = key.replace(/\[(\d+)\]/g, '.$1')
    if(!!key.length &&  key.substring(0,1) !== '.'){
        key = '.' + key
    }
    for(let i = 0;i < key.length;i++){
        let secondIndex = key.split("").findIndex((item,index)=>item==='.' && index > i )
        if(secondIndex === -1 ){
            secondIndex = key.length
        }
        const keyChild = key.substring(i + 1,secondIndex)
        objTemp = objTemp[keyChild]
        i = secondIndex - 1
    }
    // console.log(objTemp || defaultVal)
    return objTemp || defaultVal
}

var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'

console.log(getValue(object, "a[0].b.c", 0)); // 输出3
console.log(getValue(array, "[0].a.b[0]", 12)); // 输出 1
console.log(getValue(array, "[0].a.b[0].c", 12)); // 12

