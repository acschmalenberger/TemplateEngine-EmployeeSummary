// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
        this.role = "Engineer"
    }
    getRole(){
        if (!this.role){
            return "Engineer"
        };    
    };
    getName(){
        return name
    };
    
    getRole(){
        return "Engineer";
    };

    getEmail(){
        return email
    };
    
    getId(){
        return id
    };
    getGithub(){
        return this.github     
    };
}
module.exports = Engineer