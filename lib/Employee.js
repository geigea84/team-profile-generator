//Employee is the primary parent class, drills down to the other 3 classes

//The first class is an Employee parent class with the following properties and methods:
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole() // Returns 'Employee'

class Employee {
    //constructor to accept input and build out Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;