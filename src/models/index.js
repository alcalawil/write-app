const db = require('../db');

const writeModel = require('./write.model')(db);

module.exports = {
    writeModel
}