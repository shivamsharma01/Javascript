console.log(`reference prototype of other constructor functions to achieve inheritance`);
function Employee(name) {
    this.name = name;
}
Employee.prototype.getName = function () { return this.name; };
function Manager(name, dept) {
    this.name = name;
    this.dept = dept;
}
Manager.prototype.getDept = function () { return this.dept; };
var emp1 = new Employee('dummy-emp1');
var manager1 = new Manager('dummy-mgr1', 'Sales1');
var manager2 = new Manager('dummy-mgr2', 'Sales2');
console.log(emp1.getName());
console.log(`manager1.getName() -> this will not work`);
console.log(manager1.getDept());
console.log('Now we will make Manager constructor function inherit Employee getName');
manager1.__proto__ = Employee.prototype;
console.log(manager1.getName());




