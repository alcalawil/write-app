const db = require('../db');

const save = async ({ userId, text }) => {
    const newWrite = { userId, text };
    // query
    const query = `INSERT INTO \`writes\` (userId, text) VALUES (${userId}, '${text}');`;

    await db.execute(query);
    getFiltered({ userId: 1})
    return newWrite;
}

const getFiltered = async ({ userId, from = 1, to = 4104660352000 }) => {
    // TODO: Filter by date from and to
    const query = `SELECT * FROM writes WHERE userId = ${userId}`

    const [rows] = await db.execute(query);
    return rows;
}

module.exports =  { save, getFiltered };