function foo() {
    console.log('function foo executed');
}
var obj = {};
obj.foo = function () {
    console.log('obj.foo executed');
}
foo();
new foo();
obj.foo();
foo.call();

