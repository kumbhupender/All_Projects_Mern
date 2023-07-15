const express = require('express');
const path = require('path');
const port = 8000;
//import db
const db = require('./config/mongoose');
//import schema
const Contact = require('./models/contact');

//which include all the libraries 
const app = express(); 

//set the view or template engine of ejs
app.set('view engine','ejs');

//Setting a path i.e. dynamic
app.set('views',path.join(__dirname,'views'));

//use parser to convert string into object or encoded it and send to the controller or server
app.use(express.urlencoded());

//again use middleware to interact our static files
app.use(express.static('assets'));

var contactList = [
    { 
        name : 'Bhupender kumar',
        phone : '0000000000'   
    },
    {
        name : "VK",
        phone : "12354984"
    },
    {
        name : "Santosh",
        phone : "894489164"
    }

];
app.get('/',function(req,res){     //This is help with express to use app.get its reduce to use switch case to show page on different url

    Contact.find({}).then(contacts => {
        return res.render('home',{
            title : "Contact List",
            contact_list : contacts
        });
    }
    
    // res.send("<h1>I find you!</h1>");
)
});

app.post('/create-contact',function(req,res){
    // return res.redirect('practice');
    //console.log(req);         here req is an object
    // console.log(req.body);
    // contactList.push(req.body);
    // return res.redirect('/');

    Contact.create({
        name : req.body.name,
        phone : req.body.phone
     }).then(newContact => {                            //in new version nodejs remove callback function so we need to use arrow function
        console.log('******',newContact);
     })
    //function(err,newContact){
    //     if(err){console.log('error in creating a contact');
    //     return;
    
    // console.log('**********',newContact);
     return res.redirect('/');
    });
   



const user = {
    firstName : "Bhupender",
    secondName : "kumar",
    admin : true,
   
};

app.get('/practice',function(req,res){
    
    return res.render('practice',{
        title : 'My Practice Page',  //context
        x : 10,
        user : user
    });
})



//delete a contact via query and param
app.get('/delete-contact',function(req,res){
    // console.log(req.query);
    //get the query from url in request fom
    // let phone = req.query.phone;     //we need to find index of phone if matches the index of contact list then delte it

    //use the id from query of the url
    let id = req.query.id;

    Contact.findByIdAndDelete(id) .then(err => {
        return res.redirect('/');
    })

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){
    //     contactList.splice(contactIndex,1);
    // }
   
})







app.listen(port,function(err){
    if(err){
        console.log("Error in running a server",err);
        return;
    }
    console.log("Express server is running on port: ",port);
})