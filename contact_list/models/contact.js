//we need to create schema over mongoose
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

//create collection
const Contact = mongoose.model('Contact',contactSchema);

//export it
module.exports = Contact;