function Calculator() {
    this.num = 0;
    this.add = function(input) {
        this.num += input;
        return this;
    }
    this.sub = function(input) {
        this.num -= input;
        return this;
    }
    this.multiply = function(input) {
        this.num *= input;
        return this;
    }
    this.getNumber = function() {
        return this.num;
    }
}
var calc = new Calculator();
console.log(calc.add(5).sub(2).multiply(3).getNumber());