const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    token: {
        type: String
    }
    }, {
    collection: 'user'
    
})

module.exports = mongoose.model('user',taskSchema );