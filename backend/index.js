const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const csrf = require('csrf');
const MongoDBStore = require('connect-mongodb-session')(session);
//*Dev
const path = require('path');

const bodyParser = require('body-parser');
const db = require('./database/db');
const router = require('./router/router');

const sessionStore = new MongoDBStore({
    uri: process.env.URI_DATABASE,
    databaseName: process.env.NAME_DATABASE,
    Collection: 'session',
});

sessionStore.on('error', (error) => {
    console.error('session store error', error);
});

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// * DEV
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: { secure: true, maxAge: 1000 * 60 * 60 * 24 },
    }),
);
/**
 * *Konfigurasi CSRF
 */
const Tokens = new csrf();

app.use((req, res, next) => {
    let secret = Tokens.secretSync();
    let token = Tokens.create(secret);

    if (!secret || !token) {
        return next();
    }
    res.locals.csrfToken = token;
    req.session.csrfSecret = secret;

    next();
});
app.use(router);

db.ConnectToDatabase().then(
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`);
    }),
);
