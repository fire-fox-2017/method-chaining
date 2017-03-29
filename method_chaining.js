var shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))

class ShoutBackwards {
  // your code here
  constructor(words) {
    this.name=words;
  }
  allcaps () {
    this.name = this.name.toUpperCase();
    return this;
  }
  splitting() {
    this.name = this.name.split("");

    return this;
  }
  reversing() {
    this.name = this.name.reverse();
    return this;

  }
  backwards() {
    this.name = this.name.join("");

    return this;
  }
  addsuffix() {
    this.name = this.name+'!!!';
    return this;
  }
  print() {
    console.log(this.name);
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya

var word = new ShoutBackwards('Hello World')
word.allcaps().splitting().reversing().backwards().addsuffix().print()

// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()

module.exports = {
  ShoutBackwards
}
