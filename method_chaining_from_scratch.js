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
    this.data;
    this.firstName;
    this.lastName;
    this.email;
    this.id;
    this.fullName;
    this.print;
  }
  titleCaseName (string) {
    this.firstName=this.firstName.charAt(0).toUpperCase();
    this.lastName=this.lastName.charAt(0).toUpperCase();
    return this;
  }
  findUser (email) {
    for (let i=0; i<data.length; i++){
      if(data[i].email === email){
        this.firstName=data[i].firstName;
        this.lastName=data[i].lastName;
        this.email=data[i].email;
        this.id=data[i].id;
        return this;
      }
    }
  }
  formatName () {
    this.fullName=`${this.firstName} ${this.lastName}`;
    return this;
  }
  formatData () {
    this.print =
    ` Member Name : ${this.fullName}\n ID : ${this.id}\n Email : ${this.email}`;
    return this;
  }
  displayUser () {
    console.log(this.print);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program()
// program
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
