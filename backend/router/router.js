const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');

const db = require('../database/db');

router.get('/', (req, res) => {
    console.log(res.locals.csrfToken, 'homepage');
    res.render('homepage', { csrfToken: res.locals.csrfToken });
});

//* dev
router.get('/login', (req, res) => {
    console.log(res.locals.csrfToken, 'login');
    res.render('login', { csrfToken: res.locals.csrfToken });
});

router.get('/user', (req, res) => {
    console.log(res.locals.csrfToken, 'login');
    res.render('user', { csrfToken: res.locals.csrfToken });
});

router.get('/register', (req, res) => {
    console.log(res.locals.csrfToken, 'register');
    res.render('register', { csrfToken: res.locals.csrfToken });
});

//*close

/**
 * * Method POST
 * * URL Login And Register
 * * Status Public
 * * Full Access
 */
router.post('/register', async (req, res) => {
    // const secret = req.session.csrfSecret;

    // if (!secret || !token.verify(secret, req.body._csrf)) {
    //     console.log('token tidak valid REGISTER');
    //     return res.status(403).send('Token CSRF tidak valid');
    // }
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
    } else if (whatsapp === Number) {
        return res.status(404).send({
            message: 'Masukkan No whatsapp hanya angka',
        });
    } else if (!email.includes('@')) {
        return res.status(404).send({
            message: 'Email tidak valid',
        });
    }

    const hashPassword = await bcrypt.genSalt(10).then((salt) => {
        return bcrypt.hash(confirmPassword + process.env.RANDOM_PASSWORD, salt);
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
    try {
        const result = await db.getDb().collection('users').insertOne({
            _id: uuid(),
            email: email,
            name: name,
            whatsapp: whatsapp,
            alamat: alamat,
            password: hashPassword,
            date: new Date(),
        });
        res.status(200).send({
            message: 'user berhasil diinput',
            userId: result.insertedId,
        });
        res.redirect('/user');
    } catch (error) {
        console.log(`user gagal melakukan pendaftaran ${error}`);
        return res.status(200).send({
            message: error,
        });
    }
});

router.post('/login', async (req, res) => {
    const userData = req.body;
    const email = userData.email;
    const password = userData.password;

    const users = await db
        .getDb()
        .collection('users')
        .findOne({ email: email });

    if (!users) {
        return res.status(404).send({
            message: 'Password atau Email salah',
        });
    }

    const comparePassword = await bcrypt.compare(
        password + process.env.RANDOM_PASSWORD,
        users.password,
    );

    if (comparePassword) {
        return res.status(200).send({
            message: 'User berhasil login',
            userId: users.insertedId,
        });
    }
    return res.status(404).send({
        message: 'Password atau Email salah',
    });
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
