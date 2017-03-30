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
    this.currentUser="";
  }
  titleCaseName (string) {
    return string.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  findUser (email) {
    for (let i=0; i<data.length; i++){
      if (data[i].email===email){
        this.currentUser=data[i];
        break;
      }
    };
    return this
  }
  formatName () {
    this.currentUser.fullName = this.titleCaseName(this.currentUser.firstName) + " " + this.titleCaseName(this.currentUser.lastName);
    return this;
  }
  formatData () {
    this.currentUser.viewData = ["Member: " + this.currentUser.fullName, "ID: " + this.currentUser.id, "Email: " + this.currentUser.email];
    return this;
  }
  displayUser () {
   for(let i=0;i<this.currentUser.viewData.length;i++){
     console.log(this.currentUser.viewData[i]);
   }
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

module.exports = {
  Program
}
