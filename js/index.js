//.should work once package.json, node modules and packae-lock files are created

const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require( "markdown" ).markdown;


const generateREADME = ({projectName, descr, installation, usage, credits, license, tests, gmail, github}) =>
    `# 📖 ${projectName} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${descr}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

    
    
## Installation

${installation}

## Usage

${usage}
    
    
## Credits

${credits}
    
    
## License

${license}

## Tests

${tests}

## Questions?

Any additional questions? Reach me at ${gmail}

View my github profile and previous projects at ${github}`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            default: 'README-generator',
            message: 'Enter the name of the project',

        },

        {
            type: 'input',
            name: 'descr',
            message: 'Enter a short description',
        },

        {
            type: 'input',
            name: 'credits',
            default: 'Jackson Morris-Thring',
            message: 'Enter any credited developers for this project',
        },


        {
            type: 'input',
            name: 'installation',
            default: 'npm',
            message: 'Write down the installation instructions',

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Write down the usage',

        },

        {
            type: 'list',
            name: 'license',
            message: 'Select the license',
            choices: ['MIT', 'public', 'GNU', 'GPL'],
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Write down the tests done',

        },

        {
            type: 'input',
            name: 'gmail',
            default: 'jacksonmorristhring2000@gmail.com',
            message: 'Enter your email',

        },

        {
            type: 'input',
            name: 'github',
            default: 'https://github.com/jacksonMorrisThring',
            message: 'Enter your link to your github account',

        },



    ])

    .then((answers) => {
        const READMEpageContent = generateREADME(answers);

        fs.writeFile('README.md', READMEpageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created html')
        );
    });