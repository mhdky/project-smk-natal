const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');

const db = require('../database/db');

router.get('/', (req, res) => {
    res.send('Home');
});

router.post('/register', async (req, res) => {
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
    } catch (error) {
        console.log(`user gagal melakukan pendaftaran ${error}`);
        res.status(200).send({
            message: error,
        });
    }
    return;
});

router.post('/login', async (req, res) => {
    const userData = req.body;
    const email = userData.email;
    const password = userData.password;

    const users = await db
        .getDb()
        .collection('users')
        .findOne({ email: email });

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

module.exports = router;
