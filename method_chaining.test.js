const assert = require('assert')

const { ShoutBackwards } = require('./method_chaining.js')

describe('Testing release 0', () => {
  const word = new ShoutBackwards('Hello World')
  it('should test allcaps() method', () => {
    assert.deepEqual(word.allcaps().words,'HELLO WORLD')
  })
  it('should test allcaps().splitting() method', () => {
    assert.deepEqual(word.allcaps().splitting().words, ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'])
  })
  it('should test allcaps().splitting().reversing() method', () => {
    const word = new ShoutBackwards('hi')
    assert.deepEqual(word.allcaps().splitting().reversing().words, ['I', 'H'])
  })
  it('should test allcaps().splitting().reversing().backwards() method chaining', () => {
    const word = new ShoutBackwards('hi')
    assert.deepEqual(word.allcaps().splitting().reversing().backwards().words, 'IH')
  })
  it('should test allcaps().splitting().reversing().backwards().addsuffix() method chaining', () => {
    const word = new ShoutBackwards('hi')
    assert.deepEqual(word.allcaps().splitting().reversing().backwards().addsuffix().words, 'IH!!!')
  })
})
