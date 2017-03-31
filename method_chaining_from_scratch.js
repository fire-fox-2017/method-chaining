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

// console.log(data[0].email);

// Our object with the chainable methods using class in ES6
class Program {
  constructor () {
    this.data = data;
    this.firstName = "";
    this.lastName = "";
    this.fullName = "";
    this.email = "";
    this.id = 0;
    this.userData = "";
  }

  titleCaseName (string) {
  }

  findUser (email) {
    let found = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].email === email) {
        found += 1;
        this.firstName = this.data[i].firstName;
        this.lastName = this.data[i].lastName;
        this.email = email;
        this.id = this.data[i].id;
      }
    }
    if (found > 0) {
      return this;
    } else {
      console.log("email is not found.");
    }
  }

  formatName () {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this;
  }

  formatData () {
    this.userData = `Member name: ${this.fullName}\nID: ${this.id}\nEmail: ${this.email} `;
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
