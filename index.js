const inquirer = require('inquirer');
const fs = require('fs');
const { getShape }=require('./lib/shapes');

const questions = [
    {
        name: 'logoText',
        message: 'three characters',

    },
    {
        name: 'textColor',
        message: 'What color would you like for your text?',
    },
    {
        name: 'shapeColor',
        message: 'What color would you like your shape to be?'
    },
    {
        name:'shape',
        type: 'list',
        choices: ['Triangle', 'Circle', 'Square'],
        message:'What shape would you like to do?'
        ,
    },


]
inquirer.prompt(questions).then(answers=> {
    const svg=`<svg width="100%" height="100%" viewBox="0 0 300 200" version="1.0.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
    ${getShape(`${answers.shape}`, `${answers.shapeColor}`)}
    <text x="70" y="100" fill="${answers.textColor}" font-size="30px" font-family= "Arial, Helvetica, sans-serif"> ${answers.logoText}</text>
  </svg>`; 
  fs.writeFileSync('logo.svg',svg);
})

