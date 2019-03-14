const http = require('http');
const fs = require('fs');
const template = require('../view/form/temlplate');
const path = require('path');

// server create
var app = http.createServer((request, response) => {
    var url = request.url; //request url
    console.log(url);
    
    if(url === '/') { //If request index page
        response.writeHead(200);
        response.end(template.postTmp()); //post board call
    }
    else if(url.match('.css')){
        var cssPath = path.join('../webApp_nodejs/view', '', request.url);
        var fileStream = fs.createReadStream(cssPath);
        response.writeHead(200, {'Content-Type' : 'text/css'});
        fileStream.pipe(response); //link to the html template use CSS file
    }
    else if(url.match('.jpg')) {
        var imgPath = path.join('../webApp_nodejs/view', '', request.url);
        var fileStream = fs.createReadStream(imgPath);
        response.writeHead(200, {'Content-Type' : 'text/jpg'});
        fileStream.pipe(response);
    }
}); // define create server

app.listen(3000);
//web application listen localhost:3000