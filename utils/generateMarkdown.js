function generateMarkdown(answer, profilePic) {

  return `# ${answer.title}

![GitHub license](https://img.shields.io/badge/License-${answer.license}-blueviolet.svg)

${answer.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation

${answer.installation}

## Usage

${answer.usage}

## License

${answer.license}

## Contributing

${answer.contributing}

## Tests

${answer.tests}

## Questions

<img src="${profilePic}" alt="avatar" style="border-radius: 16px" width="30" />

Contact me with questions through my email: ${answer.email}.
`;
}

module.exports = generateMarkdown;
