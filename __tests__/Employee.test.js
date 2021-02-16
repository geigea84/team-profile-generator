//import Employee class
const Employee = require('../lib/Employee');

//set employee name
test('set employee name', () => {
    const value = 'Aaron';
    const newEmp = new Employee(value);
    expect(newEmp.name).toBe(value);
});

//set employee id
test('set employee id', () => {
    const value = 1;
    const newEmp = new Employee('Aaron', value);
    expect(newEmp.id).toBe(value);
});

//set employee email
test('set employee email', () => {
    const value = 'aaron@aaron.com';
    const newEmp = new Employee('Aaron', 1, value);
    expect(newEmp.email).toBe(value);
});

//get employee name
test('get employee name', () => {
    const value = 'Aaron';
    const newEmp = new Employee(value);
    expect(newEmp.getName()).toBe(value);
});

//get employee id
test('get employee id', () => {
    const value = 1;
    const newEmp = new Employee('Aaron', value);
    expect(newEmp.getId()).toBe(value);
});

//get employee email
test('get employee email', () => {
    const value = 'aaron@aaron.com';
    const newEmp = new Employee('Aaron', 1, value);
    expect(newEmp.getEmail()).toBe(value);
});

//get employee role
test('get employee role', () => {
    const value = 'Employee';
    const newEmp = new Employee(value);
    expect(newEmp.getRole()).toBe(value);
});

//create new employee/test Employee class construction
test('create new employee', () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe('object');
});
