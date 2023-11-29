const mongoose = require('mongoose');


// defines user Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String, // saves data type as a string
        required: true, // requires a username
        unique: true, // makes sure that username is unique
        trim: true // removes spaces before and after string
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true //converts string to all lowercase
    },
    password: {
        type: String,
        require: true,
        minlength: 6 // forces at least 6 characters for password length
    },

}, {timestamps: true}); // timestamps add createdAt and updatedAt fields

// creates User model from schema
const User = mongoose.model('User', userSchema);

module.exports = User; //exports User so it can be imported in other files