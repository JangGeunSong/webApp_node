const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const api = require('./router/api/posts')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const db = MongoClient.connect('mongodb://localhost:27017');

    const server = express();

    server.use(bodyParser.json());
    server.use((request, response, next) => {
        request.db = db;
        next();
    })
    server.use('/router/api/posts', api(db))

    server.get('*', (request, response) => {
        return handle(request, response);
    });

    server.listen(3000, (err) => {
        if(err) throw err
        console.log(' --> Ready on http://localhost:3000');
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})