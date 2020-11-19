const mongoose = require('mongoose')

const url = 'mongodb://localhost/local' // Change this with the MongoDb server you wish to connect with.

before((done) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            return err
        }
        console.log('connected to DB');
        done()
    })
})

beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections
    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done()
            })
        })
    })
})

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('connected!'))
//     .catch(error => console.log(error))

// mongoose.connection
//     .on('error', (error) => {
//         console.warn(error);
//     })
//     .once('open', () => {
//         console.log('connected to DB!');
//     })