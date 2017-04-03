
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
  constructor (data) {
    this.data = data
    this.firstName = ''
    this.lastName = ''
    this.name = ''
    this.email = ''
    this.id = ''
    this.hasil = ''
  }
  titleCaseName (string) {
  }
  findUser (email) {
    for(let i=0; i<this.data.length; i++){
      if(email == this.data[i].email){
        this.firstName = this.data[i].firstName
        this.lastName = this.data[i].lastName
        this.email = email
        this.id = this.data[i].id
      }
    }
    return this
  }
  formatName () {
    this.name = `${this.firstName} ${this.lastName}`
    return this
  }
  formatData () {
    this.hasil = `Hasil:\nMember name: ${this.name}\nId: ${this.id}\nEmail: ${this.email}`
    return this
  }
  displayUser () {
    console.log(this.hasil);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program(data)
// console.log(program.findUser('spongebob@crustycrab.com'));
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
