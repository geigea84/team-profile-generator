//In addition to Employee's properties and methods, Intern will also have:
//school
//getSchool()
//getRole() // Overridden to return 'Intern'

const Employee = require('./Employee');

//Intern class extends Employee class
class Intern extends Employee {
    //constructor to accept input and build out Intern class
    constructor(name, id, email, school) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        //super() accesses and calls functions on an object's parent
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;