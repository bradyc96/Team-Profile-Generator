// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs')
const generateHTML = require('./src/generateHTML')
const generateTeam = require('./src/TeamGenerator')
// TODO: Create an array of questions for user input
// Require Classes
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
let team = []


const addManager = () => {
  return inquirer.prompt ([
      {
          type: "input",
          name: "name",
          message: "Enter the manager's name", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter the manager's ID",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter the manager's email",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Enter the manager's office number",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  return false; 
              } else {
                  return true;
              }
          }
      }
  ])
  .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      team.push(manager); 
      console.log(manager); 
  })
};

const addEmployee = () => {
 

  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose your employee's role",
          choices: ['Intern', 'Engineer']
      },
      {
          type: 'input',
          name: 'name',
          message: "Enter the name of the employee", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Enter the employee's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Enter the employee's email.",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Enter the employee's GitHub username",
          when: (input) => input.role === "Engineer",
          validate: nameInput => {
              if (nameInput ) {
                  return true;
              } else {
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Enter the intern's university",
          when: (input) => input.role === "Intern",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
              }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee; 

      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);

          console.log(employee);

      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);

          console.log(employee);
      }

      team.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(team); 
      } else {
          return team;
      }
  })

};


// function to generate HTML page file using file system 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

addManager()
.then(addEmployee)
.then(team => {
  return generateHTML(team);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});