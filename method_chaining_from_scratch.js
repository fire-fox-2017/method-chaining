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
  constructor(data){
    this.data = data
    this.userFound= null
    this.userFullname = ''
    this.userFormatData = ''
  }
  //
  // titleCaseName (string) {
  //   // ...
  // }

  findUser(emailUser){
    for (var i = 0; i < data.length; i++) {
      if (data[i].email == emailUser) {
        this.userFound = data[i]
      }
    }
    return this
  }

  formatName(){
    this.userFullname += this.userFound.firstName + ' ' + this.userFound.lastName
    return this
  }

  formatData(){
    this.userFormatData += 'Member name :' + this.userFullname
    return this
  }

  displayUser(){
    console.log( this.userFormatData)
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
