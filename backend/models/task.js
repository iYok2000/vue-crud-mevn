const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    title: {
        type: String
    },
    subject: {
        type: String
    },
    aka: {
        type: String
    }
}, {
    collection: 'task'
})

module.exports = mongoose.model('task', taskSchema);