// function is object and whenever a function is created. 2 objects are created. 
// the function object itself and function.prototype
// when constructor function is called. a property is added to the object '__proto__'

function IDE(name) {
    this.name = name;
}

var ide1 = new IDE('Eclipse');
console.log(ide1);
var ide2 = new IDE('VSC');
console.log(ide2);
var ide3 = new IDE('Sublime');
console.log(ide3);
console.log(`\n\n\nwhen platform property is set for one object i.e., ide1.platform = 'Windows', ide2 and ide3 still don't contain property 'platform'`);
ide1.platform = 'LINUX';
console.log(ide1.platform);
console.log(ide2.platform);
console.log(ide3.platform);
console.log(`\n\nprototype gives the behavior to every object. this property is added at runtime
\nfirst the object itself is checked. if it contains the property thn it is returned else the prototype object is checked
\nprototype therefore is used to give a common behavior and helps save memory as prototype is shared among all the objects created
\neven object that is created before a property is added to prototype will get the property. 
`);
console.log(`here the prototype property 'platform' can be added using 
\nIDE.prototype.platform = 'Windows'
\nor
\nide1.__proto__.platform = 'Windows';`);

IDE.prototype.platform = 'Windows';
console.log(ide1.platform);
console.log(ide2.platform);
console.log(ide3.platform);
