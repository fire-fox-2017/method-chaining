var shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

// console.log(shout_backwards('Hello World'))

class ShoutBackwards {
  // your code here
  constructor(words) {
    this.words = words;
  }
  allcaps () {
    this.words = this.words.toUpperCase()
    return this;
  }
  splitting() {
    this.words = this.words.split('')
    return this;
  }
  reversing() {
    this.words.reverse()
    return this;
  }
  backwards() {
    this.words = this.words.join('')
    return this;
  }
  addsuffix() {
    this.words += "!";
    return this;
  }
  print() {
    return this.words
  }
}

// -----------------------------------------------------------------------------
// Kode di bawah ini merupakan driver code, jangan diubah ya

var word = new ShoutBackwards('Hello World')
console.log(word.allcaps().splitting().reversing().backwards().addsuffix().print())
// console.log(word.allcaps().toString())
// Alternatif penulisan:
// word.allcaps().splitting().reversing().backwards().addsuffix().print()

module.exports = {
  ShoutBackwards
}
