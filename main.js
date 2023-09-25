const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./login');
const sendRoute = require('./send');

app.use(bodyParser.urlencoded({extended: false}));

app.use(loginRoute);

app.use(sendRoute);

app.listen(3000);