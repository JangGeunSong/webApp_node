const http = require('http');
const fs = require('fs');
const template = require('../view/form/temlplate');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const dbURL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(dbURL, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

var app = http.createServer((request, response) => {
    var url = request.url;
    console.log(url);
    
    if(url === '/') {
        response.writeHead(200);
        response.end(template.postTmp());
    }
    else if(url.match('.css')){
        var cssPath = path.join('../webApp_nodejs/view', '', request.url);
        var fileStream = fs.createReadStream(cssPath);
        response.writeHead(200, {'Content-Type' : 'text/css'});
        fileStream.pipe(response);
    }
    else if(url.match('.jpg')) {
        var imgPath = path.join('../webApp_nodejs/view', '', request.url);
        var fileStream = fs.createReadStream(imgPath);
        response.writeHead(200, {'Content-Type' : 'text/jpg'});
        fileStream.pipe(response);
    }
});

app.listen(3000);
