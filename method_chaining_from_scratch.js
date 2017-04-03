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
    this._temp = '';
    this._fullname = '';
    this._view = '';
  }

  // titleCaseName (string) {
  //
  // }

  findUser (email) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        this._temp = (data[i]);
        break;
      }
    }
    return this
  }

  formatName () {
    this._fullname = `${this._temp.firstName} ${this._temp.lastName}`;
    return this
  }

  formatData () {
    this._view = `Member name: ${this._fullname} \nID: ${this._temp.id} \nEmail: ${this._temp.email}`;
    return this
  }

  displayUser () {
    console.log(`${this._view}`);
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
