const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    genre: { type: String, required: true },
    dateCreation: { type: String, required: true }
});

module.exports = mongoose.model('Users', UsersSchema);