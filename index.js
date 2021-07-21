const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML');

const team = [];

function newManager() {
    inquirer
        .prompt([{
                type: 'input',
                message: "Enter the manager's name: ",
                name: 'name'
            },
            {
                type: 'input',
                message: "Enter the manager's employee ID: ",
                name: 'employee'
            },
            {
                type: 'input',
                message: "Enter the manager's email address: ",
                name: 'email'
            },
            {
                type: 'input',
                message: "Enter the manager's office extension: ",
                name: 'office'
            },
        ])
        .then((response) => {
            let name = response.name;
            let id = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager(name, id, email, office);
            team.push(manager);
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([{
                type: 'list',
                name: 'role',
                message: 'Is this new employee an Engineer or Intern?',
                choices: ['Engineer', 'Intern']
            }, {
                type: 'input',
                message: "Enter the employee's name: ",
                name: 'name'
            },
            {
                type: 'input',
                name: "school",
                message: "Enter the employee's school: ",
                when: (answers) => answers.role === 'Intern'
            }, {
                type: 'input',
                name: "github",
                message: "Enter the employee's github username: ",
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: 'input',
                message: "Enter the employee's ID: ",
                name: 'employee'
            },
            {
                type: 'input',
                message: "Enter the employee's email address: ",
                name: 'email'
            },
            {
                type: 'confirm',
                message: "Would you like to add another employee?",
                name: "add"
            }
        ])
        .then((response) => {
            console.log(response)
            let name = response.name;
            let id = response.employee;
            let email = response.email;

            if (response.role == "Intern") {
                let school = response.school;
                let intern = new Intern(name, id, email, school);
                team.push(intern);

            } else if (response.role == "Engineer") {
                let github = response.github;
                let engineer = new Engineer(name, id, email, github);
                team.push(engineer);
            }
            console.log(team)

            if (response.add == true) { newEmployee(); } else { createHTML(); }
        })
}

const createHTML = () => {
    fs.writeFile("test.html", generateHTML(team), (err) => {
        err ? console.log("Error: did not work") : console.log("success, HTML created")
    })
}

newManager();