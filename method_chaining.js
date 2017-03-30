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
  }
  allcaps () {
    return allcaps;
  }
  splitting() {
    return splitting;
  }
  reversing() {
    return reversing;
  }
  backwards() {
    return backwards;
  }
  addsuffix() {
    return backwards + "!!!";
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
