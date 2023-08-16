const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');
const csrf = require('csrf');
const db = require('../database/db');

const tokens = new csrf();

router.get('/', (req, res) => {
    console.log(res.locals.csrfToken, 'homepage');
    res.render('homepage', { csrfToken: res.locals.csrfToken });
});

//* dev
router.get('/login', async (req, res) => {
    req.session.csrfToken = tokens.secretSync();
    return res.render('login', {
        csrfToken: req.session.csrfToken,
    });
});

router.get('/user', (req, res) => {
    console.log(req.session, req.session.user);
    if (req.session && req.session.user) {
        req.session.csrfToken = tokens.secretSync();
        return res.render('user', {
            csrfToken: req.session.csrfToken,
        });
    }
    return res.render('404');
});

router.get('/register', (req, res) => {
    let sessionInputData = req.session.InputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            email: '',
            name: '',
            whatsapp: '',
            alamat: '',
            password: '',
            confirmPassword: '',
        };
    }
    // req.session.InputData = null;
    req.session.csrfToken = tokens.secretSync();
    res.render('register', {
        InputData: sessionInputData,
        csrfToken: req.session.csrfToken,
    });
});

router.get('/user', (req, res) => {
    console.log(req.session.csrfToken, 'client');
    res.render('user', { csrfToken: req.session.csrfToken });
});

//*close

/**
 * * Method POST
 * * URL Login And Register
 * * Status Public
 * * Full Access
 */
router.post('/register', async (req, res) => {
    const data_csrf = req.body._csrf;
    if (!tokens.verify(res.locals.csrfToken, data_csrf)) {
        const dataRegister = req.body;
        const email = dataRegister.email;
        const name = dataRegister.name;
        const whatsapp = dataRegister.whatsapp;
        const alamat = dataRegister.alamat;
        const password = dataRegister.password;
        const confirmPassword = dataRegister['password'];

        console.log(whatsapp === Number);

        if (
            !email ||
            !name ||
            !whatsapp ||
            !alamat ||
            !password ||
            !confirmPassword
        ) {
            return res.status(404).send({
                message: 'form kosong',
            });
        } else if (password != confirmPassword) {
            return res.status(404).send({
                message: 'Password tidak sama',
            });
        } else if (password.length < 6) {
            return res.status(404).send({
                message: 'password kurang dari 6 karakter',
            });
        } else if (isNaN(whatsapp)) {
            return res.status(404).send({
                message: 'Masukkan No whatsapp hanya angka',
            });
        } else if (!email.includes('@')) {
            return res.status(404).send({
                message: 'Email tidak valid',
            });
        }

        const hashedPassword = await bcrypt.genSalt(10).then((salt) => {
            return bcrypt.hash(password + process.env.RANDOM_PASSWORD, salt);
        });

        const users = await db
            .getDb()
            .collection('users')
            .findOne({ email: email });

        if (users) {
            return res.status(404).send({
                message: 'email sudah terdaftar',
            });
        }

        const user = {
            _id: uuid(),
            email: email,
            name: name,
            whatsapp: whatsapp,
            alamat: alamat,
            password: hashedPassword,
            isAdmin: false,
            date: new Date(),
        };

        try {
            const result = await db.getDb().collection('users').insertOne(user);
            // res.status(200).send({
            //     message: 'User berhasil terdaftar',
            //     data: result.insertedId,
            // });

            res.redirect('/login');
        } catch (error) {
            console.log(`user gagal melakukan pendaftaran ${error}`);
            return res.status(200).send({
                message: error,
            });
        }
    } else {
        console.log('Token yang diharapkan:', res.locals.csrfToken);
        console.log('Token yang diterima:', data_csrf);
        console.log('token tidak valid, Register');
        console.log('token tidak valid, Register');
        res.render('404');
    }
});

