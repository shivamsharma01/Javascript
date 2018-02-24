var add = function(passed) {
    var sub = function(inner) {
        return passed - inner;
    }
    return sub;
}
console.dir(add);
console.dir(add(10));
var addition = new add(10);
console.log(addition);
console.log(addition(6));