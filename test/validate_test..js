const assert = require('assert')
const User = require('../src/user')


describe('Validating records', () => {
    it('requires a user name', () => {
        const user = new User()
        user.name = undefined
        // user.validate()
        //     .then(result => console.log(result))
        //     .catch(error => console.log(error))

        // user.validate(result => {
        //     console.log(result.errors.name.message);

        // })
        const validatationResult = user.validateSync()
        const { message } = validatationResult.errors.name
        assert(message === 'user name is required!')

    })
    it('Validating the user\'s name length', () => {
        const user = new User()
        user.name = 'A'
        const validatationResult = user.validateSync()
        const { message } = validatationResult.errors.name
        assert(message === 'Name must be longer than 2 characters')

    })
})