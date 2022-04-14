const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    console.log('sanity check!')
    res.json({MESSAGE: process.env.ABC});
});

module.exports = server;