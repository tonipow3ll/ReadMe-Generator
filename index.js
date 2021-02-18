const inquirer = require('inquirer');
const fs = require('fs');

const createReadMe = (answers) => 
`# ${answers.title} 
### ![License](${licenseBadge})
### ${answers.description}
# ![ScreenShot](${answers.link})
# [View the Deployed Application Here](${answers.deployed})

# Table of Contents
### [Installation](#Installation)
### [Technologies](#Technologies)
### [Testing](#Testing)
### [Contributors](#Contributors)
### [Contact](#Contact)
### [Licenses](#Licenses)


# Installation 
### ${install}

# Technologies
### ${answers.technologies}

# Testing
### ${answers.testing}

# Usage
### This application was created by ${answers.contributors}. Feel free to reach out via [email](${answers.email}) or open up a GitHub issue, or pull request if there is something you would like to add. 

# Credits
### ${answers.credits}

# Contributors
### ${answers.contributors}


# Contact/ General Questions:
### [LinkedIn](${answers.linkedin})
### [Email](${answers.email})
### [GitHub](${answers.github}.github.io)

# Licenses
### Copyright (c) ${answers.year} ${answers.contributors}
### [${answers.license}](${license})
### [Licensing Information](${license})

`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter this applications name or title',
            validate: function (title){
                if (title === null || title === ""){
                    return "Application title cannot be left blank";
                } 
                return true; 
            }
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'enter link to the deployed application'
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter link to a screenshot of the application'
        },
        {
            type: 'input',
            name: 'description',
            message: 'enter a description of the application',
            validate: function (description){
                if (description === null || description === ""){
                    return "Description cannot be left blank";
                } 
                return true; 
            }
        },
        {
            type: 'list',
            name: 'install',
            message: 'if this is a command line application - please choose command line, if this is a web based application - please choose web based',
            choices: ['Command Line Application', 'Web Based Application']
        },
        {
            type: 'input',
            name: 'technologies',
            message: 'list any technologies or frameworks you have used'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'list contributors (if any) that may have helped with this applications development. If none - please enter your name. '
        },
        {
            type: 'input',
            name: 'testing',
            message: 'any special notes on testing you would like to add? If not, hit enter to leave blank. '
        },
        {
            type: 'input',
            name: 'credits',
            message: 'please list any additonal credits here '
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'enter your LinkedIn URL'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github user name'
        },
        {
            type: 'input',
            name: 'year',
            message: 'what is the current year, or year this was created?',
            validate: function (year){
                // /\d{4}$/ <= regex for the same function below 
                if (year <= 1900 || isNaN(year)){
                    return "Please enter a valid year, input accepts numbers only";
                } 
                return true; 
            }
        },
        {
            type: 'list',
            message: 'please choose a license for this project',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New / Revised License', 'Boost Software License 1.0', 'Create Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public LIcense v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
    ])   .then((answers) => {
    switch (`${answers.install}`) {
        case 'Command Line Application':
            install = "Clone repository to your local device, run `npm install` to install any dependencies. To use the application, run `node index.js` in your local machine's terminal."
            break;
        case 'Web Based Application':
            install = " Clone repository to your local device. Test by opening the index.html file in your browser. If it looks good, it's working right. "
            break;

            default: "no installation information available"
        }
          // SWITCH CASE FOR LICENSE BADGE
    switch (`${answers.license}`) {
        case 'Apache License 2.0':
            licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-green.svg"
            break;
        case 'GNU General Public License':
            licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
        case "MIT License": 
            licenseBadge = "https://img.shields.io/badge/License-MIT-brightgreen.svg"
            break;
        case "BSD 2-Clause Simplified License":
            licenseBadge = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg"
            break;
        case "BSD 3-Clause New / Revised License":
            licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
            break;
        case "Boost Software License 1.0":
            licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
            break;
        case "Create Commons Zero v1.0 Universal":
            licenseBadge = "https://licensebuttons.net/l/zero/1.0/80x15.png"
            break;
        case "Eclipse Public License":
            licenseBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg"
            break;
        case "GNU Affero General Public License v3.0":
            licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
            break;
        case "GNU General Public License v2.0":
            licenseBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
            break;
        case "GNU Lesser General Public LIcense v2.1":
            licenseBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
            break;
        case "Mozilla Public License 2.0":
            licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
            break;
        case "The Unlicense":
            licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
            break;

            default: "no license badge available"
    }

    // SWITCH CASE FOR LICENSE LINK 
    switch (`${answers.license}`) {
        case 'Apache License 2.0':
            license = "https://opensource.org/licenses/Apache-2.0"
            break;
        case 'GNU General Public License':
            license = "https://www.gnu.org/licenses/gpl-3.0"
        case "MIT License": 
            license = "https://opensource.org/licenses/MIT"
            break;
        case "BSD 2-Clause Simplified License":
            license = "https://opensource.org/licenses/BSD-2-Clause"
            break;
        case "BSD 3-Clause New / Revised License":
            license = "https://opensource.org/licenses/BSD-3-Clause"
            break;
        case "Boost Software License 1.0":
            license = "https://www.boost.org/LICENSE_1_0.txt"
            break;
        case "Create Commons Zero v1.0 Universal":
            license = "http://creativecommons.org/publicdomain/zero/1.0/"
            break;
        case "Eclipse Public License":
            license = "https://opensource.org/licenses/EPL-1.0"
            break;
        case "GNU Affero General Public License v3.0":
            license = "https://www.gnu.org/licenses/lgpl-3.0"
            break;
        case "GNU General Public License v2.0":
            license = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
            break;
        case "GNU Lesser General Public LIcense v2.1":
            license = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
            break;
        case "Mozilla Public License 2.0":
            license = "https://opensource.org/licenses/MPL-2.0"
            break;
        case "The Unlicense":
            license = "http://unlicense.org/"
            break;

            default: "no license information available"
    }

    
        const readme = createReadMe(answers);

        fs.writeFile('README.md', readme, (err) =>
        err ? console.log(err, "Something went wrong, please try again") : console.log('"It always seems impossible until its done...." README.md created! nice job.'))
    })


 

   