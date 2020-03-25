const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

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
    }
  ])
  .then(
    ({
      userName,
      title,
      description,
      installation,
      usage,
      license,
      contributing,
      tests
    }) => {
      const queryUrl = `https://api.github.com/users/${userName}`;
      const buildReadMe = `# ${title};

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
### Installation

${installation}

### Usage

${usage}

### License

${license}

### Contributing

${contributing}

### Tests

${tests}

### Questions

<img src="{profilePic}" alt="avatar" style="border-radius: 16px" width="30" />

  `;

  
      axios
        .get(queryUrl)
        .then(function(response) {
          // var profilePic = response.data.avatar_url
          // // console.log(response.data.avatar_url);
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });

      // console.log(response);
      fs.writeFile("README.md", buildReadMe, err => {
        if (err) {
          return console.log(err);
        }

        console.log("Your README has been created");
      });
    }
  )
  .catch(err => {
    console.log(err);
  });
