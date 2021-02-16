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
const template = require('./src/template');

//https://nodejs.org/api/path.html
//generate a new directory on html build
const teamFolder = path.resolve(__dirname, "team") ;

//build html file in dynamically created directory
//(connect to end of /team/ path)
const teamPath = path.join(teamFolder, "index.html");

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
        console.log('Build your team');
        inquirer.prompt([
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            }
        ])
    }
    
    //manager options: add engineer, add intern, done adding
    function addTeamMember() {
        inquirer.prompt([
            {
                type: '',
                name: '',
                message: ''
            },
        ])
    }

    //prompts to add engineer
    //engineer’s name, ID, email, and GitHub username
    function addEngineer() {
        inquirer.prompt([
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            }
        ])
    }

    //prompts to add intern
    //intern’s name, ID, email, and school
    function addIntern() {
        inquirer.prompt([
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            },
            {
                type: '',
                name: '',
                message: ''
            }
        ])
    }
}