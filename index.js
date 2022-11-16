const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: `What's the title of the project?`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Please describe the purpose of the project.`,
    },
    {
        type: 'input',
        name: 'Installation',
        message: `List any npm packages or requirements needed for the repository.`,
    },
    {
        type: 'input',
        name: 'usage',
        message: `Explain how to use the application and its intended purposes.`,
    },
    {
        type: 'input',
        name: 'contribution',
        message: `List ways to contribute to the repository.`,
    },
    {
        type: 'input',
        name: 'testing',
        message: `How would you test the program?`,
    },
    {
        type: 'list',
        name: 'license',
        choices: ["APACHE", "MIT", "BSD", "NONE"],
    },
    {
        type: 'input',
        name: 'github_User',
        message: `Enter your github username.`,
    },
    {
        type: 'input',
        name: 'githubRepo',
        message: `Enter the link to your github repositoy.`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter a professional email for contact purposes.`,
    },      
  ])
  .then(function (answers) {
    const readMeFileContent = newMarkdown(answers);

    fs.writeFile("README.md", readMeFileContent, (err) => 
        err ? console.log(err) : console.log("Successfully created a markdown file!")
    );
  });

/*
   This is the website for the badges https://shields.io/
   At the bottom of the website you can create a unique badge. 
   All links to the badges follow this url https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
   In this function, the Label and color remain the same.
   The only thing that changes is the Message.
   Message being the type of license the user picks.    
*/

function licenseBadge(license) {
    if (license !== "none") {
        return `![badge](https://img.shields.io/badge/License-${license}-green)`
    } else {
        return '';
    }
};

const newMarkdown = ({ title, description, Installation, usage, contribution, testing, license, github_User, githubRepo, email }) =>
`
${licenseBadge(license)}
# **${title}**

## Description
${description}

## Table of contents

[Installation](#installation)<br/>
[Usage](#usage)<br/>
[Contributing](#contributing)<br/>
[Testing](#testing)<br/>
[License](#license)<br/>
[Questions](#questions)<br/>
    
## [Installation](#table-of-contents)
${Installation}

---    
## [Usage](#table-of-contents)
${usage}

---
## [Contributing](#table-of-contents)
${contribution}

---
## [Testing](#table-of-contents)
${testing}

---
## [Questions](#table-of-contents) 
This project was create by [${github_User}](${githubRepo}).<br/>
Please refer any questions to this email ${email}
`;
