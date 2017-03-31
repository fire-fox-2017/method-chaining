var shout_backwards = (data) => {
  let allcaps = data.toUpperCase()
  let splitting = allcaps.split('')
  let reversing = splitting.reverse()
  let backwards = reversing.join('')
  return backwards + '!!!'
}

console.log(shout_backwards('Hello World'))


class ShoutBackwards {
  constructor(string) {
    this.string = string
  }

  allcaps(){
    this.string = this.string.toUpperCase()
    return this
  }

  splitting(){
    this.string = this.string.split('')
    return this
  }

  reversing(){
    this.string = this.string.reverse()
    return this
  }

  backwards(){
    this.string = this.string.join('')
    return this
  }

  addsuffix(){
    this.string += '!!!'
    return this
  }

  print(){
    console.log( this.string)
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
