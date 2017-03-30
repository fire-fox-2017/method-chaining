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
    this._data = data;
    this.currentUser = null;
    this.formattedData = "";
  }

  titleCaseName (string) {
  }

  findUser (email) {
    for (let i = 0 ; i < this._data.length ; i++) {
      // console.log(this._data[i]['email'])
      if(this._data[i]['email'] == email) {
        this.currentUser = this._data[i];
        return this;
      }

    }
  }
  formatName () {
    this.currentUser['fullName'] = this.currentUser.firstName + ' ' + this.currentUser.lastName;
    return this;
  }
  formatData () {
    this.formattedData = `Member name: ${this.currentUser['fullName']}\nID:${this.currentUser['id']}\nEmail: ${this.currentUser['email']}`;
    return this;
  }
  displayUser () {
    console.log(this.formattedData);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program()
// program
//   .findUser('spongebob@crustycrab.com')
//   .formatName()
//   .formatData()
//   .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com

// console.log(program.findUser('spongebob@crustycrab.com'))

program.findUser('spongebob@crustycrab.com').formatName().formatData().displayUser()

module.exports = {
  Program
}
