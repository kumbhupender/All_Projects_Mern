const http = require('http');   //import the module 
const port = 8000;              //require port no this is a protocol of every service
const fs = require('fs');       //fs is used to read and write file in import and export

function requestHandler(req , res){           //make a fn to send some response and url (whenever i change in the url it shows here)

    console.log(req.url);
    res.writeHead(200,{"content-type" : "text/html"});      //response a html/text 
    
    let filepath;

    switch(req.url){                   //whenever user req the different url its shown accordingly
        case "/":
            filepath = "./index.html";
            break;
        case "/profile":
            filepath = "./profile.html";
            break;
        default:
            filepath = "./404page.html";
            
    }

    fs.readFile(filepath,function(err,data){
        if(err){
            console.log("Error",err);
            return res.end("<h1>Error</h1>");
        }

        res.end(data);
        //res.end("Gotcha!");
    })
    
}



const server = http.createServer(requestHandler);     //Creating a server or invoking a reusable function form http module

server.listen(port,function(err){        //Now to running the server we need to listen and provide port parameter and create err function
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running properly");
})