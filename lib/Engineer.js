const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name, id, email); // call the super class constructor and pass in the name parameter
      this.gitHub = gitHub;
    }
    getGithub() {
    return this.gitHub
    }
    getRole() {
    return 'Engineer';
    }
}

module.exports = Engineer