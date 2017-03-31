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
    this.newWord = words;
  }
  allcaps () {
    this.newWord = this.newWord.toUpperCase();
    return this
  }
  splitting() {
    this.newWord = this.newWord.split('')
    return this
  }
  reversing() {
    this.newWord = this.newWord.reverse()
    return this;
  }
  backwards() {
    this.newWord = this.newWord.join('');
    return this;
  }
  addsuffix() {
    this.newWord = this.newWord+'!!!';
    return this;
  }
  print(){
    console.log(this.newWord);
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
