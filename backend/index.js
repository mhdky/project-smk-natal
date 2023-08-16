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
    expires: 60 * 1000,
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
        cookie: { secure: false, maxAge: 60000, httpOnly: true },
    }),
);
/**
 * *Konfigurasi CSRF
 */
const tokens = new csrf({ saltLength: 8, secretLength: 18 });
app.use((req, res, next) => {
    const secret = tokens.secretSync();
    const token = tokens.create(secret);
    const user = req.session.user;
    const isAuth = req.session.isAuthenticated;

    if (!req.session.csrfToken || !res.locals.csrfToken) {
        req.session.csrfToken = token;
        res.locals.csrfToken = secret;
        console.log(req.session.csrfToken, res.locals.csrfToken);
    }
    if (!user || !isAuth) {
        return next();
    }
    res.locals.isAuth = true;

    next();
});
app.use(router);

db.ConnectToDatabase().then(
    app.listen(process.env.PORT, () => {
        console.log(`http://localhost:${process.env.PORT}`);
    }),
);
