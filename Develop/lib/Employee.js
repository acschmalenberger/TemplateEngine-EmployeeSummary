// TODO: Write code to define and export the Employee class
class Employee{
    constructor (name, id, email, role){
        this.name = name;
        this.role = role;
        this.email= email;
        this.id = id
    }

    getName(){
        return this.name
    };

    getId(){
        return this.id
    };

    getEmail(){
        return this.email
    };

    getRole(){
        if (!this.role){
            return "Employee"
        };
        return this.role
        
    }
    
}

module.exports = Employee 


