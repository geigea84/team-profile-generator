//Build out separate sections of html for each Employee sub class (Engineer, Intern, Manager)
//Combine sub classes to build full team html
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
        //isolate all employees with role Manager
        .filter(employee => employee.getRole() == 'Manager')
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        //build array of completed Manager html sections
        .map(manager => buildManager(manager))
    );

    teamArr.push(team
        //isolate all employees with role Engineer
        .filter(employee => employee.getRole() == 'Engineer')
        //build array of completed Engineer html sections
        .map(engineer => buildEngineer(engineer))
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        //add Engineer html array to Manager html array, both held by teamArr
        .join('')
    );

    teamArr.push(team
        //isolate all employees with role Intern
        .filter(employee => employee.getRole() == 'Intern')
        //build array of completed Intern html sections
        .map(intern => buildIntern(intern))
        //add Intern html array to Manager & Engineer html array, all held by teamArr
        .join('')
    );
    
    //return fully built and ordered team array
    return teamArr.join('');
}

//build out and export html to display team page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]>      <html class="no-js"> <![endif]-->
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="">
        </head>
        <body>
            ${buildTeam(team)}
        </body>
    </html>
    `;
}