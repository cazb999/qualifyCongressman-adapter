"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.listen(3000, () => {
    console.log('Servidor iniciado');
});
//# sourceMappingURL=index.js.map