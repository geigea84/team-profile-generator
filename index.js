//add colons to inquirer prompt messages?

//reference Module 9 Weekly Challenge
//import dependencies
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//import classes (Employee already imported into each class type)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//import template
const template = require('./src/template.js');

//https://nodejs.org/api/path.html
//create path to new directory
//__dirname in a node script returns the path of the folder where the current js file resides
const teamFolder = path.resolve(__dirname, "team");

//build html file in dynamically created directory
//(connect to end of /team/ path)
const buildHtml = path.join(teamFolder, "index.html");

//team members array?
//blank array to hold pushed team info
const teamArr = [];

//id array?

//initialize inquirer prompt in CLI
//have unique names for each question
function init() {
    //inquirer prompts to add manager
    //manager’s name, employee ID, email address, and office number
    function addManager() {
        console.log('Start building your team:');
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter the manager's name"
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter the manager's employee ID"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter the manager's email"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter the manager's office number"
            }
            //call Promise to return input
        ]).then(input => {
            //use received input to build out Manager class and hold inside a const
            const manager = new Manager(input.managerName, input.managerId, input.managerEmail, input.managerOfficeNumber);
            //push new manager const to teamArr
            teamArr.push(manager);
            //call next function for inquirer list prompts
            addTeamMember();
        })
    }

    //manager options: add engineer, add intern, done adding
    function addTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "addMember",
                message: "Add a team member:",
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm done adding team members"
                ]
            }
            //call Promise to return input
        ]).then(input => {
            //switch statement to handle the different addMember options
            switch (input.addMember) {
                case "Engineer":
                    //if chosen call addEngineer function
                    addEngineer();
                    break;
                case "Intern":
                    //if chosen call addIntern function
                    addIntern();
                    break;
                default:
                    //if chosen call buildTeam function
                    //no case needed assuming manager is done adding members
                    buildTeam();
                    console.log("Generating team page...");
                    console.log("");
                    setTimeout(() => { 
                        console.log("Done");
                        console.log("");
                    }, 1000);
                    setTimeout(() => { 
                        console.log("Please see index.html in the team folder to view your created page");
                        console.log("");
                    }, 1500);
            }
        });
    }

    //prompts to add engineer
    //engineer’s name, ID, email, and GitHub username
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Enter the engineer's name"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter the engineer's employee ID"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter the engineer's email"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Enter the engineer's GitHub username"
            }
            //call Promise to return input
        ]).then(input => {
            //use received input to build out Engineer class and hold inside a const
            const engineer = new Engineer(input.engineerName, input.engineerId, input.engineerEmail, input.engineerGitHub);
            //push new engineer const to teamArr
            teamArr.push(engineer);
            //circle back to run through addTeamMember prompts again
            addTeamMember();
        })
    }

    //prompts to add intern
    //intern’s name, ID, email, and school
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Enter the intern's name"
            },
            {
                type: "input",
                name: "internId",
                message: "Enter the intern's employee ID"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter the intern's email"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school"
            }
            //call Promise to return input
        ]).then(input => {
            //use received input to build out Intern class and hold inside a const
            const intern = new Intern(input.internName, input.internId, input.internEmail, input.internSchool);
            //push new intern const to teamArr
            teamArr.push(intern);
            //circle back to run through addTeamMember prompts again
            addTeamMember();
        })
    }

    function buildTeam() {
        //if team folder doesn't exist, create one
        if (!fs.existsSync(teamFolder)) {
            fs.mkdirSync(teamFolder)
        }
        //write html to file in existing team folder
        fs.writeFileSync(buildHtml, template(teamArr));
    }

    //call addManager() to begin manager prompts
    addManager();
}

//call init() to start inquirer
init();