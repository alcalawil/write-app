const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'write-app'
});

module.exports = db;