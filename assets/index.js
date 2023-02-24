// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = 
    ["What is your project title?",
    "What is the description of your project?",
    "What is the installation instruction for your project?",
    "Usage information",
    "contribution guidelines",
    "test instructions"
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, ( err) => 
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    console.log("Hello! Your README File should finish by the time you see this message");
    const userInputs = process.argv;
    console.log(`Check inside userInputs: ${userInputs[0]} \n ${userInputs[1]} \n ${userInputs[2]} \n ${userInputs[3]}`);

    var userResponses = [];
    for (let i = 2; i > userInputs.length; i++){
        userResponses.push(userInputs[i]);
        
    }

    console.log(`Check inside userResponses: ${userResponses}`);



}

// Function call to initialize app
init();
