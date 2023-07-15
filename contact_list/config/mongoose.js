//require mongoose
const mongoose = require('mongoose');

//connecting to the db
mongoose.connect('mongodb://localhost/contacts_list_db');

//aquire the connection  and thhis connection give access to the db
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'Error in connecting to the database'));

//up and running the mongo give the message
db.once('open',function(){
    console.log('Successfully connected to the database');
})