console.log(`Object is a global function which is used to create object
even when we do something like var obj = {} , still it is same as calling obj = new Object()`);
console.log(`To prove this, we can use '__proto__'`);
var obj1 = {};
var obj2 = new Object();
console.log(`obj1.__proto__ === obj2.__proto__ : `, obj1.__proto__ === obj2.__proto__);

