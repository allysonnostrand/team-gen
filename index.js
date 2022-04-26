const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const team = require("./util/generateHtml");

function askQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Team Managers name, Employee ID, email address and office number?',
            name: 'managerInfo',
        },
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['add an Engineer', 'add an Intern', 'finish building my team'],
            name: 'menuOptions',
        }
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
                ])
                menuOpts();
                break;
            case "add an Intern":
                console.log('You got it!');
                inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Interns name, Employee ID, email address and school?',
                    name: 'internInfo',
                },
                ])
                menuOpts();
                break;
            case "finish building my team":
                console.log('You got it!');
            fs.writeFile('./index.html', team, err=> {
                if(err){
                    throw err
                }
            })   
                break;
        }
    }
    
    )}

    function menuOpts(){
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                choices: ['add an Engineer', 'add an Intern', 'finish building my team'],
                name: 'menuOptions',
            }
        ])
    }

    askQuestions()