const express = require('express');
const Archetype = require('archetype-js');
const { ObjectId } = require('mongodb');
const PostType = require('../../models/postlist');

module.exports = db => {
    const router = express.Router();

    const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

    router.get('/', wrapAsync(async function(request) {
        return db.collection('postlist').find().sort({ createAt : -1 }).toArray()
    }))


}