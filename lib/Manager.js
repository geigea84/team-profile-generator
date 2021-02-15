//In addition to Employee's properties and methods, Manager will also have:
//officeNumber
//getOfficeNumber()
//getRole() // Overridden to return 'Manager'

const Employee = require('./Employee');

//Manager class extends Employee class
class Manager extends Employee {
    //constructor to accept input and build out Intern class
    constructor(name, id, email, officeNumber) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        //super() accesses and calls functions on an object's parent
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;