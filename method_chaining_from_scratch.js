// The data store:
let data = [{
  firstName: 'SpongeBob',
  lastName: 'SquarePants',
  email: 'spongebob@crustycrab.com',
  id: 101
}, {
  firstName: 'Patrick',
  lastName: 'Star',
  email: 'patric.star@gmail.com',
  id: 102
}, {
  firstName: 'Squidward',
  lastName: 'Tentacles',
  email: 'awesomesquidward@yahoo.com',
  id: 103
}]

// Our object with the chainable methods using class in ES6
class Program {
  constructor () {
    this.firstName;
    this.lastName;
    this.name;
    this.email;
    this.id;
    this.userData;
  }
  titleCaseName (string) {
    this.firstName = this.firstName.charAt(0).toUpperCase();
    this.lastName = this.lastName.charAt(0).toUpperCase();
    return this;
  }
  findUser (email) {
    for(let i = 0; i < data.length; i++) {
      if(data[i].email === email) {
        this.firstName = data[i].firstName;
        this.lastName = data[i].lastName;
        this.email = data[i].email;
        this.id = data[i].id;
        return this;
      }
    }
  }
  formatName () {
    this.name = `${this.firstName} ${this.lastName}`;
    return this;
  }
  formatData () {
    this.userData = `Member name: ${this.name}
    ID: ${this.id}
    Email: ${this.email}`;
    return this;
  }
  displayUser () {
    console.log(this.userData);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program()
program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com

module.exports = {
  Program
}
