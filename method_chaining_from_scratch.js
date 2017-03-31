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
  constructor() {
    this._firstName;
    this._lastName;
    this._fullName;
    this._id;
    this._email;
    this._data;
  }

  findUser(email) {
    for(let i=0;i<data.length;i++){
       if(data[i].email == email){
        this._firstName = data[i].firstName;
        this._lastName = data[i].lastName;
        this._id = data[i].id;
        this._email = data[i].email;
       }
    }
    return this;
  }

  formatName() {
    this._fullName = `${this._firstName} ${this._lastName}`;
    return this;
  }

  formatData() {
    this._data = `Hasil : \nMember Name : ${this._fullName} \nID : ${this._id} \nEmail : ${this._email}`
    return this;
  }

  displayUser () {
    console.log(`${this._data}`)
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program()

program
  .findUser('spongebob@crustycrab.com')
  .formatName()
  .formatData()
  .displayUser();

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com

module.exports = {
  Program
}
