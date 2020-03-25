const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
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
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
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
  },
])
.then(function(response) {

  console.log(response);
  // fs.appendFile("log.json", JSON.stringify(response, null, 4), function(err) {

  //     if (err) {
  //       return console.log(err);
  //     }
    
  //     console.log("Success!");
    
  //   });
});