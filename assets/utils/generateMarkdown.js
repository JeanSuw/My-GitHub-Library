// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'No license'){
    return ' '; // If there is no license, return an empty string
  }else if (license.includes("-")){
    var newStr = license;
    newStr = newStr.replace("-", "--");
    return `
![licenseBadge](https://img.shields.io/badge/license-${newStr}-blue)
    `;
  }else{
    return `
![licenseBadge](https://img.shields.io/badge/license-${license}-green)
    `;
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
  if (license === 'No license'){
    return ''; // If there is no license, return an empty string
  }else{
    //'agpl-3.0','gpl-3.0' ,'lgpl-3.0','apache-2.0', 'mit', 'mpl-2.0'
    var longText = 'This is project is licened under the';
    switch (license){
      case 'agpl-3.0':
        return `
  ${longText} GNU Affero General Public License v3.0`;
      case 'gpl-3.0':
        return `
  ${longText} GNU General Public License v3.0`;
      case 'lgpl-3.0':
        return `
  ${longText} GNU Lesser General Public License v3.0`;
      case 'apache-2.0':
        return `
  ${longText} Apache License 2.0`;
      case 'mit':
        return `
  ${longText} MIT License`;
      case 'mpl-2.0':
        return `
  ${longText} Mozilla Public License 2.0`;
    }
  }
}

// A function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'No license'){
    return ' '; // If there is no license, return an empty string
  }else{
    return `## License
${renderLicenseLink(license)}`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  if (data.license !== 'No license'){
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
      
## Installation
${data.installation}
      
## Usage
${data.usage}
      
## Contribution
${data.contribution}

## Test
${data.test}
      
${renderLicenseSection(data.license)}

## Questions
If you have any questions, please contact me by using the following links:
* GitHub: [${data.github}](${data.github})
* Email: [${data.email}](${data.email})
`;
  }else{
    return `# ${data.title}
## Description
${data.description}

## Table of content
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)
      
## Installation
${data.installation}
      
## Usage
${data.usage}
      
## Contribution
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions, please contact me by using the following links:
* GitHub: [${data.github}](${data.github})
* Email: [${data.email}](${data.email})
`;
  }
  
}

module.exports = generateMarkdown;
