console.log(`every object has a property '__proto__'
which points to prototype object of the function that created it.
the top most prototype object is created using Object's prototype
like all objects, Object prototype also has property '__proto__' but it is null.   
`);

function Child() {
}
var child = new Child();
console.log('child.__proto__ ->', child.__proto__);
console.log('child.__proto__.__proto__ ->', child.__proto__.__proto__);
console.log('child.__proto__.__proto__.__proto__ ->', child.__proto__.__proto__.__proto__);
console.log('this can we used to find out which constructor function was used to create the object.');
console.log(`#Note: this is not a reliable technique because '__proto__' reference can be changed to point to some other function`);