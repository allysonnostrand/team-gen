const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const team = require("./util/generateHtml");

let employees = []


function initialQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Team Managers name, Employee ID, email address and office number?',
            name: 'managerInfo',
        }
    ]).then(answers => {
        if (answers.managerInfo){
            let employee = new Manager(answers.managerInfo.split(" ")[0].trim(), answers.managerInfo.split(" ")[1].trim(), answers.managerInfo.split(" ")[2].trim(),answers.managerInfo.split(" ")[3].trim())
            employee.id = answers.managerInfo.split(" ")[1].trim()
            employees.push(employee)
            console.log(answers.managerInfo.split(" ")[0].trim() + " " + answers.managerInfo.split(" ")[1].trim() + " " + answers.managerInfo.split(" ")[2].trim() + " " + answers.managerInfo.split(" ")[3].trim())
            console.log(employee.getName() + employee.getId() + employee.getEmail() + employee.getOfficeNumber())
            return askQuestions();
        }
    })
}

function askQuestions(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['add an Engineer', 'add an Intern', 'finish building my team'],
            name: 'menuOptions',
        },
                ]).then(answers => {
                    switch (answers.menuOptions){
                        case "add an Engineer":
                            console.log("You got it!");
                            inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What is the Engineers name, Employee ID, email address and GitHub username?',
                                name: 'engineerInfo',
                            },
                            ]).then(answers =>{
                                if (answers.engineerInfo){
                                    let employee = new Engineer(answers.engineerInfo.split(" ")[0], answers.engineerInfo.split(" ")[1], answers.engineerInfo.split(" ")[2],answers.engineerInfo.split(" ")[3])
                                    employees.push(employee)
                                    return askQuestions();
                                }
                            }) 
                            break;

                        case "add an Intern":
                            console.log('You got it!');
                            inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What is the Interns name, Employee ID, email address and school?',
                                name: 'internInfo',
                            },
                            ]).then(answers =>{
                                if (answers.internInfo){
                                    let employee = new Intern(answers.internInfo.split(" ")[0].trim(), answers.internInfo.split(" ")[1].trim(), answers.internInfo.split(" ")[2].trim(),answers.internInfo.split(" ")[3].trim())
                                    employees.push(employee)
                                    return askQuestions();
                                } 
                            }) 
                            break;

                        case "finish building my team":
                            console.log('You got it!');
                            fs.writeFile('./index.html', team(employees), err=> {
                            if(err){
                                throw err
                            }
                        })   
                            break;
                     }
    }
    
    )}
        
initialQuestion();
