const assert = require('assert')
const User = require('../src/user')

describe('Creating records', () => {
    it('it saves a user', (done) => {
        const user = new User({ name: 'Ahmad' })
        user.save()
            .then(() => {
                assert(!user.isNew)  // Check if this user has been saved in DB
                done()
            })
    })
})