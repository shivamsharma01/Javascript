function User(name, age, sex, county) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.country = county;
    this.changeNationality = function(newCountry) {
        this.country = newCountry;
    }
}
const userOne = new User('dummy', 18, 'M', 'India');
console.log('userOne.country ', userOne.country);
userOne.changeNationality('USA');
console.log(`userOne.changeNationality('USA')`);
console.log('userOne.country ', userOne.country);
var passportOffice = {};
passportOffice.changeNationality = userOne.changeNationality;
passportOffice.changeNationality('Australia');
console.log(`\nAfter calling passportOffice.changeNationality('Australia'), userOne's country is not changed because\nthe 'this' of this.country = newCountry is referring to passportOffice`);
console.log(`userOne's county is still `,userOne.country);
console.log(`whereas passport itself now has a property 'country' set as 'Australia' => `,passportOffice);
console.log(`therefore to call 'this' of some other object we use function.call()\n\n`);
console.log(`now we write passportOffice.changeNationality.call(userOne, 'Australia')`);
passportOffice.changeNationality.call(userOne, 'Australia');
console.log('userOne county is now changed to ',userOne.country);


