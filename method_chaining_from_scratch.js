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
    this.tempData = '';
    this.fullname = '';
    this.viewData = '';
  }

  // titleCaseName (string) {
  //
  // }

  findUser (email) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        this.tempData = (data[i])
        break
      }
    }
    return this
  }

  formatName () {
    this.fullname = `${this.tempData.firstName} ${this.tempData.lastName}`;
    return this
  }

  formatData () {
    this.viewData = `Member name: ${this.fullname} \nID: ${this.tempData.id} \nEmail: ${this.tempData.email}`;
    return this
  }

  displayUser () {
    console.log(`${this.viewData}`);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program(data)
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
