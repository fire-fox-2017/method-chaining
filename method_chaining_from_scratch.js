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
    this._daftar = data;
    this._index = 0;
    this._fullName = [];
    this._display = [];

  }
  titleCaseName (string) {
  }
  findUser (email) {
    //mencari user dengan email yg ditentukan
    for(let i = 0; i < this._daftar.length; i++) {
      if(this._daftar[i].email == email){
        this._index = i;
        break;
      }
    }
    return this;
  }
  formatName () {
    //menggabungkan nama depan dan belakang
    this._fullName = `${this._daftar[this._index].firstName} ${this._daftar[this._index].lastName}`
    return this;
  }
  formatData () {
    //menggabungkan string data nama member, id, dan email
    this._display.push(`Member name: ${this._fullName}`)
    this._display.push(`ID: ${this._daftar[this._index].id}`)
    this._display.push(`Email: ${this._daftar[this._index].email}`)
    return this;
  }
  displayUser () {
    //menampilkan data yg sudah diformat
    for (let i = 0; i < this._daftar.length; i++){
      console.log(this._display[i]);
    }
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya
const program = new Program(data)
// program
//   .findUser('spongebob@crustycrab.com')
//   .formatName()
//   .formatData()
//   .displayUser()

// Hasil:
// Member name: SpongeBob SquarePants
// ID: 101
// Email: spongebob@crustycrab.com

program.findUser('patric.star@gmail.com').formatName().formatData().displayUser();

module.exports = {
  Program
}
