const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const user = mongoose ('user', userSchema)
module.exports = user
