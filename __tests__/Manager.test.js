//import Manager class
const Manager = require('../lib/Manager');

//set manager office number
test('set manager office number', () => {
    const value = 2;
    const newMan = new Manager('Aaron', 1, 'aaron@aaron.com', value);
    expect(newMan.officeNumber).toBe(value);
});

//get manager office number
test('get manager office number', () => {
    const value = 2;
    const newMan = new Manager('Aaron', 1, 'aaron@aaron.com', value);
    expect(newMan.getOfficeNumber()).toBe(value);
});

//get manager role
test('get manager role', () => {
    const value = 'Manager';
    const newMan = new Manager(value);
    expect(newMan.getRole()).toBe(value);
});