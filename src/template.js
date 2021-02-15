//Build out separate sections of html for each Employee sub class (Engineer, Intern, Manager)
//Combine sub classes to build full team html

const Employee = require("../lib/Employee");

const buildTeam = team => {
    //build Engineer html
    const buildEngineer = engineer => {
        return `
            <div>
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li>GitHub: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        `;
    }

    //build Intern html
    const buildIntern = intern => {
        return `
            <div>
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `;
    }

    //build Manager html
    const buildManager = manager => {
        return `
            <div>
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li>Office #: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        `;
    }

    //blank array to hold each entered team member
    const teamArr = []

    //build teamArr first with manager, then engineer(s), then intern(s),
    //and generate the respective html for each employee
    teamArr.push(team
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        .filter(employee => employee.getRole() == 'Manager')
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        .map(manager => buildManager(manager))
    );

    teamArr.push(team
        .filter(employee => employee.getRole() == 'Engineer')
        .map(engineer => buildEngineer(engineer))
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        .join('')
    );

    teamArr.push(team
        .filter(employee => employee.getRole() == 'Intern')
        .map(intern => buildIntern(intern))
        .join('')
    );
    
    //return fully built and ordered team array (includes their respective html sections)
    return teamArr.join('');
}