// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type in a brief description of the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Download at www.hi.com and run install!',
    },
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
];

// TODO: Create a function to write README file // research this 
function writeToFile(fileName, data) {
    // call generateMarkdown
    fs.writeFile(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile
    })
}

// Function call to initialize app
init();
