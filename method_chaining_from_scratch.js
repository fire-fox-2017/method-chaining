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
    this.data=input;
    this.SearchName='';
    this.searchFName='';
    this.searchLName='';
    this.searchID='';
    this.searchEmail='';
    this.tampil='';
  }
  titleCaseName (string) {



  }
  findUser (email) {
    for(let i=0;i<this.data.length;i++){

      if(email===this.data[i].email){
      this.searchFName=this.data[i].firstName;
      this.searchLName=this.data[i].lastName;
      this.searchID=this.data[i].id;
      this.searchEmail=this.data[i].email;
      }

    }
    return this;
  }

  formatName () {
    this.SearchName = this.searchFName+' '+this.searchLName;

    return this;
  }
  formatData () {
    this.tampil = 'Hasil : \n Member name: '+ this.SearchName +' \n ID : '+ this.searchID+ '\n Email:'+this.searchEmail;

    return this;
  }
  displayUser () {
    console.log(this.tampil);
  }
}
const program1 = new Program(data);
program1.findUser('spongebob@crustycrab.com').formatName().formatData().displayUser()



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
