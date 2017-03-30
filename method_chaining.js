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
    this._words = words;
  }
  allcaps () {
    this._words = this._words.toUpperCase();
    return this;
  }
  splitting() {
    this._words = this._words.split('');
    return this;
  }
  reversing() {
    this._words = this._words.reverse();
    return this;
  }
  backwards() {
    this._words = this._words.join('');
    return this;
  }
  addsuffix() {
    this._words = this._words + "!!!";
    return this;
  }
  print() {
    console.log(this._words);
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
