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
  constructor (list) {
    this.list=list;
    this.index=0;
    this.Fname="";
  }
  titleCaseName (string) {
  }
  findUser (email) {
    for (let i= 0; i < this.list.length; i++) {
      if(email === this.list[i].email){
        this.index = i;
      }
    }
  }
  formatName () {
    this.Fname=`${this.list[this.index].firstName} ${this.list[this.index].lastName}`;
  }
  formatData () {
    return `Hasil :\nMember Name : ${this.Fname}\nID : ${this.list[this.index].id}\nEmail : ${this.list[this.index].email}`;
  }
  displayUser () {
    console.log (this.formatData());
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program(data)
program.findUser('spongebob@crustycrab.com')
  program.formatName()
  program.formatData()
  program.displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com

module.exports = {
  Program
}
