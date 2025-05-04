/**
 * 继承
 */

//================= 1 原型继承================
function SuperObject() {
  this.property = true;
}
//将获取父类属性的方法添加到原型链上
SuperObject.prototype.getSuperValue = function () {
  return this.property;
};
function SubObject() {
  this.subProperty = false;
}
SubObject.prototype = new SuperObject();
SubObject.prototype.getSubValue = function () {
  return this.subProperty;
};
// 缺点： 父类引用属性实例的原型会全部暴露给子类、无法给父类构造函数中传参

// ======================2、构造函数继承=================

function SubObject() {
  SuperObject.call(this);
  this.subProperty = false;
}
// 缺点： 无法获取父类的方法，需要自定义方法

// ======================3、混合继承===================
function SubObject() {
  SuperObject.call(this);
  this.subProperty = false;
}
SubObject.prototype = new SuperObject();
SubObject.prototype.constructor = SubObject;
//定义自己的方法
SubObject.prototype.getSubValue = function () {
  return this.subProperty;
};
// 缺点：

// ================4、寄生式组合继承============
// 使用原型 获取父类函数方法
function getFnByProto(target) {
  function F() {}
  F.prototype = target;
  return new F();
}
function interAliveExtends(SuperObj, SubObj) {
  const protoType = getFnByProto(SuperObj.protoType);
  protoType.constructor = SubObj;
  SubObj.protoType = protoType;
}
// 调用父类构造函数获取
function SubObject() {
  SuperObject.call(this);
  this.subProperty = false;
}
interAliveExtends(SuperObject, SubObject);
const sub1 = new SubObject();
console.log(sub1.property);

// ================== 简化版的寄生组合继承==================
/**
 * use Object.create to replace the function, the function is actually the achievement of Object.create
 * @param {*} SubObject
 * @param {*} SuperObject
 */
function inheritProp(SubObject, SuperObject) {
  const protoType = Object.create(SuperObject.protoType);
  protoType.constructor = SubObject;
  SubObject.protoType = protoType;
}

function SubObject2() {
  SuperObject.call(this);
  this.sub = 22;
}
inheritProp(SubObject2, SuperObject);
