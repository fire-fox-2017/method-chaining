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
  constructor (input) {
    this._data = input;
    this._firstN = "";
    this._lastN = "";
    this._email = "";
    this._id = "";
    this._display = "";
  }


  findUser (email) {
    for (let i = 0; i < data.length; i++){
      if (email === this._data[i].email){
        this._firstN = data[i].firstName;
        this._lastN = data[i].lastName;
        this._email = data[i].email;
        this._id = data[i].id;
      }
      return this;
    }
  }

  formatName () {
    this._firstN + " " + this._lastN;
    return this;
  }

  formatData () {
  this._display = "Name: " + this._firstN + " " + this._lastN + ", " + "Email: " + this._email +
  ", " + "ID: " + this._id;
  return this;
  }

  displayUser () {
    console.log(this._display);
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
