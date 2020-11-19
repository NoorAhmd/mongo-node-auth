const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = require('../src/post')

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters'
        },
        required: [true, 'user name is required!']
    },
    likes: Number,
    posts: [PostSchema],  // Users may have 1 or more posts
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]


})

UserSchema.virtual('postCount').get(function () {
    return this.posts.length

})
const User = mongoose.model('user', UserSchema)


module.exports = User  //export User model 