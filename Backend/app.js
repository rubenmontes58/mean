const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const mongoose = require('./db.js');
const route = require('../Backend/routes.js');

const app = express();

app.use(bodyParser.json());

app.use(cors({origin : 'http://localhost:4200'}));

app.listen(3000, ()=> console.log('Servidor Corriendo en el Puerto 3000'));

app.use('/post',route);