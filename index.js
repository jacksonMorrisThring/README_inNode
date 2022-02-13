//.should work once package.json, node modules and packae-lock files are created

const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require( "markdown" ).markdown;


const generateREADME = ({projectName, descr, installation, credits, license}) =>
    `# 📖 ${projectName}

    ## Description

    ${descr}
    
    
    ## Installation

    ${installation}
    
    
    ## Credits

    ${credits}
    
    
    ## License

    ${license}`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            default: 'README-generator'
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
            default: 'jacksonMorrisThring@github.com',
            message: 'Enter any credited developers for this project',
        },


        {
            type: 'input',
            name: 'installation',
            default: 'npm',
            message: 'Write down the installation instructions',

        },

        {
            type: 'list',
            name: 'license',
            message: 'Select the license',
            choices: ['MIT', 'public', 'GNU', 'GPL'],
        },
    ])

    .then((answers) => {
        const READMEpageContent = generateREADME(answers);

        fs.writeFile('README.md', READMEpageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created html')
        );
    });