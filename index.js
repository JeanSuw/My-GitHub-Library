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
    fs.writeFile(fileName, data, ( err) => 
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// // TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
    inquirer
        .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
        //answers = process.argv;
        //console.log(process.argv);

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("How did you get here?");
        }
    });
}

// //function testArgv(){
//     // const userInputs = process.argv;
//     // console.log(`Check inside userInputs: ${userInputs[0]} \n ${userInputs[1]} \n ${userInputs[2]} \n ${userInputs[3]}`);

//     // var userResponses = [];
//     // for (let i = 2; i > userInputs.length; i++){
//     //     userResponses.push(userInputs[i]);
//     // }

//     // console.log(`Check inside userResponses: ${userResponses}`);


// //}

// Function call to initialize app
init();
console.log("Hello");