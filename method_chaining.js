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
    this._word = words;
  }
  allcaps () {
    this._word = this._word.toUpperCase();
    return this
  }
  splitting() {
    this._word = this._word.split('')
    return this
  }
  reversing() {
    this._word = this._word.reverse()
    return this;
  }
  backwards() {
    this._word = this._word.join('');
    return this;
  }
  addsuffix() {
    this._word = this._word+'!!!';
    return this;
  }
  print(){
    console.log(this._word);
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
