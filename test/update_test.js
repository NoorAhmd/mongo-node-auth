const assert = require('assert')
const User = require('../src/user')


describe('Deleting Users', () => {
    let user
    beforeEach((done) => {
        user = new User()
        user.name = "Alex"
        user.save()
            .then(() => done())
    })

    it('Delete all users with the name', (done) => {
        User.updateOne({ name: 'Ahmad' })
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then((user) => {
                assert(user.name = "Ahmad")
                done()
            })

    })
})