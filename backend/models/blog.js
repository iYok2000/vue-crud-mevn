const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String
    },
    subject: {
        type: String
    },
    author: {
        type: String
    },
    images: {
        type: String,
        default: 'placeholder.jpg',
    }
}, {
    collection: 'blog'
})

module.exports = mongoose.model('blog', taskSchema);