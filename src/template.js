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

    return teamArr.join('');
}