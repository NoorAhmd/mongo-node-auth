const assert = require('assert')
const User = require('../src/user')


describe('Reading the existing users from DB', () => {
    let user
    beforeEach((done) => {
        user = new User()  //Instance of User
        user.name = 'Ahmad'
        user.save()
            .then(() => done())
    })
    it('finds all users with the name of Ahmad', (done) => {
        User.find({ name: 'Ahmad' })
            .then((users) => {
                assert(users[0]._id.toString() === user._id.toString())
                done()
            })

    })
    it('finds a particular user with a given id', (done) => {
        User.findOne({ _id: user._id })
            .then(() => {
                assert(user.name === 'Ahmad')
                done()
            })
    })
})