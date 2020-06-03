const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = [];

inquirer
    .prompt([
        {
            type: "input",
            message: "What is this employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is this employee's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is this employee's email?",
            name: "email"
        },
        {
            type: "list",
            message: "What is this employee's role?",
            name: "role",
            choices:["Manager", "Engineer","Intern"],
        },
    ])
    

    .then(answers=>{ 

        if (answers.role === "Manager"){
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is this employee's office number?",
                        name: "officeNumber",
                    },
                ])
                .then(answer =>{
                    const manager = new Manager (answers.name, answers.id, answers.email, answer.officeNumber, answer.role)
                    employeeArr.push(manager);
                    console.log(employeeArr);
                    //then loop to questions again if user wants to add more employees
                })
                
        } else if (answers.role === "Engineer"){
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is this employee's github id?",
                        name: "gitHubUser",
                    },
                ])
                .then(answer =>{
                    const engineer = new Engineer (answers.name, answers.id, answers.email, answer.gitHubUser, answer.role);
                    employeeArr.push(engineer)
                    console.log(employeeArr);
                }) 
        } else {  
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What college does this employee go to?",
                        name: "school",
                    },
                ])
                .then(answer =>{
                    const intern = new Intern (answers.name, answers.id, answers.email, answer.school, answer.role);
                    employeeArr.push(intern)
                    console.log(employeeArr);
                }) 
        }       
    
    }) 

    const createHtml = render(employeeArr)
    fs.writeFile(outputPath, createHtml, function(err) {
        if (err) {
            return console.log(err);
        }
    })      

    // })

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


