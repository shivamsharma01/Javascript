console.log('call and apply works the same, call takes arguments in order while apply takes in a list');
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
}

var calculator = new Calculator(5,10);
console.log(calculator.sum());
var getSumFunction = calculator.sum;
console.log(getSumFunction());
var sum = calculator.sum.apply(calculator);
console.log(sum);
sum = calculator.sum.call(calculator); 
console.log(sum);
getSumFunction = calculator.sum.bind(calculator); // <- returns a function that use provided object for this
console.log(getSumFunction());
