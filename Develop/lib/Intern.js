// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        this.role = "Intern"
    };

    getRole(){
        if (!this.role){
            return "Intern"
        };
    };
    getName(){
        return name
    };
    
    getRole(){
        return "Intern";
    };

    getEmail(){
        return email
    };
    
    getId(){
        return id
    };

    getSchool(){
        return this.school        
    };

}

module.exports= Intern