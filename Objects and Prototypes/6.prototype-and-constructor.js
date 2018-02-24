console.log(`function has a property called prototype which references a prototype object and
the prototype object has a property called constructor which points back to the prototype`);

function foo() {

}
console.log(`foo.prototype.constructor -> `, foo.prototype.constructor);

console.log(`foo.prototype.constructor === foo :`, foo.prototype.constructor === foo);