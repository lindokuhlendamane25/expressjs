const http = require('http');
const express = require('express');
const itemsRouter = require('./routes/items');
const app = express();
app.use(express.static('routes'));
app.use(express.json());
app.use('/items', itemsRouter);
app.use(express.static('./routes/public'));


const server = http.createServer(app);
const port = 3090;
server.listen(port);
console.debug('Server listening on port ' + port);
