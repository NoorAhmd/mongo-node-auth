const assert = require('assert')
const User = require('../src/user')


describe('Virtual Type', () => {
    it('PostCount return the number of posts', (done) => {
        const user = new User()
        user.name = 'Ahmad'
        user.posts = [{ title: 'postTitle' }]
        user.save()
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then(user => assert(user.postCount === 1))
        done()
    })
})