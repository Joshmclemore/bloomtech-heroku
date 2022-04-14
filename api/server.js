const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    // res.json('Hello World!');
    res.json({MESSAGE: process.env.ABC});
});

module.exports = server;