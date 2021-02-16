//import Intern class
const Intern = require('../lib/Intern');

//set intern school
test('set intern school', () => {
    const value = 'Wisconsin';
    const newInt = new Intern('Aaron', 1, 'aaron@aaron.com', value);
    expect(newInt.school).toBe(value);
});

//get intern school
test('get intern school', () => {
    const value = 'Wisconsin';
    const newInt = new Intern('Aaron', 1, 'aaron@aaron.com', value);
    expect(newInt.getSchool()).toBe(value);
});

//get intern role
test('get intern role', () => {
    const value = 'Intern';
    const newInt = new Intern(value);
    expect(newInt.getRole()).toBe(value);
});