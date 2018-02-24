// use function to create multiple objects with similar property
console.log('function to create object');
function createUserAsFunction(name, age, sex, country) {
    var userObj = {};
    userObj.name = name;
    userObj.age = age;
    userObj.sex = sex;
    userObj.country = country;
    return userObj;
}

const user1 = createUserAsFunction('dummy user1', 25, 'M', 'India');
// Constructor function - when we are creating object using a function we don't necessarily have to create obj (userObj) and return that. use 'this' 
// if a function acts as a constructor, function name should start with a capital letter
function CreateUserAsConstructor(name, age, sex, country) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.country = country;
}
const user2 = new CreateUserAsConstructor('dummy user2', 25, 'F', 'USA');
console.log('user1', user1);
console.log('user2', user2);
console.log('\n\n\n');