// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateTeam = require('./src/TeamGenerator')
// TODO: Create an array of questions for user input
// Require Classes
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');


const questions = [
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0']
  },
]