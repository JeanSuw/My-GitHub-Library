// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
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
        message: 'contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'test instructions?',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeFormat = `# ${data.title} `;


    // JSON.stringify(data)
    fs.writeFile(fileName, readmeFormat, (err) => 
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
    inquirer
        .prompt(questions)
    .then((data) => {
        writeToFile("Something.md", data);
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