//In addition to Employee's properties and methods, Engineer will also have:
//github // GitHub username
//getGithub()
//getRole() // Overridden to return 'Engineer'

const Employee = require('./Employee');

//Engineer class extends Employee class
class Engineer extends Employee {
    //constructor to accept input and build out Engineer class
    constructor(name, id, email, github) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
        //super() accesses and calls functions on an object's parent
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;