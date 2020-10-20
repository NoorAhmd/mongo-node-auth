const assert = require('assert')
const User = require('../src/user')


describe('Deleting the users if exist', () => {
    let user
    beforeEach((done) => {
        user = new User()
        user.name = 'Ahmad'
        user.save().then(() => done())
    })
    it('deleting users', (done) => {
        User.deleteMany({ name: 'Ahmad' }) // deletes all users with name = 'Ahmad'
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
    it('deleting users', (done) => {
        User.deleteOne({ name: 'Ahmad' }) // deletes only one user with name = 'Ahmad'
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
    it('deleting a user if exists', (done) => {
        User.findOneAndDelete({ name: 'Ahmad' })
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then((user) => {
                assert(user === null)
                done()
            })
    })
})
