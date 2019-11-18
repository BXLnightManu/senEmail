const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const { cookiesRecipeRoutes } = require('./routes');
const port = 3000;

server.use(bodyParser.json());
cookiesRecipeRoutes(server);

server.listen(port, err => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}`);
    }
})