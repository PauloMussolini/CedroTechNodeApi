'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger-doc.json');
var cors = require('cors');
var cookieParser = require('cookie-parser'); 
const validToken = require('./middlewares/token.middleware');
const createFile = require('./middlewares/file.middleware');
const app = express();

const versionRoute = require('./routes/version.route');
const loginRoute = require('./routes/login.route');
const documentRoute = require ('./routes/document.route');

app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization, x-access-token');
    res.header('Access-Control-Expose-Headers', 'x-access-token');
    res.header('Access-Control-Request-Headers', 'Content-Type, X-Requested-With, Authorization, x-access-token');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/', versionRoute);
app.use('/login', loginRoute);
app.use('/document', validToken, createFile, documentRoute);
// app.use('/policy-report', policyReportRoute);
// app.use('/role', roleRoute);
// app.use('/lifecycle', lifecycleRoute);

module.exports = app;