router.post('/login', async (req, res) => {
    const data_csrf = req.body._csrf;
    if (!tokens.verify(res.locals.csrfToken, data_csrf)) {
        const userData = req.body;
        const email = userData.email;
        const password = userData.password;

        const users = await db
            .getDb()
            .collection('users')
            .findOne({ email: email });

        // console.log(users);

        if (!users) {
            // return res.status(404).send({
            //     message: ' Email salah',
            // });
            console.log('email tidak terdaftar');
            return res.redirect('/login');
        }

        const functionComparePassword = async () => {
            const isMatch = await bcrypt.compare(
                password + process.env.RANDOM_PASSWORD,
                users.password,
            );

            if (isMatch) {
                // return res.status(200).send({
                //     message: 'User berhasil login',
                //     userId: users.insertedId,
                // });
                console.log('Token yang diharapkan:', res.locals.csrfToken);
                console.log('Token yang diterima:', data_csrf);
                req.session.user = {
                    id: users._id,
                    email: users.email,
                    isAdmin: users.isAdmin,
                };
                req.session.isAuthenticated = true;
                return req.session.save(() => {
                    res.redirect('/user');
                });
                // req.redirect('/user');
            } else {
                // return res.status(404).send({
                //     message: 'Password atau Email salah',
                // });
                console.log('password salah');
                res.redirect('/login');
            }
        };
        return functionComparePassword();
    } else {
        console.log('Token yang diharapkan:', res.locals.csrfToken);
        console.log('Token yang diterima:', data_csrf);
        console.log('token tidak valid, Register');
        res.render('404');
    }
});

//*close

/**
 * * Method GET
 * * URL Admin
 * * Status Privat
 * * Access Login
 */

router.get('/admin', async (req, res) => {
    const users = await db.getDb().collection('users').find().toArray();
    res.status(200).send({
        data: users,
    });
});

/**
 * * Method POST
 * * URL Admin/Harga
 * * Status Privat
 * * Access Login
 */
router.post('/admin/harga', async (req, res) => {
    const hargaData = req.body;
    const harga = hargaData.harga;
    const speed = hargaData.speed;
    const fitur = hargaData.fitur;

    if (!harga || !speed || !fitur) {
        res.status(404).send({
            message: 'Form tidak boleh kosong',
        });
    } else if (!harga === Number) {
        res.status(404).send({
            message: 'Masukkan hanya angka',
        });
    }
    const saveHarga = await db
        .getDb()
        .collection('harga')
        .insertOne({ _id: uuid(), harga: harga, speed: speed, fitur: fitur });

    res.status(200).send({
        message: 'Berhasil menambahkan harga',
        info: saveHarga.insertedId,
    });
});

/**
 * * Method GET
 * * URL Admin/harga/:id
 * * Status Privat
 * * Access Login
 */
router.get('/admin/harga/:id', async (req, res) => {
    const dataHarga = await db
        .getDb()
        .collection('harga')
        .findOne({ _id: req.params.id });

    if (dataHarga) {
        try {
            return res.status(200).send({
                data: dataHarga,
            });
        } catch (error) {
            return res.status(404).send({
                message: 'pesanan tidak ditemukan',
                error: error,
            });
        }
    }
    return;
});

/**
 * * Method PUT
 * * URL Admin/harga/:id
 * * Status Privat
 * * Access Login
 */

router.put('/admin/harga/:id', async (req, res) => {
    const hargaData = req.body;
    const harga = hargaData.harga;
    const speed = hargaData.speed;
    const fitur = hargaData.fitur;

    if (!harga || !speed || !fitur) {
        res.status(404).send({
            message: 'Form tidak boleh kosong',
        });
    } else if (!harga === Number) {
        res.status(404).send({
            message: 'Masukkan hanya angka',
        });
    }
    const saveHarga = await db
        .getDb()
        .collection('harga')
        .updateOne(
            { _id: req.params.id },
            { $set: { harga: harga, speed: speed, fitur: fitur } },
        );

    res.status(200).send({
        message: 'Berhasil update harga',
        info: saveHarga.insertedId,
    });
});

router.post('/profile:id');
module.exports = router;
