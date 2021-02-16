//import Engineer class
const Engineer = require('../lib/Engineer');

//set engineer github
test('set engineer github', () => {
    const value = 'geigea84';
    const newEng = new Engineer('Aaron', 1, 'aaron@aaron.com', value);
    expect(newEng.github).toBe(value);
});

//get engineer github
test('get engineer github', () => {
    const value = 'geigea84';
    const newEng = new Engineer('Aaron', 1, 'aaron@aaron.com', value);
    expect(newEng.getGithub()).toBe(value);
});

//get engineer role
test('get engineer role', () => {
    const value = 'Engineer';
    const newEng = new Engineer(value);
    expect(newEng.getRole()).toBe(value);
});