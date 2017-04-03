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
    this.dat = input ;
    this.cari_nama = "" ;
    this.cari_nama_depan = ""  ;
    this.cari_nama_belakang = "";
    this.cari_ID = "" ;
    this.cari_email = "";
    this.format_data = "";
  }
  titleCaseName (string) {
  }
  findUser (email) {
    for (let i = 0; i < this.dat.length ; i++){
      if (email == this.dat[i].email){
        this.cari_nama_depan = this.dat[i].firstName;
        this.cari_nama_belakang = this.dat[i].lastName;
        this.cari_ID = this.dat[i].id;
        this.cari_email = this.dat[i].email;
      }
    }
    return this;
  }
  formatName () {
    this.cari_nama = this.cari_nama_depan + " " + this.cari_nama_belakang;
    return this;
  }
  formatData () {
    this.format_data = `Hasil \n Member Name : ${this.cari_nama} \n ID : ${this.cari_ID} \n Email : ${this.cari_email}`;
    return this;
  }
  displayUser () {
    console.log(this.format_data);
  }
}

const test = new Program(data);
test.findUser('spongebob@crustycrab.com').formatName().formatData().displayUser()

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
