const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "userName"
  },
  {
    type: "input",
    message: "What is your project title",
    name: "title"
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What installation information is needed to run your program?",
    name: "installation"
  },
  {
    type: "input",
    message: "What usage information is needed to run your program?",
    name: "usage"
  },
  {
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
  },
  {
    type: "input",
    message: "What or who has contributed to your project?",
    name: "contributing"
  },
  {
    type: "input",
    message: "What tests have you run on this program?",
    name: "tests"
  }
];

function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then(answer => {
    console.log(answer);
    const queryUrl = `https://api.github.com/users/${answer.userName}`;
    axios
      .get(queryUrl)
      .then(function(response) {
        console.log('?????????????', response.data.avatar_url)
        const userInput = generateMarkdown(answer, response.data.avatar_url);
        fs.writeFile("created-README.md", userInput, err => {
          if (err) {
            return console.log(err);
          }
    
          console.log("Your README has been created");
        });
      })
      .catch(err => {
        console.log(err);
        return err
      });
  });
}

init();
