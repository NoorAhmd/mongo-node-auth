const assert = require('assert')
const User = require('../src/user')

describe('Subdocument', () => {
    it('It can create a subdocumnet', (done) => {
        const user = new User()
        user.name = 'Ahmad'
        user.posts = [{ title: 'First post' }]
        user.save()
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then((user) => assert(user.posts[0].title === 'First post'))
        done()
    })
    xit('It can add more subdocuments in an existing user', (done) => {
        const user = new User()
        user.name = 'Ahmad'
        user.posts = []

        user.save()
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then(user => {
                user.posts.push({ title: 'Second post' })
                return user.save()
            })
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then(user => assert(user.posts[0].title === "Second post"))
        done()
    })
    it('Can remove an existing subdocument', (done) => {
        const user = new User()
        user.name = 'Ahmad'
        user.posts = [{ title: 'new Post' }]


        user.save()
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then(user => {
                user.posts[0].remove()
                return user.save()
            })
            .then(() => User.findOne({ name: 'Ahmad' }))
            .then(user => console.log(user))
        done()
    })


})