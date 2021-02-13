const inquirer = require('inquirer');
const fs = require('fs');

const createReadme = (answers) => 
`# ${answers.title} 
# [View the Deployed Application Here](${answers.deployed})
# [ScreenShot](${answers.link})
### ${answers.description}
### ${answers.technologies}

#Installation
Clone repository to your local device
Test by opening the index.html file in your browser. If it looks good, it's working right.
If it does not work, right-click Inspect console to determine if there is an error. 

#Credits
### UNH Full Stack Development Bootcamp

#Contributors
### ${answers.contributors}


#Further Questions / Contact:
###[LinkedIn](${answers.linkedin})
###[Email](${answers.email})
###[GitHub](${answers.github}.github.io)

#Licenses
### Copyright (c) [${answers.year}] [${answers.name}]
`

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

    ])