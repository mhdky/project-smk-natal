const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const URI = process.env.URI_DATABASE;
const nameDb = process.env.NAME_DATABASE;

let database;

const ConnectToDatabase = async () => {
    try {
        const client = await mongoClient.connect(URI);
        database = client.db(nameDb);
        console.log(`Database terhubung ${nameDb}`);
    } catch (error) {
        console.error(`Database gagal terhubung ${nameDb}`);
    }
};

const getDb = () => {
    if (!ConnectToDatabase) {
        console.error('Belum Terkoneksi ke database');
    }
    return database;
};

module.exports = { ConnectToDatabase: ConnectToDatabase, getDb: getDb };
