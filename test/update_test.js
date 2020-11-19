const assert = require('assert')
const User = require('../src/user')


describe('Deleting Users', () => {
    let user
    beforeEach((done) => {
        user = new User()
        user.name = "Alex"
        user.postCount = 0
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
    it("User's postCount incremented by 1", (done) => {
        User.updateOne({ name: 'Alex' }, { $inc: { likes: 1 } })
            .then(() => User.findOne({ name: 'Alex' }))
            .then((user) => {
                assert(user.likes === 1)
                done()
            })
    })
})