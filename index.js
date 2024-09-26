const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
      type: "input",
      name: "userName",
      message: "What is your username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project.",
    },
    {
      type: "list",
      name: "license",
      message: "Which license will the project use?",
      choices: ["MIT", "Apache License 2.0", "GPL 3.0", "BSD3", "No License"],
    },
    {
      type: "input",
      name: "installation",
      message: "What command will install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command will run tests?",
    },
    {
      type: "input",
      name: "contributing",
      message: "List additional contributors to the project.",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.info('data:', data);
  return fs.writeFileSync(path.join(process.cwd(),fileName),data);
  }

  async function init() {
    const answers = await
    inquirer.prompt(questions);
    console.log('Created a readme successfully...');

    writeToFile('TESTREADME.md', generateMarkdown(answers));
  }

  init();