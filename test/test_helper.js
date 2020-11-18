const mongoose = require('mongoose')

const url = 'mongodb://localhost/local'

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
    mongoose.connection.collections.users.drop(() => {
        done()
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