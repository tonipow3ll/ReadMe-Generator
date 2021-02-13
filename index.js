const inquirer = require('inquirer');
const fs = require('fs');

const createReadMe = (answers) => 
`# ${answers.title} 
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
### Clone repository to your local device
### Test by opening the index.html file in your browser. If it looks good, it's working right.
### If it does not work, right-click Inspect console to determine if there is an error. 

# Technologies
### ${answers.technologies}

# Testing
### ${answers.testing}

# Usage
### This application was created by ${answers.contributors}. Feel free to reach out via [email](#email) or open up a GitHub issue, or pull request if there is something you would like to add. 

# Credits
### ${answers.credits}

# Contributors
### ${answers.contributors}


# Contact:
### [LinkedIn](${answers.linkedin})
### [Email](${answers.email})
### [GitHub](${answers.github}.github.io)

# Licenses
### Copyright (c) ${answers.year} ${answers.contributors}
### ${answers.license}
`

// function renderLicenseBadge(license) {
//     switch (license)
//     {
//         case Apache:
//     
//             break;

//     }
    
// }

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is this application called?'
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
            message: 'enter a description of the application'
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
            message: 'what is the current year, or year this was created?'
        },
        {
            type: 'list',
            message: 'please choose a license for this project',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause "Simplified LIcense', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Create Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU Affero GEneral Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public LIcense v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
    ])
    .then((answers) => {
        const readme = createReadMe(answers);

        fs.writeFile('README.md', readme, (err) =>
        err ? console.log(err) : console.log('"It always seems impossible until its done...." README.md created! nice job.'))
    })


   