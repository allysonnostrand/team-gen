const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

function initialQuestion() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Team Managers name, Employee ID, email address and office number?',
            name: 'managerInfo'
        }
    ]).then inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['add an Engineer', 'add an Intern', 'finish building my team'],
            name: 'menuOptions'


    ])
        {

        }
    ]).then(answers => {
        switch (answers.menuOptions){
            case "add an Engineer":
                console.log("You got it!")
                inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the Engineers name, Employee ID, email address and GitHub username?',
                    name: 'engineerInfo'
                }
                ])
                askQuestions(1)
        }
    }
    
}