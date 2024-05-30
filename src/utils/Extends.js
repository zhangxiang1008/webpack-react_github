/**
 * 继承
 */

//================= 1 原型继承================
function SuperObject() {
  this.property = true
}
//将获取父类属性的方法添加到原型链上
SuperObject.prototype.getSuperValue = function () {
  return this.property
}
function SubObject() {
  this.subProperty = false
}
SubObject.prototype = new SuperObject()
SubObject.prototype.getSubValue = function () {
  return this.subProperty
}
// 缺点： 父类引用属性实例的原型会全部暴露给子类、无法给父类构造函数中传参
