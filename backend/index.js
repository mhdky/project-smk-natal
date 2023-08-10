const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./database/db');
const router = require('./router/router');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

db.ConnectToDatabase().then(
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`);
    }),
);
