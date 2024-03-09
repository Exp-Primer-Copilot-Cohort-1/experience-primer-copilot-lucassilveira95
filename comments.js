// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display a list of comments from the comments.json file. You can use the following code to read the comments from the file:

// var comments = require('./comments.json');

const http = require('http');
const fs = require('fs');

const comments = require('./comments.json');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});