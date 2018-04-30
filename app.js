

// content of index.js
const http = require('http');
const pkg = require('./package.json');
const port = pkg.serve.port["development"];

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
 
let app = express();
 
app.use(serveStatic(path.join(__dirname, '/')));
app.use(serveStatic(path.join(__dirname, '/html')));

console.log(`server is listening on ${port}`);
app.listen(port);

