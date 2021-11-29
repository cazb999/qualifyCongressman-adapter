import express from 'express';
import * as bodyParser from 'body-parser';

import apiRouter from './routes/api';

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.use('/api', apiRouter);

app.listen(3000, ()=>{
    console.log('Servidor iniciado');
});