console.log('to access a private variable we need a public method');

function User() {
    this.name = 'testUser';
    this.age = 18;
    var salary = 620000;
    this.getSalary = function() {
        return salary;
    }
}
var testUser = new User();
console.log(`testUser.name ->`,testUser.name);
console.log(`testUser.salary ->`, testUser.salary, '-> is not available');
console.log(`testUser.getSalary() ->`,testUser.getSalary());