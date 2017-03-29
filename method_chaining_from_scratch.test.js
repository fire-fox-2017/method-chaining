const assert = require('assert')

const { Program } = require('./method_chaining_from_scratch.js')

describe('Testing release 1', () => {
  const program = new Program()
  const user = program.findUser('spongebob@crustycrab.com')
  it('should test titleCaseName() method', () => {
    assert.deepEqual(program.titleCaseName('riza fahmi'), 'Riza Fahmi')
  })
  it('should find user by email', () => {
    assert.deepEqual(user.currentUser, {
      firstName: 'SpongeBob',
      lastName: 'SquarePants',
      email: 'spongebob@crustycrab.com',
      id: 101
    })
  })
  it('should chains findUser and formatName', () => {
    assert.deepEqual(user.formatName().currentUser.fullName, 'SpongeBob SquarePants')
  })
  it('should chains formatData', () => {
    console.log(user.formatName())
    assert.deepEqual(user.formatName().formatData().currentUser.viewData, `Member name: SpongeBob SquarePants\nID: 101\nEmail: spongebob@crustycrab.com`)
  })
})
