const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const posts = require('./router/api/posts');

const db = require('./config/keys').mongoURI;

app.prepare()
.then(() => {
    const server = express();

    server.use(bodyParser.json());
    
    mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    server.use('/api/posts', posts);

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