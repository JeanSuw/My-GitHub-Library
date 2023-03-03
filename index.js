// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project? (What is it? Why do you make it? How did you make it)',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation instruction for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Insert github account: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Insert your email address: ',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //const readmeFormat = `# ${data.title} `;


    // JSON.stringify(data)
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer
        .prompt(questions)
    .then((data) => {
        var newPage = generateMarkdown(data);
        writeToFile("Something.md", newPage);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("How did you get here?");
        }
    });
}

// Function call to initialize app
init();