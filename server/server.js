var http = require('http');
var fs = require('fs');
var template = require('../view/form/temlplate');
var path = require('path');

var app = http.createServer((request, response) => {
    var url = request.url;
    if(url === '/') {
        response.writeHead(200);
        response.end(template.postTmp());
    }
    else if(url.match('.css')){
        var cssPath = path.join('../view', '', request.url);
        var fileStream = fs.createReadStream(cssPath);
        response.writeHead(200, {'Content-Type' : 'text/css'});
        fileStream.pipe(response);
    }
    else if(url.match('.jpg')) {
        var imgPath = path.join('../view', '', request.url);
        var fileStream = fs.createReadStream(imgPath);
        response.writeHead(200, {'Content-Type' : 'text/jpg'});
        fileStream.pipe(response);
    }
});

app.listen(3000);
